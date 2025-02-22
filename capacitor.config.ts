import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
    "appId": "io.ionic.starter",
    "appName": "workout",
    "webDir": "www",
    plugins: {
        GoogleAuth: {
            scopes: ['profile', 'email'],
            serverClientId: '901508912310-ft7reo2hfg7p37me9stm135vgc3d88dg.apps.googleusercontent.com',
            forceCodeForRefreshToken: true,
        },
    },
};

export default config;