import { createTheme } from "@mui/material";
let theme = createTheme({
    breakpoints: {
        values: {
            xxs: 0,
            xs: 430,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
})
theme = createTheme(theme, {

    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    '&.MuiContainer-root': {
                        [theme.breakpoints.up("xl")]: {
                            maxWidth: '1440px',
                            // padding: 0
                        }
                    },
                },
            }
        }
    }
});
export default theme;