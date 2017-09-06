---
layout: default
title: Movimientos de inventario
permalink: /Operacion/scm/inventarios/imovimient/imov
editable: si
---

# IMRE - Recepción de Mercancía

La aplicación IMRE permite registrar la mercancía que se recepciona, tanto quien la transporta como las remisiones que contenga el viaje.  

![](imre.png)

En el maestro de la aplicación se creará un nuevo registro y se diligenciarán los siguientes campos:  

![](imre1.png)

**Documento:** ingresar documento ER correspondiente a Entrada de Mercancía. Los documentos son parametrizables en la aplicación [**BDOC - Documentos**](http://docs.oasiscom.com/Operacion/common/bsistema/bdoc).  
**Número:** el sistema asignará un número de consecutivo automáticamente cuando se guarde el registro.  
**Ubicación:** seleccionar la ubicación que recepciona la mercancía.  
**Concepto:** ingresar el concepto ER. Los conceptos son parametrizables en la aplicación [**BCON - Conceptos**](http://docs.oasiscom.com/Operacion/common/bsistema/bcon).  
**Tercero:** ingresar el número de identificación del usuario que recepciona la mercancía o seleccionarlo del zoom.  
**Vehículo:** seleccionar del zoom el vehículo que transporta la mercancía.  
**Conductor:** ingresar el número de identificación del conductor del vehículo o seleccionarlo del zoom.  
**Peso Cargado:** peso de la carga de mercancía.  

Ingresados los datos, damos click en el botón _Guardar_.  

Seguidamente nos dirigimos al detalle, en donde se especificará la distribución de la mercancía recibida.  

Se agrega un nuevo renglón, se ingresan los datos correspondientes a la carga que tiene remisión y se guardan los cambios dando click en el botón ![](imre3.png). Este proceso se realizará con cada remisión que tenga la mercancía recibida.  

![](imre2.png)

Ingresada la información anterior, se debe procesar el documento dando click en el botón _Procesar_ ![](imre5.png) ubicado en la barra de herramientas del maestro.  

![](imre6.png)

Al procesar, el sistema arrojará un mensaje de control indicando que el documento fue procesado satisfactoriamente.  

![](imre4.png)




