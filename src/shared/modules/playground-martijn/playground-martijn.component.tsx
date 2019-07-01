import * as React from "react";
import { Button, ButtonType } from "@app/core/button/button.component";
import IconDefault from "@assets/icons/party.svg";
import { IconComponent } from "@app/core/icon";

import style from "./playground-martijn-component.module.scss";

const buttonSize = 35;

export interface IPlaygroundMartijnComponentProps {}

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
  <div className={style["playground-wrapper"]}>
    <div className={style["part-section"]}>
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
    <div className={style["part-section"]}>
      <div className={style["icon-wrapper"]}>
        <h3>Outline</h3>
        <IconComponent
          icon={IconDefault}
          strokeColor="red"
          strokeWidth="2px"
          size="24px"
        />
      </div>

      <div className={style["icon-wrapper"]}>
        <h3>Filled</h3>
        <IconComponent icon={IconDefault} fillColor="red" size="24px" />
      </div>

      <div className={style["icon-wrapper"]}>
        <h3>Outline Filled</h3>
        <IconComponent
          icon={IconDefault}
          strokeColor="red"
          fillColor="red !important"
          size="24px"
        />
      </div>

      <div className={style["icon-wrapper"]}>
        <h3>Colored (original)</h3>
        <IconComponent icon={IconDefault} size="24px" />
      </div>
    </div>
  </div>
);

// fill: props.fillColor,
//   height: props.size,
//     stroke: props.strokeColor,
//       strokeWidth: props.strokeWidth,
//         width: props.size

export { PlaygroundMartijnComponent };
