Feature: Crear guía

  Scenario: Crear guía con datos válidos
    Given que soy un usuario autenticado
    When creo una guía con servicio "Recaudo Contra Entrega", referencia "REF12345" y valor 10000000
    Then el sistema debe crear la guía exitosamente
