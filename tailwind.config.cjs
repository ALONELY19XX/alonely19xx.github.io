/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
   theme: {
      extend: {
         colors: {
            'dark-gray': '#0c0d11',
            'light-gray': '#454864',
            'light-primary': '#f6f5f5',
         },
      },
   },
   plugins: [],
}
