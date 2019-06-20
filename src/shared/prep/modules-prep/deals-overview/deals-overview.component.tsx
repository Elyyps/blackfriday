import * as React from "react";
import "./deals-overview-component.module.scss";
import { Link } from "react-router-dom";
require("uikit");

export interface IDealsOverviewComponentProps {
  bgcolor?: string;
  cards?: any;
  customNextArrow?: JSX.Element | undefined;
  customPrevArrow?: JSX.Element | undefined;
}

const DealsOverviewComponent = (props: IDealsOverviewComponentProps) => {
  return (
    <>
      <button className="uk-button uk-button-default" type="button">
        Hover
      </button>
      <div className="uk-width-large" uk-dropdown>
        <div className="uk-dropdown-grid uk-child-width-1-2@m" uk-grid>
          <div>
            <ul className="uk-nav uk-dropdown-nav">
              <li className="uk-active">
                <Link to="#">Active</Link>
              </li>
              <li>
                <Link to="#">Item</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="uk-nav uk-dropdown-nav">
              <li className="uk-active">
                <Link to="#">Active</Link>
              </li>
              <li>
                <Link to="#">Item</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export { DealsOverviewComponent };
