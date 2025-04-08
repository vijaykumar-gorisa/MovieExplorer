import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {VitePWA} from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg',
        'robots.txt'],
      manifest:{
        name: 'MovieExplorer',
        short_name: "Movies",
        description: "Movie filtering and browsing App",
        theme_color: '#1e1e1e',
        background_color: '#1e1e1e', 
        display: 'standalone',
        start_url: '/',
        icons: [
          {
                      src: 'icon-192.png',
                      sizes: '192x192',
                      type: 'image/png'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',

          }


        ]
      
    }
})
  ]


  
})
