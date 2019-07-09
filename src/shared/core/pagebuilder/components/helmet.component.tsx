import * as React from "react";
import Helmet from "react-helmet";

export interface IHelmetComponentProps {
  content: string;
  description: string;
  title: string;
}

const HelmetComponent = (props: IHelmetComponentProps) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" name={props.title} content={props.content} />
      <meta name="Description" content={props.description} />
      <title>{props.title}</title>
    </Helmet>
  </div>
);

export { HelmetComponent };
