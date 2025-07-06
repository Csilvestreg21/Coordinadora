import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { crearGuia } from '../tasks/CrearGuia';

//
// When: con valor como string
//
When('creo una guía con referencia {string} y valor {string}', async function (referencia: string, valor: string) {
  const payload: any = {};

  if (referencia !== '') payload.referenciaRecaudo = referencia;
  if (valor !== '') payload.valorRecaudar = isNaN(Number(valor)) ? valor : Number(valor);

  console.log('📦 Payload enviado (string):', JSON.stringify(payload, null, 2));

  const response = await crearGuia(this.request, payload);
  this.response = response;
});

//
// When: con valor como número (int)
//
When('creo una guía con referencia {string} y valor {int}', async function (referencia: string, valor: number) {
  const payload: any = {};

  if (referencia !== '') payload.referenciaRecaudo = referencia;
  payload.valorRecaudar = valor;

  console.log('📦 Payload enviado (int):', JSON.stringify(payload, null, 2));

  const response = await crearGuia(this.request, payload);
  this.response = response;
});

//
// When: payload sin referencia
//
When('envío un JSON sin el campo referenciaRecaudo', async function () {
  const dataSinReferencia = {
    valorRecaudar: 20000
  };

  console.log('📦 Payload sin referencia:', JSON.stringify(dataSinReferencia, null, 2));

  this.response = await crearGuia(this.request, dataSinReferencia);
});

//
// Then: código HTTP
//
Then('el sistema debe responder con código {int}', async function (codigoEsperado: number) {
  const statusCode = this.response.status();
  console.log('📥 Código recibido:', statusCode);
  expect(statusCode).toBe(codigoEsperado);
});

//
// Then: mensaje de error principal
//
Then('el mensaje de error debe ser {string}', async function (mensajeEsperado: string) {
  const body = await this.response.json();
  const responseBody = await this.response.json();
  const mensaje = body.message || '';
  console.log('📩 Mensaje recibido:', mensaje);
  expect(mensaje).toContain(mensajeEsperado);
  console.log('📦 Cuerpo de la respuesta:', responseBody);
});

