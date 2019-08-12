import { BlogSingleHeaderModule } from "./blog-single-header";

export const generateBlogOverviewHeaderDummyData = (): BlogSingleHeaderModule => ({
  title: "Black Friday 2019 blog",
  image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/blog/2.png",
  breadcrumbProps: {
    links: [{ title: "Home", url: "/" }, { title: "Alle blogs", url: "#" }],
    backButton: { title: "Terug", url: "/#" },
    variant: "light"
  },
  name: "BlogSingleHeaderModule",
  bottomMargin: { mobileSpacing: 24, desktopSpacing: 48 },
  id: "0"
});

export const generateBlogSingleHeaderDummyData = (): BlogSingleHeaderModule => ({
  title: "Vijf voorspellingen van Black Friday Nederland",
  image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/blog/2.png",
  breadcrumbProps: {
    links: [{ title: "Home", url: "/" }, { title: "Alle blogs", url: "#" }],
    backButton: { title: "Terug", url: "/#" },
    variant: "light"
  },
  name: "BlogSingleHeaderModule",
  bottomMargin: { mobileSpacing: 24, desktopSpacing: 48 },
  id: "0"
});

export const generateBF2019HeaderDummyData = (): BlogSingleHeaderModule => ({
  title: "Black Friday 2019",
  image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/blog/3.png",
  breadcrumbProps: {
    links: [{ title: "Home", url: "/" }, { title: "Lange titel", url: "#" }, { title: "Black Friday 2019", url: "#" }],
    backButton: { title: "Terug", url: "/#" },
    variant: "light"
  },
  name: "BlogSingleHeaderModule",
  bottomMargin: { mobileSpacing: 24, desktopSpacing: 48 },
  id: "0"
});
