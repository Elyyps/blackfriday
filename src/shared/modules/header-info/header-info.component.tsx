import * as React from "react";
import "./header-info-component.scss";
import { ImageComponent } from "@app/core/image";
import { DropdownComponent } from "@app/core/dropdown/dropdown.component";
import { ShareSocialComponent } from "@app/core/share-social";
import { HeaderInfo } from "@app/api/modules/header-info/header-info.module";
import { generateShareSocialModule } from "@app/api/modules/share-social/endpoints";
import { SharedBox } from "@app/core/shared-box";

import ShareSVG from "@assets/icons/share.svg";
export interface IHeaderInfoComponentProps {
  headerInfo: HeaderInfo;
}

const HeaderInfoComponent = (props: IHeaderInfoComponentProps) => {
  const styles = {
    backgroundColor: props.headerInfo.bgcolor,
    paddingBottom: props.headerInfo.paddingBottom
  };

  return (
    <div className="header-info" style={styles}>
      {props.headerInfo.image && (
        <div className="header-info__image">
          <ImageComponent src={props.headerInfo.image} />
        </div>
      )}
      <div className="uk-container">
        <div className="header-info__body">
          <div>
            {props.headerInfo.icon && (
              <div className="header-info__icon">
                <ImageComponent src={props.headerInfo.icon} />
              </div>
            )}
            <div className="header-info__content">
              <h1 className="header-info__title">
                <strong>{props.headerInfo.title}</strong>
              </h1>
              {props.headerInfo.content}
            </div>
            <div className="header-info__share-dropdown">
              <DropdownComponent title="Status" buttonVariant="secondary" orientation="bottom-right">
                <ShareSocialComponent {...generateShareSocialModule()} />
              </DropdownComponent>
            </div>
          </div>
          <div className="header-info__share-badge">
            <SharedBox icon={ShareSVG} position={"right"}>
              <ShareSocialComponent {...generateShareSocialModule()} />
            </SharedBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeaderInfoComponent };
