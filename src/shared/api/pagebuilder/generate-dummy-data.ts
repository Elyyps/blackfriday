import { PageModel } from "./page.model";
import uuid from "uuid";
import { dummyFeaturedShopsData } from "../modules/featured-shops/generate-dummy-data";

export const pageList: PageModel[] = [
  {
    id: uuid(),
    route: "/",
    metaData: {
      title: "Homepage",
      content: "The landing page of the webpage",
      description: "The landing page of the webpage"
    },
    wordPressPostModules: [dummyFeaturedShopsData]
  } as PageModel
];
