// adapters/cloudflare-pages/vite.config.ts
import { cloudflarePagesAdapter } from "file:///C:/xampp/htdocs/francois-vidit-56.com-worktop-qwikcity/worktop-qwikcity/node_modules/.pnpm/@builder.io+qwik-city@1.5.2_@types+node@20.12.7/node_modules/@builder.io/qwik-city/adapters/cloudflare-pages/vite/index.mjs";
import { extendConfig } from "file:///C:/xampp/htdocs/francois-vidit-56.com-worktop-qwikcity/worktop-qwikcity/node_modules/.pnpm/@builder.io+qwik-city@1.5.2_@types+node@20.12.7/node_modules/@builder.io/qwik-city/vite/index.mjs";

// vite.config.ts
import { defineConfig } from "file:///C:/xampp/htdocs/francois-vidit-56.com-worktop-qwikcity/worktop-qwikcity/node_modules/.pnpm/vite@5.2.8_@types+node@20.12.7/node_modules/vite/dist/node/index.js";
import { qwikVite } from "file:///C:/xampp/htdocs/francois-vidit-56.com-worktop-qwikcity/worktop-qwikcity/node_modules/.pnpm/@builder.io+qwik@1.5.2_@types+node@20.12.7_undici@6.7.0/node_modules/@builder.io/qwik/optimizer.mjs";
import { qwikCity } from "file:///C:/xampp/htdocs/francois-vidit-56.com-worktop-qwikcity/worktop-qwikcity/node_modules/.pnpm/@builder.io+qwik-city@1.5.2_@types+node@20.12.7/node_modules/@builder.io/qwik-city/vite/index.mjs";
import tsconfigPaths from "file:///C:/xampp/htdocs/francois-vidit-56.com-worktop-qwikcity/worktop-qwikcity/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_typescript@5.4.5_vite@5.2.8/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    server: {
      headers: {
        "Cache-Control": "public, max-age=0"
      }
    },
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600"
      }
    }
  };
});

// adapters/cloudflare-pages/vite.config.ts
var vite_config_default2 = extendConfig(vite_config_default, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["src/entry.cloudflare-pages.tsx", "@qwik-city-plan"]
      }
    },
    plugins: [cloudflarePagesAdapter()]
  };
});
export {
  vite_config_default2 as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYWRhcHRlcnMvY2xvdWRmbGFyZS1wYWdlcy92aXRlLmNvbmZpZy50cyIsICJ2aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxmcmFuY29pcy12aWRpdC01Ni5jb20td29ya3RvcC1xd2lrY2l0eVxcXFx3b3JrdG9wLXF3aWtjaXR5XFxcXGFkYXB0ZXJzXFxcXGNsb3VkZmxhcmUtcGFnZXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxmcmFuY29pcy12aWRpdC01Ni5jb20td29ya3RvcC1xd2lrY2l0eVxcXFx3b3JrdG9wLXF3aWtjaXR5XFxcXGFkYXB0ZXJzXFxcXGNsb3VkZmxhcmUtcGFnZXNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L3hhbXBwL2h0ZG9jcy9mcmFuY29pcy12aWRpdC01Ni5jb20td29ya3RvcC1xd2lrY2l0eS93b3JrdG9wLXF3aWtjaXR5L2FkYXB0ZXJzL2Nsb3VkZmxhcmUtcGFnZXMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBjbG91ZGZsYXJlUGFnZXNBZGFwdGVyIH0gZnJvbSBcIkBidWlsZGVyLmlvL3F3aWstY2l0eS9hZGFwdGVycy9jbG91ZGZsYXJlLXBhZ2VzL3ZpdGVcIjtcbmltcG9ydCB7IGV4dGVuZENvbmZpZyB9IGZyb20gXCJAYnVpbGRlci5pby9xd2lrLWNpdHkvdml0ZVwiO1xuaW1wb3J0IGJhc2VDb25maWcgZnJvbSBcIi4uLy4uL3ZpdGUuY29uZmlnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGV4dGVuZENvbmZpZyhiYXNlQ29uZmlnLCAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYnVpbGQ6IHtcbiAgICAgIHNzcjogdHJ1ZSxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgaW5wdXQ6IFtcInNyYy9lbnRyeS5jbG91ZGZsYXJlLXBhZ2VzLnRzeFwiLCBcIkBxd2lrLWNpdHktcGxhblwiXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbY2xvdWRmbGFyZVBhZ2VzQWRhcHRlcigpXSxcbiAgfTtcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcZnJhbmNvaXMtdmlkaXQtNTYuY29tLXdvcmt0b3AtcXdpa2NpdHlcXFxcd29ya3RvcC1xd2lrY2l0eVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXGZyYW5jb2lzLXZpZGl0LTU2LmNvbS13b3JrdG9wLXF3aWtjaXR5XFxcXHdvcmt0b3AtcXdpa2NpdHlcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L3hhbXBwL2h0ZG9jcy9mcmFuY29pcy12aWRpdC01Ni5jb20td29ya3RvcC1xd2lrY2l0eS93b3JrdG9wLXF3aWtjaXR5L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCB0eXBlIFVzZXJDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgcXdpa1ZpdGUgfSBmcm9tIFwiQGJ1aWxkZXIuaW8vcXdpay9vcHRpbWl6ZXJcIjtcbmltcG9ydCB7IHF3aWtDaXR5IH0gZnJvbSBcIkBidWlsZGVyLmlvL3F3aWstY2l0eS92aXRlXCI7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKCk6IFVzZXJDb25maWcgPT4ge1xuICByZXR1cm4ge1xuICAgIHBsdWdpbnM6IFtxd2lrQ2l0eSgpLCBxd2lrVml0ZSgpLCB0c2NvbmZpZ1BhdGhzKCldLFxuICAgIHNlcnZlcjoge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNhY2hlLUNvbnRyb2xcIjogXCJwdWJsaWMsIG1heC1hZ2U9MFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHByZXZpZXc6IHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDYWNoZS1Db250cm9sXCI6IFwicHVibGljLCBtYXgtYWdlPTYwMFwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1lLFNBQVMsOEJBQThCO0FBQzFnQixTQUFTLG9CQUFvQjs7O0FDRG9YLFNBQVMsb0JBQXFDO0FBQy9iLFNBQVMsZ0JBQWdCO0FBQ3pCLFNBQVMsZ0JBQWdCO0FBQ3pCLE9BQU8sbUJBQW1CO0FBRTFCLElBQU8sc0JBQVEsYUFBYSxNQUFrQjtBQUM1QyxTQUFPO0FBQUEsSUFDTCxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsR0FBRyxjQUFjLENBQUM7QUFBQSxJQUNqRCxRQUFRO0FBQUEsTUFDTixTQUFTO0FBQUEsUUFDUCxpQkFBaUI7QUFBQSxNQUNuQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNQLGlCQUFpQjtBQUFBLE1BQ25CO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOzs7QURmRCxJQUFPQSx1QkFBUSxhQUFhLHFCQUFZLE1BQU07QUFDNUMsU0FBTztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsZUFBZTtBQUFBLFFBQ2IsT0FBTyxDQUFDLGtDQUFrQyxpQkFBaUI7QUFBQSxNQUM3RDtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQztBQUFBLEVBQ3BDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsidml0ZV9jb25maWdfZGVmYXVsdCJdCn0K
