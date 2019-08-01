import { StoreStatus, Store } from "./store";

export const generateSingleStoreDummyData = (): Store => ({
  id: "0",
  status: StoreStatus.NowValid,
  categories: ["Audio", "Games"],
  availableBrands: ["Apple", "Phillips", "Nintendo"],
  name: "Coolblue",
  moreInfoLink: "https://www.coolblue.nl/",
  description: "Een selectie van bizar vele aanbieden",
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
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/coolblue.png",
    timeLeftPercentage: 80
  },
  {
    id: "1",
    status: StoreStatus.AlmostOver,
    categories: ["Mode", "Huishouden"],
    availableBrands: ["Apple", "Phillips", "Nintendo", "Adidas", "Jack & Jones", "Happy Socks"],
    name: "De Bijenkorf",
    moreInfoLink: "https://www.debijenkorf.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/de+bijenkorf.png",
    timeLeftPercentage: 30
  },
  {
    id: "2",
    status: StoreStatus.NowValid,
    categories: ["Elektronisch"],
    availableBrands: ["Vodafone"],
    name: "Vodafone",
    moreInfoLink: "https://www.vodafone.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/vodafone.png",
    timeLeftPercentage: 80
  },
  {
    id: "3",
    status: StoreStatus.NowValid,
    categories: ["Mode", "Huishouden"],
    availableBrands: ["Jack & Jones", "Adidas", "Converse", "Phillips", "Sony"],
    name: "Wehkamp",
    moreInfoLink: "https://www.wehkamp.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/wehkamp.png",
    timeLeftPercentage: 80
  },
  {
    id: "4",
    status: StoreStatus.NowValid,
    categories: ["Elektronisch"],
    availableBrands: ["Sony", "Samsung", "Apple"],
    name: "Ziggo",
    moreInfoLink: "https://www.ziggo.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/ziggo.png",
    timeLeftPercentage: 80
  },
  {
    id: "5",
    status: StoreStatus.NowValid,
    categories: ["Audio", "Elektronisch", "Huishouden"],
    availableBrands: ["Apple", "Phillips", "Nintendo", "Sony", "Microsoft"],
    name: "BCC",
    moreInfoLink: "https://www.bcc.nl/",
    description: "Een selectie van bizar vele aanbieden",
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
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/bol.png",
    timeLeftPercentage: 80
  },
  {
    id: "7",
    status: StoreStatus.AlmostOver,
    categories: ["Audio", "Elektronisch"],
    availableBrands: ["Phillips", "Samsung"],
    name: "Dyson",
    moreInfoLink: "https://www.dyson.nl/",
    description: "Een selectie van bizar vele aanbieden",
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
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/nike.png",
    timeLeftPercentage: 90
  },
  {
    id: "8",
    status: StoreStatus.Unknown,
    categories: ["Mode", "Sport"],
    availableBrands: ["Nike", "Adidas", "JBL"],
    name: "Schuurman Schoenen",
    moreInfoLink: "https://www.schuurman-schoenen.nl/",
    description: "Een selectie van bizar vele aanbieden",
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
    description: "Een selectie van bizar vele aanbieden",
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
    description: "Een selectie van bizar vele aanbieden",
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
    description: "Een selectie van bizar vele aanbieden",
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
    description: "Een selectie van bizar vele aanbieden",
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
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/actiesport.png",
    timeLeftPercentage: 80
  },
  {
    id: "14",
    status: StoreStatus.NowValid,
    categories: ["Audio", "Games", "Elektronisch"],
    availableBrands: ["Apple", "Phillips", "Nintendo", "Microsoft", "HP", "Sony"],
    name: "Alternate",
    moreInfoLink: "https://www.alternate.nl/",
    description: "Een selectie van bizar vele aanbieden",
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
    description: "Een selectie van bizar vele aanbieden",
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
    description: "Een selectie van bizar vele aanbieden",
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
    description: "Een selectie van bizar vele aanbieden",
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
    description: "Een selectie van bizar vele aanbieden",
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
    description: "Een selectie van bizar vele aanbieden",
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
    description: "Een selectie van bizar vele aanbieden",
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
    description: "Een selectie van bizar vele aanbieden",
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
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/ben.png",
    timeLeftPercentage: 20
  },

  // extra dummy data
  {
    id: "23",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Dummy Store",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/placeholder.png",
    timeLeftPercentage: 90
  },
  {
    id: "24",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Dummy Store",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/placeholder.png",
    timeLeftPercentage: 90
  },
  {
    id: "25",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Dummy Store",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/placeholder.png",
    timeLeftPercentage: 90
  },
  {
    id: "26",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Dummy Store",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/placeholder.png",
    timeLeftPercentage: 90
  },
  {
    id: "27",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Dummy Store",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/placeholder.png",
    timeLeftPercentage: 90
  },
  {
    id: "28",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Dummy Store",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/placeholder.png",
    timeLeftPercentage: 90
  },
  {
    id: "55",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Dummy Store",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/placeholder.png",
    timeLeftPercentage: 90
  },
  {
    id: "29",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Dummy Store",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/placeholder.png",
    timeLeftPercentage: 90
  },
  {
    id: "30",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Dummy Store",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/placeholder.png",
    timeLeftPercentage: 90
  },
  {
    id: "31",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Dummy Store",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/placeholder.png",
    timeLeftPercentage: 90
  },
  {
    id: "32",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Dummy Store",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/placeholder.png",
    timeLeftPercentage: 90
  },
  {
    id: "33",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Dummy Store",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/placeholder.png",
    timeLeftPercentage: 90
  },
  {
    id: "34",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: [""],
    name: "Dummy Store",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/placeholder.png",
    timeLeftPercentage: 90
  },
  {
    id: "35",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Dummy Store",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/placeholder.png",
    timeLeftPercentage: 90
  },
  {
    id: "36",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: [""],
    name: "Dummy Store",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/placeholder.png",
    timeLeftPercentage: 90
  },
  {
    id: "37",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Dummy Store",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/placeholder.png",
    timeLeftPercentage: 90
  },
  {
    id: "38",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Dummy Store",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/placeholder.png",
    timeLeftPercentage: 90
  },
  {
    id: "39",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Dummy Store",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/placeholder.png",
    timeLeftPercentage: 90
  },
  {
    id: "40",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Dummy Store",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/placeholder.png",
    timeLeftPercentage: 90
  },
  {
    id: "41",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Dummy Store",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/placeholder.png",
    timeLeftPercentage: 90
  },
  {
    id: "42",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Dummy Store",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/placeholder.png",
    timeLeftPercentage: 90
  },
  {
    id: "43",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Dummy Store",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/placeholder.png",
    timeLeftPercentage: 90
  },
  {
    id: "44",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Dummy Store",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/placeholder.png",
    timeLeftPercentage: 90
  },
  {
    id: "45",
    status: StoreStatus.NowValid,
    categories: ["Huishouden"],
    availableBrands: ["Phillips"],
    name: "Dummy Store",
    moreInfoLink: "https://www.coolblue.nl/",
    description: "Een selectie van bizar vele aanbieden",
    logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/StoreLogos/placeholder.png",
    timeLeftPercentage: 90
  }
];
