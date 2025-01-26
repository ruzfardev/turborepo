export interface AppConfig {
  shell: {
    pages: ShellPages;
  };
}

export interface ShellPages {
  common: ShellPage[];
  apps: ShellPage[];
}

export interface ShellPage {
  name: ShellPageName;
  label: string;
  enabled: boolean;
}

export enum ShellPageName {
  Home = "home",
}
