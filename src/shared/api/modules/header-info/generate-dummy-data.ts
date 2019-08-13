import { HeaderInfo } from "./header-info.module";
import Store from "@assets/icons/store.svg";

export const HeaderInfoDummy: HeaderInfo = {
  title: "Black Friday 2019 bij Apple",
  image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/apple-iphones-header.jpg",
  icon: Store,
  bgcolor: "#f7f7f7 ",
  content: "Vier Black Friday bij Apple en ontvang 15% korting op alles!",
  breadcrumbProps: {
    links: [{ title: "Home", url: "/" }, { title: "Alle winkels", url: "/stores-overview" }],
    backButton: { title: "Terug", url: "/#" },
    variant: "dark"
  },
  url: "./",
  id: "1",
  name: "HeaderInfo"
};
