import * as React from "react";
import { Button } from "@app/core/button/button.component";
import IconDefault from "@assets/icons/link.svg";

// import styles from "./playground-martijn-component.module.scss";

export interface IPlaygroundMartijnComponentProps {}

const renderButtonVariations = (
  buttonVariant = "primary-default",
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
);

export { PlaygroundMartijnComponent };
