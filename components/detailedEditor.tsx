// "use client";

// import React, { useEffect, useState } from "react";
// import Editor from "./adminComps/editor";
// import { useSession } from "next-auth/react";
// import { Pencil, Save } from "lucide-react";
// import { Button } from "./ui/button";

// type ArticleProps = {
//   id: string;
//   thumbnail: string;
//   title: string;
//   content: string;
//   description: string;
//   readTime: string;
//   featuredOption: string;
//   createdAt: string;
//   updatedAt: string;
//   userId: string;
//   categoryId: string;
//   MediaHouseId: string;
//   Category: { title: string };
//   mediaHouse: { title: string };
//   user: { name: string };
// };

// type DetailedEditorProps = {
//   articleFetched: ArticleProps;
// };

// export default function DetailedEditor({
//   articleFetched,
// }: DetailedEditorProps) {
//   const { data: session, status } = useSession();
//   const isLoggedIn = status === "authenticated";

//   const [isEditing, setIsEditing] = useState(false);

//   const toggleEditing = () => {
//     setIsEditing(!isEditing);
//   };

//   return (
//     <div className="relative">
//       {isLoggedIn && (
//         <Button
//           onClick={toggleEditing}
//           className="absolute top-full right-4 z-10"
//           variant={isEditing ? "default" : "outline"}
//           size="icon"
//         >
//           {isEditing ? (
//             <Save className="h-4 w-4" />
//           ) : (
//             <Pencil className="h-4 w-4" />
//           )}
//         </Button>
//       )}
//       <Editor
//         isEditable={isLoggedIn && isEditing}
//         initialValue={JSON.parse(articleFetched.content)}
//       />
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import Editor from "./adminComps/editor";
import { useSession } from "next-auth/react";
import { Pencil, Save, Loader2, SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { updateData } from "@/actions/articleActions";

type ArticleProps = {
  id: string;
  thumbnail: string;
  title: string;
  content: string;
  description: string;
  readTime: string;
  featuredOption: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  categoryId: string;
  MediaHouseId: string;
  Category: { title: string };
  mediaHouse: { title: string };
  user: { name: string };
};

type DetailedEditorProps = {
  articleFetched: ArticleProps;
};

export default function DetailedEditor({
  articleFetched,
}: DetailedEditorProps) {
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated";

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [content, setContent] = useState(JSON.parse(articleFetched.content));

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleContentChange = (newContent: any) => {
    setContent(newContent);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const updatedArticle = await updateData(
        { content: JSON.stringify(content) },
        articleFetched.id
      );
      toast.success("Article updated successfully");
      setIsEditing(false);
    } catch (error) {
      toast.error("Failed to update article");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="relative">
      {isLoggedIn && (
        <Button
          onClick={isEditing ? handleSave : toggleEditing}
          className="absolute bottom-4 -right-4 z-10"
          variant={isEditing ? "default" : "outline"}
          size="icon"
          disabled={isSaving}
        >
          {isSaving ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : isEditing ? (
            <Save className="h-4 w-4" />
          ) : (
            <SquarePen className="h-4 w-4" />
          )}
        </Button>
      )}
      <Editor
        isEditable={isLoggedIn && isEditing}
        initialValue={content}
        onChange={handleContentChange}
      />
    </div>
  );
}
