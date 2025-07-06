Feature: Consultar guía

  Scenario: Consulta sin código
    Given que soy un usuario autenticado
    When intento consultar una guía sin código
    Then el sistema debe responder con un código 400
    And el mensaje de error debe ser "El campo codigo_remision no puede estar vacío" por no enviar el codigo remision

  Scenario: Consulta una guía con código 0
    Given que soy un usuario autenticado
    When consulto una guía con código "0"
    Then el sistema debe responder con un código 200
    And la información de la guía debe estar vacía

  Scenario: Consulta una guía existente
    Given que soy un usuario autenticado
    When consulto una guía con código "99020012766"
    Then el sistema debe responder con un código 200
    And el sistema debe mostrar el detalle correcto de la guía
