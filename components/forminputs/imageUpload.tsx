import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Image from "next/image";
import React from "react";
import { UploadButton, UploadDropzone } from "../uploadthing";
import toast from "react-hot-toast";
type ImageInputProps = {
title: string;
image: string;
setImage: any;
endpoint: any;
};
export default function ImageInput({
title,
image,
setImage,
endpoint,
}: ImageInputProps) {
return (
<Card className="overflow-hidden">
  <CardHeader>
    <CardTitle>{title}</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="grid gap-2">
      <Image
        alt={title}
        className="h-40 w-full rounded-md object-cover"
        height="300"
        src={image}
        width="300"
      />
      <UploadButton
        className=" "
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          toast.success("Upload Completed");
          setImage(res[0].url);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          toast.error(`ERROR! ${error.message}`);
        }}
      />
    </div>
  </CardContent>
</Card>
 
);
}
 