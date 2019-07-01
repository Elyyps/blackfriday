import * as React from 'react';
import styles from './featured-shops-component.module.scss';

// import './featured-shops.scss';
import { ShopCard } from '@app/api/core/shop-card';
import { SeeMoreCard } from '@app/api/core/see-more-card';
import { ShopCardComponent } from '@app/core/shop-card';
import { SeeMoreCardComponent } from '@app/core/see-more-card';

export interface IFeaturedShopsComponentProps {
  seeMoreCard: SeeMoreCard;
  shops: [ShopCard, ShopCard, ShopCard, ShopCard];
  title?: string;
}

const FeaturedShopsComponent = (props: IFeaturedShopsComponentProps) => {
  const { shops, title, seeMoreCard } = props;
  const [viewPortWidth, setViewPortWidth] = React.useState(0);
  const [finalShopsArray, setFinalShopsArray] = React.useState(null);
  
  return (
    <div className={styles['featured-shops']}>
      <h2 className={styles['featured-shop__title']}>{title}</h2>
      {/* <div className='uk-grid-posts uk-grid uk-grid-small uk-child-width-1-3@s uk-child-width-1-5@m'> */}
      <div className={styles['featured-shops__list']}>
        {shops.map((shop, key) => (
          <div className={styles[`featured-shop__item-${key}`]} key={key}>
            <ShopCardComponent
              key={key}
              buttonLink={shop.button.url}
              title={shop.title}
              range={shop.timeLeftBar.value}
              image={shop.picture}
              buttonText={shop.button.title}
              content={shop.content}
              seeMoreLink={shop.seeMore.url}
              seeMoreText={shop.seeMore.title}
            />
          </div>
        ))}
        <div>
          <SeeMoreCardComponent title={seeMoreCard.title} link={seeMoreCard.link} icon={seeMoreCard.icon} />
        </div>
      </div>
    </div>
  );
};

export { FeaturedShopsComponent };
