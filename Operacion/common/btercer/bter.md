---
layout: default
title: Terceros
permalink:  /Operacion/common/btercer/bter
editable: si
---

# TERCEROS - BTER

**Menú**

* [Parametrización Tipos de Precio](http://docs.oasiscom.com/Operacion/common/btercer/bter#parametrizacion-tipos-de-precio)  
* [Parametrización de Terceros para la Liquidación de Comisiones](http://docs.oasiscom.com/Operacion/common/btercer/bter#parametrizacion-de-terceros-para-la-liquidación-de-comisiones)  
* [Parametrización fidelización de clientes](http://docs.oasiscom.com/Operacion/common/btercer/bter#parametrización-fidelización-de-clientes)


En esta aplicación parametrizamos o registramos todos los terceros que podemos tener, para el sistema Oasis la palabra terceros se hace referencia a: empleados, clientes, proveedores, afiliados, vendedores, asociados, entre otros. Es decir, todas las personas que interactúan o se relacionan con nuestro negocio.


![](bter1.png)


Si la persona que se va a ingresar a la opción **BTER – Terceros**, es empleado de la compañía es importante diligenciar la fecha exacta de ingreso a la empresa y activar el Check _Empleado_, de esta manera al ingresar a la siguiente opción **NBEM – Empleados** solo se debe consultar por número de cédula y editar los campos del maestro que hagan falta.

![](bter2.png)

El maestro cuenta con el campo **CiiuId** el cual permite seleccionar de una lista desplegable la actividad económica del tercero. Las actividades económicas que se visualizan en la lista son parametrizables en la aplicación [**BCRC - Características**](http://docs.oasiscom.com/Operacion/common/bcomer/bcrc).  

_Parametrización en BCRC._

![](bter5.png)

Campo _CiiuId_

![](bter6.png)


En el detalle de la aplicación BTER, se diligenciarán automáticamente algunas pestañas de acuerdo con la información registrada en el maestro. En la pestaña _Novedad_, es posible visualizar las novedades ingresadas previamente en las aplicaciones ZNOV - Novedades Asociados y BNOV - Novedades.  

![](bter4.png)


## [Parametrización Tipos de Precio](http://docs.oasiscom.com/Operacion/common/btercer/bter#parametrizacion-tipos-de-precio)

Para realizar correctamente la parametrización, se debe asignar inicialmente el tipo de precio en la aplicación **BTER** en el campo _Tipo Precio_.  

Seleccionamos el tercero, ingresamos el tipo de precio y damos click en el botón _Guardar_.  

![](bter3.png)

Seguidamente, nos dirigimos a la aplicación [**BUBI - Ubicaciones Organización**](http://docs.oasiscom.com/Operacion/common/borgan/bubi) en donde continuaremos con la parametrización de Tipo de Precio.  

## [Parametrización de Terceros para la Liquidación de Comisiones](http://docs.oasiscom.com/Operacion/common/btercer/bter#parametrizacion-de-terceros-para-la-liquidación-de-comisiones)

Para designar un _tipo de comisión_ a un tercero o cliente, se realiza desde la aplicación **BTER - Terceros**:  

Se consulta el tercero correspondiente y se ingresa a la pestaña _Ventas_ del detalle:  

![](liqcomision10.png)

En el campo _**PlanComission**_, se deberá ingresar el Id del tipo de comisión correspondiente, los cuales fueron parametrizados en la opción [**FBPC - Tipos de Comisión**](http://docs.oasiscom.com/Operacion/scm/facturacion/fbasica/fbpc):

![](liqcomision11.png)

Realizada la parametrización correspondiente de los terceros y de los tipos de comisión en la aplicación [**FBPC - Tipos de Comisión**](http://docs.oasiscom.com/Operacion/scm/facturacion/fbasica/fbpc), continuaremos a ejecutar el proceso especial de liquidación de comisiones en la aplicación [**FCLI - Liquidación de Comisiones**](http://docs.oasiscom.com/Operacion/scm/facturacion/fcomision/fcli).

## [**Parametrización fidelización de clientes**](http://docs.oasiscom.com/Operacion/common/btercer/bter#parametrización-fidelización-de-clientes)

En la aplicación **BTER** se deben registrar los clientes que podrán acumular puntos. En el momento del registro, se deberá marcar el flag _**Frecuente**_ ubicado en la pestaña del detalle llamada _Ventas_, esto permitirá al sistema identificar que por cada compra que realice dicho cliente, este acumulará puntos.  

![](jfac38.png)

_Conoce todo el proceso de Fidelización de Clientes_ [**Aquí**](http://docs.oasiscom.com/Operacion/scm/pos/jcajero/jfac#fidelizaci%C3%B3n-de-clientes).  