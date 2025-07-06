# 📦 Automatización de Pruebas API - Recaudo Contra Entrega (RCE)

> Pruebas funcionales automatizadas para el flujo de **creación, validación de errores y consulta de guías** usando el patrón **Screenplay** con **Playwright + Cucumber + TypeScript**.

---

## 🚀 Objetivo

Automatizar los principales flujos del servicio de guías con:

- ✅ Validaciones funcionales  
- 🔢 Pruebas con valores límite  
- 🔄 Transiciones de estado  
- ❌ Manejo de errores  

Todo esto para garantizar la calidad del servicio **Recaudo Contra Entrega**.

---

## 🛠️ Tecnologías usadas

- 🧪 [Playwright](https://playwright.dev/) – Automatización de APIs y validación de respuestas  
- 🥒 [Cucumber](https://cucumber.io/) – BDD (Behavior-Driven Development)  
- 🧱 **Screenplay Pattern** – Organización basada en actores, tareas y acciones  
- 💬 TypeScript – Tipado fuerte para mayor mantenibilidad  
- 📄 HTML Reports – Reportes automáticos en cada ejecución  

---

## 📁 Estructura del proyecto

```bash
pruebas-rce-playwright/
├── features/                # Escenarios BDD escritos en Gherkin
│   ├── crear_guia.feature
│   ├── validar_errores.feature
│   └── consultar_guia.feature
├── src/
│   ├── actors/              # Definición de actores
│   ├── tasks/               # Acciones (crear, consultar, validar guía)
│   ├── steps/               # Step definitions de Cucumber
│   └── support/             # Hooks, configuración global
├── reports/                 # Reportes generados (JSON + HTML)
├── cucumber.tsconfig.json   # Configuración de TypeScript para pruebas
├── cucumber.js              # Configuración de ejecución de Cucumber
└── README.md                # Este archivo
```

---

## 📦 Instalación

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/pruebas-rce-playwright.git
cd pruebas-rce-playwright
```

### 2. Instala las dependencias

```bash
npm install
```

---

## 🧪 Ejecutar pruebas

### Ejecutar todos los escenarios con reporte JSON:

```bash
npm test
```

Alias del comando:

```bash
cucumber-js features \
  --require-module ts-node/register \
  --require src/steps/**/*.ts \
  --require src/support/**/*.ts \
  --require src/tasks/**/*.ts \
  --format json:reports/report.json
```

---

## 📊 Generar reporte HTML

1. Instala el generador de reportes:

```bash
npm install --save-dev multiple-cucumber-html-reporter
```

2. Genera el reporte:

```bash
npx multiple-cucumber-html-reporter \
  --reportName "Pruebas RCE" \
  --jsonDir=reports \
  --reportPath=reports/html
```

3. Abre el reporte en tu navegador:

```bash
open reports/html/index.html
```

---

## 🧪 Escenarios cubiertos

### ✅ Crear guía

- Creación con datos válidos  
- Creación con campos omitidos  
- Valores fuera de rango  

### ❌ Validaciones negativas

- Campos vacíos  
- Caracteres especiales  
- Valores no numéricos  
- Longitudes inválidas  

### 🔍 Consultar guía

- Sin código  
- Código inexistente  
- Código válido  

---

## 🤝 Buenas prácticas

- Todos los flujos están organizados por el patrón Screenplay  
- Separación clara entre lógica de negocio (tareas), definición de comportamiento (features) y configuración de entorno (hooks)  
- Reutilización de código para facilitar mantenimiento y extensión  

---

## 📬 Contacto

Si tienes dudas, sugerencias o deseas contribuir, no dudes en abrir un issue o pull request.
