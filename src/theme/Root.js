import React from "react";
import { getInitColorSchemeScript } from "@mui/material/styles";

// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <>
      {getInitColorSchemeScript()}
      {children}
    </>
  );
}
