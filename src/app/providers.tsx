"use client";

import MainContextProvider from "@/context/main";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <MainContextProvider>{children}</MainContextProvider>
    </NextThemesProvider>
  );
}
