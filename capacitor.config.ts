import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.499ca3bb9b984625b6c9233972d8d30a',
  appName: 'edu-web1',
  webDir: 'dist',
  server: {
    url: 'https://499ca3bb-9b98-4625-b6c9-233972d8d30a.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;