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
5.3 [Instructivo Integración OasisCom](http://docs.oasiscom.com/Operacion/ebportal/#instructivo-integración-oasiscom)  
6. [Actualización RUT Hoja 2 - Facturador Electrónico](http://docs.oasiscom.com/Operacion/ebportal/#actualización-rut-hoja-2---facturador-electrónico)


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

**Nota:** las plantillas de envío de correos se visualizarán con el logo de la empresa de donde el usuario se encuentre en sesión.  


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

<ROWS xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <OPERATIONS> <!--Apertura de la primera transaccion sea de factura o de nota-->
  	<CLIENT> <!--Apertura del segmento que contiene los datos del cliente-->
  	  <COMPANYID>1</COMPANYID> <!--Numero de la compañia en OasisCom este numero lo asigna OasisCom--> 
      <CLIENTTYPE>C</CLIENTTYPE> <!--Indica el tipo de documento de identificacion del cliente ejemplo C = (Cedula) N = (NIT)-->
      <CLIENTID>80122622</CLIENTID> <!--Numero de identificacion del cliente que se relaciona en la factura o nota-->
      <CHECKDIGIT>0</CHECKDIGIT> <!--Digito de verificacion del documento del cliente-->
      <CLIENTNAME>PEREZ RAMIREZ JOSE JUAN</CLIENTNAME> <!--Nombre del cliente o Razon social que se relaciona en la factura o nota-->
      <GEOGRAPHICLOCATIONID>11001</GEOGRAPHICLOCATIONID> <!--Codigo DANE de la ubicacion geografica del cliente-->
      <CELPHONE>3007548907</CELPHONE> <!--Numero del celular del cliente que se relaciona en la factura o nota-->
      <ADDRESS>CALLE 134 #72-50 CS 72</ADDRESS> <!--Direccion del cliente que se relaciona en la factura o nota-->
      <EMAIL>miguel.riano@oasiscom.com</EMAIL> <!--Correo electronico del cliente al cual se le envia la factura lo nota-->
      <TAXTYPEID>C</TAXTYPEID> <!--Indica el regimen al cual pertence el cliente C = (Comun) S = (Simplificado)-->
  	</CLIENT> <!--Cierre del segmento que contiene los datos del cliente-->
    <OPERATION> <!--Apertura del encabezado de la factura o la nota-->
      <COMPANYID>1</COMPANYID> <!--Numero de la compañia en OasisCom este numero lo asigna OasisCom-->
      <DOCUMENTID>FC </DOCUMENTID> <!--Prefijo que indica el tipo de documento FC(facturas), DV(notas credito), NB(notas debito)-->
      <NUMBERID>3000</NUMBERID> <!--Numero de la factura o nota-->
      <LOCATIONID>1</LOCATIONID> <!--Ubicacion por la cual se hace la factura o la nota-->
      <CONCEPTID>FC </CONCEPTID> <!--Prefijo que indica el tipo de concepto de la transacccion si no se aplica enviar el mismo dato de DOCUMENTID-->
      <DATE>04/07/2018         </DATE> <!--Fecha la cual se hace la factura o la nota-->
      <HOUR>04/07/2018 08:58:03:733</HOUR> <!--Hora la cual se hace la factura o la nota-->
      <CLIENTID>80122622</CLIENTID> <!--Cliente (adquiriente) al cual se hace la factura o la nota-->
      <DIRECTIONID>0</DIRECTIONID> <!--Hace referencia a la sucursal del cliente si no se maneja se debe colocar cero-->
      <VENDORID>80122622</VENDORID> <!--Vendedor el cual es asigando a la factura si no se maneja se debe colocar cero-->
      <EXPIRATION>05/08/2018         </EXPIRATION> <!--Fecha de vencimiento de la factura o la nota-->
      <CONDITIONPAYMENTID>0</CONDITIONPAYMENTID> <!--Indica la condicion de pago que tiene la factura o la nota ejemplo 0 = (CONTADO) 1= (CONTRA ENTREGA) 2 = (CREDITO)-->
      <STATE>P</STATE> <!--Constante que debe tener el valor de P-->
      <OBSERVATION>
      </OBSERVATION> <!--Observacion a nivel general de la factura o la nota-->
      <BRUTE>5883.0000</BRUTE> <!--Valor bruto de la factura o la nota-->
      <DISCOUNT>630.0000</DISCOUNT> <!--Valor del descuento de la factura o la nota-->
      <SUBTOTAL>5253.0000</SUBTOTAL> <!--Valor subtotal de la factura o la nota-->
      <TAXSALE>997.0000</TAXSALE> <!--Valor del IVA de la factura o la nota-->
      <TOTAL>6250.0000</TOTAL> <!--Valor total de la factura o la nota-->
      <RETENTION>0.0000</RETENTION> <!--Valor de las retenciones aplicadas en la factura o la nota-->
      <NET>6250.0000</NET> <!--Valor Neto de la factura o la nota-->
      <STATUS>N</STATUS> <!--Constante que debe tener el valor de N-->
      <DOCUMENTID1>FC </DOCUMENTID1> <!--Prefijo que indica el tipo de documento FC(facturas), DV(notas credito), NB(notas debito)-->
      <NUMBERID1>1023</NUMBERID1> <!--Numero de la factura o nota-->
      <LOCATIONID1>1</LOCATIONID1> <!--Ubicacion por la cual se hace la factura o la nota-->
      <CURRENCYID>0</CURRENCYID> <!--Moneda en la cual se hace la factura o la nota 0 = (Pesos), 1 = Dolares-->
      <EXCHANGERATE>0</EXCHANGERATE> <!--Tasa de Cambio cuando la moneda es mayor a cero en la factura o la nota 0 = (Pesos), 1 = Dolares-->
      <PURCHASEORDER>0</PURCHASEORDER> <!--Numero de la orden de compra si no aplica dejar en cero-->
      <REFERENCE1>0</REFERENCE1> <!--Codigo de referencia en caso de necesitarse si no aplica dejar en cero-->
    </OPERATION> <!--Cierre del encabezado de la factura o la nota-->
    <OPERATIONDETAIL> <!--Apertura del detalle de la factura o la nota del primer renglon-->
      <COMPANYID>1</COMPANYID> <!--Numero de la compañia en OasisCom este numero lo asigna OasisCom-->
      <DOCUMENTID>FC </DOCUMENTID> <!--Prefijo que indica el tipo de documento FC(facturas), DV(notas credito), NB(notas debito)-->
      <NUMBERID>3000</NUMBERID> <!--Numero de la factura o nota-->
      <LOCATIONID>1</LOCATIONID> <!--Ubicacion por la cual se hace la factura o la nota-->
      <ROWID>1</ROWID> <!--Renglon del item de la factura o la nota-->
      <PRODUCTID>2000338</PRODUCTID> <!--Codigo del producto o servicio en la factura o la nota-->
      <DESCRIPTION>2000338-GUSANILLOS</DESCRIPTION> <!--Descripcion del producto o servicio en la factura o la nota-->
      <QUANTITY>10.0000</QUANTITY> <!--Cantidad de unidades que se ingresan en la factura o la nota-->
      <PRICE>500</PRICE> <!--Precio unitario del producto o servicio ingresado en la factura o la nota-->
      <TAXSALEPERCENTAGE>19.0000</TAXSALEPERCENTAGE> <!--Porcentaje del IVA aplicado al producto en la factura o la nota-->
      <DISCOUNTPERCENTAGE>15</DISCOUNTPERCENTAGE> <!--Descuento en % aplicado en la factura o la nota-->
      <TOTAL>3572.0000</TOTAL> <!--Valor total del producto en la factura o la nota-->
      <EXPIRATION>01/01/1900</EXPIRATION> <!--Fecha de vencimiento del producto si no aplica dejar 01/01/1900-->
      <LOTID></LOTID> <!--Lote del producto campo alfanumerico si no aplica dejar vacio-->
      <OBSERVATION>
      </OBSERVATION> <!--Observacion a nivel del producto en la factura o la nota-->
    </OPERATIONDETAIL> <!--Cierre del detalle de la factura o la nota del primer renglon-->
    <OPERATIONDETAIL> <!--Apertura del detalle de la factura o la nota del segundo renglon-->
      <COMPANYID>1</COMPANYID> <!--Numero de la compañia en OasisCom este numero lo asigna OasisCom-->
      <DOCUMENTID>FC </DOCUMENTID> <!--Prefijo que indica el tipo de documento FC(facturas), DV(notas credito), NB(notas debito)-->
      <NUMBERID>3000</NUMBERID> <!--Numero de la factura o nota-->
      <LOCATIONID>1</LOCATIONID> <!--Ubicacion por la cual se hace la factura o la nota-->
      <ROWID>2</ROWID> <!--Renglon del item de la factura o la nota-->
      <PRODUCTID>200224</PRODUCTID> <!--Codigo del producto o servicio en la factura o la nota-->
      <DESCRIPTION>200224-GALLETA CLUB SOCIAL</DESCRIPTION> <!--Descripcion del producto o servicio en la factura o la nota-->
      <QUANTITY>5.0000</QUANTITY> <!--Cantidad de unidades que se ingresan en la factura o la nota-->
      <PRICE>400</PRICE> <!--Precio unitario del producto o servicio ingresado en la factura o la nota-->
      <TAXSALEPERCENTAGE>19.0000</TAXSALEPERCENTAGE> <!--Porcentaje del IVA aplicado al producto en la factura o la nota-->
      <DISCOUNTPERCENTAGE>0</DISCOUNTPERCENTAGE> <!--Descuento en % aplicado en la factura o la nota-->
      <TOTAL>1681.0000</TOTAL> <!--Valor total del producto en la factura o la nota-->
      <EXPIRATION>01/01/1900</EXPIRATION> <!--Fecha de vencimiento del producto si no aplica dejar 01/01/1900-->
      <LOTID></LOTID> <!--Lote del producto campo alfanumerico si no aplica dejar vacio-->
      <OBSERVATION>
      </OBSERVATION> <!--Observacion a nivel del producto en la factura o la nota-->
    </OPERATIONDETAIL> <!--Cierre del detalle de la factura o la nota del segundo renglon-->
    <OPERATIONLIQUIDATION> <!--Apertura de la liquidacion de la factura o la nota del segundo renglon-->
      <COMPANYID>1</COMPANYID> <!--Numero de la compañia en OasisCom este numero lo asigna OasisCom-->
      <DOCUMENTID>FC </DOCUMENTID> <!--Prefijo que indica el tipo de documento FC(facturas), DV(notas credito), NB(notas debito)-->
      <NUMBERID>3000</NUMBERID> <!--Numero de la factura o nota-->
      <LOCATIONID>1</LOCATIONID> <!--Ubicacion por la cual se hace la factura o la nota-->
      <ROWID>1</ROWID> <!--Renglon de la liquidacion de la factura o la nota-->
      <CODEID>IVA</CODEID> <!--Codigo que indica si se liquida IVA, ICO (Impuesto al consumo) o RIC (retencion de ICA) en la factura o la nota-->
      <NATURE>D</NATURE> <!--Naturaleza de la liquidacion D = debito, C = credito en la factura o la nota-->
      <VALUE>997.0000</VALUE> <!--Valor liquidado del codigo IVA o ICO o RIC en la factura o la nota-->
      <BASE>5253.0000</BASE> <!--Valor base liquidado del codigo IVA o ICO o RIC en la factura o la nota-->
      <PERCENTAGE>19.0000</PERCENTAGE> <!--Porcentaje utilizado para liquidar del codigo IVA o ICO o RIC en la factura o la nota-->
    </OPERATIONLIQUIDATION> <!--Cierre de la liquidacion de la factura o la nota del segundo renglon-->
  </OPERATIONS> <!--Cierre de la primera transaccion sea de factura o de nota-->
  <OPERATIONS> <!--Apertura de la segunda transaccion sea de factura o de nota-->
  	<CLIENT>
      <CLIENTTYPE>C</CLIENTTYPE> <!--Indica el tipo de documento de identificacion del cliente ejemplo C = (Cedula) N = (NIT)-->
      <CLIENTID>80122622</CLIENTID> <!--Numero de identificacion del cliente que se relaciona en la factura o nota-->
      <CHECKDIGIT>0</CHECKDIGIT> <!--Digito de verificacion del documento del cliente-->
      <CLIENTNAME>PEREZ RAMIREZ JOSE JUAN</CLIENTNAME> <!--Nombre del cliente o Razon social que se relaciona en la factura o nota-->
      <GEOGRAPHICLOCATIONID>11001</GEOGRAPHICLOCATIONID> <!--Codigo DANE de la ubicacion geografica del cliente-->
      <CELPHONE>3007548907</CELPHONE> <!--Numero del celular del cliente que se relaciona en la factura o nota-->
      <ADDRESS>CALLE 134 #72-50 CS 72</ADDRESS> <!--Direccion del cliente que se relaciona en la factura o nota-->
      <EMAIL>miguel.riano@oasiscom.com</EMAIL> <!--Correo electronico del cliente al cual se le envia la factura lo nota-->
      <TAXTYPEID>C</TAXTYPEID> <!--Indica el regimen al cual pertence el cliente C = (Comun) S = (Simplificado)-->
  	</CLIENT>
    <OPERATION>
      <COMPANYID>1</COMPANYID>
      <DOCUMENTID>FC </DOCUMENTID>
      <NUMBERID>3001</NUMBERID>
      <LOCATIONID>1</LOCATIONID>
      <CONCEPTID>FC </CONCEPTID> <!--Prefijo que indica el tipo de concepto de la transacccion si no se aplica enviar el mismo dato de DOCUMENTID-->
      <DATE>04/07/2018         </DATE>
      <HOUR>04/07/2018 08:59:59:370</HOUR>
      <CLIENTID>17336885</CLIENTID>
      <DIRECTIONID>0</DIRECTIONID>
      <VENDORID>80122622</VENDORID> 
      <EXPIRATION>19/08/2018         </EXPIRATION>
      <CONDITIONPAYMENTID>0</CONDITIONPAYMENTID> 
      <STATE>P</STATE>
      <OBSERVATION>
      </OBSERVATION>
      <BRUTE>5042.0000</BRUTE>
      <DISCOUNT>0.0000</DISCOUNT>
      <SUBTOTAL>5042.0000</SUBTOTAL>
      <TAXSALE>958.0000</TAXSALE>
      <TOTAL>6000.0000</TOTAL>
      <RETENTION>0.0000</RETENTION>
      <NET>6000.0000</NET>
      <STATUS>N</STATUS>
      <DOCUMENTID1>FC </DOCUMENTID1>
      <NUMBERID1>1024</NUMBERID1>
      <LOCATIONID1>1</LOCATIONID1>
      <CURRENCYID>0</CURRENCYID>
      <EXCHANGERATE>0</EXCHANGERATE> 
      <PURCHASEORDER>0</PURCHASEORDER> 
      <REFERENCE1>0</REFERENCE1> 
    </OPERATION>
    <OPERATIONDETAIL>
      <COMPANYID>1</COMPANYID>
      <DOCUMENTID>FC </DOCUMENTID>
      <NUMBERID>3001</NUMBERID>
      <LOCATIONID>1</LOCATIONID>
      <ROWID>1</ROWID>
      <PRODUCTID>200224</PRODUCTID>
      <DESCRIPTION>200224-GALLETA CLUB SOCIAL</DESCRIPTION>
      <QUANTITY>15.0000</QUANTITY>
      <PRICE>400</PRICE>
      <TAXSALEPERCENTAGE>19.0000</TAXSALEPERCENTAGE>
      <DISCOUNTPERCENTAGE>0</DISCOUNTPERCENTAGE>
      <TOTAL>5042.0000</TOTAL>
      <EXPIRATION>01/01/1900</EXPIRATION> <!--Fecha de vencimiento del producto si no aplica dejar 01/01/1900-->
      <LOTID></LOTID> <!--Lote del producto campo alfanumerico si no aplica dejar vacio-->
      <OBSERVATION>
      </OBSERVATION>
    </OPERATIONDETAIL>
    <OPERATIONLIQUIDATION>
      <COMPANYID>1</COMPANYID>
      <DOCUMENTID>FC </DOCUMENTID>
      <NUMBERID>3001</NUMBERID>
      <LOCATIONID>1</LOCATIONID>
      <ROWID>1</ROWID>
      <CODEID>IVA</CODEID>
      <NATURE>D</NATURE>
      <VALUE>958.0000</VALUE>
      <BASE>5042.0000</BASE>
      <PERCENTAGE>19.0000</PERCENTAGE>
    </OPERATIONLIQUIDATION>
  </OPERATIONS> <!--Cierre de la segunda transaccion sea de factura o de nota-->
</ROWS>







![](ebportal7.png)
![](ebportal8.png)
![](ebportal9.png)
![](ebportal10.png)
![](ebportal21.png)
![](ebportal22.png)


### [Archivo plano](http://docs.oasiscom.com/Operacion/ebportal/#archivo-plano)

Cuando no se cuenta con una estructura en formato XML, OasisCom provee una estructura en formato de _archivo plano_ el cual debe ser cargado de forma manual a la plataforma de OasisCom por medio de la aplicación BINT - Interfaces.  

**Nota:** al cargar el archivo plano, el sistema creará los terceros y productos en caso de que no existan previamente.  

Los datos relacionados al color amarillo son los que irán diligenciados en el maestro de la aplicación FFAC - Facturas y los asociados al color verde en el detalle.  

![](ebportal11.png)

La estructura enviada por OasisCom cuenta con comentarios en cada campo para facilitar su diligenciamiento.  

![](ebportal15.png)


Ingresada toda la información en el archivo de Excel, debemos eliminar los renglónes señalados en la siguiente imagen para así proceder a convertirlo en formato _.CVS_.  

![](ebportal12.png)

Al eliminar los anteriores renglones deberá quedar así:  

![](ebportal13.png)

Para convertir el archivo en formato **.CVS** vamos a _Archivo ![](flecha.png) Guardar como ![](flecha.png) Elegimos una ubicación ![](flecha.png) Asignamos un nombre ![](flecha.png) Tipo: CSV (delimitado por comas) ![](flecha.png) Guardar_.  

![](ebportal14.png)

**_IMPORTANTE:_** Convertido el archivo en formato _.CVS_, este se debe abrir en el editor de texto y eliminar el último espacio en blanco.  

![](ebportal16.png)

Quedando el cursor en el último caracter del último renglón.  

![](ebportal17.png)

### [Instructivo Integración OasisCom](http://docs.oasiscom.com/Operacion/ebportal/#instructivo-integración-oasiscom)


A continuación, se dará a conocer la data requerida para realizar la carga de documentos electrónicos en los formatos XLS o TXT para el proceso de facturación electrónica en OasisCom.  

#### _Definiciones_

Descripción de cada una de las columnas de la malla de validación:  

**Atributo:** Corresponde al nombre del campo a definir.  
**Tipo:** Identifica si los datos del campo son a nivel de maestro **(M)** o del detalle **(D)** de la transacción, factura o nota.  
**Descripción:** Breve explicación de la característica del campo en cuestión.  
**T:** Corresponde al tipo de dato del campo:  

 * **D**: Campo tipo fecha.  
 * **N:** Campo de tipo número (Entero, Decimal).  
 * **C:** Carácter o cadena de caracteres.  

**Longitud máxima:** En esta columna se describe el tamaño máximo requerido para el campo (en números).  
**Req. Valor:** Identifica si el campo es o no es obligatorio. **S** para si, **N** para no.  
**Formato:** Ejemplo de cómo debe ser llenado cada campo.  


#### _Malla de validación_

A continuación, se describe la malla de validación con la información precisa para realizar la carga de documentos electrónicos.  

![](ebportal18.png)
![](ebportal19.png)
![](ebportal20.png)



## [Actualización RUT Hoja 2 - Facturador Electrónico](http://docs.oasiscom.com/Operacion/ebportal/#actualización-rut-hoja-2---facturador-electrónico)

El siguiente instructivo contiene el paso a paso para actualizar RUT (hoja #2) y asociar al Proveedor Tecnológico (OasisCom S.A.S) en la página de la DIAN.  

* Ingresar a la página web de la DIAN (https://muisca.dian.gov.co) y loguearse.  

![](1.png)

* En el menú izquierdo seleccionar la opción _Registro Único Tributario_.  

![](2.png)

* De la lista desplegable, seleccionar la opción _Actualizar RUT_.  

![](3.png)

* Seguidamente dar click en el botón _Continuar_.  

![](4.png)

* Dar click en el botón _Continuar_.  

![](5.png)

* De la lista desplegable seleccionar la **Hoja 2**.  

![](6.png)

* Para cargar el documento damos click en el botón _Continuar_.  

![](7.png)

* En el formulario de la **Hoja 2**, en el renglón 89 seleccionar la opción _74 - Información Proveedor de Servicios Tecnológicos PST_.  

![](8.png)

* Allí mismo, en el renglón 90 seleccionar la fecha exacta en la que se asoció al proveedor tecnológico.  

![](9.png)

* Seguidamente, en el renglón 91 ingresar el número de NIT de OASISCOM S.A.S **830003840-5**.  

![](10.png)

* Finalmente, guardar y firmar para formalizar el documento.  
