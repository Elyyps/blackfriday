import * as React from 'react';
import styles from './shop-card-component.module.scss';
import classNames from 'classnames';
import { TimeLeftBarComponent } from '../time-left-bar';
import { ImageComponent } from '@app/prep/modules-prep/core';
import { LinkComponent } from '../link';
import { getArrow } from '@app/constants/icons';

export interface IShopCardComponentProps {
  button_link?: any;
  button_text?: any;
  content?: any;
  image?: any;
  range?: any;
  sub_title?: any;
  title?: any;
  variant?: string;
}

const ShopCardComponent = (props: IShopCardComponentProps) => {
  const { title, sub_title, content, image, range, button_text, button_link, variant } = props;

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
        </div>
      </div>
      <div className={styles['shop-card__action']}>
        <LinkComponent to={button_link} variant='tertiary' icon={getArrow(false)}>
          {button_text}
        </LinkComponent>
      </div>
    </div>
  );
};

export { ShopCardComponent };
