// Crea una guía con datos válidos usando el actor autenticado (`Usuario`)
// y valida que la respuesta sea exitosa (código 200).

import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { crearGuia } from '../tasks/CrearGuia';

When(
  'creo una guía con servicio {string}, referencia {string} y valor {int}',
  async function (servicio, referencia, valor) {
    const data = {
      servicio,
      referenciaRecaudo: referencia,
      valorRecaudo: valor
      // otros campos requeridos...
    };
    console.group('\nCreación de guía');
    console.table({
      Usuario: this.usuario?.nombre || 'No definido',
      Servicio: servicio,
      Referencia: referencia,
      Valor: valor
    });
    console.groupEnd();
    this.response = await crearGuia(this.request, data);
  }
);

Then('el sistema debe crear la guía exitosamente', async function () {
  const status = this.response.status();
  console.group('\nValidación de respuesta');
  console.table({
    Esperado: 200,
    Recibido: status
  });
  console.groupEnd();
  expect(status).toBe(200);
});
