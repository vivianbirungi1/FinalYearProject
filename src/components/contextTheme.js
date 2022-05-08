// entire application needs to be re-rendered when dark mode is toggled.
// therefore, using context to have a global theme wrapped around the app.
// context is designed to share data that is global for a collection of react components.
import { createContext } from "react";

export const themes = {
  dark: "",
  light: "white-content",
};

export const ThemeContext = createContext({
    theme: themes.dark,
  changeTheme: () => {},
});