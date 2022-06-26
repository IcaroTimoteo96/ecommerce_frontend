import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});