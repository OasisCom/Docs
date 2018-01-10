---
layout: default
title: Precio de Café
permalink: /Operacion/scm/compras/oprecio/odes
editable: si
---

# ODES - Precio de Café

En la aplicación **ODES** se debe registrar diariamente el precio del café por cada producto.  

![](odes1.png)

**Discount Id:** asignar un consecutivo manualmente al registro.  
**Ubicación:** se debe digitar la ubicación del punto de servicio o la agencia a la cual le asignaremos el precio del café, si el precio aplica a todas las ubicaciones se debe digitar 0.  
**Tercero:** si se desea aplicar un precio a un tercero en específico, se debe ingresar el número de identificación del mismo, de no ser así digitar 0.  
**Clasificación:** si el precio se asignará por clasificación de productos, indicar el número de clasificación.  
**Producto:** en caso que el precio sea asignado de acuerdo al producto, se debe indicar el id del producto.  
**Tipo Descuento:** aquí se debe seleccionar el tipo de descuento o método de compra de café, por ejemplo Factor, |vor Húmedo, Almendra Sana, Almendra defectuosa, entre otras.  
**Fecha inicial y Fecha final:** indicar la fecha inicial y final en la que aplicará el precio registrado.  
**Precio:** indicar el precio del día.  
**Estado:** seleccionar estado _Activo_.  

Finalmente, realizada la debida parametrización en las aplicaciones [**BPRO - Productos**](http://docs.oasiscom.com/Operacion/common/bprodu/bpro#parametrización-proceso-compra-de-café), [**BCCL - Calidades**](http://docs.oasiscom.com/Operacion/common/bcomer/bccl) y [**ODES - Precio de café**](http://docs.oasiscom.com/Operacion/scm/compras/oprecio/odes), podemos proceder a realizar el proceso de compra de café por el factor correspondiente en la aplicación [**OCAF - Compras de café**](http://docs.oasiscom.com/Operacion/is/cafe/cafactura/ocaf#compra-de-café-por-factor).  

