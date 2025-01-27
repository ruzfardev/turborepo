import { useUnit } from "effector-react";
import {
  ActionIcon,
  AppShell,
  Group,
  ScrollArea,
  useMantineColorScheme,
  NavLink,
  Flex,
} from "@mantine/core";
import { $shellPages } from "@/shared/state/config";
import {
  Cloud,
  Home,
  LucideIceCreamCone,
  MessageCircle,
  MoonIcon,
  Sun,
} from "lucide-react";
import { Outlet, NavLink as RouteLink, useLocation } from "react-router-dom";
import { navigated } from "@shared/state/router";
import "./styles.css";
import { useHover } from "@mantine/hooks";
const getIcon = (icon: string) => {
  switch (icon) {
    case "home":
      return <Home size={20} />;
    case "chat":
      return <MessageCircle size={20} />;
    case "weather":
      return <Cloud size={20} />;
    default:
      return <LucideIceCreamCone size={20} />;
  }
};

export const Layout = () => {
  const params = useLocation();
  const { hovered, ref } = useHover();
  const shellPages = useUnit($shellPages);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });
  const [navigate] = useUnit([navigated]);
  const handleAppRouting = (route: string) => {
    navigate(`/${route}`);
  };
  return (
    <AppShell
      header={{ height: 50 }}
      withBorder
      navbar={{
        width: 250,
        breakpoint: "sm",
      }}
      styles={{
        navbar: {
          transition: "width 300ms ease-in-out",
          whiteSpace: "nowrap",
        },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <LucideIceCreamCone size={30} />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar ref={ref} p={"xs"}>
        <AppShell.Section component={ScrollArea} grow>
          <Flex gap={6} direction="column">
            {shellPages.common.map((_, index) => (
              <RouteLink className="shell-route-link" key={index} to={_.route}>
                <NavLink
                  className="shell-nav-link"
                  component="div"
                  leftSection={getIcon(_.name)}
                  label={_.label}
                  active={`/${_.route}` === params.pathname}
                />
              </RouteLink>
            ))}
            {shellPages.apps.map((_, index) => (
              <RouteLink className="shell-route-link" key={index} to={_.route}>
                <NavLink
                  className="shell-nav-link"
                  component="div"
                  leftSection={getIcon(_.name)}
                  label={_.label}
                  active={`/${_.route}` === params.pathname}
                />
              </RouteLink>
            ))}
          </Flex>
        </AppShell.Section>
        {/* <AppShell.Section>
          {colorScheme === "dark" ? (
            <ActionIcon
              onClick={toggleColorScheme}
              w={35}
              h={35}
              variant="subtle"
            >
              <Sun />
            </ActionIcon>
          ) : (
            <ActionIcon
              onClick={toggleColorScheme}
              w={35}
              h={35}
              variant="subtle"
            >
              <MoonIcon />
            </ActionIcon>
          )}
        </AppShell.Section> */}
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
