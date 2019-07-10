import * as React from "react";

import { FeaturedDealsComponent } from "../featured-deals/featured-deals.component";
import { getFeaturedDealsDummyData } from "@app/api/modules/featured-deals/endpoints";
import { HeaderSmall } from "@app/prep/pages-prep/winkleoverview/dummy-data";
import { HeaderSmallComponent } from "@app/prep/modules-prep";
import { ProductDetailComponent } from "@app/prep/modules-prep/product-detail";
import { ProductDetail } from "@app/prep/pages-prep/winkel-single/dummy-data";
import { ShopSingleHeaderComponent } from "../shop-single-header";

export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = () => {
  return (
    <ShopSingleHeaderComponent
      checkList={[
        "Profiteer van 15% op korting op alles",
        "Online én in de winkels",
        "De hele week aanbiedingen van 16-11 t/m 26-11",
        "Ruimere openingstijden"
      ]}
      listTitle="De voordelen van shoppen bij Beddenreus tijdens Black Friday."
      content="Vier Black Friday bij Beddenreus en ontvang 15% korting op alles!
    Black Friday bij Beddenreus wil je niet missen! Je geniet van maar liefst 15% korting op alles. Extra interessant: Black Friday duurt bij Beddenreus niet één dag maar ruim een week. Dé week om eens goed na te denken over een nieuwe boxspring, matras of dekbedovertrek! Want 15% korting dat is héél veel! Hét ideale moment dus om jouw favoriete boxspring, matras of winterdekbed te kopen. Online én in de winkel. <a href='#'>Meer info</a>"
      title="Black Friday 2019 bij Beddenreus"
    />
  );
};

export { PlaygroundPedroComponent };
