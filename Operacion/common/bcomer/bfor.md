---
layout: default
title: Comerciales
permalink: /Operacion/common/bcomer/bfor
editable: si
---

# Formas de Pago - BFOR

En esta aplicación se identifican las formas de pago que se pueden realizar bajo las políticas de la compañía.  

![](bfor1.png)

**Forma de pago:** Consecutivo automático que arroja el sistema.  
**Nombre forma de pago:** El nombre de la forma de pago que vamos a parametrizar, ejemplo: efectivo, tarjeta débito, tarjeta crédito, vale, entre otros.  
**Tipo:** Seleccionar de acuerdo a la lista que el sistema arroja, si es bonos, tarjetas, cheque, efectivo, puntos, crédito entre otros.  
**Código:** Se debe indicar el código previamente parametrizado en la aplicación **BCOD**.

### [Parametrización para las transferencias de dinero](http://docs.oasiscom.com/Operacion/common/bcomer/bfor#parametrización-para-las-transferencias-de-dinero)

En la aplicación BFOR, se debe parametrizar las formas de pago: tarjetas o efectivo según corresponda, en el campo _Comission_ el porcentaje (%) acordado y en el campo _Cash_ la caja asociada.  

![](bfor2.png)

El proceso de transferencias de dinero se realiza por la aplicación [**TPTR - Transferencias**](http://docs.oasiscom.com/Operacion/erp/tesoreria/tproceso/tptr). _(Ver aplicación)_

