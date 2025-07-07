# 🚀 Coordinadora - Prueba de Automatización Funcional

Este repositorio contiene el desarrollo de la **prueba funcional automatizada** para los servicios de Coordinadora, enfocado exclusivamente en los flujos de **creación y consulta de guías**.

---

## 📂 Estructura del proyecto

- [`automatizacion/`](/pruebas-cordinadora-playwright/): contiene los escenarios automatizados para validar el comportamiento de los servicios de creación y consulta de guías utilizando Playwright, Cucumber y TypeScript.
- [`pruebas-carga/`](/pruebas-de-carga-y-estres/): (opcional) scripts de carga que simulan múltiples solicitudes concurrentes con Locust. No hacen parte de la entrega funcional requerida, pero están disponibles como referencia.

---

## 🧪 Automatización Funcional (entrega obligatoria)

La carpeta `automatizacion/` contiene todo lo necesario para validar, de manera automatizada, los servicios de Coordinadora relacionados con guías. Esta prueba incluye:

- ✅ Creación de guía con datos válidos
- ❌ Validación de errores con datos inválidos o campos vacíos
- 🔍 Consulta de guía por número

Los escenarios están escritos en lenguaje Gherkin y se ejecutan sobre un framework construido con Playwright y Cucumber, siguiendo el patrón Screenplay para mayor escalabilidad y claridad.

📍 Puedes revisar el detalle y cómo ejecutar las pruebas en el [`README`](/pruebas-cordinadora-playwright/README.md) de la carpeta `automatizacion`.

---

## 📈 (Opcional) Pruebas de Carga

La carpeta `pruebas-carga/` contiene scripts de Locust para simular carga progresiva sobre endpoints como:

- Post `https://apiv2-test.coordinadora.com/guias/cm-guias-ms/guia`
- Get `https://apiv2-test.coordinadora.com/guias/cm-guias-consultas-ms/guia/{numero_guia}`

Estas pruebas permiten evaluar el rendimiento del sistema con múltiples usuarios simultáneos y diferentes volúmenes de solicitudes.

📍 Más detalles en el [`README`](/pruebas-de-carga-y-estres/README.md) de esa carpeta.

---

## ✅ Requisitos generales para ejecutar la prueba funcional

- Node.js v18 o superior
- Dependencias instaladas mediante `npm install`
- Conexión a los servicios expuestos por Coordinadora en ambiente de desarrollo o pruebas

---