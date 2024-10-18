import { type Config } from 'tailwindcss'
import aspectRatio from 'https://esm.sh/@tailwindcss/aspect-ratio@0.4.0'

export default {
  content: [
    '{routes,islands,components}/**/*.{ts,tsx,js,jsx}',
  ],
  plugins: [
    aspectRatio,
  ],
} satisfies Config
