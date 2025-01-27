import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    extends: "vite.config.ts",
    test: {
      name: "browser",
      include: ["src/**/*.browser.spec.ts"],
      browser: {
        enabled: true,
        name: "chromium",
        provider: "playwright",
        providerOptions: {},
      },
    },
  },
  {
    extends: "vite.config.ts",
    test: {
      name: "happydom",
      include: ["src/**/*.happydom.spec.ts"],
      environment: "happy-dom",
    },
  },
]);
