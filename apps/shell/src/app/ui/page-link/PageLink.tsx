import { FC } from "react";
import { NavLink as RouteLink } from "react-router-dom";
import { NavLink, rem } from "@mantine/core";

import { Home } from "@/pages/home";
import { ShellPage, ShellPageName } from "@/shared/models/config";
import { House } from "lucide-react";
interface Props {
  page: ShellPage;
}

export const PageLink: FC<Props> = ({ page }: Props) => {
  if (!page.enabled) return null;

  if (page.name === ShellPageName.Home) {
    return (
      <RouteLink className="shell-route-link" to={Home.route}>
        <NavLink
          p={10}
          component="div"
          className="shell-nav-link"
          label={page.label}
          leftSection={<House />}
        />
      </RouteLink>
    );
  }

  return null;
};
