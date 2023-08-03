---
layout: default
title: Admisiones
permalink: /Operacion/is/hospital/ghospital/gadm
editable: si
---

# Admisiones - GADM

Eta aplicación permite realizar Control y seguimiento de sesiones

* [Creación de Sesiones Manual](http://docs.oasiscom.com/Operacion/is/hospital/ghospital/gadm#creación-de-sesiones-manual)
* [Creación de Sesiones Automaticas GCAL](http://docs.oasiscom.com/Operacion/is/hospital/ghospital/gadm#creación-de-sesiones-automaticas-gcal)
* [Facturación Parcial](http://docs.oasiscom.com/Operacion/is/hospital/ghospital/gadm#facturación-parcial)


La aplicación **GADM - Admisiones** permite registrar la información para admisiones para fondo de hospital y los servicios por los cuales puede pasar el paciente.  

![](gadm.png)

En el maestro, al crear un nuevo registro, ingresaremos información como concepto de la admisión, el paciente asociado, la causa de la admisión, el servicio que requiere la admisión, entre otros datos.  

Damos clic en el botón _Guardar_ para que el registro sea creado en el maestro.  

![](gadm1.png)

En el detalle, se deberá especificar los servicios a los cuales tendrá disponibilidad el paciente.  

![](gadm2.png)

Se debe tener en cuenta que si se desmarca el check de Factura, el producto no se insertará en la opción **JFAC - Facturas** y por lo tanto no se factuará.  

![](gadm3.png)

Ingresa la información procesamos el documento dando click en el botón _Procesar_ ![](procesar.png).  

# [Creación de Sesiones Manual](http://docs.oasiscom.com/Operacion/is/hospital/ghospital/gadm#creación-de-sesiones-manual)


En la aplicación **GADM - Admisiones** es donde se realiza el conteo de las sesiones de los paquetes que va a adquirir el paciente

![](gadm12.png)

Para crear una sesión, se da click en la pestaña de **+** 

![](gadm4.png)

Este documento, se debe crear con concepto **AD - Admisiones**

![](gadm5.png)

La ubicación depende de cuantas se vayan a crear, El concepto debe agregarse cómo **CP - Paquetes** el cual se parametrizo en la aplicación [BDOC – DOCUMENTOS](https://docs.oasiscom.com/Capacitacion/Empower/parametrizacionbdoc)



![](gadm6.png)

El número del tercero es importante, ya que con ese se va a descontar el número de sesiones del paciente

![](gadm8.png)

Luego, se asocia la cita que se creo en la aplicación **[MGCAL – Calendario de Usuario](https://docs.oasiscom.com/Operacion/is/hospital/gcita/mgcal)** con el tipo de documento, numero y ubicacion y se procede a guardar la sesión

![](gadm13.png)

Después de creada la sesión, se asocian los productos que va a tener el paquete en el detalle, estos productos se encuentran parametrizados en la aplicación **[BMOT – MOTIVOS](https://docs.oasiscom.com/Capacitacion/Empower/parametrizacionbdoc)**

![](gadm9.png)

Una vez se procese la sesión, automáticamente va a realizar el número de sesiones que se van culminando en la parte del detalle

![](gadm10.png)

Si se requiere una factura para esta sesión, se activa el flag de factura, donde luego de procesar la sesión, se verá reflejada en la aplicación [GFAC – FACTURAS](https://docs.oasiscom.com/Operacion/is/hospital/gfacturacion/gfac)

![](gadm12.png)

Una vez ya se tenga todos los datos requeridos de la sesión, se procesa donde luego se deben realizar todos los procesos de creación de citas en la aplicación [GCAL – Calendario](https://docs.oasiscom.com/Operacion/is/hospital/gcita/gcal)

![](gadm11.png)

# [Creación de Sesiones Automaticas GCAL](http://docs.oasiscom.com/Operacion/is/hospital/ghospital/gadm#creación-de-sesiones-automaticas-gcal)

Para crear una sesión por medio de consultas dinámicamente, se debe tener una cita en estado **ASIGNADO** y dar click al botón **CREAR ADMISIÓN**

![](gadm14.png)

Este botón crear automáticamente una admisión, en la que se puede asignar los productos y los servicios que se trabajan en las consultas relacionadas a la cita.

En esta admisión, se crean los productos y servicios que empleará en la consulta, Cuanto es un servicio en el campo cantidad, se diligencia la cantidad de sesiones en la que se trabaja la consulta.

![](gadm15.png)

Cuando se cree una consulta, el sistema relacionará la admisión a esta consulta.

![](gadm16.png)

y al momento de procesar esta consulta, el sistema modifica automaticamente el número de la sesión en la admisión, para identificar cuantas sesiones hacen falta.

# [Facturación Parcial](http://docs.oasiscom.com/Operacion/is/hospital/ghospital/gadm#facturación-parcial)

El botón **Factura parcial** de las admisiones es un cobro en donde no se paga toda la factura, si no la cantidad que se tiene en el campo de **# sesiones** en la parte del detalle.

![](gadm17.png)

Al dar clic en botón Factura parcial el sistema genera una la factura parcial en la aplicación [GFAC – FACTURAS](https://docs.oasiscom.com/Operacion/is/hospital/gfacturacion/gfac) y en el detalle el sistema muestra cuantas sesiones se han facturado.

![](gadm18.png)

**Nota**: Es importante que la admisión este en estado activo si aun se encuentra vigente, de lo contrario el sistema no lo tendrá en cuenta.

![](gadm19.png)
