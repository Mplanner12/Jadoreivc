"use client";

import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material";

const mainColor = "#fb8c00";

const theme = createTheme({
  palette: {
    primary: {
      main: mainColor,
    },
  },
});

export default function PaginationButtons() {
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2}>
        <Pagination color="primary" count={10} showFirstButton showLastButton />
        {/* <Pagination count={10} hidePrevButton hideNextButton /> */}
      </Stack>
    </ThemeProvider>
  );
}
