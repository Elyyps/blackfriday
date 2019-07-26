import * as React from "react";
import { BlogSingleHeaderComponent } from "@app/modules/blog-single-header";
import { generateBlogSingleHeaderData } from "@app/api/core/blog-single-header/endpoint";

export interface IPlaygroundAhmedComponentProps {}

const PlaygroundAhmedComponent = (props: IPlaygroundAhmedComponentProps) => {
  const data = generateBlogSingleHeaderData();

  return <BlogSingleHeaderComponent blogSingleHeader={data} />;
};

export { PlaygroundAhmedComponent };
