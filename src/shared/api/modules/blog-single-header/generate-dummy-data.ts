import { BlogSingleHeaderModule } from "./blog-single-header";
import Oasis from "@assets/oasis.jpg";

export const generateBlogSingleHeaderDummyData = (): BlogSingleHeaderModule => ({
  title: "Black Friday 2019 blog",
  image: Oasis,
  links: [{ title: "Home", url: "" }, { title: "Alle blogs", url: "" }],
  button: { title: "Alle blogs", url: "" },
  name: "BlogSingleHeaderModule",
  bottomMargin: "10px",
  id: "0",
  topMargin: "0px"
});
