// Paso para indicar que el usuario ya está autenticado en el contexto de prueba.
// Se instancia el actor `Usuario` y se guarda en el escenario.

import { Given } from '@cucumber/cucumber';
import { Usuario } from '../actors/Usuario';

Given('que soy un usuario autenticado', async function () {
  this.usuario = new Usuario('Coordinadora Tester');
  console.log('\n===== USUARIO AUTENTICADO =====');
  console.table({
    nombre: this.usuario.nombre
  });
});
