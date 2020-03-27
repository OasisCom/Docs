---
layout: default
title: Solicitud de Autorización
permalink:/Operacion/is/salud/eautorizacion/movaut/esoa
editable: si
---


# ESOA - Solicitud de Autorizaciones


>+ [Solicitud de Autorizaciones](http://docs.oasiscom.com/Operacion/is/salud/eautorizacion/movaut/esoa#solicitud-de-autorizaciones)
>+ [Detalle aplicación ESOA](http://docs.oasiscom.com/Operacion/is/salud/eautorizacion/movaut/esoa#detalle-aplicación-esoa)
>+ [Autorizaciones](http://docs.oasiscom.com/Operacion/is/salud/eautorizacion/movaut/esoa#autorizaciones)
>+ [Detalle aplicación EAUT - Autorizaciones](http://docs.oasiscom.com/Operacion/is/salud/eautorizacion/movaut/esoa#detalle-aplicación-eaut-autorizaciones)


Se documenta, como está el proceso de la solicitud de autorización.  
Existe el programa [**EESOA**]() que actualmente el diligenciado por la **IPS (externo)**, en la que solicitan la autorización a la **EPS.**  

El proceso que realiza la **EPS** por el programa [**ESOA**](http://docs.oasiscom.com/Operacion/is/salud/eautorizacion/movaut/esoa#solicitud-de-autorizaciones) es de aprobar esas solicitudes; al darle procesar, si se aprueba la solicitud, la aplicación realiza automáticamente la autorización.  

El usuario actualmente debería de ir a la aplicación del [**EAUT**]() consultar y generar la impresión.  
Entonces por ser un tema de agilizar el proceso se optó por darle opción de poder imprimir la autorización.

Por temas de permisos adicionalmente se optó el generar este botón de impresión.
Una vez procesado queda referenciado el documento de la solicitud con la autorización generada.
Por consiguiente, al darle imprimir se realiza el mismo proceso que imprimir desde el programa **EAUT.**  

![](esoa1.png) 

## [Solicitud de Autorizaciones](http://docs.oasiscom.com/Operacion/is/salud/eautorizacion/movaut/esoa#solicitud-de-autorizaciones)

Las solicitudes de autorizaciones pueden ser creadas por la *IPS* o prestador de servicio por medio de la aplicación *EESOA – Solicitud de Autorización* o a nivel interno la EPS la puede crear en la aplicación *ESOA – Solicitud de Autorización.*

A continuación, explicaremos cómo crear una solicitud de autorización a nivel interno, es decir, por parte de la EPS en la aplicación ESOA.

Ingresamos a la aplicación ESOA y creamos un nuevo registro.

![](Imagen 1 esoa.png) 

Ingresamos documento y concepto *SW – Solicitud autorización* y la ubicación desde donde se realiza la solicitud.

Seguidamente, en la sección *“Información Afiliado”,* en el campo **“Id Afiliado”,** seleccionamos del zoom el afiliado al cual se le está gestionando la solicitud de la autorización, los siguientes campos se diligenciarán automáticamente.

![](Imagen 2 esoa.png) 

En la sección *“Información Solicitud”* ingresaremos los datos de la IPS que solicita la autorización, en caso de que la IPS haya realizado la solicitud de autorización por el EESOA, la información en estos campos se verá reflejada. En caso de que la EPS realice la solicitud deberá ingresar los datos.

Seleccionamos del zoom **“Id IPS”,** la IPS que solicita la autorización del servicio, del campo **“Dirección”** seleccionamos la sede de la IPS que la solicita, indicamos la ubicación de la solicitud, el código del servicio que se desea autorizar, el origen de atención (Enf. General, Enf. Profesional, Acc. Trabajo, Acc. Tránsito, Ev. Catastróficos), indicar el tipo de solicitud (Post. A Urgencias, Serv. Electivos, Serv. Adicionales), tipo de prioridad y marcaremos el flag *“Alto Costo”* en caso tal de que el servicio a autorizar sea de alto costo, esto deberá estar justificado o relacionado a un siniestro.

![](Imagen 3 esoa.png) 

La sección de *“Información Tutela”* estará diligenciada en caso tal de que el afiliado tenga una tutela activa con la EPS y es a nivel informativo.

La sección de *“Información Adicional”* se debe diligenciar con uno o más diagnósticos del afiliado, así como se debe indicar el nombre y especialización del médico que realiza dichos diagnósticos.

![](Imagen 4 esoa.png) 

Guardamos el registro y a continuación adjuntamos a la solicitud la historia clínica del afiliado. (La historia clínica la debe adjuntar el prestador de servicios *“IPS”*).

![](Imagen 5 esoa.png) 

![](Imagen 6 esoa.png) 

## [Detalle aplicación ESOA](http://docs.oasiscom.com/Operacion/is/salud/eautorizacion/movaut/esoa#detalle-aplicación-esoa)

Continuando con la solicitud, en el detalle de la aplicación **ESOA** debemos ingresar el servicio que se requiere autorizar. Ingresamos un nuevo renglón y seleccionamos el producto a solicitar en la autorización, la cantidad del producto y en el campo *“Tercero”* ingresamos la *IPS* a la cual se le autoriza la prestación del servicio.

![](Imagen 7 esoa.png) 

En el renglón del detalle, el usuario de la *EPS* debe validar los datos registrados en la solicitud de autorización y en caso de que efectivamente se vaya a autorizar el servicio, debe activar el Flag de **“Aprobado”** y procesar la solicitud desde el maestro.

Una vez procesada la solicitud, se generará la autorización en la aplicación **EAUT- Autorizaciones** en estado *“Procesado”.*

![](Imagen 8 esoa.png) 

En el detalle de la aplicación **ESOA – Solicitud de Autorizaciones** se puede ver en los campos *“Doc Autorización” y “Número Autorización”* el documento y número de consecutivo con el cual se creó la autorización en la aplicación EAUT. 

![](Imagen 9 esoa.png) 

Igualmente, la aplicación **ESOA – Solicitud de Autorizaciones** permite imprimir, en caso de que sea aprobada por la *EPS,* la autorización generada anteriormente desde la barra de herramientas con el botón ![](lupa.png), si aún no está aprobada, arrojará un mensaje emergente.

![](Imagen 10 esoa.png) 

![](Imagen 11 esoa.png) 

## [Autorizaciones](http://docs.oasiscom.com/Operacion/is/salud/eautorizacion/movaut/esoa#autorizaciones)

El prestador de servicios o externo *(IPS - Hospital)* puede consultar con el número de identificación del afiliado en la aplicación **EERSA – Consulta Solicitud Autorización,** si ya se le ha generado la autorización del servicio e imprimirla de ser necesario. 

![](Imagen 12 esoa.png) 

Internamente, la *EPS* puede consultar la autorización en la aplicación [**EAUT- Autorizaciones**](http://docs.oasiscom.com/Operacion/is/salud/eautorizacion/movaut/eaut), consultando por el documento, número y ubicación generado en el [**ESOA – Solicitud de Autorizaciones**](http://docs.oasiscom.com/Operacion/is/salud/eautorizacion/movaut/esoa#solicitud-de-autorizaciones) e imprimirla.

![](Imagen 13 esoa.png) 

![](Imagen 14 esoa.png) 

## [Creación de autorización](http://docs.oasiscom.com/Operacion/is/salud/eautorizacion/movaut/esoa#creacion-de-autorizacion)

Para crear una autorización internamente, la EPS ingresa a la aplicación [**EAUT - Autorizaciones,**](http://docs.oasiscom.com/Operacion/is/salud/eautorizacion/movaut/eaut) y crea un nuevo registro. 

![](Imagen 15 esoa.png) 

Allí se debe crear un registro con documento y concepto **AS** y agregar la ubicación desde donde se realiza la autorización. Seguidamente, en el campo *“Id Afiliado”* se ingresa el número de identificación del afiliado o se consulta por medio del zoom, al seleccionar el afiliado, los demás campos se diligenciarán automáticamente.

*“Información Adicional”,* en esta sección se debe ingresar la información correspondiente a los diagnósticos del paciente, asociar el documento y número de la solicitud de autorización realizada previamente en la aplicación [ESOA](http://docs.oasiscom.com/Operacion/is/salud/eautorizacion/movaut/esoa#solicitud-de-autorizaciones), si el servicio es considerado de alto costo se debe activar el flag y asociar el siniestro correspondiente. En caso de que el afiliado haya interpuesto una tutela se incluirá la fecha del acta de la tutela y el NIT del imputable. Finalmente, se debe incluir el número de identificación, nombre y especialidad del médico que realiza los diagnósticos.

![](Imagen 16 esoa.png)

*“Información Solicitud”,* en esta sección se debe ingresar los datos del prestador o *IPS* que solicita el servicio al afiliado.

![](Imagen 17 esoa.png)

Finalmente, se ingresan los datos del usuario que está diligenciando la autorización y se guarda el registro.

## [Detalle aplicación EAUT - Autorizaciones](http://docs.oasiscom.com/Operacion/is/salud/eautorizacion/movaut/esoa#detalle-aplicación-eaut-autorizaciones)

Guardado el registro en el maestro, en el detalle de la aplicación EAUT vamos a agregar el producto o servicio que se solicita en la autorización. 

![](Imagen 18 esoa.png)

Allí seleccionamos del zoom el producto o servicio que se requiere, seguidamente, debemos indicar la clasificación la cual estará relacionada con el producto elegido.

A continuación, al ingresar al zoom del campo *“Doc Documento1”,* aparecerán los contratos con los prestadores o externos que proporcionan el servicio y que el afiliado tiene relacionado según su escenario asignado. 

Este zoom mostrará los contratos con el valor del servicio de cada prestador.

![](Imagen 19 esoa.png)

![](Imagen 20 esoa.png)

El usuario de la EPS que diligencia la autorización selecciona al prestador o IPS que decida y automáticamente se diligenciarán los siguientes datos de *Número1, Ubicación 1, Tercero y Nombre de Tercero.* La sede a donde se remitirá el afiliado debe ser seleccionada por el usuario de la EPS.

![](Imagen 21 esoa.png)

En el campo *“Cantidad”* indicar la cantidad de veces que se autoriza el servicio. En caso de que el afiliado corresponda al régimen subsidiado, se debe ingresar el valor del copago y seleccionar de la lista desplegable *“Copago”* la opción que corresponda.

**Nota:** se pueden autorizar varios servicios para una misma IPS en el mismo documento de autorización, pero no se pueden autorizar varios servicios en diferentes IPS, en este caso, cada servicio se debe autorizar por un documento AS diferente.
El copago es calculado de forma automática para los afiliados que sean régimen subsidiado, en caso de ser contributivo se calculará la cuota moderadora.

Es posible adjuntar al documento AS los archivos que correspondan para la autorización del servicio.

![](Imagen 22 esoa.png)

Diligenciada en su totalidad la autorización, se debe procesar desde la barra de herramientas del maestro.

![](Imagen 23 esoa.png)





















