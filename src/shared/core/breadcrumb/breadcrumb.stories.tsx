import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { BreadcrumbComponent } from "./breadcrumb.component";

// Dummy data
import { breadcrumbItems } from "@app/api/core/breadcrumb";

const styles = {
  display: "flex",
  alignItems: "center",
  background: "black",
  padding: "100px"
};

storiesOf("Breadcrumb", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <div style={styles}>
      <BreadcrumbComponent links={breadcrumbItems.links} backButton={breadcrumbItems.backButton} />
    </div>
  ));
