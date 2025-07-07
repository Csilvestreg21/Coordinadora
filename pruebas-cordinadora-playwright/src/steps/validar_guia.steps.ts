// Pruebas negativas para crear guía:
// Se prueba con valores vacíos, inválidos o sin campos requeridos.
// El actor `Usuario` ejecuta cada intento y se valida la respuesta esperada.

import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { crearGuia } from '../tasks/CrearGuia';

//
// When: valor como string (puede fallar si no es número válido)
//
When('creo una guía con referencia {string} y valor {string}', async function (referencia: string, valor: string) {
  const payload: any = {};
  if (referencia !== '') payload.referenciaRecaudo = referencia;
  if (valor !== '') payload.valorRecaudar = isNaN(Number(valor)) ? valor : Number(valor);

  console.group('\nEnvío de payload con valor como string');
  console.table({
    Usuario: this.usuario?.nombre || 'No definido',
    Referencia: referencia || '(vacía)',
    Valor: valor || '(vacío)',
    InterpretadoComo: payload.valorRecaudar
  });
  console.groupEnd();
  const response = await crearGuia(this.request, payload);
  this.response = response;
});

//
// When: valor como número (válido)
//
When('creo una guía con referencia {string} y valor {int}', async function (referencia: string, valor: number) {
  const payload: any = {};
  if (referencia !== '') payload.referenciaRecaudo = referencia;
  payload.valorRecaudar = valor;
  console.group('\nEnvío de payload con valor como número');
  console.table({
    Usuario: this.usuario?.nombre || 'No definido',
    Referencia: referencia,
    Valor: valor
  });
  console.groupEnd();
  const response = await crearGuia(this.request, payload);
  this.response = response;
});

//
// When: falta el campo referenciaRecaudo
//
When('envío un JSON sin el campo referenciaRecaudo', async function () {
  const dataSinReferencia = {
    valorRecaudar: 20000
  };
  console.group('\nEnvío de payload sin campo referenciaRecaudo');
  console.table({
    Usuario: this.usuario?.nombre || 'No definido',
    referenciaRecaudo: 'NO ENVIADO',
    valorRecaudar: dataSinReferencia.valorRecaudar
  });
  console.groupEnd();
  this.response = await crearGuia(this.request, dataSinReferencia);
});

//
// Then: validar código de estado HTTP
//
Then('el sistema debe responder con código {int}', async function (codigoEsperado: number) {
  const statusCode = this.response.status();
  console.group('\nCódigo de estado recibido');
  console.table({
    Esperado: codigoEsperado,
    Recibido: statusCode
  });
  console.groupEnd();
  expect(statusCode).toBe(codigoEsperado);
});

//
// Then: validar mensaje de error devuelto por el sistema
//
Then('el mensaje de error debe ser {string}', async function (mensajeEsperado: string) {
  const body = await this.response.json();
  const mensaje = body.message || '';
  console.group('\nValidación de mensaje de error');
  console.table({
    Esperado: mensajeEsperado,
    Recibido: mensaje
  });
  console.groupEnd();
  console.log('Cuerpo completo de la respuesta:', JSON.stringify(body, null, 2));
  expect(mensaje).toContain(mensajeEsperado);
});