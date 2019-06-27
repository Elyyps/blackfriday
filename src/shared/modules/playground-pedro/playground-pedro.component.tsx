import * as React from "react";
import { LinkComponent } from "@app/core/link";
import { getArrow } from "@app/constants/icons";

import styles from "./playground-pedro-component.module.scss";
import { TimeLeftBarComponent } from "@app/core/time-left-bar";
import { ShopCardComponent } from "@app/core/shop-card";

export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = (props: IPlaygroundPedroComponentProps) => (
  <div className={styles['playground-pk']}>
    Adicione seu código aqui Pedro!
    <i>Wp tom</i>
    <br />
    <LinkComponent to='/'>Primary</LinkComponent>
    <LinkComponent icon={getArrow(false)} to='/'>
      Primary w Icon
    </LinkComponent>
    <LinkComponent variant='secondary' icon={getArrow(false)} to='/'>
      Secondary w Icon
    </LinkComponent>
    <LinkComponent animated variant='tertiary' icon={getArrow(false)} to='/'>
      Tertiary w Icon animated
    </LinkComponent>
    <TimeLeftBarComponent title='NU GELDIG' range={0.6} />
    <ShopCardComponent
      image='https://d2ddoduugvun08.cloudfront.net/items/2L2B2V3Q0p2W2C041W1h/Image%202019-06-27%20at%2010.42.50%20AM.png'
      title='title'
      button_text='See more'
      content='content'
      range='0.7'
      sub_title='subtitle'
    />
  </div>
);

export { PlaygroundPedroComponent };
