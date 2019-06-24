import * as React from "react";
import styles from "./homepage-component.module.scss";
import {
  BodyTextComponent,
  FooterComponent,
  NavBarComponent,
  HeroComponent,
  DealsOverviewComponent
} from "@app/prep/modules-prep";
import { FeaturedShopComponent } from "@app/prep/modules-prep/featured-shop";
export interface IHomepageComponentProps {}

const HomepageComponent = (props: IHomepageComponentProps) => (
  <div className={styles["homepage"]}>
    <NavBarComponent />
    <HeroComponent />
    <BodyTextComponent bgcolor={"#f7f7f7"}>
      <h1>
        <strong>Black Friday België</strong>
      </h1>
      <p>
        Black Friday is sterk in opkomst in België en dat is goed nieuws voor de
        koopjesjagers en retailers! Black Friday vindt elke vierde vrijdag van
        november plaats, de dag na het Amerikaanse Thanksgiving. Op die dag doet
        iedereen massaal inkopen vanwege de extra hoge kortingen die winkels en
        webshops geven.Het Black Friday fenomeen is nog niet bij iedereen bekend
        in België, maar dankzij het groeiende aantal deelnemende winkels wordt
        Zwarte Vrijdag ook steeds populairder in België. Aangezien Black Friday
        bij uitstek dé dag is om producten met de hoogste korting te kopen, is
        het ontzettend druk in de winkelstraten. Doordat wij van Black Friday
        Expert een compleet overzicht online bieden van alle deals en
        deelnemers, vindt u gemakkelijk en snel de allerbeste aanbiedingen. In
        veel gevallen is het heel wat goedkoper voor u met een online aankoop
        vanwege een goede vergelijking en de speciale Black Friday
        kortingscodes. Een volledig overzicht van alle Black Friday deelnemers
        en de geldende aanbiedingen mét kortingscodes vindt u hier!
      </p>
      <h2>Black Friday 2019</h2>
      <p>
        Noteer vrijdag 29 november alvast in uw agenda, want dan start Black
        Friday 2019. Vanaf dat moment kunt u mooie deals en kortingen scoren.
        Hier in België hebben we het geluk dat de aanbiedingen in veel winkels
        meerdere dagen geldig zijn en dat we dus niet afhankelijk zijn van enkel
        en alleen maar één dag. Hierdoor heeft u meer tijd om al uw wensen bij
        elkaar te shoppen.
      </p>
    </BodyTextComponent>
    <DealsOverviewComponent />
    <FeaturedShopComponent
      bgcolor={"#f7f7f7"}
      title={"Vergelijkbare winkels"}
    />
    <FooterComponent />
  </div>
);

export { HomepageComponent };
