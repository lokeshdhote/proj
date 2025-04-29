import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    // optimizeDeps: {
    //   include: ["@videosdk.live/rtc-js-prebuilt/dist/index.js"],
    // },
    resolve: {
      alias: {
        '@': '/src',  // This ensures @ points to the /src directory
      },
    },
  
})
