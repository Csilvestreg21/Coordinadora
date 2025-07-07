# Coordinadora - Proyecto de Automatización y Pruebas de Carga

Este repositorio reúne dos componentes clave desarrollados para validar tanto el comportamiento funcional como el rendimiento de los servicios utilizados en Coordinadora.

## Estructura del repositorio

- [`automatizacion/`](../Coordinadora/pruebas-cordinadora-playwright): contiene las pruebas funcionales automatizadas utilizando Playwright y Cucumber.
- [`pruebas-carga/`](../Coordinadora/pruebas-de-carga-y-estres/): incluye los scripts de prueba de carga y estrés sobre servicios críticos, desarrollados con Locust.

---

## Automatización funcional

En la carpeta `automatizacion/` se encuentran los escenarios Gherkin, definiciones de pasos (`step definitions`) y la configuración necesaria para ejecutar pruebas sobre diversos microservicios de Coordinadora.

Estas pruebas cubren aspectos como:

- Validación de alertas
- Actualización y consulta de guías
- Asignación de unidades
- Integraciones con base de datos
- Validaciones y autorizaciones complejas según reglas de negocio

  Puedes consultar más detalles sobre la ejecución y configuración en el [`README`](../Coordinadora/pruebas-cordinadora-playwright/README.md) de esa carpeta.

---

## Pruebas de carga y estrés

La carpeta `pruebas-carga/` contiene scripts desarrollados con Locust para simular carga progresiva sobre servicios clave, como:

- `/guias/cm-guias-consultas-ms/guia/{numero_guia}`

Estas pruebas permiten analizar el comportamiento del sistema bajo diferentes niveles de concurrencia, incluyendo escalado de usuarios y generación de hasta 625 solicitudes por segundo.

Las instrucciones detalladas de ejecución están disponibles en el [`README`](../Coordinadora/pruebas-de-carga-y-estres/README.md) correspondiente.

---

## Requisitos generales

Para ejecutar los proyectos, es necesario tener instalado:

- Python 3.10 o superior
- Node.js (requerido para las pruebas funcionales)
- Las dependencias específicas de cada módulo, definidas en sus respectivos entornos

---