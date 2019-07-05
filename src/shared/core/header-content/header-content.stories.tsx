import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { HeaderContentComponent } from "./header-content.component";
import { headerContent } from "@app/api/core/header-content";

storiesOf("HeaderContent", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <HeaderContentComponent
      title={headerContent.title}
      subtitle={headerContent.subtitle}
      text={headerContent.text}
      breadcrumbProps={headerContent.breadcrumbProps}
    />
  ));
