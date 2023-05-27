import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "promptopia",
  webDir: "out",
  server: {
    url: "0.0.0.0", // Run your next.js server and use url here for api routes
  },
};

export default config;
