import { BodyTextModule } from "./body-text";
import React from "react";

export const generateDummyBodyTextModule = (dummyJSX: JSX.Element): BodyTextModule => ({
  bottomMargin: "0px",
  topMargin: "0px",
  id: "1",
  name: "BodyTextModule",
  dummyJSX
});

export const generateHomepageBodytextDummyData = () => (
  <React.Fragment>
    <h1>
      <strong>Black Friday België</strong>
    </h1>
    <p>
      Black Friday is sterk in opkomst in België en dat is goed nieuws voor de koopjesjagers en retailers! Black Friday
      vindt elke vierde vrijdag van november plaats, de dag na het Amerikaanse Thanksgiving.Op die dag doet iedereen
      massaal inkopen vanwege de extra hoge kortingen die winkels en webshops geven.Het Black Friday fenomeen is nog
      niet bij iedereen bekend in België, maar dankzij het groeiende aantal deelnemende winkels wordt Zwarte Vrijdag ook
      steeds populairder in België.Aangezien Black Friday bij uitstek dé dag is om producten met de hoogste korting te
      kopen, is het ontzettend druk in de winkelstraten.Doordat wij van Black Friday Expert een compleet overzicht
      online bieden van alle deals en deelnemers, vindt u gemakkelijk en snel de allerbeste aanbiedingen.In veel
      gevallen is het heel wat goedkoper voor u met een online aankoop vanwege een goede vergelijking en de speciale
      Black Friday kortingscodes.Een volledig overzicht van alle Black Friday deelnemers en de geldende aanbiedingen mét
      kortingscodes vindt u hier!
    </p>
    <h2> Black Friday 2019 </h2>
    <p>
      Noteer vrijdag 29 november alvast in uw agenda, want dan start Black Friday 2019. Vanaf dat moment kunt u mooie
      deals en kortingen scoren.Hier in België hebben we het geluk dat de aanbiedingen in veel winkels meerdere dagen
      geldig zijn en dat we dus niet afhankelijk zijn van enkel en alleen maar één dag.Hierdoor heeft u meer tijd om al
      uw wensen bij elkaar te shoppen.
    </p>
  </React.Fragment>
);

export const generateShopSingleDummydata = () => (
  <React.Fragment>
    <h1>
      <strong>Black Friday Beddenreus</strong>
    </h1>
    <p>
      Sed ipsum metus, sodales sit amet vulputate a, lobortis mollis odio. Orci varius natoque penatibus et magnis dis
      parturient montes, nascetur ridiculus mus. Vivamus sed velit in ligula finibus viverra. Donec eleifend commodo
      ipsum nec commodo. Cras vehicula lectus et felis suscipit, vel commodo metus sagittis. Vestibulum quam elit,
      dignissim sit amet risus in, luctus accumsan lectus. Sed rutrum metus ut massa tempus, eget blandit lacus
      molestie. Pellentesque sit amet aliquam lacus. Etiam ultrices velit eu neque pharetra, vitae scelerisque sapien
      fermentum. Morbi egestas bibendum est. Donec at felis hendrerit, iaculis lorem vel, porta enim. Quisque suscipit
      condimentum elementum. Nam malesuada ut ligula sit amet porta. Sed nec gravida velit, eget porta metus. Quisque
      tempor commodo pulvinar. Nullam sagittis posuere mauris, in interdum tellus vulputate id.
    </p>
  </React.Fragment>
);
