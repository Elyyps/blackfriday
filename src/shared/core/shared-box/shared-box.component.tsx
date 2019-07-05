import * as React from "react";
import "./shared-box.component.scss";
import { DropdownComponent } from "../dropdown/dropdown.component";

interface ISharedBoxProps {
  children: any;
  icon: string;
  position: "right" | "left";
}

const SharedBox = (props: ISharedBoxProps) => (
  <div className={`share-box share-box-${props.position}`}>
    <DropdownComponent icon={props.icon} buttonVariant="secondary" orientation="bottom-right">
      {props.children}
    </DropdownComponent>
  </div>
);

export { SharedBox };
