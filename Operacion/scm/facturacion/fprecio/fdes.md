---
layout: default
title: Precios
permalink: /Operacion/scm/facturacion/fprecio/fdes
editable: si
---

# Descuentos - FDES

Permite registrar los descuentos comerciales establecidos con los clientes.

![](fdes1.png)

**Id descuento:** consecutivo de la aplicación Descuentos.  
**Ubicación:** número de la ubicación de la empresa a la cual se va a agregar el descuento.  
**Tipo precio:** seleccionar tipo de precio correspondiente al tercero.  
**Tercero:** número de identificación del tercero al que se asigna el descuento.  
**Nombre tercero:** nombre del tercero al que se asigna el descuento.  
**Clasificación:** número de clasificación del producto al cual se le realizará descuento.  
**Nombre clasificación:** nombre de clasificación del producto.  
**Producto:** número asignado al producto previamente en la aplicación BPRO Productos.  

![](fdes2.png)

**Nombre producto:** nombre del producto al cual se realizará descuento.  
**Fecha inicial:** fecha inicial del descuento.  
**Fecha final:** fecha final del descuento.  
**Tipo descuento:** seleccionar el tipo de descuento que se va aplicar.  
**Precio:** precio del producto.  
**% descuento:** porcentaje de descuento que se va aplicar al producto.  


## [Parametrización liquidación por Vencimiento](http://docs.oasiscom.com/Operacion/scm/facturacion/fprecio/fdes#parametrización-liquidación-por-vencimiento)

Para hacer uso de la funcionalidad de descuentos para productos con fecha de vencimiento, se debe tener presente la siguiente configuracion en FDES.  

Se deben configurar aparte de las fechas de vigencia y tipo de descuento el rango de fechas de vencimiento que aplican para ese descuento.  

![](fdes3.png)

Con esta configuración según el rango de fechas de vencimiento el sistema tomará los descuentos correspondientes. Validamos lo anterior en la aplicación [**JFAC - Facturas**](http://docs.oasiscom.com/Operacion/scm/pos/jcajero/jfac#liquidación-por-vencimiento).