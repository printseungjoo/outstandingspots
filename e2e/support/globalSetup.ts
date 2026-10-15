import { chromium } from '@playwright/test';

import { APP_ORIGIN } from './constants';

export default async function globalSetup() {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.route('**/*', (route) => {
        const url = new URL(route.request().url());
        return url.origin === APP_ORIGIN ? route.continue() : route.abort();
    });
    await page.goto(APP_ORIGIN);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1500);
    await page.goto(APP_ORIGIN);
    await page.waitForLoadState('networkidle');
    await browser.close();
}
