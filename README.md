# 🚀 Coordinadora - Automatización y Pruebas de Carga

Este repositorio contiene dos proyectos complementarios orientados a validar el comportamiento funcional y el rendimiento de los servicios de Coordinadora.

## 📂 Estructura del proyecto

- [`automatizacion/`](/pruebas-cordinadora-playwright/): pruebas funcionales automatizadas utilizando Playwright y Cucumber.
- [`pruebas-carga/`](/pruebas-de-carga-y-estres/): pruebas de carga y estrés sobre servicios clave usando Locust.

---

## 🧪 Automatización Funcional

La carpeta `automatizacion/` contiene escenarios Gherkin, step definitions y ejecución de pruebas sobre los microservicios de Coordinadora. Las pruebas incluyen:

- Validación de alertas
- Actualización de guías
- Asignación de unidades
- Consultas con base de datos
- Autorizaciones con múltiples condiciones

📍 Para más detalles de ejecución, ver el [`README`](/pruebas-cordinadora-playwright/README.md) dentro de esa carpeta.

---

## 📈 Pruebas de Carga

La carpeta `pruebas-carga/` contiene scripts de Locust para evaluar el rendimiento de servicios como:

- `/validaciones?etiqueta1d={etiqueta}&codigo_terminal_dispositivo=3`
- `/guias/cm-guias-consultas-ms/guia/{numero_guia}`

Los scripts simulan carga escalonada, con generación de hasta 625 solicitudes por segundo.

📍 Para instrucciones de ejecución, ver el [`README`](/pruebas-de-carga-y-estres/README.md).

---

## ✅ Requisitos generales

- Python 3.10+
- Node.js (para automatización funcional)
- Instalar dependencias específicas dentro de cada subcarpeta

---

