import { APIRequestContext } from '@playwright/test';

export async function crearGuia(request: APIRequestContext, data?: Partial<any>) {
  const defaultPayload = {
    "identificacion": "890904713",
    "divisionCliente": "00",
    "idProceso": 100001,
    "valorRecaudar": "", // ❗ cuidado con esto si lo necesita el backend
    "referenciaRecaudo": "REF123",
    "valoracion": 20000,
    "tipoCuenta": 1,
    "contenido": "Zapatos",
    "nivelServicio": 1,
    "referenciaGuia": "referencia",
    "usuario": "coordinadora@coordinadora.com",
    "observaciones": "Cuidado fragil",
    "fuente": "envios",
    "codigoPais": 170,
    "tipoProducto": "4",
    "tipoEnvioEspecial": false,
    "quienPagaEnvio": "1",
    "tipoGuia": 1,
    "codigoRemision": "28888391110",
    "codigoProducto": 1,
    "detalle": [
      {
        "codigoPaquete": "1992",
        "nombrePaquete": "Paquete 1",
        "valorDeclarado": 20000,
        "pesoReal": 20,
        "largo": 30,
        "alto": 15,
        "ancho": 20,
        "referencia": "Referencia 1",
        "unidades": 5,
        "ubl": 1,
        "idContenido": 2933
      }
    ],
    "datosRemitente": {
      "identificacionRemitente": "8289830",
      "divisionRemitente": "01",
      "tipoDocumentoRemitente": 13,
      "codigoPostalRemitente": "",
      "detalleRemitente": "Casa gris",
      "tipoViaRemitente": "12",
      "viaRemitente": "21",
      "numeroRemitente": "55 E 45",
      "codigoCiudadRemitente": "10029000",
      "otraDireccionRemitente": "Calle 55 C",
      "descripcionTipoViaRemitente": "Calle",
      "direccionRemitente": "Carrera 21 casa marron",
      "nombreRemitente": "Remitente Prueba",
      "indicativoRemitente": "57",
      "celularRemitente": "3009281123",
      "correoRemitente": "pruebaremitente@coordinadora.com"
    },
    "datosDestinatario": {
      "identificacionDestinatario": "123454",
      "divisionDestinatario": "02",
      "tipoDocumentoDestinatario": 31,
      "codigoPostalDestinatario": "",
      "detalleDestinatario": "Casa verde",
      "tipoViaDestinatario": "12",
      "viaDestinatario": "12",
      "numeroDestinatario": "21 E 12",
      "codigoCiudadDestinatario": "50029000",
      "otraDireccionDestinatario": "Calle 21 C",
      "descripcionTipoViaDestinatario": "Calle",
      "direccionDestinatario": "Calle 21 casa verde",
      "nombreDestinatario": "Destinatario Prueba",
      "indicativoDestinatario": "57",
      "celularDestinatario": "3009281123",
      "correoDestinatario": "pruebadestinatario@coordinadora.com"
    },
    "datosRecibe": {
      "identificacionRecibe": "123454",
      "divisionRecibe": "02",
      "idProcesoRecibe": 100001,
      "tipoDocumentoDestinatarioRecibe": 31,
      "identificacionDestinatarioRecibe": "123454",
      "detalleRecibe": "Casa verde",
      "tipoViaRecibe": "12",
      "viaRecibe": "12",
      "numeroRecibe": "21 E 12",
      "codigoCiudadRecibe": "50029000",
      "otraDireccionRecibe": "Calle 21 C",
      "descripcionTipoViaRecibe": "Calle",
      "direccionRecibe": "Calle 21 casa verde",
      "nombreRecibe": "Recibe Prueba",
      "indicativoRecibe": "57",
      "celularRecibe": "3009281123",
      "correoRecibe": "pruebarecibe@coordinadora.com"
    },
    "documentos": {
      "numeroSobre": "sb2883",
      "cantidad": 10
    }
  };

  const payload = {
    ...defaultPayload,
    ...data // sobreescribe con lo que venga del test si se manda
  };

  return await request.post('https://apiv2-test.coordinadora.com/guias/cm-guias-ms/guia', {
    data: payload,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
