import * as React from "react";
import "./sidebar.component.scss";
import { BannerComponent } from "@app/prep/modules-prep/banner";
import { SidebarBoxComponent } from "@app/prep/modules-prep/core";

interface ISidebarProps {
  banner?: any;
  items?: any[];
}

const SidebarComponent = (props: ISidebarProps) => (
  <div className="sidebar">
    {props.banner && <BannerComponent {...props.banner} />}
    {/* <Banner2 bannerModule={...bannerProps} variant="small" /> */}

    {props.items &&
      props.items.map((item, key) => <SidebarBoxComponent key={key} title={item.title} items={item.links} />)}
  </div>
);

export { SidebarComponent };
