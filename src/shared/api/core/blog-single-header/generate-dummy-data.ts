import { BlogSingleHeader } from "./blog-single-header";
import Oasis from "@assets/oasis.jpg";

export const generateBlogSingleHeaderDummyData = (): BlogSingleHeader => ({
  title: "Black Friday 2019 blog",
  image: Oasis,
  links: [{ title: "Home", url: "" }, { title: "Alle blogs", url: "" }],
  button: { title: "", url: "" }
});
