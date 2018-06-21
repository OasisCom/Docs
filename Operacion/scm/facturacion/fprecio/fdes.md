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


## [Motor de Promociones](http://docs.oasiscom.com/Operacion/scm/facturacion/fprecio/fdes#motor-de-promociones)

Este proceso consiste en la parametrización de tipos de descuentos que pueden ser aplicados a productos al momento de realizar algún movimiento en OasisCom. Los tipos de descuentos son los siguientes:  

* **Descuento por Precio:** consiste en el descuento que se realiza a un producto reduciendo el precio original del mismo. _Por ejemplo:_  

  Sea un producto ‘X’ con precio $30.000, desea dejarse para la venta a un descuento por precio de $20.000.  
  
* **Descuento por %:** consiste en el descuento que se realiza a nivel porcentual, descontando el porcentaje determinado al precio original del producto. _Por ejemplo:_  

  Sea un producto ‘X’ con precio $50.000 se deja a la venta con un descuento del 10%, es decir $45.000.  
 
* **Descuento en Valor:** es el descuento que se realiza al precio de un producto conforme a un valor determinado. _Por ejemplo:_  

  Sea un producto ‘X’ con precio $50.000, se realiza un descuento por valor de $10.000 sobre el precio del mismo, es decir, este producto queda a la venta con un precio de $40.000.  
 
* **Descuento por volumen en %:** este descuento consiste en la reducción porcentual del precio de un producto a los compradores que adquieren grandes cantidades del producto en cuestión. _Por ejemplo:_  
 
  Sea un producto ‘X’ con precio $10.000, si adquiere entre 5 y 15 unidades del mismo, se le hará un descuento del 20% sobre el valor total, es decir, si el comprador adquiere 10 unidades ($100.000) el 20% de descuento sobre este valor será $80.000.

* **Descuento por volumen en Valor:** este descuento (al igual que el descuento en valor) se realiza al precio de un producto de acuerdo con un valor estipulado, la diferencia radica en que este descuento es aplicado a compradores que adquieren grandes cantidades del producto en cuestión. _Por ejemplo:_  

  Sea un producto ‘X’ con precio $10.000, si el comprador adquiere entre 5 y 10 unidades del mismo, se le hará un descuento por valor de $20.000 pesos, es decir, si compra 10 unidades, su descuento será de $80.000.

* **Descuento en % con Control de Cantidad:** consiste a la aplicación de descuento porcentual sobre el precio de un producto para aquellos compradores que adquieran grandes cantidades. Este descuento únicamente será aplicable cuando el cliente lleve un acumulado determinado de unidades del producto (Tope). _Por ejemplo:_  

  Se aplica un porcentaje del 10% a aquel comprador que adquiera hasta 30 unidades del producto, sin pasarse de esta cantidad.

La parametrización de los tipos de descuento descrita se definirá a continuación:  

* Se debe realizar la creación de los tipos de descuentos en la aplicación [**FBTD - Tipos de Descuento**](http://docs.oasiscom.com/Operacion/scm/facturacion/fbasica/fbtd). (_Ver aplicación_) 
* Se deben crear los productos en la aplicación [**BPRO - Productos**](http://docs.oasiscom.com/Operacion/common/bprodu/bpro) y la lista de precios correspondiente en la opción [**FPRE - Precios**](http://docs.oasiscom.com/Operacion/scm/facturacion/fprecio/fpre). (_Ver aplicación_)  



























