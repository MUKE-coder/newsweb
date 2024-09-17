"use client";

import { Checkbox } from "@/components/ui/checkbox";

import DateColumn from "@/components/DataTableColumns/DateColumn";
import ImageColumn from "@/components/DataTableColumns/ImageColumn";
import SortableColumn from "@/components/DataTableColumns/SortableColumn";
import { ColumnDef } from "@tanstack/react-table";
import ActionColumn from "@/components/DataTableColumns/ActionColumn";
import { Category, News } from "@prisma/client";
import { ArticleProps } from "@/types/types";
export const columns: ColumnDef<News | ArticleProps | any>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => <SortableColumn column={column} title="Title" />,
  },
  {
    accessorKey: "Category.title",
    header: ({ column }) => <SortableColumn column={column} title="Category" />,
  },
  {
    accessorKey: "thumbnail",
    header: "Article Image",
    cell: ({ row }) => <ImageColumn row={row} accessorKey="thumbnail" />,
  },

  {
    accessorKey: "createdAt",
    header: "Creation time",
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <ActionColumn
          row={row}
          model="news"
          editEndpoint={`/dashboard/article-managment/add-article/${data.id}`}
          id={data.id}
        />
      );
    },
  },
];