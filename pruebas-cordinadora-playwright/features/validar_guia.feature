Feature: Validaciones al crear y consultar una guía

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

    Scenario: Consulta una guía con código 0
    Given que soy un usuario autenticado
    When consulto una guía con código "0"
    Then el sistema debe responder con un código 200
    And la información de la guía debe estar vacía
  
  Scenario: Consulta sin código
    Given que soy un usuario autenticado
    When intento consultar una guía sin código
    Then el sistema debe responder con un código 400
    And el mensaje de error debe ser "El campo codigo_remision no puede estar vacío" por no enviar el codigo remision
