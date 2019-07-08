import Oasis from "@assets/oasis.jpg";
import CoolBlue from "@assets/cool-blue.svg";
import Party from "@assets/icons/party.svg";
import Sign from "@assets/icons/sign.svg";

const HeaderData = {
  title: "Vijf voorspellingen van Black Friday Nederland",
  backButtonText: "Alle blogs",
  backButtonURL: "/",
  image: Oasis
};

const FeaturedDeals = {
  title: "Onze beste deals",
  paddingTop: "72px",
  paddingBottom: "72px",
  bgcolor: "#f7f7f7",
  items: [
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
  ],
  buttonMore: [
    {
      title: "Er zijn meer interessante Apple deals!",
      image: Party,
      button_text: "Naar deals",
      button_link: "#"
    }
  ]
};

const CTASimple = {
  bgcolor: "#f7f7f7",
  paddingTop: "70px",
  paddingBottom: "70px",
  title: "Op de hoogte blijven? Meld je dan aan voor onze nieuwsbrief!",
  buttonTitle: "Meld je aan",
  buttonLink: "#",
  icon: Sign
};

const BlogFeaturedFields = {
  bgcolor: "#f7f7f7",
  title: "Ook interessant om te lezen",
  items: [
    {
      title: "De beste Moederdag cadeau deals",
      link: "/",
      image: Oasis
    },
    {
      title: "Black Friday wordt Black Week – deals beginnen eerder",
      link: "/",
      image: Oasis
    }
  ]
};

const BodyBlogData = {
  date: "2 minuten leestijd",
  bgcolor: "",
  paddingTop: "",
  paddingBottom: "72px",
  sidebar: true,
  social: true,
  banner: {
    title: "Black Friday bij Coolblue",
    buttonTitle: "Meer deals",
    buttonLink: "#",
    image: Oasis,
    label: "22 t/m 26 nov.",
    text: "Een selectie van bizarre aanbiedingen. Meer info",
    logo: CoolBlue
  },
  items: [
    {
      title: "Een greep uit onze deals",
      links: [
        {
          title: "Apple Airpods",
          link: "/",
          icon: Oasis
        },
        {
          title: "Apple iPhones",
          link: "/",
          icon: Oasis
        },
        {
          title: "Apple MacBooks",
          link: "/",
          icon: Oasis
        },
        {
          title: "Naar alle deals!",
          link: "/",
          icon: Party
        }
      ]
    },
    {
      title: "Black Friday Winkels",
      links: [
        {
          title: "Coolblue",
          link: "/",
          icon: CoolBlue
        },
        {
          title: "Alternate",
          link: "/",
          icon: CoolBlue
        },
        {
          title: "Beddenreus",
          link: "/",
          icon: CoolBlue
        },
        {
          title: "Naar alle Winkels!",
          link: "/",
          icon: Party
        }
      ]
    }
  ]
};

export { BodyBlogData, HeaderData, FeaturedDeals, CTASimple, BlogFeaturedFields };
