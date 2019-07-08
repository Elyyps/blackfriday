import * as React from "react";
import "./blog-overview-component.scss";
import { SidebarComponent } from "@app/prep/modules-prep/core";
import { PostsListComponent } from "@app/prep/modules-prep/posts-list";

export interface IBlogOverviewComponentProps {
  banner?: any;
  bgcolor?: string;
  items?: any[];
  paddingBottom?: string;
  paddingTop?: string;
  sidebar?: boolean;
}

const BlogOverviewComponent = (props: IBlogOverviewComponentProps) => {
  const style = {
    backgroundColor: props.bgcolor,
    paddingTop: props.paddingTop,
    paddingBottom: props.paddingBottom
  };

  return (
    <div className="blog-overview" style={style}>
      <div className="uk-container">
        <div className="blog-overview__holder">
          <div className="blog-overview__content">
            <PostsListComponent />
          </div>
          {props.sidebar && (
            <div className="blog-overview__sidebar">
              <SidebarComponent banner={props.banner} items={props.items} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export { BlogOverviewComponent };
