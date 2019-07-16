import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { BannerComponent } from "./banner.component";

// Dummy data
import { bannerProps } from "@app/api/core/banner";

storiesOf("Banner", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <BannerComponent
      buttonLink={bannerProps.buttonLink}
      buttonTitle={bannerProps.buttonTitle}
      image={bannerProps.image}
      label={bannerProps.label}
      logo={bannerProps.logo}
      text={bannerProps.text}
      title={bannerProps.title}
    />
  ))
  .add("Basic implementation without image", () => (
    <BannerComponent
      buttonLink={bannerProps.buttonLink}
      buttonTitle={bannerProps.buttonTitle}
      label={bannerProps.label}
      logo={bannerProps.logo}
      text={bannerProps.text}
      title={bannerProps.title}
    />
  ));
