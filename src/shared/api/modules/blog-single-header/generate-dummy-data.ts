import { BlogSingleHeaderModule } from "./blog-single-header";
import { generate2BlogPostsData } from "@app/api/core/blog-post/endpoint";

export const generateBlogOverviewHeaderDummyData = (): BlogSingleHeaderModule => ({
  title: "Black Friday 2019 blog",
  image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/blog/2.png",
  items: generate2BlogPostsData(),
  links: [{ title: "Home", url: "" }, { title: "Alle blogs", url: "" }],
  button: { title: "Alle blogs", url: "" },
  name: "BlogSingleHeaderModule",
  bottomMargin: "48px",
  id: "0",
  topMargin: "0"
});

export const generateBlogSingleHeaderDummyData = (): BlogSingleHeaderModule => ({
  title: "Vijf voorspellingen van Black Friday Nederland",
  image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/blog/2.png",
  links: [{ title: "Home", url: "" }, { title: "Alle blogs", url: "" }],
  button: { title: "Alle blogs", url: "" },
  name: "BlogSingleHeaderModule",
  bottomMargin: "48px",
  id: "0",
  topMargin: "0px"
});

export const generateBF2019HeaderDummyData = (): BlogSingleHeaderModule => ({
  title: "Black Friday 2019",
  image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/blog/3.png",
  links: [{ title: "Home", url: "" }],
  button: { title: "Alle blogs", url: "" },
  name: "BlogSingleHeaderModule",
  bottomMargin: "48px",
  id: "0",
  topMargin: "0px"
});
