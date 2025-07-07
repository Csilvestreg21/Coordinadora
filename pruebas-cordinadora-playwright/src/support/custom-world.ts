// support/custom-world.ts
import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { Usuario } from '../actors/Usuario'; // ruta según tu estructura

export class CustomWorld extends World {
  usuario: Usuario | null = null;  // ← aquí guardaremos el actor

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
