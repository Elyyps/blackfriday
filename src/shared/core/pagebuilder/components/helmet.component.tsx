import * as React from "react";
import { Helmet } from "react-helmet";

export interface IHelmetComponentProps {
  content: string;
  description: string;
  title: string;
}
type IState = {};

// This is a class component because helmet shits the bed when using Hooks
export class HelmetComponent extends React.Component<IHelmetComponentProps, IState> {
  public render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" name={this.props.title} content={this.props.content} />
          <meta name="Description" content={this.props.description} />
          <title>{this.props.title}</title>
        </Helmet>
      </div>
    );
  }
}
