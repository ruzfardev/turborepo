import { useUnit } from "effector-react";

import {
  ActionIcon,
  AppShell,
  Group,
  ScrollArea,
  useMantineColorScheme,
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
import { Outlet } from "react-router-dom";

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
  const shellPages = useUnit($shellPages);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });
  return (
    <AppShell
      header={{ height: 50 }}
      withBorder
      navbar={{
        width: 65,
        breakpoint: "sm",
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <LucideIceCreamCone size={30} />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="sm">
        <AppShell.Section component={ScrollArea} grow>
          {shellPages.common.map((_, index) => (
            <ActionIcon w={40} h={40} mb={10} key={index} variant="subtle">
              {getIcon(_.name)}
            </ActionIcon>
          ))}
          {shellPages.apps.map((_, index) => (
            <ActionIcon w={40} h={40} mb={10} key={index} variant="subtle">
              {getIcon(_.name)}
            </ActionIcon>
          ))}
        </AppShell.Section>
        <AppShell.Section>
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
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
