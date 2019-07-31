import { BlogBodyTextModule } from "./blog-bodytext";
import { generateSidebarData } from "../sidebar/generate-dummy-data";

export const generateDummyBlogBodyText = (): BlogBodyTextModule => ({
  bodyText: {
    html: "<h1>This is a title</h1><br/><p>This is a paragraph</p>",
    bottomPadding: { mobilePadding: 32, desktopPadding: 72 },
    topPadding: { mobilePadding: 32, desktopPadding: 72 },
    containerAlignment: "center",
    containerSize: "full",
    bottomMargin: "",
    topMargin: "",
    id: "1",
    name: "BlogBodyText"
  },
  dateTime: "2 minuten leestijd",
  sidebarItems: generateSidebarData(),
  id: "1",
  name: "BlogBodyTextModule",
  bottomMargin: "",
  topMargin: ""
});
