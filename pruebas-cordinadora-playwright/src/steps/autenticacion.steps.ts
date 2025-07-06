// src/steps/autenticacion.steps.ts
import { Given } from '@cucumber/cucumber';


Given('que soy un usuario autenticado', async function () {
  // Ya estás autenticado desde el hook. Aquí puedes hacer setup adicional si necesitas.
  // Si no se requiere autenticación explícita, simplemente deja esto vacío.
  console.log('Usuario autenticado en contexto');
});
