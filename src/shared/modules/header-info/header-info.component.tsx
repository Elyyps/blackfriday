import * as React from "react";
import styles from "./header-info-component.module.scss";
import { ImageComponent } from "@app/core/image";
import { DropdownComponent } from "@app/core/dropdown/dropdown.component";
import { ShareSocialComponent } from "@app/core/share-social";
import { HeaderInfo } from "@app/api/modules/header-info/header-info.module";
import { generateShareSocialModule } from "@app/api/modules/share-social/endpoints";
import { Badge } from "@app/core/badge";

import ShareSVG from "@assets/icons/share.svg";
export interface IHeaderInfoComponentProps {
  headerInfo: HeaderInfo;
}

const HeaderInfoComponent = (props: IHeaderInfoComponentProps) => {
  const style = {
    backgroundColor: props.headerInfo.bgcolor,
    paddingBottom: props.headerInfo.paddingBottom
  };

  return (
    <div className={styles["header-info"]} style={style}>
      {props.headerInfo.image && (
        <div className={styles["header-info__image"]}>
          <ImageComponent src={props.headerInfo.image} />
        </div>
      )}
      <div className="uk-container">
        <div className={styles["header-info__body"]}>
          <div style={{ display: "flex" }}>
            {props.headerInfo.icon && (
              <div className={styles["header-info__icon"]}>
                <ImageComponent src={props.headerInfo.icon} />
              </div>
            )}
            <div className={styles["header-info__content"]}>
              <h1 className={styles["header-info__title"]}>
                <strong>{props.headerInfo.title}</strong>
              </h1>
              {props.headerInfo.content}
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
};

export { HeaderInfoComponent };
