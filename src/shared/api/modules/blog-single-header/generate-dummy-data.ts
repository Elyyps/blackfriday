import { BlogSingleHeaderModule } from "./blog-single-header";
import Oasis from "@assets/oasis.jpg";

export const generateBlogSingleHeaderDummyData = (): BlogSingleHeaderModule => ({
  title: "Black Friday 2019 blog",
  image: Oasis,
  links: [{ title: "Home", url: "" }, { title: "Alle blogs", url: "" }],
  button: { title: "", url: "" },
  name: "BlogSingleHeaderModule",
  bottomMargin: "0px",
  id: "0",
  topMargin: ""
});
