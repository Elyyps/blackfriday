import * as React from "react";
import { ShadowCardComponent } from "@app/core/shadow-card";
import { Button, ButtonType } from "@app/core/button/";
import IconDefault from "@assets/icons/sign.svg";
import { IconComponent } from "@app/core/icon";

import styles from "./playground-martijn-component.module.scss";
import { CtaSmallComponent } from "@app/modules/cta-small";

const buttonSize = 35;

export interface IPlaygroundMartijnComponentProps {}

const topCssPixelString = "24px";
const sideCssPixelString = "16px";

const buttonClick = () => (location.href = "#");
const renderButtonVariations = (
  buttonVariant: ButtonType = "primary-default",
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
    <Button
      iconPosition="right"
      icon={IconDefault}
      variant={buttonVariant}
      iconStyle="filled"
      onClick={() => alert(`clicked button 4: ${buttonVariant}`)}
      size={buttonSize}
    />
    <br />
    <Button
      iconPosition="left"
      icon={IconDefault}
      variant={buttonVariant}
      onClick={() => alert(`clicked button 5: ${buttonVariant}`)}
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
      title="test"
      iconPosition="right"
      variant={buttonVariant}
      onClick={() => alert(`clicked button 7: ${buttonVariant}`)}
    />
    <br />
    <Button title="test" variant={buttonVariant} onClick={() => alert(`clicked button 1: ${buttonVariant}`)} />
    <br />
  </div>
);

const PlaygroundMartijnComponent = (props: IPlaygroundMartijnComponentProps) => (
  <div className={styles["playground-wrapper"]}>
    <h1>ShadowCard Component</h1>
    <div className={styles["part-section"]}>
      <div className={styles["shadow-wrapper"]}>
        <ShadowCardComponent shadowSize="small">
          <div>Content</div>
        </ShadowCardComponent>
      </div>
      <div className={styles["shadow-wrapper"]}>
        <ShadowCardComponent shadowSize="small">
          <div>
            fdsfd
            <div>
              f sdf ds
              <div>No padding and no border radius defined</div>
            </div>
          </div>
        </ShadowCardComponent>
      </div>
      <div className={styles["shadow-wrapper"]}>
        <ShadowCardComponent
          shadowSize="medium"
          borderRadius={[topCssPixelString, sideCssPixelString, topCssPixelString, sideCssPixelString]}
          padding={[topCssPixelString, sideCssPixelString, topCssPixelString, sideCssPixelString]}
        >
          <div>4 padding and 4 border radius parameters defined</div>
        </ShadowCardComponent>
      </div>
      <div className={styles["shadow-wrapper"]}>
        <ShadowCardComponent shadowSize="medium" borderRadius={[topCssPixelString]} padding={[topCssPixelString]}>
          <div>One padding and one border radius parameter defined</div>
        </ShadowCardComponent>
      </div>
    </div>

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
    <div className={styles["part-section"]}>
      <div className={styles["icon-wrapper"]}>
        <h3>Outline</h3>
        <IconComponent icon={IconDefault} strokeColor="red" strokeWidth="2px" size="24px" />
      </div>

      <div className={styles["icon-wrapper"]}>
        <h3>Filled</h3>
        <IconComponent icon={IconDefault} fillColor="red" size="24px" />
      </div>

      <div className={styles["icon-wrapper"]}>
        <h3>Outline Filled</h3>
        <IconComponent icon={IconDefault} strokeColor="red" fillColor="red" size="24px" />
      </div>

      <div className={styles["icon-wrapper"]}>
        <h3>Colored (original)</h3>
        <IconComponent icon={IconDefault} size="24px" />
      </div>
    </div>
    <div className={styles["part-section"]}>
      <CtaSmallComponent
        buttonClick={buttonClick}
        buttonTitle="Naar deals"
        text="Niet helemaal wat je zoekt? Geeft niks want we hebben meer!"
        icon={IconDefault}
      />
      <CtaSmallComponent />
    </div>
  </div>
);

export { PlaygroundMartijnComponent };
