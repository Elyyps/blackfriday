import Oasis from "@assets/oasis.jpg";
import CoolBlue from "@assets/cool-blue.svg";
import Wehkamp from "@assets/logo-wehkamp.svg";
import Store from "@assets/icons/store.svg";
import Sign from "@assets/icons/sign.svg";

const HeaderInfoDummy = {
  title: "Black Friday 2019 bij Apple",
  image: Oasis,
  icon: Store,
  bgcolor: "#f7f7f7",
  content:
    "Vier Black Friday bij Apple en ontvang 15% korting op alles! Meer info",
  paddingBottom: "72px"
};

const FeaturedCategories = {
  bgcolor: "#f7f7f7",
  paddingBottom: "72px",
  paddingTop: "72px",
  items: [
    {
      title: "Apple Airpods",
      link: "/",
      icon: Store
    },
    {
      title: "Apple iPhones",
      link: "/",
      icon: Store
    },
    {
      title: "Apple MacBooks",
      link: "/",
      icon: Store
    },
    {
      title: "Apple iMacs",
      link: "/",
      icon: Store
    },
    {
      title: "Categorie item met een langere naam",
      link: "/",
      icon: Store
    },
    {
      title: "Categorie item met een nog langere na...",
      link: "/",
      icon: Store
    },
    {
      title: "Categorie item zonder afbeelding",
      link: "/"
    }
  ]
};

const Cards = [
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
  }
];

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

const CTASimple = {
  bgcolor: "#f7f7f7",
  paddingTop: "70px",
  paddingBottom: "",
  title: "Op de hoogte blijven? Meld je dan aan voor onze nieuwsbrief!",
  buttonTitle: "Meld je aan",
  buttonLink: "#",
  icon: Sign
};

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

export {
  HeaderInfoDummy,
  Cards,
  CardMore,
  CardsDeals,
  CTASimple,
  Banner,
  FeaturedCategories
};
