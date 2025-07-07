// Steps para consultar una guía en distintos escenarios:
// sin código, código "0" o código válido.
// También se usa el actor `Usuario` para identificar quién realiza la acción.

import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { consultarGuia } from '../tasks/ConsultarGuia';

When('intento consultar una guía sin código', async function () {
  console.group('\n Consulta sin código');
  console.table({
    Usuario: this.usuario?.nombre || 'No definido',
    Código: '(vacío)'
  });
  const response = await this.request.get(
    `https://apiv2-test.coordinadora.com/guias/cm-guias-consultas-ms/guia/`
  );
  this.response = response;
  console.groupEnd();
});

When('consulto una guía con código {string}', async function (codigo: string) {
  console.group('\nConsulta con código');
  console.table({
    Usuario: this.usuario?.nombre || 'No definido',
    Código: codigo
  });
  const response = await consultarGuia(this.request, codigo);
  this.response = response;
  console.groupEnd();
});

Then('el sistema debe responder con un código {int}', async function (statusCode: number) {
  const actualStatus = this.response?.status();
  console.group('\nValidación del código de respuesta');
  console.table({
    Esperado: statusCode,
    Recibido: actualStatus
  });
  console.groupEnd();
  expect(actualStatus).toBe(statusCode);
});

Then(
  'el mensaje de error debe ser {string} por no enviar el codigo remision',
  async function (mensajeEsperado: string) {
    const body = await this.response?.json();
    console.group('\nValidación de mensaje de error');
    console.table({
      Esperado: mensajeEsperado,
      Recibido: body?.cause || '(sin mensaje)'
    });
    console.groupEnd();
    expect(body?.cause).toContain(mensajeEsperado);
  }
);

Then('la información de la guía debe estar vacía', async function () {
  const body = await this.response?.json();
  console.group('\nValidación de contenido vacío');
  console.table({
    datosRetorno: body?.data?.datosRetorno,
    detalle: Array.isArray(body?.data?.detalle) ? '[]' : 'No es arreglo'
  });
  console.groupEnd();
  expect(body?.data?.datosRetorno).toBeNull();
  expect(body?.data?.detalle).toEqual([]);
});

Then('el sistema debe mostrar el detalle correcto de la guía', async function () {
  const body = await this.response?.json();
  console.group('\nValidación de contenido completo');
  console.table({
    codigoRemision: body?.data?.codigoRemision || 'No presente',
    referenciaGuia: body?.data?.referenciaGuia || 'No presente',
    detalleTipo: Array.isArray(body?.data?.detalle) ? 'Array' : 'No es array'
  });
  console.groupEnd();
  expect(body?.data).toHaveProperty('codigoRemision');
  expect(body?.data).toHaveProperty('referenciaGuia');
  expect(Array.isArray(body?.data?.detalle)).toBe(true);
});
