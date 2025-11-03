"use client";

import { FluentProvider } from "@fluentui/react-components";
import { monochromeTheme } from "./monochromeTheme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <FluentProvider theme={monochromeTheme}>{children}</FluentProvider>;
}

