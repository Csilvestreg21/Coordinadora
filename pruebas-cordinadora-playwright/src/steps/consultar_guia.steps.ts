import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { consultarGuia } from '../tasks/ConsultarGuia';

// Escenario 1: Sin código
When('intento consultar una guía sin código', async function () {
  const response = await this.request.get(`https://apiv2-test.coordinadora.com/guias/cm-guias-consultas-ms/guia/`);
  this.response = response;
});

When('consulto una guía con código {string}', async function (codigo: string) {
  const response = await consultarGuia(this.request, codigo);
  this.response = response;
});

Then('el sistema debe responder con un código {int}', async function (statusCode: number) {
  const actualStatus = this.response?.status();
  console.log('Status recibido:', actualStatus);
  expect(actualStatus).toBe(statusCode);
});

Then('el mensaje de error debe ser {string} por no enviar el codigo remision', async function (mensajeEsperado: string) {
  const body = await this.response?.json();
  console.log('Mensaje recibido:', body?.cause);
  expect(body?.cause).toContain(mensajeEsperado); // usar 'cause', no 'message'
});

// Escenario 2: Código "0"
Then('la información de la guía debe estar vacía', async function () {
  const body = await this.response?.json();
  console.log('Cuerpo recibido:', body);
  expect(body?.data?.datosRetorno).toBeNull();
  expect(body?.data?.detalle).toEqual([]);
});

// Escenario 3: Código válido
Then('el sistema debe mostrar el detalle correcto de la guía', async function () {
  const body = await this.response?.json();
  console.log('Respuesta completa:', body);
  expect(body?.data).toHaveProperty('codigoRemision');
  expect(body?.data).toHaveProperty('referenciaGuia');
  expect(Array.isArray(body?.data?.detalle)).toBe(true);
});
