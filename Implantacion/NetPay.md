---

layout: default

title: Integracion con NetPay

permalink: /Implantacion/NetPay

editable: si

---

# INTEGRACION CON NETPAY 

Para realizar el proceso de integración con pagos a través de la plataforma netpay 
es necesario realzar los siguientes pasos. 

## Configuración BARC (ARCHIVOS)

En este ejemplo, la integración se realiza sobre el BARC 2000, en donde en este se configura la estructura del pago que se realizara.

![](NetPay1.png)

A nivel del detalle del barc se configura tanto los argumentos para consultar una factura en específico,
y adicionalmente los campos a reemplazar (ACTUALIZACION) con lo que se genere previamente desde el formulario.

## Configuración BPUB(PUBLICACIONES)

**Operación**: CustomQuery Response

**Programa**: Tipo de conexión al api  (HEADER).

**SourceDomainId**: Dominio de donde se generará el origen de datos para el envió al API NetPay.

**TargetDomainId**: Dominio destino a donde se realizará conexión para generar el pago.

**TargetService**: método a conectar para generar el pago.

A NIVEL DEL DETALLE SE REFERENCIA EL BARC PREVIAMENTE CONFIGURADO.

![](NetPay2.png)

## Configuration SROl (Roles)

![](NetPay3.png)

## configuración SDOM 

SE CONFIGURA LA SIGUIENTE CONFIGURACION DE DOMINIOS PARA LA EJECUCION DE ESTE PROCESO.

![](NetPay4.png)

## CONFIGURACION SDOMC

Lo resaltado en Azul, se utiliza para el uso del consumo de api PAGO NETPAY

lo resaltado en Verde se utiliza para el proceso de autenticación sobre el método tokenizacion de tarjeta.

![](NetPay5.png)

## Configuracion SCAM 

SE CONFIGURA EL BOTON PARA VISUALIZARLO EN LA PESTAÑA PAGO DEL JFAC

![](NetPay6.png)


## Ingreso a  la aplicacion donde se parametrizo el boton 

Se consulta una factura o se genera una factura,

donde en el detalle de la factura (PAGO) sobre el botón se activa una ventana emergente que mostrará el ingreso de los datos personales de la tarjeta de crédito.

![](NetPay7.png)

Se ingresan los datos de la tarjeta  y al terminar, se le da click al botón de generar pago 

![](NetPay8.png)

El aplicativo internamente generara los siguientes procesos

- VALIDACION PREVIA- VALIDA DATOS BASICOS PARA GENERAR LA TRANSACCIÓN.* - GENERACION DE TOKEN DE TARJETA - SOBRE EL SERVICIO NETPAY
- GENERACION DE PAGO-SOBRE EL SERVICIO NETPAY.
- CAPTURA DE DATOS DE LA TRANSACCION EN OASISCOM.
- SI ES 3DS, SE EXTIENDE A VALIDAR LA TARJETA.
-  SE ACTUALIZA LA TRANSACCION SEGÚN LA RESPUESTA DEL SERVICIO.

luego de completar el pago exitosamente 

![](NetPay9.png)

## SE VALIDA EL PAGO REALIZADO POR EL PROGRAMA EPAY

Se puede visualizar la información de la transacción

fecha, hora, valor, información del tercero, estado de la transacción, referencia del documento. 

Franchise Nombre = token de transacción emitida => sirve para realizar la consulta de la transacción emitida sobre netpay.

Respuesta: Se captura la respuesta obtenida por el servicio de parte de NETPAY.
