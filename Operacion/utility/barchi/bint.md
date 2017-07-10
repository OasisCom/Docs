---
layout: default
title: Interfaces
permalink: /Operacion/utility/barchi/bint
editable: si
---

# Interfaces - BINT

Esta aplicación permite cargar o descargar información sobre diferentes escenarios del sistema OasisCom, de acuerdo a una parametrización previa.  

## [Medios Magnéticos](http://docs.oasiscom.com/Operacion/utility/barchi/bint#medios-magnéticos)

En este caso, BINT permite descargar la información necesaria para generar los Médios Magnéticos.

**Publicación:** seleccionar de la lista desplegable el archivo que se desea descargar.  
**Operación:** seleccionar cual es la operación que se desea realizar para el archivo seleccionado, en el caso de medios magnéticos, _Descargar_.  
**Año:** indicar el año correspondiente a la generación del formato seleccionado.  
**Id Formato:** ingresar el número del formato seleccionado anteriormente en el campo publicación.  

Estos dos últimos campos _Año y Id Formato_ es importe que coincidan con la información del formato seleccionado, puesto que, de no ser así el sistema no descargará la información correcta.  

![](BINT1.png)

Ingresados los datos dar click en _Aceptar_, el sistema descargará el archivo seleccionado en un formato de Excel al cual se le deberá cambiar la extención del documento de _xlsx_ a _xls_, eliminando la última _x_. La información quedará en el mismo formato que lo exige la DIAN, dicho formato se puede validar en la página web de la entidad.  

Se debe tener en cuenta en el documento de Excel que se vaya a cargar a la DIAN, eliminar la columna en donde se indica el número del formato, puesto que, este número es interno del sistema OasisCom y no es necesario en la información que se vaya a enviar.  

## [Parametrización XML](http://docs.oasiscom.com/Operacion/utility/barchi/bint#parametrización-xml)

En BINT - Interfaces, generaremos el archivo de la publicación parametrizada anteriormente en la aplicación  [**BPUB - Publicaciones**](http://docs.oasiscom.com/Operacion/utility/barchi/bpub). Para ello, seleccionaremos la publicación de la lista desplegable del campo _Publicación_.  

![](BINT2.png)


#### **Descarga de archivos**

Al seleccionar la publicación, el sistema automáticamente asignará en el campo _Operación_ la opción **Download** y habilitará el campo _Date_, recordemos que este fue el campo colocado como tipo argumento en el detalle de la aplicación [**BARC - Archivos**](http://docs.oasiscom.com/Operacion/utility/barchi/barc), en este campo ingresaremos la fecha desde la cual se requiere descargar el archivo.  

![](BINT7.png)

Realizado lo anterior, damos click en el botón **Aceptar**. El sistema generará un archivo en el navegador Internet Explorer mostrando los registros descargados en formato _.XML_.  

![](BINT3.png)

#### **Carga de archivos**

Para subir un archivo se debe seleccionar la publicación previamente parametrizada de la lista del campo **Publicación**. El siguiente campo **Operación** será diligenciado automáticamente con la opción _Upload_.  

![](BINT4.png)

Seguidamente, dar click en el botón **Seleccionar archivo** y elegir de allí el que se desea cargar, tener presente que debe estar en formato _.XML_.  

![](BINT5.png)

Al seleccionar el archivo se debe dar clic en _Aceptar_ y posteriormente se cargará al sistema.  

![](BINT6.png)

Para verificar la información cargada en el sistema por medio de BINT - Interfaces, se puede acceder a las aplicaciones **EFFAC - Facturas** o **EOFAC - Facturas de Compra**.

## [Archivos planos de Salud](http://docs.oasiscom.com/Operacion/utility/barchi/bint#archivos-planos-de-salud)

En la aplicación BINT se crearon los _Dynamic_ para archivos planos (Movimientos), que permiten realizar algunos ajustes previamente con los registros antes de descargar los archivos oficiales.  

Al ingresar a la aplicación se debe seleccionar el archivo según su movimiento en el área de aseguramiento.  

![](bintsalud.png)





























