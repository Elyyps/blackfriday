import * as React from "react";
import { BreadcrumbComponent, IBreadcrumbComponentProps } from "@app/core/breadcrumb";
import styles from "./playground-martijn-component.module.scss";

export interface IPlaygroundMartijnComponentProps {}

const breadcrumbItems: IBreadcrumbComponentProps = {
  links: [{ title: "Home", url: "#/" }, { title: "Blogs", url: "#/" }],
  backButton: { text: "Alle blogs", url: "/#" }
};

const PlaygroundMartijnComponent = (props: IPlaygroundMartijnComponentProps) => (
  <div className={styles["playground-wrapper"]}>
    <h1>ShadowCard Component</h1>
    <div className={styles["part-section"]}>
      <BreadcrumbComponent links={breadcrumbItems.links} backButton={breadcrumbItems.backButton} />
    </div>
  </div>
);

export { PlaygroundMartijnComponent };
