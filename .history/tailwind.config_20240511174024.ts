import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm': '375px',
        '3xl': '1600px'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bannerImg": "url('/Banner@2x.png')",
        "mbannerImg": "url('/images/m_banner.png')",
        "s2bg": "url('/images/MS_bg@2x.png')",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '100%': '100% 100%',
        '16': '4rem',
        '120': '30rem',
      },
      height:{
        '180': '58rem',
        '120': '30rem',
        'banner': '670px',
        'hpart2': '680px',
        'hpart3': '358px',
        'hpart4': '580px',
        'hpart5': '780px'
      },
      width:{
        '120': '30rem',
      },
      padding:{
        'mspace': '15px'
      },
      lineHeight:{
        "maxx": '120px'
      },
    },
  },
  plugins: [],
};
export default config;
