import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { ClickableComponent, ButtonVariant } from "@app/core/clickable";

import IconDefault from "@assets/icons/chevron-right.svg";
import styles from "./clickable-stories.module.scss";

storiesOf("Clickable", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Clickable Dashboard that shows all buttons in one view", () => (
    <div className={styles["wrapper"]}>
      <h1>Button Component</h1>
      <div className={styles["part-section"]}>
        {/* Primary */}
        {renderButtonVariations("primary-default")}
        {/* Primary Brand */}
        {renderButtonVariations("primary-brand")}
        {/* Primary Inverted */}
        {renderButtonVariations("primary-inverted")}
        {/* Secondary */}
        {renderButtonVariations("secondary")}
        {/* Secondary inverted */}
        {renderButtonVariations("secondary-inverted")}
        {/* Tertiary */}
        {renderButtonVariations("tertiary")}
        {/* Tertiary Inverted*/}
        {renderButtonVariations("tertiary-inverted", "#1c1c1c", "#fff")}
        {/* Link Primary*/}
        {renderButtonVariations("link-primary")}
        {/* Link Secondary*/}
        {renderButtonVariations("link-secondary")}
        {/* Link Tertiary*/}
        {renderButtonVariations("link-tertiary")}
      </div>
    </div>
  ));

const renderButtonVariations = (
  buttonVariant: ButtonVariant = "primary-default",
  bgColor = "#fff",
  textColor = "#1c1c1c"
) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "24px",
      backgroundColor: `${bgColor}`
    }}
  >
    <h2 style={{ color: `${textColor}` }}>{buttonVariant}</h2>
    <ClickableComponent title="test" iconRight={IconDefault} iconStyle="outline" variant={buttonVariant} />
    <br />
    <ClickableComponent
      title="test"
      iconRight={IconDefault}
      iconStyle="outline"
      variant={buttonVariant}
      href="https://www.youtube.com"
      fullWidth
      animated
    />
    <br />
    <ClickableComponent
      title="test"
      iconStyle="outline"
      iconLeft={IconDefault}
      variant={buttonVariant}
      href="/#allhailtomfrontendking"
    />
    <br />
    <ClickableComponent
      iconRight={IconDefault}
      variant={buttonVariant}
      iconStyle="outline"
      onClick={() => alert(`clicked button 1: ${buttonVariant}`)}
    />
    <br />
    <ClickableComponent
      title="test"
      variant={buttonVariant}
      onClick={() => alert(`clicked button 6: ${buttonVariant}`)}
    />
  </div>
);
