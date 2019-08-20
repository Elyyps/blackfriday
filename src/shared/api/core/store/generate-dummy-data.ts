import { StoreStatus, Store } from "./store";

export const generateSingleStoreDummyData = (): Store => ({
  id: "0",
  status: StoreStatus.NowValid,
  categories: ["Audio", "Games"],
  availableBrands: ["Apple", "Phillips", "Nintendo"],
  name: "Coolblue",
  moreInfoLink: "https://www.coolblue.nl/",
  description: "Een selectie van bizar veel aanbiedingen.",
  logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/coolblue.png",
  timeLeftPercentage: 80
});

export const generateDemoStoreDummyData = (): Store[] => [
  {
    id: "0",
    status: StoreStatus.NowValid,
    categories: ["Audio", "Games", "Elektronisch"],
    availableBrands: ["Apple", "Phillips", "Nintendo", "Microsoft", "Phillips", "Nintendo", "Sony", "Vodafone"],
    name: "Coolblue",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/coolblue.png",
    timeLeftPercentage: 80,
    label: "Hot"
  },
  {
    id: "1",
    status: StoreStatus.AlmostOver,
    categories: ["Mode", "Huishouden"],
    availableBrands: ["Apple", "Phillips", "Nintendo", "Adidas", "Jack & Jones", "Happy Socks"],
    name: "De Bijenkorf",
    moreInfoLink: "https://www.debijenkorf.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/de+bijenkorf.png",
    timeLeftPercentage: 30,
    label: "Hot"
  },
  {
    id: "2",
    status: StoreStatus.NowValid,
    categories: ["Elektronisch"],
    availableBrands: ["Vodafone"],
    name: "Vodafone",
    moreInfoLink: "https://www.vodafone.nl/",
    description:
      "Een selectie van bizar veel aanbiedingen. Een selectie van bizar veel aanbiedingen. Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/vodafone.png",
    timeLeftPercentage: 70
  },
  {
    id: "3",
    status: StoreStatus.NowValid,
    categories: ["Mode", "Huishouden"],
    availableBrands: ["Jack & Jones", "Adidas", "Converse", "Phillips", "Sony"],
    name: "Wehkamp",
    moreInfoLink: "https://www.wehkamp.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/wehkamp.png",
    timeLeftPercentage: 60
  },
  {
    id: "4",
    status: StoreStatus.NowValid,
    categories: ["Elektronisch"],
    availableBrands: ["Sony", "Samsung", "Apple"],
    name: "Ziggo",
    moreInfoLink: "https://www.ziggo.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/ziggo.png",
    timeLeftPercentage: 75
  },
  {
    id: "5",
    status: StoreStatus.NowValid,
    categories: ["Audio", "Elektronisch", "Huishouden"],
    availableBrands: ["Apple", "Phillips", "Nintendo", "Sony", "Microsoft"],
    name: "BCC",
    moreInfoLink: "https://www.bcc.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/bcc.png",
    timeLeftPercentage: 100
  },
  {
    id: "6",
    status: StoreStatus.NowValid,
    categories: ["Audio", "Games", "Elektronisch"],
    availableBrands: ["Apple", "Phillips", "Nintendo", "Sony", "Vodafone", "Microsoft", "Samsung"],
    name: "Bol.com",
    moreInfoLink: "https://bol.com",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/bol-logo.svg",
    timeLeftPercentage: 40
  },
  {
    id: "7",
    status: StoreStatus.AlmostOver,
    categories: ["Audio", "Elektronisch"],
    availableBrands: ["Phillips", "Samsung"],
    name: "Dyson",
    moreInfoLink: "https://www.dyson.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/dyson.png",
    timeLeftPercentage: 20
  },
  {
    id: "88",
    status: StoreStatus.NowValid,
    categories: ["Mode", "Sport"],
    availableBrands: ["Nike"],
    name: "Nike",
    moreInfoLink: "https://www.nike.com/nl",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/nike.png",
    timeLeftPercentage: 85
  },
  {
    id: "8",
    status: StoreStatus.Unknown,
    categories: ["Mode", "Sport"],
    availableBrands: ["Nike", "Adidas", "JBL"],
    name: "Schuurman Schoenen",
    moreInfoLink: "https://www.schuurman-schoenen.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/schuurmanschoenen.png",
    timeLeftPercentage: 0
  },
  {
    id: "9",
    status: StoreStatus.Expired,
    categories: ["Elektronisch"],
    availableBrands: ["Apple", "Sony"],
    name: "T-Mobile",
    moreInfoLink: "https://www.t-mobile.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/tmobile.png",
    timeLeftPercentage: 0
  },
  {
    id: "10",
    status: StoreStatus.NowValid,
    categories: ["Elektronisch", "Sport"],
    availableBrands: ["Apple", "Phillips", "Nintendo", "Sony", "Microsoft", "Guess"],
    name: "50Five",
    moreInfoLink: "https://www.50five.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/50five.png",
    timeLeftPercentage: 80
  },
  {
    id: "11",
    status: StoreStatus.StartsSoon,
    categories: ["Mode"],
    availableBrands: ["Jack & Jones", "Adidas", "JBL", "Converse", "Happy Socks"],
    name: "About You",
    moreInfoLink: "https://www.aboutyou.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/aboutyou.png",
    timeLeftPercentage: 0,
    startsInDays: 5
  },
  {
    id: "12",
    status: StoreStatus.Unknown,
    categories: ["Mode", "Sport"],
    availableBrands: ["Adidas"],
    name: "Adidas",
    moreInfoLink: "https://www.adidas.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/adidas.png",
    timeLeftPercentage: 0
  },
  {
    id: "13",
    status: StoreStatus.NowValid,
    categories: ["Mode", "Sport"],
    availableBrands: ["Adidas", "Jack & Jones", "Only"],
    name: "Aktiesport",
    moreInfoLink: "https://www.aktiesport.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/actiesport.png",
    timeLeftPercentage: 20
  },
  {
    id: "14",
    status: StoreStatus.NowValid,
    categories: ["Audio", "Games", "Elektronisch"],
    availableBrands: ["Apple", "Phillips", "Nintendo", "Microsoft", "HP", "Sony"],
    name: "Alternate",
    moreInfoLink: "https://www.alternate.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/alternate.png",
    timeLeftPercentage: 80
  },
  {
    id: "15",
    status: StoreStatus.StartsSoon,
    categories: ["Elektronisch"],
    availableBrands: ["Apple"],
    name: "Amac",
    moreInfoLink: "https://www.amac.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/amac.png",
    timeLeftPercentage: 0,
    startsInDays: 3
  },
  {
    id: "16",
    status: StoreStatus.NowValid,
    categories: ["Audio", "Games", "Elektronisch", "Mode", "Huishouden"],
    availableBrands: [
      "Apple",
      "Jack & Jones",
      "Adidas",
      "JBL",
      "Converse",
      "Microsoft",
      "Guess",
      "Only",
      "Happy Socks",
      "Phillips",
      "HP",
      "Nintendo",
      "Samsung",
      "Sony",
      "Vodafone"
    ],
    name: "Amazon",
    moreInfoLink: "https://www.amazon.com/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/amazon.png",
    timeLeftPercentage: 80
  },
  {
    id: "17",
    status: StoreStatus.StartsSoon,
    categories: ["Elektronisch"],
    availableBrands: ["Apple", "Sony", "Phillips"],
    name: "ANWB",
    moreInfoLink: "https://www.anwb.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/anwb.png",
    timeLeftPercentage: 0,
    startsInDays: 5
  },
  {
    id: "18",
    status: StoreStatus.NowValid,
    categories: ["Audio", "Games"],
    availableBrands: ["Sony", "JBL", "Phillips"],
    name: "AO.com",
    moreInfoLink: "https://www.ao.com/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/ao.png",
    timeLeftPercentage: 80
  },
  {
    id: "19",
    status: StoreStatus.NowValid,
    categories: ["Elektronisch", "Games", "Huishouden"],
    availableBrands: ["Apple"],
    name: "Apple Store",
    moreInfoLink: "https://www.apple.com/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/apple.png",
    timeLeftPercentage: 80
  },
  {
    id: "20",
    status: StoreStatus.NowValid,
    categories: ["Mode"],
    availableBrands: ["Jack & Jones", "Adidas", "Only", "Happy Socks", "Only"],
    name: "BALR.",
    moreInfoLink: "https://www.balr.com/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/balr.png",
    timeLeftPercentage: 80
  },
  {
    id: "21",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Sony", "Phillips"],
    name: "Beddenreus",
    moreInfoLink: "https://www.beddenreus.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/beddenreus.png",
    timeLeftPercentage: 80
  },
  {
    id: "22",
    status: StoreStatus.AlmostOver,
    categories: ["Elektronisch"],
    availableBrands: ["Sony", "Vodafone", "Apple"],
    name: "Ben",
    moreInfoLink: "https://www.ben.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/ben.png",
    timeLeftPercentage: 20
  },

  // extra dummy data
  {
    id: "23",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Bax music",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Bax%20Music.png",
    timeLeftPercentage: 90
  },
  {
    id: "24",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Berden",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Berden.png",
    timeLeftPercentage: 90
  },
  {
    id: "25",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Bestseller",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Bestseller.png",
    timeLeftPercentage: 90
  },
  {
    id: "26",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Beter Bed",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Beterbed.png",
    timeLeftPercentage: 90
  },
  {
    id: "27",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Bever",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Bever.png",
    timeLeftPercentage: 90
  },
  {
    id: "28",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Blokker",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Blokker.png",
    timeLeftPercentage: 90
  },
  {
    id: "29",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Body & Fit",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Body%20&%20Fit.png",
    timeLeftPercentage: 90
  },
  {
    id: "30",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "C&A",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/C&A.png",
    timeLeftPercentage: 90
  },
  {
    id: "31",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Calvin Klein",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Calvin%20Klein.png",
    timeLeftPercentage: 90
  },
  {
    id: "32",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Cameranu",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Cameranu.png",
    timeLeftPercentage: 90
  },
  {
    id: "33",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Centerparcs",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Centerparcs.png",
    timeLeftPercentage: 90
  },
  {
    id: "34",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Converse",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Converse.png",
    timeLeftPercentage: 90
  },
  {
    id: "35",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Coolcat",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Coolcat.png",
    timeLeftPercentage: 90
  },
  {
    id: "36",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Decathlon",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Decathlon.png",
    timeLeftPercentage: 90
  },
  {
    id: "37",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Douglas",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Douglas.png",
    timeLeftPercentage: 90
  },
  {
    id: "38",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Expert",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Expert.png",
    timeLeftPercentage: 90
  },
  {
    id: "39",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Flinders",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Flinders.png",
    timeLeftPercentage: 90
  },
  {
    id: "40",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Fonq",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Fonq.png",
    timeLeftPercentage: 90
  },
  {
    id: "41",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "G-star raw",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/G-star%20Raw.png",
    timeLeftPercentage: 90
  },
  {
    id: "42",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Gall & Gall",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Gall%20&%20gall.png",
    timeLeftPercentage: 90
  },
  {
    id: "43",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Gamma",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Gamma.png",
    timeLeftPercentage: 90
  },
  {
    id: "44",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "GUESS",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Guess.png",
    timeLeftPercentage: 90
  },
  {
    id: "45",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "H&M",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/H&M.png",
    timeLeftPercentage: 90
  },
  {
    id: "46",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "HP",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Hp.png",
    timeLeftPercentage: 90
  },
  {
    id: "47",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Hunkemöller",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Hunkemoller.png",
    timeLeftPercentage: 90
  },
  {
    id: "48",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Ici Paris XL",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Ici%20Paris%20XL.png",
    timeLeftPercentage: 90
  },
  {
    id: "49",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Jack & Jones",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Jack%20&%20Jones.png",
    timeLeftPercentage: 90
  },
  {
    id: "50",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "JBL",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/JBL.png",
    timeLeftPercentage: 90
  },
  {
    id: "51",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "JD sports",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/JD.png",
    timeLeftPercentage: 90
  },
  {
    id: "52",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Jysk",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Jysk.png",
    timeLeftPercentage: 90
  },
  {
    id: "53",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "KPN",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/KPN.png",
    timeLeftPercentage: 90
  },
  {
    id: "54",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Kruidvat",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Kruidvat.png",
    timeLeftPercentage: 90
  },
  {
    id: "55",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Lucardi",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Lucardi.png",
    timeLeftPercentage: 90
  },
  {
    id: "56",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "MediaMarkt",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/MediaMarkt.png",
    timeLeftPercentage: 90
  },
  {
    id: "57",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Megekko",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Megekko.png",
    timeLeftPercentage: 90
  },
  {
    id: "58",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Miss Etam",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Miss%20Etam.png",
    timeLeftPercentage: 90
  },
  {
    id: "59",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "O’neill",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/O'neill.png",
    timeLeftPercentage: 90
  },
  {
    id: "60",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Only",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Only.png",
    timeLeftPercentage: 90
  },
  {
    id: "61",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Otto",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Otto%20.png",
    timeLeftPercentage: 90
  },
  {
    id: "62",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Pandora",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Pandora.png",
    timeLeftPercentage: 90
  },
  {
    id: "63",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Paradigit",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Paradigit.png",
    timeLeftPercentage: 90
  },
  {
    id: "64",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "PlatteTV",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/PlatteTV.png",
    timeLeftPercentage: 90
  },
  {
    id: "65",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Plutosport",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/PlutoSport.png",
    timeLeftPercentage: 90
  },
  {
    id: "66",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Praxis",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Praxis.png",
    timeLeftPercentage: 90
  },
  {
    id: "67",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Prenatal",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Prenatal.png",
    timeLeftPercentage: 90
  },
  {
    id: "68",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "puma",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Puma.png",
    timeLeftPercentage: 90
  },
  {
    id: "69",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Reebok",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Reebok.png",
    timeLeftPercentage: 90
  },
  {
    id: "70",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "River island",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/River%20Island.png",
    timeLeftPercentage: 90
  },
  {
    id: "71",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Sissy boy",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Sissy%20Boy.png",
    timeLeftPercentage: 90
  },
  {
    id: "72",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Samsung",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Samsung.png",
    timeLeftPercentage: 90
  },
  {
    id: "73",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Score",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Score.png",
    timeLeftPercentage: 90
  },
  {
    id: "74",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Siebel juweliers",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Siebel%20Juweliers.png",
    timeLeftPercentage: 90
  },
  {
    id: "75",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Steps",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Steps.png",
    timeLeftPercentage: 90
  },
  {
    id: "76",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Superdry",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Superdry.png",
    timeLeftPercentage: 90
  },
  {
    id: "77",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Telfort",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Telfort.png",
    timeLeftPercentage: 90
  },
  {
    id: "78",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Tommy Hilfiger",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Tommy%20Hilfiger.png",
    timeLeftPercentage: 90
  },
  {
    id: "79",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Vero Moda",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Vero%20Moda.png",
    timeLeftPercentage: 90
  },
  {
    id: "80",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Vtwonen",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/vtwonen.png",
    timeLeftPercentage: 90
  },
  {
    id: "81",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Woon express",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar veel aanbiedingen.",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/Woon%20Express.png",
    timeLeftPercentage: 90
  }
];
