import React from "react";
import ColorModeToggle from "@theme-original/ColorModeToggle";
import { useColorScheme } from "@mui/material/styles";

export default function ColorModeToggleWrapper(props) {
  // MUI color mode setting
  const { setMode } = useColorScheme();

  // "value" holds the color theme. Either "light" or "dark"
  const { value } = props;

  // change mode based on "value" prop
  // "dark" or "light" are also used for MUI
  setMode(value);

  return (
    <>
      <ColorModeToggle {...props} />
    </>
  );
}
