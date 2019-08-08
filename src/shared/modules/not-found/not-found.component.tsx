import * as React from "react";
import styles from "./not-found-component.module.scss";
import { NotFoundModule } from "@app/api/modules/not-found/not-found";
import { CHEVRON_RIGHT } from "@app/constants/icons";
import { Button } from "@app/core";

export interface INotFoundComponentProps {
  notFoundModule: NotFoundModule;
}

const NotFoundComponent = (props: INotFoundComponentProps) => (
  <div className="uk-container">
    <div className={styles["not-found"]}>
      <h1>{props.notFoundModule.errorCode}</h1>
      <span className={styles["not-found-title"]}>{props.notFoundModule.tilte}</span>
      <p>{props.notFoundModule.content}</p>
      <Button fullWidth icon={CHEVRON_RIGHT} title={props.notFoundModule.button.title} variant="primary-brand" />
    </div>
  </div>
);

export { NotFoundComponent };
