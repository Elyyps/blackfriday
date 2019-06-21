import * as React from "react";
import "./deals-overview-component.scss";
import { TabComponent, TabItemComponent } from "@app/prep/modules-prep/core";
import { CardShop } from "@app/prep/modules-prep/core/card-shop";
import Oasis from "@assets/oasis.jpg";

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
  }
];

const DealsOverviewComponent = (props: IDealsOverviewComponentProps) => {
  const switcherAttr = { "data-attr": "value" };

  return (
    <>
      <div className="deals-overview">
        <div className="deals-overview__header">
          <div className="uk-container">
            <div className="deals-overview__tab">
              <TabComponent {...switcherAttr} classTabList={"uk-tab__list"}>
                {tabItems.map((item, key) => (
                  <TabItemComponent key={key}>{item.title}</TabItemComponent>
                ))}
              </TabComponent>
            </div>
            <div className="deals-overview__filters">
              <div className="deals-overview__filter-list">filter list</div>
              <div className="deals-overview__sort">filter sort</div>
            </div>
          </div>
        </div>
        <div className="deals-overview__body">
          <div className="uk-container">
            <TabComponent classTabList={"uk-switcher"}>
              {TabItemsContent.map((item, key) => (
                <TabItemComponent key={key}>
                  <CardShop {...item} />
                </TabItemComponent>
              ))}
            </TabComponent>
          </div>
        </div>
      </div>
    </>
  );
};

export { DealsOverviewComponent };
