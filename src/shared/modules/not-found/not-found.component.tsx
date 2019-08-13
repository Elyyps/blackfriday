import * as React from "react";
import styles from "./not-found-component.module.scss";
import { NotFoundModule } from "@app/api/modules/not-found/not-found";
import { IconComponent } from "@app/core";
import RoadSignRight from "@assets/icons/road-sign-right.svg";
import { ClickableComponent } from "@app/core/clickable";
export interface INotFoundComponentProps {
  notFoundModule: NotFoundModule;
}

const NotFoundComponent = (props: INotFoundComponentProps) => (
  <div className={styles["not-found"]}>
    <div className={styles["not-found-container"]}>
      <IconComponent icon={RoadSignRight} size={"45px"} />
      <span className={styles["not-found-title"]}>{props.notFoundModule.tilte}</span>
      <p>{props.notFoundModule.content}</p>
      <ClickableComponent
        title={props.notFoundModule.button.title}
        variant={"secondary"}
        href={props.notFoundModule.button.url}
        fullWidth={false}
        dynamicSize={false}
        animated={false}
      />
    </div>
  </div>
);

export { NotFoundComponent };
