import * as React from "react";
import LazyLoad from "react-lazyload";
import styles from "./image-component.module.scss";
import ReactSVG from "react-svg";
import IconDefault from "@assets/icons/no-image.svg";
import { IconComponent } from "@app/core/icon";

export interface IImageComponentProps
  extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  errorImage?: string;
  errorMessage?: string | true;
  isBlocking?: boolean;
}
const ImageComponent = (
  props: IImageComponentProps & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
) => {
  const { errorImage, errorMessage, isBlocking, ...other } = props;
  if (isBlocking) {
    return <img {...other} />;
  }

  const computedErrorMessage = errorMessage === true ? "Kan afbeelding niet laden." : errorMessage;
  const computedErrorImage = errorImage || IconDefault;

  if (!other.src) {
    return (
      <div className={styles["placeholder"]}>
        <IconComponent icon={computedErrorImage} size="32px" />
        {computedErrorMessage && <span className={styles["placeholder-text"]}>{computedErrorMessage}</span>}
      </div>
    );
  }

  return (
    <LazyLoad>
      {other.src.includes("svg") ? (
        <ReactSVG
          fallback={() => <span>Error!</span>}
          loading={() => <span />}
          renumerateIRIElements={true}
          wrapper="span"
          src={other.src}
          style={{
            height: "100%",
            width: "100%"
          }}
        />
      ) : (
        <img {...other} />
      )}
    </LazyLoad>
  );
};

export { ImageComponent };
