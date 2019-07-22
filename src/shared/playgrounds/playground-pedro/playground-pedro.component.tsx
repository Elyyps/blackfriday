/* tslint:disable */
import * as React from "react";

import { MobileFilterComponent, mobileFilterDummyData } from "@app/core/mobile-filter";
import { IMobileFilterItem } from "@app/core/mobile-filter/mobile-filter-item";

export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = () => {
  const [currentItems, setCurrentItems] = React.useState<IMobileFilterItem[]>(mobileFilterDummyData);

  return (
    <MobileFilterComponent
      totalStores={10}
      onClear={() => {
        const newItems: IMobileFilterItem[] = [];
        currentItems.forEach(item => {
          item.selectedItems = [];
          newItems.push(item);
        });
        setCurrentItems(newItems);
      }}
      onClose={() => {}}
      filterItems={currentItems}
    />
  );
};

export { PlaygroundPedroComponent };
