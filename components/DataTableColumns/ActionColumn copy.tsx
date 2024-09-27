"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { LoaderCircle, MoreHorizontal, Pencil, Trash } from "lucide-react";
import toast from "react-hot-toast";
import Link from "next/link";
import { deleteArticle } from "@/actions/articleActions";
import { useRouter } from "next/navigation";
import { deleteSubscriber } from "@/actions/subscriberActions";
type ActionColumnProps = {
  row: any;
  model: any;
  editEndpoint?: string;
  id: string | undefined;
  // revPath: string;
};
export default function ActionColumn({
  row,
  model,
  editEndpoint,
  id = "",
}: ActionColumnProps) {
  const isActive = row.isActive;
  const router = useRouter();
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  async function handleDelete() {
    try {
      setLoading(true);
      const deletedSubscriber = await deleteSubscriber({ id });
      toast.success("Subscriber deleted successfully.");
      router.push("/dashboard/subscribers");
      router.refresh();
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
      setIsAlertOpen(false);
      window.location.reload();
    }
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
          <AlertDialogTrigger asChild>
            {/* <DropdownMenuItem className="text-red-600 hover:text-red-700 transition-all duration-500 cursor-pointer">
              
            </DropdownMenuItem> */}
            <Button
              variant={"ghost"}
              size={"sm"}
              className="text-red-600 hover:text-red-700 transition-all duration-500 cursor-pointer "
            >
              <Trash className="w-4 h-4  mr-2 flex-shrink-0" />
              <span>Delete</span>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete this{" "}
                {model}.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setIsAlertOpen(false)}>
                Cancel
              </AlertDialogCancel>
              {loading ? (
                <Button
                  disabled
                  variant={"destructive"}
                  onClick={() => handleDelete()}
                >
                  <LoaderCircle className="animate-spin" />
                  <span>Deleting...</span>
                </Button>
              ) : (
                <Button variant={"destructive"} onClick={() => handleDelete()}>
                  Permanently Delete
                </Button>
              )}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        {/* <DropdownMenuItem
          className="text-red-600 hover:text-red-700 transition-all duration-500 cursor-pointer"
          onClick={() => handleDelete()}
        >
          <Trash className="w-4 h-4  mr-2 flex-shrink-0" />
          <span>Delete</span>
        </DropdownMenuItem> */}
        {/* <DropdownMenuItem>
          <Link href={editEndpoint} className="flex item gap-2">
            <Pencil className="w-4 h-4 " />
            <span>Edit</span>
          </Link>
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}