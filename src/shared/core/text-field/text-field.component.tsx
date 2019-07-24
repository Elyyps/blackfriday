/* tslint:disable */
import * as React from "react";
import style from "./text-field-component.module.scss";
import { getLabelWidth } from "@app/util";
interface ITextFieldProps {
  autoFocus?: boolean;
  errorMessage?: string | false;
  fullWidth?: boolean;
  helperText?: string;
  id?: string;
  maxCharacters?: number;
  onBlur?<T = string | any>(fieldOrEvent: T): T extends string ? ((e: any) => void) : void;
  onChange?(e: React.ChangeEvent<any>): void;
  placeholder: string;
  type?: "text" | "email" | "password";
  variant?: "primary" | "secondary";
  value?: any;
  isTextArea?: boolean;
  height?: number;
}

const TextFieldComponent = (props: ITextFieldProps) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [labelWidth, setLabelWidth] = React.useState(0);

  let hasLoaded: boolean = false;
  React.useEffect(() => {
    if (!hasLoaded) {
      hasLoaded = true;
      setLabelWidth(getLabelWidth(props.placeholder));
    }
  }, []);

  const styleNotchFocused = {
    width: labelWidth.toString().concat("px")
  };

  const onBlur = (e: any) => {
    setIsFocused(false);
    if (props.onBlur) {
      props.onBlur(e);
    }
  };

  return (
    <div
      style={{ width: props.fullWidth ? "100%" : "auto" }}
      className={`${style["form-field"]} ${isFocused && style["form-field__focused"]}
${props.variant === "secondary" && isFocused && !props.errorMessage && style["secondary"]}}
    ${props.errorMessage && style["error"]}
    ${props.value && props.value.length > 0 && style["not-empty"]} 
    ${isHovered && style["hovered"]}
    `}
    >
      <div className={style["form-field__control"]}>
        {!props.isTextArea ? (
          <input
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onChange={props.onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={onBlur}
            autoFocus={props.autoFocus}
            value={props.value}
            id={props.id}
            type={props.type}
            className={style["form-field__input"]}
          />
        ) : (
          <textarea
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onChange={props.onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={onBlur}
            autoFocus={props.autoFocus}
            value={props.value}
            id={props.id}
            className={style["form-field__input"]}
            style={{ resize: "vertical", height: props.height ? props.height.toString().concat("px") : "100px" }}
          />
        )}
        <div className={`${style["form-field__notch"]} ${style["form-field__notch__unfocused"]}`}>
          <div />
          <div style={styleNotchFocused} className={style["form-field__notch-float"]}>
            <label>{props.placeholder}</label>
          </div>
          <div />
        </div>
      </div>
      <div className={style["form-field__extra"]}>
        {props.maxCharacters && !props.errorMessage && !props.helperText && <div />}
        {!props.errorMessage && props.helperText && (
          <label className={style["form-field__extra__helper"]}>{props.helperText}</label>
        )}
        {props.errorMessage && <label className={style["form-field__extra__error"]}>{props.errorMessage}</label>}
        {props.maxCharacters && (
          <label className={style["form-field__extra__character-counter"]}>{`${props.value.length} / ${
            props.maxCharacters
          }`}</label>
        )}
      </div>
    </div>
  );
};

export { TextFieldComponent };
