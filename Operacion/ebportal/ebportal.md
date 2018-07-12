---
layout: default
title: Factura Electronica
permalink: /Operacion/ebportal/
editable: si
---

# FACTURA ELECTRONICA

**Menú**  

1. [Correo Factura Electrónica](http://docs.oasiscom.com/Operacion/ebportal/#correo-factura-electrónica)  
2. [Código QR](http://docs.oasiscom.com/Operacion/ebportal/#código-qr)  
3. [Envío de mensajes de texto](http://docs.oasiscom.com/Operacion/ebportal/#envío-de-mensajes-de-texto)  
4. [Adjuntos en la factura electrónica](http://docs.oasiscom.com/Operacion/ebportal/#adjuntos-en-la-factura-electrónica)  
5. [Integración de documentos electrónicos con OasisCom](http://docs.oasiscom.com/Operacion/ebportal/#integración-de-documentos-electrónicos-con-oasiscom)  
5.1 [Archivo XML](http://docs.oasiscom.com/Operacion/ebportal/#archivo-xml)  
5.2 [Archivo plano](http://docs.oasiscom.com/Operacion/ebportal/#archivo-plano)  



## [Correo Factura Electrónica](http://docs.oasiscom.com/Operacion/ebportal/#correo-factura-electrónica)

La plantilla de envío de facturas electrónicas contiene tres links que permiten confirmar el recibido de la factura, _Aceptarla_ o _Rechazarla_. Igualmente, para cada acción se envía una plantilla de correo como respuesta.  

![](ebportal.png)

Plantilla al confirmar el recibido de la factura.  

![](ebportal3.png)

![](ebportal4.png)


Plantilla al _Aceptar_ una factura.  

![](ebportal1.png)

Plantilla al _Rechazar_ una factura.  

![](ebportal2.png)

## [Código QR](http://docs.oasiscom.com/Operacion/ebportal/#código-qr)

El formato de factura electrónica que se envía al adquiriente contiene un Código QR, que le permitirá ver desde un dispositivo móvil los datos de la factura.  

![](codigoqr.png)

## [Envío de mensajes de texto](http://docs.oasiscom.com/Operacion/ebportal/#envío-de-mensajes-de-texto)

Generada la factura electrónica, el sistema enviará automáticamente un mensaje de texto al número del dispositivo móvil del cliente registrado en el sistema informando de la creación de la factura.  


## [Adjuntos en la factura electrónica](http://docs.oasiscom.com/Operacion/ebportal/#adjuntos-en-la-factura-electrónica)

En el envío de la factura electrónica es posible agregar archivos adjuntos, para ello, se debe parametrizar inicialmente los campos _Ebill_ y _EbillAdjunct_ en la aplicación **SEMP - Empresas**, lo cual indicará que la empresa emite facturación electrónica y podrá adjuntar archivos en la misma.  

![](ebportal5.png)

Los archivos adjuntos que se visualizarán en el correo eletrónico son:  

1. Documento **.pdf** con el formato fisico de la factura.  
2. Archivo **.zip** con la factura electrónica en formato **.xml**.  
3. Los demás archivos adjuntos que hayan sido agregados en la factura electrónica al momento de generarla.  

![](ebportal6.png)

## [Integración de documentos electrónicos con OasisCom](http://docs.oasiscom.com/Operacion/ebportal/#integración-de-documentos-electrónicos-con-oasiscom)

### [Archivo XML](http://docs.oasiscom.com/Operacion/ebportal/#archivo-xml)

Mediante archivo XML el cliente puede subir documentos electrónicos a la plataforma de OasisCom o consumiendo un servicio web que provee OasisCom para que este cargue sea de forma automática.  

**Estructura**

![](ebportal7.png)
![](ebportal8.png)
![](ebportal9.png)
![](ebportal10.png)

### [Archivo plano](http://docs.oasiscom.com/Operacion/ebportal/#archivo-plano)

Cuando no se cuenta con una estructura en formato XML, OasisCom provee una estructura en formato de _archivo plano_ el cual debe ser cargado de forma manual a la plataforma de OasisCom por medio de la aplicación BINT - Interfaces.  

**Nota:** al cargar el archivo plano, el sistema creará los terceros y productos en caso de que no existan previamente.  

Los datos relacionados al color amarillo son los que irán diligenciados en el maestro de la aplicación FFAC - Facturas y los asociados al color verde en el detalle.  

![](ebportal11.png)

La estructura enviada por OasisCom cuenta con comentarios en cada campo para facilitar su diligenciamiento.  

![](ebportal15.png)


Ingresada toda la información en el archivo de Excel, debemos eliminar el encabezado para así proceder a convertirlo en formato _.CVS_.  

![](ebportal12.png)

Al eliminar el encabezado deberá quedar así:  

![](ebportal13.png)

Para convertir el archivo en formato **.CVS** vamos a _Archivo **-->** Guardar como **-->** Elegimos una ubicación **-->** Asignamos un nombre **-->** Tipo: CSV (delimitado por comas) **-->** Guardar_.  

![](ebportal14.png)

**_IMPORTANTE:_** Convertido el archivo en formato _.CVS_, este se debe abrir en el editor de texto y eliminar el último espacio en blanco.  

![](ebportal16.png)

Quedando el cursor en el último caracter del último renglón.  

![](ebportal17.png)


_**Instructivo Integración OasisCom**_

[![PDF](pdf.png)](https://oasiserp.sharepoint.com/:b:/s/OasisKB/Manuales/EexmSH7NUoJDjdQ6f5cll-8BqWtyLD0ONlAKiOMvMrEB8w?e=h1w584)
