import * as React from "react";
import "./shared-box.component.scss";
import { Button } from "@app/prep/modules-prep/core";
import Share from "@assets/icons/share.svg";

interface ISharedBoxProps {
  title: string;
}

const SharedBox = (props: ISharedBoxProps) => (
  <div className="shared-box">
    {props.title && (
      <div>
        <Button title={props.title} type={"button"} variant={"dropdown"} icon={Share} position={"left"} />
        <div data-uk-dropdown="mode: click">Social Shared</div>
      </div>
    )}
  </div>
);

export { SharedBox };
