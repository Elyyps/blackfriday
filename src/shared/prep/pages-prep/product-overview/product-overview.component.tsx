import * as React from "react";
import styles from "./product-overview-component.module.scss";
import { BodyTextComponent, FooterComponent, NavBarComponent } from "@app/prep/modules-prep";
import { FeaturedCategoriesComponent } from "@app/prep/modules-prep/featured-categories";
import { FeaturedShopComponent } from "@app/prep/modules-prep/featured-shop";
import { FeaturedDealsComponent } from "@app/prep/modules-prep/featured-deals";
import { Cards, CardMore, CardsDeals, CTASimple, Banner, HeaderInfoDummy, FeaturedCategories } from "./dummy-data";
import { CtaSmallComponent } from "@app/prep/modules-prep/cta-small";
import { BannerComponent } from "@app/prep/modules-prep/banner";
import { HeaderInfoComponent } from "@app/prep/modules-prep/header-info";

export interface IProductOverviewComponentProps {}

const ProductOverviewComponent = (props: IProductOverviewComponentProps) => (
  <div className={styles["product-overview"]}>
    <NavBarComponent />
    <HeaderInfoComponent {...HeaderInfoDummy} />
    <FeaturedCategoriesComponent {...FeaturedCategories} />
    <FeaturedDealsComponent
      items={[...CardsDeals]}
      buttonMore={[...CardMore]}
      bgcolor={"#f7f7f7"}
      title={"Beste Apple deals"}
    />
    <BannerComponent {...Banner} />
    <FeaturedShopComponent
      items={[...Cards]}
      buttonMore={[...CardMore]}
      bgcolor={"#f7f7f7"}
      title={"Alle winkels met Apple producten"}
    />
    <CtaSmallComponent {...CTASimple} />
    <BodyTextComponent bgcolor={"#f7f7f7"}>
      <h1>
        <strong>Vanwaar de populariteit van Apple?</strong>
      </h1>
      <p>
        De belangrijkste reden dat Apple elektronische producten zoals de iPhone, en iPad zo enorm populair zijn, is
        omdat ze elk jaar nieuwere modellen introduceren en deze nieuwe modellen komen steeds met betere functies en
        faciliteiten. Het is als het ware een trend geworden bij liefhebbers van Apple apparatuur, om tot de eersten te
        behoren die het nieuwste model hebben kunnen bemachtigen. Sommige winkels openen reeds om 12 uur middernacht op
        Black Friday en blijven de hele dag open om zodoende de klanten zoveel mogelijk aan hun trekken te laten komen.
        Er is vaak al heel vroeg, een menigte klanten aanwezig en hierdoor ontstaan er soms onaangename scènes en
        situaties.
      </p>
      <p>
        Black Friday staat symbool voor fantastische koopjes en een ongelooflijke stijging in de verkoop, afhankelijk
        van welke kant je het bekijkt. Voor liefhebbers van de vele Apple producten, heeft deze dag een extra betekenis,
        omdat het ieder jaar weer hebben van het allernieuwste op het gebied van elektronisch apparatuur, ze een
        speciaal gevoel geeft. Black Friday 2019 komt er weer aan en tegen die tijd staan alle mooie en scherpe deals op
        deze pagina gepresenteerd!
      </p>
      <h2>Alle winkels met Apple producten</h2>
      <p>
        Op deze pagina vind je de beste Black Friday aanbiedingen voor Apple producten tijdens Black Friday 2019. Deze
        aanbiedingen worden regelmatig bijgewerkt. Op vrijdag 29 november worden de deals bekend gemaakt en zal
        hieronder een overzicht verschijnen met de beste deals!
      </p>
    </BodyTextComponent>
    <FooterComponent />
  </div>
);

export { ProductOverviewComponent };
