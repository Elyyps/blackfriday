import { IHeaderContentComponentProps } from "@app/core/header-content";
import { breadcrumbItems } from "@app/api/core/breadcrumb";

export const headerContent: IHeaderContentComponentProps = {
  breadcrumbProps: breadcrumbItems,
  subtitle: "Deelnemende winkels van 2019",
  text: "Bodytext voor extra informatie wanneer nodig",
  title: "Black Friday Winkels"
};
