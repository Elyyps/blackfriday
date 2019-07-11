import * as React from "react";

import IconDefault from "@assets/icons/chevron-right.svg";
import { Button, ButtonVariant } from "@app/core/button/";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";

import styles from "./button-stories.module.scss";

storiesOf("Button", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Button Dashboard that shows all buttons in one view", () => (
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
    <h3 style={{ color: `${textColor}` }}>{buttonVariant}</h3>
    <Button title="test" icon={IconDefault} variant={buttonVariant} />
    <br />
    <Button
      title="test"
      iconPosition="right"
      icon={IconDefault}
      iconStyle="outline-fill"
      variant={buttonVariant}
      onClick={() => alert(`clicked button 2: ${buttonVariant}`)}
      fullWidth
    />
    <br />
    <Button
      title="test"
      iconPosition="left"
      iconStyle="outline"
      icon={IconDefault}
      variant={buttonVariant}
      onClick={() => alert(`clicked button 3: ${buttonVariant}`)}
    />
    <br />
    <Button icon={IconDefault} variant={buttonVariant} onClick={() => alert(`clicked button 1: ${buttonVariant}`)} />
    <br />
    <Button
      title="test"
      iconPosition="left"
      variant={buttonVariant}
      onClick={() => alert(`clicked button 6: ${buttonVariant}`)}
    />
    <br />
    <Button
      title="custom link (url)"
      target="_self"
      iconPosition="left"
      variant={buttonVariant}
      onClick={"https://youtube.com"}
    />
  </div>
);
