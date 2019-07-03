import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
// import { withProvider } from "@app/modules/core/storybook-provider";
import { BreadcrumbComponent, IBreadcrumbComponentProps } from "./breadcrumb.component";

const breadcrumbItems: IBreadcrumbComponentProps = {
  links: [{ title: "Home", url: "#/" }, { title: "Blogs", url: "#/" }],
  backButton: { text: "Alle blogs", url: "/#" }
};

const styles = {
  display: "flex",
  alignItems: "center",
  background: "black",
  padding: "100px"
};

storiesOf("Breadcrumb", module)
  .addDecorator(withA11y)
  // .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <div style={styles}>
      <BreadcrumbComponent links={breadcrumbItems.links} backButton={breadcrumbItems.backButton} />
    </div>
  ));
