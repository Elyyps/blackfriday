import * as React from "react";
import "./shared-box.component.scss";
import { DropdownComponent } from "../dropdown/dropdown.component";

interface ISharedBoxProps {
  title: string;
}

const SharedBox = (props: ISharedBoxProps) => (
  <div className="shared-box">
    {props.title && (
      <DropdownComponent title="Status" buttonVariant="secondary" orientation="bottom-left">
        <div>ciao</div>
      </DropdownComponent>
    )}
  </div>
);

export { SharedBox };
