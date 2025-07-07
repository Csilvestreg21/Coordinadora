# Importa clases necesarias de Locust
from locust import HttpUser, task, between, LoadTestShape

# Define un usuario que simula el consumo del servicio GET de consulta de guías
class UsuarioConsulta(HttpUser):
    # Tiempo aleatorio entre solicitudes (entre 0.1 y 0.2 segundos), ayuda a alcanzar hasta 100 RPS
    wait_time = between(0.1, 0.2)

    # Tarea que se ejecuta durante la prueba
    @task
    def consultar_guia(self):
        # Realiza una petición GET al endpoint de consulta de guía
        self.client.get("/guias/cm-guias-consultas-ms/guia/99020012725")

# Clase para definir una forma personalizada de carga progresiva (escalado)
class EscaladoProgresivo(LoadTestShape):
    step_time = 15        # Cada cuántos segundos se aumenta la carga (usuarios)
    step_users = 50       # Cuántos usuarios se agregan en cada incremento
    max_time = 60         # Duración máxima total de la prueba (en segundos)

    # Método que Locust llama automáticamente para definir la forma de la carga en tiempo real
    def tick(self):
        run_time = self.get_run_time()  # Obtiene el tiempo que ha pasado desde que comenzó la prueba

        # Si se supera el tiempo máximo, se detiene la prueba
        if run_time > self.max_time:
            return None

        # Calcula el número de incremento en el que estamos (división entera)
        current_step = run_time // self.step_time

        # Calcula la cantidad total de usuarios activos en el paso actual
        users = 100 + (self.step_users * current_step)

        # Calcula cuántos usuarios por segundo se deben iniciar (spawn rate), con un tope de 100
        spawn_rate = min(10 + (current_step * 30), 100)

        # Retorna el número de usuarios activos y la tasa de llegada para este momento
        return (int(users), int(spawn_rate))