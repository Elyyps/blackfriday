import { PageModel } from "@app/api/pagebuilder/page.model";
import { dummyFeaturedShopsData } from "@app/api/modules/featured-shops/generate-dummy-data";

export const generatePageModel = (id: string, addWordPressModules: boolean): PageModel => ({
  metaData: {
    description: "",
    content: "",
    title: ""
  },
  id,
  route: "",
  wordPressPostModules: addWordPressModules ? [dummyFeaturedShopsData()] : []
});
