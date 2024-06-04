
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    // Workaround: GitHub Storybook issue 25154
    tsconfigPaths(),
  ],
});
