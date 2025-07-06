import { APIRequestContext, expect } from '@playwright/test';

export async function validarErrores(apiContext: APIRequestContext, body: any, statusEsperado: number) {
    const response = await apiContext.post('https://apiv2-test.coordinadora.com/guias/cm-guias-ms/guia', {
      data: body
    });
    expect(response.status()).toBe(statusEsperado);
  }
  