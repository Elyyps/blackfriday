import * as React from "react";
import "./posts-list-component.scss";
import { CardPost } from "@app/prep/modules-prep/core";
import { PostsListDummy } from "@app/prep/pages-prep/blog-overview/dummy-data";

export interface IPostsListComponentProps {}

const PostsListComponent = (props: IPostsListComponentProps) => (
  <div className="posts-list">
    {PostsListDummy
      ? PostsListDummy.map((item, key) => (
          <div key={key}>
            <CardPost {...item} />
          </div>
        ))
      : ""}
  </div>
);
export { PostsListComponent };
