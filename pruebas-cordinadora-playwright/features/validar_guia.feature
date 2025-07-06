Feature: Validaciones al crear guía

  Background:
    Given que soy un usuario autenticado

  Scenario Outline: Validaciones negativas al crear guía
    When creo una guía con referencia <referencia> y valor <valor>
    Then el sistema debe responder con código 400
    And el mensaje de error debe ser "<message>"

    Examples:
      | referencia                                    | valor      | message                                  | 
      | "REF123"                                      | ""         | Los valores de entrada no son correctos. | 
      | ""                                            | ""         | Los valores de entrada no son correctos. | 
      | "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaa"  | 10000      | Los valores de entrada no son correctos. | 
      | "ABC123"                                      | "diez mil" | Los valores de entrada no son correctos. | 
      | "compra 123$#&/(=?"                           | 5000       | Los valores de entrada no son correctos. | 

  Scenario: Payload incompleto sin referencia
    When envío un JSON sin el campo referenciaRecaudo
    Then el sistema debe responder con código 400
    And el mensaje de error debe ser "Los valores de entrada no son correctos."
