"use client"
import { Box, Container, CssBaseline, Grid, ThemeProvider, Typography } from "@mui/material";
import theme from "./theme/theme";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const containerRef = useRef();
  const contentRef = useRef();
  const [width, setWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  useEffect(() => {
    const calcWidth = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth)
      }
      if (contentRef.current) {
        setContentWidth(contentRef.current.offsetWidth)
      }
    }
    calcWidth()
    window.addEventListener("resize", calcWidth)
    return () => {
      window.removeEventListener("resize", calcWidth)
    }
  }, [])
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container ref={containerRef} sx={{ background: "#C3CF8B" }}>
          <Box ref={contentRef} sx={{ background: "gray", minHeight: "100vh", pt: 5 }}>
            <Typography sx={{ fontSize: { xl: 50, lg: 45, md: 40, sm: 30, xs: 20, xxs: 15 }, fontWeight: 600, textAlign: "center" }}>⬅️Container width:{width}px➡️</Typography>
            <Typography sx={{ fontSize: { xl: 50, lg: 45, md: 40, sm: 30, xs: 20, xxs: 15 }, fontWeight: 600, textAlign: "center" }}>⬅️Content width:{contentWidth}px➡️</Typography>
            <Box sx={{
              position: "relative",
              height: 100,
              fontSize: { xl: 50, lg: 45, md: 40, sm: 30, xs: 20, xxs: 15 },
              '&:before': {
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
                content: { xl: `"Screen size xl"`, lg: `"Screen size lg"`, md: `"Screen size md"`, sm: `"Screen size sm"`, xs: `"Screen size xs"`, xxs: `"Screen size xxs"` }
              }
            }}></Box>
            <Grid container spacing={3}>
              {
                [...new Array(12)].map((_, index) => (
                  <Grid item lg={3} md={4} sm={6} xxs={12} key={index}>
                    <Box sx={{ height: 400, background: "#ccc" }}></Box>
                  </Grid>
                ))
              }
            </Grid>
          </Box>
        </Container >
      </ThemeProvider >
    </>
  );
}
