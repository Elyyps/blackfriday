import * as React from "react";
import { Link } from "react-router-dom";
import { Link as LinkType } from "@app/api/core/link";
import styles from "./breadcrumb-component.module.scss";
import { IconComponent } from "../icon";
import IconBack from "@assets/icons/chevron-left.svg";

export interface IBreadcrumbComponentProps {
  backButton?: LinkType;
  links: LinkType[];
  variant?: "dark" | "light";
}

const BreadcrumbComponent = (props: IBreadcrumbComponentProps) => {
  const classNameVariant = props.variant ? `breadcrumbs__${props.variant}` : "breadcrumbs__light";
  const svgStrokeColor = props.variant && props.variant === "dark" ? "#777" : "#fff";

  return (
    <div className={`${styles["breadcrumbs"]} ${styles[classNameVariant]}`}>
      <ul className="uk-visible@s">
        {props.links.map((link, index) => (
          <li key={index}>
            {props.links.length - 1 === index ? <span>{link.title}</span> : <Link to={link.url}>{link.title}</Link>}
          </li>
        ))}
      </ul>

      {props.backButton && (
        <Link className={`uk-hidden@s ${styles["back-button"]}`} to={props.backButton.url}>
          <IconComponent icon={IconBack} size="10px" strokeColor={svgStrokeColor} />
          <span className={styles["back-button-text"]}>{props.backButton.title}</span>
        </Link>
      )}
    </div>
  );
};

export { BreadcrumbComponent };
