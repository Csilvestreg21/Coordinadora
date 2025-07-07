# Automatización de Pruebas API - Recaudo Contra Entrega (RCE)

Este proyecto contiene las pruebas funcionales automatizadas del flujo de **creación, validación de errores y consulta de guías** con Recaudo Contra Entrega (RCE). Está desarrollado siguiendo el **patrón Screenplay**, usando **Playwright**, **Cucumber** y **TypeScript** para mantener una arquitectura limpia, escalable y fácil de mantener.

---

## Objetivo

El propósito principal de este proyecto es asegurar la calidad y estabilidad del servicio de guías con RCE expuesto por Coordinadora. Para eso, se automatizan los flujos más críticos, incluyendo:

- Validaciones funcionales y de negocio  
- Comprobaciones con datos límite o extremos  
- Transiciones de estado esperadas  
- Escenarios negativos y manejo de errores

---

## Tecnologías utilizadas

- **Playwright** – Para la automatización de pruebas sobre servicios REST  
- **Cucumber** – Enfoque BDD (desarrollo guiado por comportamiento)  
- **Screenplay Pattern** – Basado en *actores*, *tareas* y *expectativas*  
- **TypeScript** – Tipado estático para mayor robustez y claridad  
- **Multiple Cucumber HTML Reporter** – Generación de reportes visuales en HTML

---

## Estructura del proyecto

```bash
pruebas-rce-playwright/
├── features/                # Escenarios escritos en lenguaje Gherkin
│   ├── crear_guia.feature
│   ├── validar_errores.feature
│   └── consultar_guia.feature
├── src/
│   ├── actors/              # Actores (usuarios que ejecutan tareas)
│   ├── steps/               # Definiciones de pasos Gherkin (Step Definitions)
│   ├── support/             # Hooks y configuración global
│   └── tasks/               # Lógica de tareas como crear o consultar guías
├── reports/                 # Reportes JSON y HTML generados
├── cucumber.js              # Configuración de ejecución para Cucumber
├── cucumber.tsconfig.json   # Configuración de TypeScript para Cucumber
├── cucumber.tsconfig.json   # Configuración de TypeScript para Cucumber
└── README.md                # Este documento
```

---

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/pruebas-rce-playwright.git
cd pruebas-rce-playwright
```

### 2. Instalar dependencias

```bash
npm install
```

---

## Ejecutar pruebas

### Ejecutar todos los escenarios con reporte JSON

```bash
npm test
```

Alias equivalente:

```bash
cucumber-js features \
  --require-module ts-node/register \
  --require src/steps/**/*.ts \
  --require src/support/**/*.ts \
  --require src/tasks/**/*.ts \
  --format json:reports/report.json
```

---

## Generar reporte HTML

1. Instala el generador si no lo tienes:

```bash
npm install --save-dev multiple-cucumber-html-reporter
```

2. Genera el reporte desde los resultados JSON:

```bash
npx multiple-cucumber-html-reporter \
  --reportName "Pruebas RCE" \
  --jsonDir=reports \
  --reportPath=reports/html
```

3. Abre el reporte:

```bash
open reports/html/index.html
# o en Windows:
start reports/html/index.html
npm run report 
```

---

## Escenarios cubiertos

### Crear guía

- Creación exitosa con datos válidos  
- Validación de campos obligatorios  
- Pruebas con valores extremos o límite  

### Validaciones negativas

- Campos vacíos o inválidos  
- Caracteres no permitidos  
- Tipos de datos incorrectos  
- Longitudes fuera de especificación  

### Consultar guía

- Consulta sin enviar código  
- Código inexistente  
- Código válido y guía existente  

---

## Buenas prácticas implementadas

- Arquitectura **Screenplay** clara y escalable  
- Código desacoplado y reutilizable entre escenarios  
- Separación de responsabilidades (actor ↔ tarea ↔ paso ↔ feature)  
- Configuración centralizada para hooks, contextos y requests  
- Logs descriptivos en consola para facilitar debugging  

---