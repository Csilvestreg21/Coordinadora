import { APIRequestContext } from '@playwright/test';

export async function consultarGuia(request: APIRequestContext, codigo: string) {
  const url = `https://apiv2-test.coordinadora.com/guias/cm-guias-consultas-ms/guia/${codigo}`;
  console.log('URL consultada:', url); // debug opcional
  return await request.get(url);
}
