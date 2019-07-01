import * as React from "react";
import { ShadowCardComponent } from "@app/core/shadow-card";
import { Button, ButtonType } from "@app/core/button/button.component";
import IconDefault from "@assets/icons/link.svg";

import styles from "./playground-martijn-component.module.scss";

const buttonSize = 35;

export interface IPlaygroundMartijnComponentProps {}

const topCssPixelString = "24px";
const sideCssPixelString = "16px";

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
      variant={buttonVariant}
      onClick={() => alert(`clicked button 2: ${buttonVariant}`)}
      fullWidth
    />
    <br />
    <Button
      title="test"
      iconPosition="left"
      icon={IconDefault}
      variant={buttonVariant}
      onClick={() => alert(`clicked button 3: ${buttonVariant}`)}
    />
    <br />
    <Button
      iconPosition="right"
      icon={IconDefault}
      variant={buttonVariant}
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
    <Button
      icon={IconDefault}
      variant={buttonVariant}
      onClick={() => alert(`clicked button 1: ${buttonVariant}`)}
    />
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
    <Button
      title="test"
      variant={buttonVariant}
      onClick={() => alert(`clicked button 1: ${buttonVariant}`)}
    />
    <br />
  </div>
);

const PlaygroundMartijnComponent = (
  props: IPlaygroundMartijnComponentProps
) => (
  <div className={styles["playground-martijn"]}>
    <h1>ShadowCard Component</h1>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: "40px",
        marginBottom: "40px"
      }}
    >
      <ShadowCardComponent shadowSize="small">
        <div>Content</div>
      </ShadowCardComponent>
      <ShadowCardComponent shadowSize="small">
        <div>
          fdsfd
          <div>
            f sdf ds
            <div>No padding and no border radius defined</div>
          </div>
        </div>
      </ShadowCardComponent>
      <ShadowCardComponent
        shadowSize="medium"
        borderRadius={[
          topCssPixelString,
          sideCssPixelString,
          topCssPixelString,
          sideCssPixelString
        ]}
        padding={[
          topCssPixelString,
          sideCssPixelString,
          topCssPixelString,
          sideCssPixelString
        ]}
      >
        <div>4 padding and 4 border radius parameters defined</div>
      </ShadowCardComponent>
      <ShadowCardComponent
        shadowSize="medium"
        borderRadius={[topCssPixelString]}
        padding={[topCssPixelString]}
      >
        <div>One padding and one border radius parameter defined</div>
      </ShadowCardComponent>
    </div>
    <h1>Button Component</h1>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
      }}
    >
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
);

export { PlaygroundMartijnComponent };
