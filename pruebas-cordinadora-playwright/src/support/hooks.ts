import { Before, After } from '@cucumber/cucumber';
import { request } from '@playwright/test';

Before(async function () {
  this.request = await request.newContext({
    baseURL: 'https://apiv2-test.coordinadora.com/guias', // ✅
    extraHTTPHeaders: {
      'Content-Type': 'application/json'
    }
  });
});

After(async function () {
  await this.request.dispose();
});
