import { PageModel } from "@app/api/pagebuilder/page.model";

interface IAction {
  type?: string;
}

export interface IPages extends IAction {
  pages: PageModel[];
}

export interface IPage extends IAction {
  page: PageModel;
}
