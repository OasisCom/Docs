---
layout: default
title: Saldos de Activos
permalink: /Operacion/erp/activos/hsaldo/hssp
editable: si
---

# Saldos de Activos - HSSP

En esta aplicación puedes realizar los siguientes movimientos:

* Verificación de saldos de activos fijos que han sido ingresados por la aplicación OFAC - Facturas de compra   
* Verificación de saldos de activos fijos que han sido ingresados por la aplicación HMOV - Movimientos  


Realizado con anterioridad el movimiento de ingreso de Activo Fijo por Compras en la aplicación [**OFAC - Facturas de Compras**](http://docs.oasiscom.com/Operacion/scm/compras/ofactura/ofac) y luego de haber llenado la hoja de vida del activo fijo en la aplicación [**HACT - Activos**](http://docs.oasiscom.com/Operacion/erp/activos/hbasica/hact), consultamos los activos en la aplicación HSSP y veremos que estos se encuentran valorizados por el Costo + IVA.

![](hssp.png)

En el campo llamado Balance Quantity Use Book, dice cuántos meses le quedan pendientes al activo por depreciar

![](hssp3.png)


Realizado con anterioridad el movimiento de ingreso de Activo Fijo por HMOV en la aplicación [**HMOV - Movimientos**](http://docs.oasiscom.com/Operacion/erp/activos/hmovimient/hmov#manejo-de-iva-en-activos-fijos), consultamos los activos en la aplicación HSSP y veremos que estos se vieron aumentados en las cifras correspondientes al movimiento.

![](hssp1.png)

![](hssp2.png)  

##  Saldos de la depreciación  

Después de verificados en la contabilización del [**HMOV - Movimientos**](http://docs.oasiscom.com/Operacion/erp/activos/hmovimient/hmov#Movimiento-de-Depreciación-de-un-Activo-fijo) la acreditación y debitación del movimiento que creamos de un activo fijo, filtramos el activo que deseamos consultar y el sistema nos muestra el valor por el cual se generó la depreciación por medio de un documento MA número 3.  Al finalizar, el sistema nos va a indicar que se generó 1 mes de depreciación y por lo tanto, nos quedan 59 meses por depreciar (en el ejemplo)  

![](hssp4.png)



