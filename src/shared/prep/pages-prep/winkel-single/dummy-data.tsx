import CoolBlue from "@assets/cool-blue.svg";
import Oasis from "@assets/oasis.jpg";
import Icon from "@assets/icons/twitter.svg";
import Paper from "@assets/icons/paper.svg";

const Cards = [
  {
    title: "Bekbeddiscounter.nl",
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
    ListTitle: "De voordelen van shoppen bij Beddenreus tijdens Black Friday.",
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

export { Cards, ProductDetail };
