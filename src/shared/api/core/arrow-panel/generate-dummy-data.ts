import { IArrowPanelProps } from "@app/core/arrow-panel";
import party from "@assets/icons/party.svg";
import iears from "@assets/dummy-images/product-thumbnails/iears.png";
import imac from "@assets/dummy-images/product-thumbnails/imac.png";
import iphone from "@assets/dummy-images/product-thumbnails/iphone.png";
import loader from "@assets/dummy-images/product-thumbnails/loader.png";
import macbook from "@assets/dummy-images/product-thumbnails/macbook.png";
import mouse from "@assets/dummy-images/product-thumbnails/mouse.png";

export const generateArrowPanelData = (): IArrowPanelProps[] => {
  const data: IArrowPanelProps[] = [
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
    },
    {
      icon: party,
      link: { url: "/", title: "Categorie met icoon" }
    }
  ];

  return data;
};
