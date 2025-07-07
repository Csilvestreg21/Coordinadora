# Pruebas de Carga y Estrés con Locust – Coordinadora

Este proyecto permite ejecutar pruebas de **carga** y **estrés** sobre los servicios de API de Coordinadora, específicamente para el módulo de **consulta de guías**.

---

## Objetivo

Evaluar el comportamiento del sistema bajo diferentes niveles de carga y usuarios concurrentes para:

- Medir el rendimiento del servicio
- Identificar cuellos de botella
- Evaluar la escalabilidad del backend

---

## Estructura del proyecto

```
pruebas-performance-locust/
├── locustfile.py             # Archivo principal con tareas y forma de carga
├── requirements.txt          # Librerías necesarias
├── README.md                 # Documentación del proyecto (este archivo)
```

---

## Requisitos

- Python 3.9+
- Pip (gestor de paquetes)

Instalar dependencias:

```bash
pip install -r requirements.txt
```

> Si no tienes un `requirements.txt`, basta con instalar Locust:
```bash
pip install locust
```

---

## Ejecución

### Iniciar Locust en modo web

```bash
locust -f locustfile.py
```

Luego abre tu navegador en:  
[http://localhost:8089](http://localhost:8089)

### Parámetros sugeridos (carga/estrés):

| Prueba           | Usuarios | Frecuencia (RPS) | Duración |
|------------------|----------|------------------|----------|
| Prueba de carga  | 20       | 2/seg            | 1 min    |
| Prueba de estrés | 100+     | hasta 100/seg    | 1 min    |

---
## Comandos a ejecutar

Se debe ingresar al directorio cd /pruebas-de-carga-y-estres/locust_tests

Prueba de Carga (20 usuarios, 2 RPS, 1 min)
```bash
locust -f locustfile.py --headless -u 20 -r 2 --run-time 1m \
--host https://apiv2-test.coordinadora.com \
--csv=prueba_carga
```
Prueba de Estrés (100 usuarios iniciales, +50 cada 15s)
```bash
locust -f locustfile.py --headless --run-time 1m \
--host https://apiv2-test.coordinadora.com \
--csv=prueba_estres
```
---

## Métricas clave

Durante la prueba, analiza:

- Tiempos de respuesta promedio y máximos
- Tasa de errores HTTP (400, 500)
- Requests por segundo (RPS)

---