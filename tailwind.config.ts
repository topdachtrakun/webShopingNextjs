import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  //       'gradient-conic':
  //         'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  //     },
  //   },
  // },
  plugins: [require("daisyui")],
  daisyui:{
    themes: [
      {
        test1: {
          "primary": "#9c64db",
          "secondary": "#d7e253",
          "accent": "#b19be8",
          "neutral": "#2a1c31",
          "base-100": "#33414d",
          "info": "#3c67e7",
          "success": "#249e8c",
          "warning": "#b67711",
          "error": "#dd2254",
        },
        test2: {
          "primary": "#502fe2",
          "secondary": "#070bef",
          "accent": "#b3c0ef",
          "neutral": "#231c27",
          "base-100": "#f3f1f4",
          "info": "#6caae4",
          "success": "#0d5933",
          "warning": "#e2a808",
          "error": "#fb5059",
        },
      }
    ]
  },
}
export default config
