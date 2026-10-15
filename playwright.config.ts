import { defineConfig, devices } from '@playwright/test';

import { ADMIN_ID, ADMIN_PASSWORD, API_URL, APP_ORIGIN, APP_PORT } from './e2e/support/constants';

export default defineConfig({
    testDir: './e2e',
    globalSetup: './e2e/support/globalSetup.ts',
    fullyParallel: true,
    forbidOnly: Boolean(process.env.CI),
    retries: process.env.CI ? 2 : 0,
    reporter: process.env.CI ? 'github' : 'list',
    use: {
        baseURL: APP_ORIGIN,
        locale: 'ko-KR',
        timezoneId: 'Asia/Seoul',
        trace: 'retain-on-failure'
    },
    projects: [
        {
            name: 'desktop',
            testIgnore: /\.mobile\.spec\.ts/,
            use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } }
        },
        {
            name: 'mobile',
            testMatch: /\.mobile\.spec\.ts/,
            use: { ...devices['Pixel 5'] }
        }
    ],
    webServer: {
        command: `npx vite --host 127.0.0.1 --port ${APP_PORT} --strictPort`,
        url: APP_ORIGIN,
        reuseExistingServer: false,
        timeout: 120000,
        env: {
            VITE_API_URL: API_URL,
            VITE_ADMIN_ID: ADMIN_ID,
            VITE_ADMIN_PASSWORD: ADMIN_PASSWORD
        }
    }
});
