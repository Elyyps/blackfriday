import { Controller, Get, Query } from "@nestjs/common";
import { ApiUseTags, ApiImplicitQuery } from "@nestjs/swagger";
import { getShopCards } from "./stores-overview.module";

// @ApiUseTags('shop-overview')
// @Controller('shop-overview')
// export class ShopOverviewController {
//   @ApiImplicitQuery({
//     name: 'status',
//     description: 'status',
//     required: true,
//     type: String
//   })
//   @ApiImplicitQuery({
//     name: 'category',
//     description: 'category',
//     required: true,
//     type: Array,
//     collectionFormat: 'multi'
//   })
//   @ApiImplicitQuery({
//     name: 'brands',
//     description: 'brands',
//     required: true,
//     type: Array,
//     collectionFormat: 'multi'
//   })
//   @ApiImplicitQuery({
//     name: 'sortBy',
//     description: 'sortBy',
//     required: true,
//     type: String
//   })
// @Get('/getCards')
// public getStoresOverview(@Query() query) {
//   const categories = getShopCards(
//     query.status,
//     query.category,
//     query.brands,
//     query.search
//   );

//   return categories;
//   }
// }
