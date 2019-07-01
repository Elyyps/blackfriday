import * as React from 'react';
import styles from './shop-card-component.module.scss';
import classNames from 'classnames';
import { TimeLeftBarComponent } from '../time-left-bar';
import { ImageComponent } from '@app/prep/modules-prep/core';
import { LinkComponent } from '../link';
import { getArrow } from '@app/constants/icons';
import { Button } from '../button';
import ShopIcon from '@assets/icons/link.svg';

export interface IShopCardComponentProps {
  buttonLink: string;
  buttonText?: any;
  content?: string;
  image?: any;
  range?: number;
  seeMoreLink: string;
  seeMoreText: string;
  subTitle?: any;
  title?: any;

  variant?: string;
}

const ShopCardComponent = (props: IShopCardComponentProps) => {
  const { title, seeMoreLink, seeMoreText, subTitle, content, image, range, buttonText, buttonLink, variant } = props;
  const statusBarColor = () => {
    const rangeNumber = range;
    const limit = 0.5;
    if (rangeNumber === 0 || typeof rangeNumber === 'undefined') {
      return 'none';
    }

    if (rangeNumber <= limit) {
      return 'orange';
    }

    return 'green';
  };

  return (
    <div className={styles['shop-card']}>
      <div className={styles['shop-card__body']}>
        <div className={styles['shop-card__image']}>
          <ImageComponent src={image} />
        </div>
        <div className={`${styles['shop-card__status-title']} ${styles[statusBarColor()]}`}>{title}</div>
        <TimeLeftBarComponent range={range} title={subTitle} />
        <div className={styles['shop-card__content']}>
          <div className={styles['shop-card__title']}>{title}</div>
          {content} {seeMoreText && <LinkComponent to={seeMoreLink}>{seeMoreText}</LinkComponent>}
        </div>
      </div>
      <div className={styles['shop-card__action']}>
        <Button title={buttonText} iconPosition='right' icon={ShopIcon} />
      </div>
    </div>
  );
};

export { ShopCardComponent };
