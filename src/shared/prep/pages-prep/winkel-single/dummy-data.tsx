import CoolBlue from "@assets/cool-blue.svg";
import Oasis from "@assets/oasis.jpg";
import Icon from "@assets/icons/twitter.svg";
import Paper from "@assets/icons/paper.svg";
import Wehkamp from "@assets/logo-wehkamp.svg";
import Store from "@assets/icons/store.svg";
import Sign from "@assets/icons/sign.svg";

const CardMore = [
  {
    title: "Wij hebben meer winkels in ons overzicht",
    image: Store,
    button_text: "Alle winkels",
    button_link: "#"
  }
];
const CardsDeals = [
  {
    image: Oasis,
    sub_title: "Coolblue",
    title: "Apple AirPods 2 met draadloze oplaadcase",
    sale: "Bespaar 40% ",
    price: "€2.429",
    old_price: "€3.429",
    button_text: "Naar deals",
    button_link: "#"
  },
  {
    image: Oasis,
    sub_title: "Coolblue",
    title: "Apple AirPods 2 met draadloze oplaadcase",
    sale: "Bespaar 40% ",
    price: "€2.429",
    old_price: "€3.429",
    button_text: "Naar deals",
    button_link: "#"
  },
  {
    image: Oasis,
    sub_title: "Coolblue",
    title: "Apple AirPods 2 met draadloze oplaadcase",
    sale: "Bespaar 40% ",
    price: "€2.429",
    old_price: "€3.429",
    button_text: "Naar deals",
    button_link: "#"
  },
  {
    image: Oasis,
    sub_title: "Coolblue",
    title: "Apple AirPods 2 met draadloze oplaadcase",
    sale: "Bespaar 40% ",
    price: "€2.429",
    old_price: "€3.429",
    button_text: "Naar deals",
    button_link: "#"
  }
];
const ModalData = {
  modal_target: "modal-product-detail",
  modal_title: "Inschrijven nieuwsbrief",
  button_icon: Paper
};

const Card = [
  {
    title: "15% korting op het hele assortiment",
    sub_title: "Nu geldig",
    range: ".7",
    content: "Een selectie van bizarre vele aanbiedingen.",
    image: CoolBlue,
    button_text: "Naar deals",
    button_link: "#",
    button_secondary: {
      href: "#",
      title: "BLACK15",
      variant: "dashed"
    },
    variant: "modify",
    message: {
      icon: Icon,
      description: "Op de hoogte blijven? Meld je dan aan!",
      button: {
        href: "#",
        title: "Nieuwsbrief",
        icon: Paper,
        variant: "invert"
      }
    }
  }
];

const ProductDetail = {
  image: Oasis,
  breadcrumbs: [
    {
      text: "Home",
      link: "#"
    },
    {
      text: "Alle winkels",
      link: "#"
    }
  ],
  title: "Black Friday 2019 bij Beddenreus",
  rating: {
    stars: 5,
    description: "Beoordeel deze deal"
  },
  content:
    "Vier Black Friday bij Beddenreus en ontvang 15% korting op alles!Black Friday bij Beddenreus wil je niet missen! Je geniet van maar liefst 15% korting op alles. Extra interessant: Black Friday duurt bij Beddenreus niet één dag maar ruim een week. Dé week om eens goed na te denken over een nieuwe boxspring, matras of dekbedovertrek! Want 15% korting dat is héél veel! Hét ideale moment dus om jouw favoriete boxspring, matras of winterdekbed te kopen. Online én in de winkel. Meer info",
  list: {
    list_title: "De voordelen van shoppen bij Beddenreus tijdens Black Friday.",
    items: [
      "Profiteer van 15% op korting op alles",
      "Online én in de winkels",
      "De hele week aanbiedingen van 16-11 t/m 26-11",
      "Ruimere openingstijden"
    ]
  },
  beddenreus: "Beddenreus",
  labelList: ["Wonen & slapen", "Swiss sense", "hastens"],
  favorite_button: {
    text: "Winkel opslaan als favoriet",
    link: "#"
  },
  delen: {
    text: "Winkel opslaan als favoriet",
    iconChevron: "Winkel opslaan als favoriet"
  }
};

const CardsShop = [
  {
    title: "Bekbeddiscounter.nl",
    sub_title: "Nu geldig",
    content: "Een selectie van bizarre vele aanbiedingen.",
    image: CoolBlue,
    button_text: "Naar deals",
    button_link: "#"
  },
  {
    title: "Swiss Sense",
    sub_title: "Actie start over 5 dagen!",
    range: "0",
    content: "Een selectie van ",
    image: Wehkamp,
    button_text: "Naar deals",
    button_link: "#"
  },
  {
    title: "Beter Bed",
    sub_title: "Nu geldig",
    range: ".7",
    content: "Een selectie van bizarre vele aanbiedingen.",
    image: CoolBlue,
    button_text: "Naar deals",
    button_link: "#"
  },
  {
    title: "Totaal Bed",
    sub_title: "Nu geldig",
    range: ".7",
    content: "Een selectie van bizarre vele aanbiedingen. Meer info",
    image: Wehkamp,
    button_text: "Naar deals",
    button_link: "#"
  }
];

const Banner = {
  bgcolor: "#f7f7f7",
  paddingTop: "70px",
  paddingBottom: "70px",
  title: "Black Friday bij Coolblue",
  buttonTitle: "Meer deals",
  buttonLink: "#",
  image: Oasis,
  label: "22 t/m 26 nov.",
  text: "Een selectie van bizarre aanbiedingen. Meer info",
  logo: CoolBlue
};

const CTASimple = {
  bgcolor: "#f7f7f7",
  paddingTop: "70px",
  paddingBottom: "70px",
  title: "Niet helemaal wat je zoekt? Geeft niks want we hebben meer!",
  buttonTitle: "Meer deals",
  buttonLink: "#",
  icon: Sign
};

export { Card, CardsShop, ProductDetail, CardsDeals, CardMore, Banner, CTASimple, ModalData };
