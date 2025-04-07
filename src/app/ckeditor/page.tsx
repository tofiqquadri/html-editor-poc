"use client";
import React, { useState } from "react";
// import CustomCKEditor from "@/components/CKEditor/CKEditor";
import DynamicCKEditor from "@/components/CKEditor/DynamicCKEditor";
import { CKEditor2 } from "@/components/CKEditor/CKEditor2";

type Props = {};

const page = (props: Props) => {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const handleChange = (data: string) => {
    setHtmlContent(data);
  };

  return (
    <div>
      {/* <DynamicCKEditor /> */}
      <CKEditor2 />
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default page;
