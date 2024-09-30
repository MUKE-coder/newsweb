"use client";

import { getSingleUserData, updateUserPassword } from "@/actions/userActions";
import EditUser from "@/components/forms/editUser";
import SparklesText from "@/components/magicui/sparkles-text";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { signOut } from "next-auth/react";
interface NewsProps {
  id: string;
  thumbnail?: string | null;
  title: string;
  slug: string;
  content: any; // Represents Json type
  description?: string | null;
  readTime?: string | null;
  featuredOption: string | null;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  categoryId?: string | null;
  mediaHouseId?: string | null;
  User: UserWithoutNews | null;
  Category: CategoryWithoutNews | null;
  MediaHouse: MediaHouseWithoutNews | null;
}

interface UserWithoutNews {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  userName: string;
  phone?: string | null;
  email?: string | null;
  emailVerified?: Date | null;
  image?: string | null;
  password: string;
  isVerfied: boolean;
  token?: number | null;
  createdAt: Date;
  updatedAt: Date;
}

interface MediaHouseWithoutNews {
  id: string;
  title: string;
  image?: string | null;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

interface CategoryWithoutNews {
  id: string;
  title: string;
  slug: string;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}
export default function UserPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [singleUserData, setSingleUserData] = useState<NewsProps | any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getSingleUserData({ id });
        setSingleUserData(userData);
      } catch (err) {
        setError("Failed to fetch user data");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      const result = await updateUserPassword(id, currentPassword, newPassword);
      if (result.success) {
        setSuccess(result.message);
        setCurrentPassword("");
        setNewPassword("");
        setIsLoading(true);
        toast.success("Password successfully updated.");
        // Optionally, redirect to login page or show a message about logging out
        // router.push('/login')
      }
    } catch (error) {
      setError("An error occurred while updating the password");
      toast.error("Failed to update the password.");
    } finally {
      setIsLoading(false);
    }
  };

  if (error && !singleUserData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <SparklesText text="Update Your Details" />
      </div>
      <Tabs defaultValue="account" className="max-w-2xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          {singleUserData && <EditUser singleUserData={singleUserData} />}
        </TabsContent>

        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you{"'"}ll be logged
                out.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handlePasswordChange}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current">Current password</Label>
                  <Input
                    id="current"
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new">New password</Label>
                  <Input
                    id="new"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <p className="text-red-500">{error}</p>}
              </CardContent>
              <CardFooter>
                {isLoading ? (
                  <Button
                    disabled
                    className="flex gap-1 items-center"
                    type="button"
                  >
                    <Loader className="h-4 w-4 animate-spin text-white" />
                    updating...
                  </Button>
                ) : (
                  <Button
                    onClick={() => signOut({ callbackUrl: "/login" })}
                    type="submit"
                  >
                    Update password
                  </Button>
                )}
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
