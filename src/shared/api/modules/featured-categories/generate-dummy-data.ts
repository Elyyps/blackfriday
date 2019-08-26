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
      link: { url: "/stores-single", title: "Apple Airpods" }
    },
    {
      image: imac,
      link: { url: "/stores-single", title: "Apple iPhones" }
    },
    {
      image: iphone,
      link: { url: "/stores-single", title: "Apple MacBooks" }
    },
    {
      image: loader,
      link: { url: "/stores-single", title: "Apple iMacs" }
    },
    {
      image: macbook,
      link: { url: "/stores-single", title: "Categorie item met een lange naam" }
    },
    {
      image: mouse,
      link: { url: "/stores-single", title: "Categorie item met een nog langere naam" }
    },
    {
      link: { url: "/stores-single", title: "Categorie item zonder afbeelding" }
    }
  ],
  bottomPadding: { desktopSpacing: 72, mobileSpacing: 48 },
  topPadding: { desktopSpacing: 72, mobileSpacing: 48 },
  background: { backgroundColour: "#f7f7f7" },
  id: "1",
  name: "FeaturedCategoriesModule"
});
