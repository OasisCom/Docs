---
layout: default
title: Movimientos
permalink: /Operacion/scm/wms/wmmovimient/eitra
editable: si
---

# EITRA - Trabajos Web

La aplicación EITRA permite realizar movimientos logísticos.  

## [Empaque](http://docs.oasiscom.com/Operacion/scm/wms/wmmovimient/eitra)

La aplicación EITRA permite al usuario realizar el proceso de empaque de productos de forma rápida y evitar el tedioso proceso de realizarlo por medio de registros.  

Esta forma visual sólo está disponible cuando el concepto seleccionado sea un _PA - Empaque_.  

Para registrar el empaque de un pedido ingresamos a la aplicación EITRA y diligenciamos el formulario.  

![](eitra.png)

Los campos _**documento**_ y _**número**_ serán diligenciados por el sistema y no estarán habilitados para la edición. Se generará un documento _TI - Trabajos de Inventarios_.  

**Ubicación:** seleccionar del zoom la correspondiente.  
**Concepto:** Seleccionamos del zoom el concepto _PA_ referente a _EMPAQUE_.  

![](eitra1.png)


**Motivo:** ingresamos motivo 0.  
**Fecha:** seleccionar la fecha en que se realiza el registro del empaque.  
**Cliente Id:** este campo se diligenciará automáticamente en el momento que se haya seleccionado un pedido en el campo _NumberId1_.  
**DocumentId1:** el sistema traerá automáticamente el documento PD de Pedido.  
**LocationId1:** el sistema traerá automáticamente la ubicación 1.  
**NumberId1:** en este campo seleccionaremos del zoom el pedido que se desea empacar.  

Ingresamos los anteriores campos, damos click en _Guardar_. Inmediatamente el sistema arrojará un mensaje de control informando el número del registro.  


![](eitra2.png)

Ahora, nos desplazamos a la pestaña del detalle. Aquí encontraremos el esquema gráfico en donde podremos decidir en cuentas cajas se despachará el pedido y que cantidad de cada producto se irá en cada una.  

![](eitra3.png)

Si deseamos crear varias cajas de despacho, damos click en el botón **+**.  

![](eitra4.png)

**Botones:** 

![](boton1.png) Este botón permite agregar productos parcialmente.  

![](boton2.png) Este botón permite agregar el total de productos disponibles.  

En el siguiente ejemplo, agregaremos 3 unidades del producto 101, 5 unidades del producto 102 y una unidad del producto 102 segundo renglón.  



