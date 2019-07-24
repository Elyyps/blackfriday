/* tslint:disable */
import * as React from "react";

import { HomePageHeaderComponent } from "@app/modules/homepage-header";
import { getHeaderpageHeader } from "@app/api/modules/homepage-header/endpoints";
import { ModalComponent } from "@app/core/modal";
import { Button } from "@app/core";
import { Input, TextArea } from "@app/prep/modules-prep/core";
import { ModalData } from "@app/prep/pages-prep/winkel-single/dummy-data";

// import styles from "./playground-daniele-component.module.scss";

export interface IPlaygroundDanieleComponentProps {}

const PlaygroundDanieleComponent = (props: IPlaygroundDanieleComponentProps) => (
  <div>
    <HomePageHeaderComponent homePageModule={getHeaderpageHeader()} />
    <ModalComponent
      trigger={<Button title={"test"} />}
      variant={"big"}
      modalContent={
        <form action="/" className={"form"}>
          <div className="uk-grid" data-uk-margin>
            <div className="uk-width-1-2@s">
              <Input name={"text"} label={"Naam"} />
            </div>
            <div className="uk-width-1-2@s">
              <Input name={"text"} label={"E-mailadres"} />
            </div>
          </div>
          <div className="uk-margin-small-top">
            <TextArea name={"text"} label={"Bericht"} />
          </div>
          <div className="form-bottom uk-margin-small-top">
            <Button title={"Verzenden"} icon={ModalData.button_icon} />
          </div>
        </form>
      }
    />
  </div>
);

export { PlaygroundDanieleComponent };
