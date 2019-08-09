import * as React from "react";
import styles from "./header-info-component.module.scss";
import { ImageComponent } from "@app/core/image";
import { DropdownComponent } from "@app/core/dropdown/dropdown.component";
import { ShareSocialComponent } from "@app/core/share-social";
import { HeaderInfo } from "@app/api/modules/header-info/header-info.module";
import { generateShareSocialModule } from "@app/api/core/share-social/endpoints";
import { Badge } from "@app/core/badge";

import ShareSVG from "@assets/icons/share.svg";

import { LinkComponent } from "@app/core/link";
import { BreadcrumbComponent } from "@app/core/breadcrumb";

export interface IHeaderInfoComponentProps {
  headerInfo: HeaderInfo;
}

const HeaderInfoComponent = (props: IHeaderInfoComponentProps) => (
  <div className={styles["header-info"]} style={{ background: props.headerInfo.bgcolor }}>
    {props.headerInfo.image && (
      <div className={styles["header-info__image"]}>
        <ImageComponent src={props.headerInfo.image} />
      </div>
    )}
    <div className="uk-container">
      <div className={styles["header-info__body"]}>
        <div className={styles["header-info__body__content"]}>
          {props.headerInfo.icon && (
            <div className={styles["header-info__icon"]}>
              <ImageComponent src={props.headerInfo.icon} />
            </div>
          )}
          <div className={styles["header-info__content"]}>
            {props.headerInfo.breadcrumbProps && (
              <div className={styles["breadcrumbs"]}>
                <BreadcrumbComponent
                  links={props.headerInfo.breadcrumbProps.links}
                  backButton={props.headerInfo.breadcrumbProps.backButton}
                  variant={props.headerInfo.breadcrumbProps.variant}
                />
              </div>
            )}
            <h1 className={styles["header-info__title"]}>{props.headerInfo.title}</h1>
            {`${props.headerInfo.content} `}
            <LinkComponent to={props.headerInfo.url}>Meer info</LinkComponent>
          </div>
          <div className={styles["header-info__share-dropdown"]}>
            <DropdownComponent title="Status" icon={ShareSVG}>
              <ShareSocialComponent {...generateShareSocialModule()} />
            </DropdownComponent>
          </div>
        </div>
        <div className={styles["header-info__share-badge"]}>
          <Badge icon={ShareSVG} position={"right"}>
            <ShareSocialComponent {...generateShareSocialModule()} />
          </Badge>
        </div>
      </div>
    </div>
  </div>
);

export { HeaderInfoComponent };
