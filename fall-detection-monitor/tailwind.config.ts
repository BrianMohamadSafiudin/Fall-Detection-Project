import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{html,js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{html,js,ts,jsx,tsx,mdx}',
    "./src/app/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fafafa",
          "200": "#8d8d8d",
          "300": "rgba(0, 0, 0, 0.05)",
          "400": "rgba(255, 255, 255, 0)",
        },
        white: "#fff",
        main: "#371d88",
        "grey-2": "#646464",
        "font-dis": "#90a7ae",
        black: "#000",
        silver: "#c4c4c4",
        darkgray: {
          "100": "#a9a9a9",
          "200": "#979797",
        },
        gainsboro: {
          "100": "#d6dadd",
          "200": "rgba(231, 231, 231, 0.25)",
        },
        "font-grey": "#5d5d5d",
        main1: "#577883",
        whitesmoke: {
          "100": "#f0f3f5",
          "200": "#ebebeb",
        },
        skyblue: "#4db6d7",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        roboto: "Roboto",
      },
      borderRadius: {
        "6xs": "7px",
        "31xl": "50px",
        "21xl": "40px",
        "8xs": "5px",
        "3xs": "10px",
        xl: "20px",
      },
    },
    fontSize: {
      lg: "18px",
      sm: "14px",
      "5xl": "24px",
      base: "16px",
      xs: "12px",
      "13xl": "32px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

export default config;
