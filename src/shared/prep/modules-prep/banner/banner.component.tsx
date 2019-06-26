import * as React from "react";
import "./banner-component.scss";
import { Button, ImageComponent } from "@app/prep/modules-prep/core";
import { Link } from "react-router-dom";
import IconDefault from "@assets/icons/link.svg";
export interface IBannerComponentProps {
  bgcolor?: string;
  buttonLink?: any;
  buttonTitle?: string;
  classModify?: any;
  image?: string;
  label?: string;
  logo?: string;
  paddingBottom?: string;
  paddingTop?: string;
  text?: any;
  title?: string;
}

import classNames from "classnames";

const BannerComponent = (props: IBannerComponentProps) => {
  const styles = {
    backgroundColor: props.bgcolor,
    paddingTop: props.paddingTop,
    paddingBottom: props.paddingBottom
  };

  return (
    <div
      className={classNames("banner", {
        [props.classModify]: props.classModify
      })}
      style={styles}
    >
      <div className="uk-container">
        <div className="banner__holder">
          <div className="banner__image">
            {props.image && (
              <Link to={props.buttonLink}>
                <ImageComponent src={props.image} />
              </Link>
            )}
          </div>
          <div className="banner__body">
            <div className="banner__content">
              <div className="banner__label">{props.label}</div>
              <h2 className="banner__title">{props.title}</h2>
              {props.text}
            </div>
            <div className="banner__footer">
              {props.buttonTitle && (
                <Button
                  title={props.buttonTitle}
                  href={props.buttonLink}
                  variant={"primary"}
                  icon={IconDefault}
                />
              )}
              {props.logo && (
                <div className="banner__logo">
                  <ImageComponent src={props.logo} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BannerComponent };
