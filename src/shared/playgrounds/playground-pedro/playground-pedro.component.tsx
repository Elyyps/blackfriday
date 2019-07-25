/* tslint:disable */
import * as React from "react";

import { MobileFilterComponent, mobileFilterDummyData } from "@app/core/mobile-filter";
import { IMobileFilterItem } from "@app/core/mobile-filter/mobile-filter-item";
import { DropdownComponent } from "@app/core/dropdown/dropdown.component";
import { ShareSocialDropdownComponent } from "@app/core/share-social-dropdown";
import { socialMediaButtons } from "@app/api/core/share-social/generate-dummy-data";

export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = () => {
  const [currentItems, setCurrentItems] = React.useState<IMobileFilterItem[]>(mobileFilterDummyData);

  return (
   <div>
     <ShareSocialDropdownComponent buttonTitle="Share" shareSocial={socialMediaButtons}/>
   </div>

  );
};

export { PlaygroundPedroComponent };
