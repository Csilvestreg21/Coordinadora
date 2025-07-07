Feature: Consultar guía exitosamente

  Scenario: Consulta una guía existente
    Given que soy un usuario autenticado
    When consulto una guía con código "99020012766"
    Then el sistema debe responder con un código 200
    And el sistema debe mostrar el detalle correcto de la guía