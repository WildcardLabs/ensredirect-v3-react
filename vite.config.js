import { defineConfig, loadEnv } from "vite";
import pluginRewriteAll from "vite-plugin-rewrite-all"
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig(({ mode }) => {
  const env = loadEnv("mock", process.cwd(), "");
  const processEnvValues = {
    "process.env": Object.entries(env).reduce((prev, [key, val]) => {
      console.log(key, val);
      return {
        ...prev,
        [key]: val,
      };
    }, {}),
  };

  return {
    plugins:[react(), pluginRewriteAll()],
    define: processEnvValues,
  };
});