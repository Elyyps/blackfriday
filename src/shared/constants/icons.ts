const SEARCH_ICON: string = require("@assets/navBar/search.svg");
const CLOSE_ICON: string = require("@assets/navBar/close.svg");
const IMAGE_FEATURED: string = require("@assets/images/image-featured.jpg");
const CHEVRON_RIGHT: string = require("@assets/images/chevron-right.svg");
const CHEVRON_LEFT: string = require("@assets/images/chevron-left.svg");
const getArrow = (propsPrev?: boolean): string =>
  require(`${"@assets/images/chevron-"}${propsPrev ? "left" : "right"}.svg`);

export { SEARCH_ICON, CLOSE_ICON, IMAGE_FEATURED, getArrow, CHEVRON_RIGHT, CHEVRON_LEFT };
