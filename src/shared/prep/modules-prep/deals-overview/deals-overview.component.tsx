import React, { useState } from "react";
import "./deals-overview-component.scss";
import {
  TabContainerComponent,
  TabComponent,
  Button,
  Checkbox,
  Input,
  IconComponent,
  CardProduct
} from "@app/prep/modules-prep/core";
import ChevronDown from "@assets/icons/chevron-down.svg";
import Search from "@assets/icons/search.svg";
import StoreIcon from "@assets/icons/store.svg";
import ArrowLongDown from "@assets/icons/arrow-long-down.svg";
import HandPointing from "@assets/icons/hand-pointing.svg";
import { Link } from "react-router-dom";
import {
  dealsOverviewDropdownDummy,
  CardsDeals,
  Banner,
  tabItems,
  TabItemsContent
} from "../../pages-prep/winkleoverview/dummy-data";
import { BannerComponent } from "@app/prep/modules-prep/banner";
// tslint:disable-next-line
if (typeof window !== "undefined") {
  require("uikit");
}

export interface IDealsOverviewComponentProps {
  bgcolor?: string;
  cards?: any;
  customNextArrow?: JSX.Element | undefined;
  customPrevArrow?: JSX.Element | undefined;
}

const DealsOverviewComponent = (props: IDealsOverviewComponentProps) => {
  const postFrom = 15;
  const connectClass = "uk-switcher-list";
  const switcherAttr = { "data-uk-switcher": `connect: .${connectClass}` };
  const [checkedItems, setCheckedItems] = useState(new Map());
  const checkedStateStatus = (state: any) => {
    // console.log(state);
    // state.map((item:any,index:number) => {
    //
    // });
  };
  const handleChange = (event: any) => {
    setCheckedItems(
      checkedItems.set(event.target.getAttribute("data-category"), [
        { [event.target.name]: event.target.checked }
      ])
    );
    checkedStateStatus(
      checkedItems.get(event.target.getAttribute("data-category"))
    );
  };

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
                <div className="filter-label">
                  Filters
                  <IconComponent icon={HandPointing} size={"20px"} />
                </div>
                {dealsOverviewDropdownDummy
                  ? dealsOverviewDropdownDummy.map((item, index) => (
                      <div key={index} className="filter-item">
                        <Button
                          title={item.button_text}
                          type={"button"}
                          variant={`dropdown ${item.isActive}`}
                          icon={ChevronDown}
                        />
                        <div data-uk-dropdown="mode: click">
                          <div className="dropdown-head">
                            <Input
                              placeholder={item.dropdwon.placehoder}
                              classModify={"large"}
                              icon={Search}
                            />
                          </div>
                          <div className="dropdown-body">
                            <div className="uk-grid uk-child-width-1-2">
                              {item.dropdwon.status
                                ? item.dropdwon.status.map(
                                    (itemCheckbox, key) => (
                                      <div
                                        key={key}
                                        className={"dropdown-item"}
                                      >
                                        <Checkbox
                                          onChange={handleChange}
                                          // checked={checkedItems.get(itemCheckbox)}
                                          key={key}
                                          name={itemCheckbox.name}
                                          label={itemCheckbox.label}
                                          buttonText={item.button_text}
                                        />
                                        <span className="count-item">
                                          ({itemCheckbox.count})
                                        </span>
                                      </div>
                                    )
                                  )
                                : ""}
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
                    ))
                  : ""}
              </div>
              <div className="deals-overview__sort">
                <div className="filter__sort-item">
                  <IconComponent icon={StoreIcon} size={"20px"} />
                  132 winkels
                </div>
                <div className="filter__sort-item">
                  Sorteer op:
                  <span className="filter__sort-change">
                    Relevantie
                    <IconComponent icon={ArrowLongDown} size={"6px"} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="deals-overview__body">
          <div className="uk-container">
            <TabContainerComponent classTabList={`uk-switcher ${connectClass}`}>
              {TabItemsContent
                ? TabItemsContent.map((item, key) => (
                    <TabComponent key={key}>
                      <div
                        className="uk-grid-posts uk-grid uk-grid-small uk-child-width-1-3@s uk-child-width-1-5@m"
                        data-uk-margin
                      >
                        {CardsDeals &&
                          CardsDeals.slice(0, postFrom).map(
                            (itemCard, keyCard) => (
                              <div key={keyCard}>
                                <CardProduct {...itemCard} />
                              </div>
                            )
                          )}
                        <BannerComponent {...Banner} />
                        {CardsDeals &&
                          CardsDeals.slice(postFrom).map(
                            (itemCard, keyCard) => (
                              <div key={keyCard}>
                                <CardProduct {...itemCard} />
                              </div>
                            )
                          )}
                      </div>
                    </TabComponent>
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
