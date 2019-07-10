import * as React from "react";
import { Link } from "react-router-dom";
import "./card-post-component.scss";
import { ImageComponent } from "@app/prep/modules-prep/core";

interface ICardPostProps {
  content?: string;
  image?: string;
  link: string;
  linkTitle?: string;
  title?: string;
}

const CardPost = (props: ICardPostProps) => (
  <Link to={props.link} className="card-post">
    {props.image && (
      <div className="card-post__image">
        <ImageComponent src={props.image} />
      </div>
    )}
    <div className="card-post__body">
      <div className="card-post__title">{props.title}</div>
      <div className="uk-visible@m">
        {props.content}
        <span className="card-post__link">{props.linkTitle}</span>
      </div>
    </div>
  </Link>
);
export { CardPost };
