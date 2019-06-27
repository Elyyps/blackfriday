import * as React from 'react';
import styles from './shop-card-component.module.scss';
import classNames from 'classnames';
import { TimeLeftBarComponent } from '../time-left-bar';
import { ImageComponent } from '@app/prep/modules-prep/core';
import { LinkComponent } from '../link';
import { getArrow } from '@app/constants/icons';
import { Button } from '../button';
import ShopIcon from "@assets/icons/link.svg"

export interface IShopCardComponentProps {
  button_text?: any;
  content?: string;
  image?: any;
  range?: any;
  seeMoreLink?: string,
  seeMoreText?: string,
  sub_title?: any;
  title?: any;
  url: string;

  variant?: string;
}

const ShopCardComponent = (props: IShopCardComponentProps) => {
  const { title, seeMoreLink, seeMoreText, sub_title, content, image, range, button_text, url, variant } = props;

  return (
    <div className={styles['shop-card']}>
      <div className={styles['shop-card__body']}>
        <div className={styles['shop-card__image']}>
          <ImageComponent src={image} />
        </div>
        <TimeLeftBarComponent range={range} title={sub_title} />
        <div className={styles['shop-card__content']}>
          <div className={styles['shop-card__title']}>{title}</div>
          {content}
          {seeMoreText && <LinkComponent to={seeMoreLink}>{seeMoreText}</LinkComponent>}
        </div>
      </div>
      <div className={styles['shop-card__action']}>
        <Button title={button_text} iconPosition='right' icon={ShopIcon} />
      </div>
    </div>
  );
};

export { ShopCardComponent };
