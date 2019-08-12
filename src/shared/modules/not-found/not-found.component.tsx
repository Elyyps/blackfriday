import * as React from "react";
import styles from "./not-found-component.module.scss";
import { NotFoundModule } from "@app/api/modules/not-found/not-found";
import { Button, IconComponent } from "@app/core";
import RoadSignRight from "@assets/icons/road-sign-right.svg";
export interface INotFoundComponentProps {
  notFoundModule: NotFoundModule;
}

const NotFoundComponent = (props: INotFoundComponentProps) => (
  <div className={styles["not-found"]}>
    <div className={styles["not-found-container"]}>
      <IconComponent icon={RoadSignRight} size={"45px"} />
      <span className={styles["not-found-title"]}>{props.notFoundModule.tilte}</span>
      <p>{props.notFoundModule.content}</p>
      <Button title={props.notFoundModule.button.title} variant="secondary" />
    </div>
  </div>
);

export { NotFoundComponent };
