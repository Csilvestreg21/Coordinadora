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
    this.response = await crearGuia(this.request, data);
  }
);

Then('el sistema debe crear la guía exitosamente', async function () {
  expect(this.response.status()).toBe(200);
});
