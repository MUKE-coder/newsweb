import React from "react";
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  PlusCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Image from "next/image";
import Link from "next/link";
import { fetchArticles } from "@/actions/articleActions";
import { Category } from "@prisma/client";
import { CatProps } from "@/types/types";
// import DeleteArticles from "./deleteArticle";

export default async function AddArticle() {
  const articles = await fetchArticles();
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <Tabs defaultValue="all">
        <div className="flex items-center">
          <TabsList className="lg:flex md:flex hidden items-center">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger value="archived" className="hidden sm:flex">
              Archived
            </TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-7 gap-1">
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Filter
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Active
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex gap-2 items-center">
              {/* <Link
                href="/dashboard/article-managment/add-category"
                className="h-7 gap-1 flex items-center bg-[#ef000bff] text-white rounded-md px-3 py-3"
              >
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Category
                </span>
              </Link> */}
              {/* <Link
                href="/dashboard/article-managment/add-media"
                className="h-7 gap-1 flex items-center bg-[#ef000bff] text-white rounded-md px-3 py-3"
              >
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Mediahouse
                </span>
              </Link> */}
              <Link
                href="/dashboard/article-managment/add-article"
                className="h-7 gap-1 flex items-center bg-[#ef000bff] text-white rounded-md px-3 py-3"
              >
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Article
                </span>
              </Link>
            </div>
          </div>
        </div>
        <TabsContent value="all">
          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
              <CardTitle>Articles</CardTitle>
              <CardDescription>
                Manage your Articles and in the way that you can update and
                delete them
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">
                      <span className="sr-only">Image</span>
                    </TableHead>
                    <TableHead>Article title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Media</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead>
                      <span className="">More Features</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {articles?.map((article) => {
                    return (
                      <TableRow key={article.id}>
                        <TableCell className="hidden sm:table-cell">
                          <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src={article.thumbnail as string | any}
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          {article.title}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">
                            {article.Category?.title}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">
                            {article.MediaHouse?.title}
                          </Badge>
                        </TableCell>
                        <TableCell>{article.readTime}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>
                                <Link
                                  href={`/dashboard/article-managment/add-article/${article.id}`}
                                >
                                  Edit
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem></DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Showing <strong>1-10</strong> of <strong>32</strong> products
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
