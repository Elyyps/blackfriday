import { Link } from "@app/api/core/link";

export interface INavBarModule {
  closeText: string;
  label: string;
  links: Link[];
  logo: string;
}
