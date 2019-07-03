import * as React from "react";
import "./body-blog-component.scss";
import { IconComponent, SharedBox, SidebarComponent } from "@app/prep/modules-prep/core";
import Clock from "@assets/icons/clock.svg";
import classNames from "classnames";

export interface IBodyBlogComponentProps {
  banner?: any;
  bgcolor?: string;
  children: any;
  date: string;
  items?: any[];
  paddingBottom?: string;
  paddingTop?: string;
  sidebar?: boolean;
  social?: boolean;
}

const BodyBlogComponent = (props: IBodyBlogComponentProps) => {
  const style = {
    backgroundColor: props.bgcolor,
    paddingTop: props.paddingTop,
    paddingBottom: props.paddingBottom
  };

  const classes = classNames("body-blog", {
    "body-blog--with-sidebar": props.sidebar
  });

  return (
    <div className={classes} style={style}>
      <div className="uk-container">
        <div className="body-blog__holder">
          <div className="body-blog__content">
            <div className="body-blog__date">
              <IconComponent icon={Clock} size="12px" />
              {props.date}
            </div>

            {props.children}

            {props.social && (
              <div className="body-blog__footer">
                <SharedBox title={"Delen"} />
              </div>
            )}
          </div>
          {props.sidebar && (
            <div className="body-blog__sidebar">
              <SidebarComponent banner={props.banner} items={props.items} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export { BodyBlogComponent };
