import * as React from "react";
import "./deals-overview-component.scss";
import {
  TabContainerComponent,
  TabComponent,
  Button
} from "@app/prep/modules-prep/core";

import Oasis from "@assets/oasis.jpg";
import ChevronDown from "@assets/icons/chevron-down.svg";
import { Link } from "react-router-dom";

// if (typeof window !== "undefined") {
//   require("uikit");
// }

export interface IDealsOverviewComponentProps {
  bgcolor?: string;
  cards?: any;
  customNextArrow?: JSX.Element | undefined;
  customPrevArrow?: JSX.Element | undefined;
}

const tabItems = [
  {
    title: "Winkels"
  },
  {
    title: "Productdeals"
  }
];
const TabItemsContent = [
  {
    title: "Title",
    sub_title: "Subtitle",
    content: "Een selectie van bizarre vele aanbiedingen. Meer info",
    meer_info_link: "#",
    image: Oasis,
    range: "80%",
    button_text: "Naar deals",
    button_link: "#"
  },
  {
    title: "Title2",
    sub_title: "Subtitle",
    content: "Een selectie van bizarre vele aanbiedingen. Meer info",
    meer_info_link: "#",
    image: Oasis,
    range: "80%",
    button_text: "Naar deals",
    button_link: "#"
  }
];

const DealsOverviewComponent = (props: IDealsOverviewComponentProps) => {
  const connectClass = "uk-switcher-list";
  const switcherAttr = { "data-uk-switcher": `connect: .${connectClass}` };

  return (
    <>
      <div className="deals-overview">
        <div className="deals-overview__header">
          <div className="uk-container">
            <div className="deals-overview__tab">
              <TabContainerComponent
                attribute={switcherAttr}
                classTabList={"uk-tab__list"}
              >
                {tabItems
                  ? tabItems.map((item, key) => (
                      <TabComponent attrAction={"link"} key={key}>
                        {item.title}
                      </TabComponent>
                    ))
                  : ""}
              </TabContainerComponent>
            </div>
            <div className="deals-overview__filters">
              <div className="deals-overview__filter-list">
                <div className="filter-label">Filters</div>
                <div className="filter-status">
                  <Button
                    title={"Status"}
                    type={"button"}
                    variant={"dropdown"}
                    icon={ChevronDown}
                  />
                  <div data-uk-dropdown="mode: click">
                    <div className="dropdown-head">
                      <input type="text" />
                    </div>
                    <div className="dropdown-body">
                      <div className="uk-grid uk-child-width-1-2">
                        <div>
                          <ul className="dropdown-list">
                            <li>dropdown-list</li>
                          </ul>
                        </div>
                        <div>
                          <ul className="dropdown-list">
                            <li>
                              {/*<input*/}
                              {/*checked*/}
                              {/*type="checkbox"*/}
                              {/*id={"check1"}*/}
                              {/*/>*/}
                              <label htmlFor="check1" className={"checkbox"}>
                                Apple
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-bottom">
                      <ul className="dropdown-bottom__action">
                        <li>
                          <Link to="#">Verwijder merk filters (2)</Link>
                        </li>
                        <li>
                          <Button title={"Toon 123 Winkels"} href={"#"} />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="filter-category">
                  <Button
                    title={"Categorie"}
                    type={"button"}
                    variant={"dropdown"}
                    icon={ChevronDown}
                  />
                  <div data-uk-dropdown="mode: click">Lorem</div>
                </div>
                <div className="filter-brand">
                  <Button
                    title={"Merk"}
                    type={"button"}
                    variant={"dropdown"}
                    icon={ChevronDown}
                  />
                  <div data-uk-dropdown="mode: click">Lorem</div>
                </div>
              </div>
              <div className="deals-overview__sort">filter sort</div>
            </div>
          </div>
        </div>
        <div className="deals-overview__body">
          <div className="uk-container">
            <TabContainerComponent classTabList={`uk-switcher ${connectClass}`}>
              {TabItemsContent
                ? TabItemsContent.map((item, key) => (
                    <TabComponent key={key}>{item.title}</TabComponent>
                  ))
                : ""}
            </TabContainerComponent>
          </div>
        </div>
      </div>
    </>
  );
};

export { DealsOverviewComponent };
