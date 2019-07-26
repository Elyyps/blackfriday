import { FeaturedCategoriesModule } from "./featured-categories.module";

import iears from "@assets/dummy-images/product-thumbnails/iears.png";
import imac from "@assets/dummy-images/product-thumbnails/imac.png";
import iphone from "@assets/dummy-images/product-thumbnails/iphone.png";
import loader from "@assets/dummy-images/product-thumbnails/loader.png";
import macbook from "@assets/dummy-images/product-thumbnails/macbook.png";
import mouse from "@assets/dummy-images/product-thumbnails/mouse.png";

export const generateDummyFeaturedCategoriesData = (): FeaturedCategoriesModule => ({
  categoryItems: [
    {
      image: iears,
      link: { url: "/", title: "Apple Airpods" }
    },
    {
      image: imac,
      link: { url: "/", title: "Apple iPhones" }
    },
    {
      image: iphone,
      link: { url: "/", title: "Apple MacBooks" }
    },
    {
      image: loader,
      link: { url: "/", title: "Apple iMacs" }
    },
    {
      image: macbook,
      link: { url: "/", title: "Categorie item met een lange naam" }
    },
    {
      image: mouse,
      link: { url: "/", title: "Categorie item met een nog langere naam" }
    },
    {
      link: { url: "/", title: "Categorie item zonder afbeelding" }
    }
  ],
  bottomPadding: { desktopPadding: 72, mobilePadding: 48 },
  topPadding: { desktopPadding: 72, mobilePadding: 48 },
  bottomMargin: "0px",
  topMargin: "0px",
  id: "1",
  background: { backgroundColour: "#f7f7f7" },
  name: "FeaturedCategoriesModule"
});
