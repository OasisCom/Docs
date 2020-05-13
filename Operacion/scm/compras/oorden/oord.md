---



layout: default

title: Ordenes de Compra

permalink: /Operacion/scm/compras/oorden/oord

editable: si

---



# Órdenes de Compra - OORD



En la sección maestro de la aplicación, permite realizar el registro y control de las órdenes de compra.  



![](oord1.png)



**Documento:** Nombre del documento.  

**Numero:** Número consecutivo de orden de compra. El programa lo asigna automáticamente.  

**Ubicación:** Identificación y nombre del lugar desde donde se efectúa la orden de compra.  

**Fecha:** Fecha cuando se efectúa la orden. El sistema asigna la fecha actual por defecto.  

**Tercero:** Código del proveedor a quien se le envía la orden de compra.  

**Nombre Tercero:** Nombre del proveedor a quien se le envía la orden de compra.  

**Localización:** Identificación y nombre del lugar desde donde se efectúa el requerimiento de compra.  

**Moneda:** Moneda en la cual se va cancelar los productos.  

**Exchange Rate:** Tipo de cambio.  

**Estado:** Estado o fase en el que se encuentra la orden de compra.  

**% Descuento 1 y 2:** Descuentos que otorgó el proveedor por la orden de compra.  

**Condición Pago:** Forma como se efectuará el pago al proveedor.  

**Pronto Pago:** % de descuento por realizar pago antes de lo estipulado.  

**PromptPayament:** % de descuento por realizar pago el día estipulado.  

**Requerimiento:** Número consecutivo del correspondiente requerimiento.  

**Fecha de entrega Minima:** Fecha minima de entrega de la orden.  

**Fecha de entrega Maxima:** Fecha Máxima de Entrega de la Orden.  

**Observación:** Con respecto a la orden de compra.  



En el detalle del **OORD**, se relaciona la descripción de los productos requeridos por la empresa y se están solicitando al proveedor.  



![](oord2.png)



**Renglón:** Número de cada fila de pedido de productos a solicitar dentro del requerimiento.  

**Producto:** Código del producto que se requiere.  

**Nombre Producto:** Nombre del producto que se requiere.  

**Cantidad:** Cantidad requerida del producto.  

**Precio:** Precio al que se va a comprar el producto.  

**%Imp:** Porcentaje de impuesto.  

**% Descuento:** Porcentaje de descuento por producto.  

**Total:** Valor total de cada producto.  

**Unidad Medida:** Unidad de medida de cada producto.  

**Recibida:** Número de productos recibidos.  

**Requerimiento:** Identificación del requerimiento correspondiente.  

**Estado:**	Estado en el que se encuentra cada producto.  

**Característica:** Código de la característica que se puede atribuir al producto (Opcional).  

**Presentación:** Forma de presentación del producto (Opcional).  

**Vencimiento:** Fecha de vencimiento del producto (Opcional).  

**Control:**	Número de serial o consecutivo asignado a productos que vende la empresa y poder así identificarlos y llevar un control sobre ellos (Opcional).  

**Fecha de entrega:** Fecha en la cual se hace la entrega de los productos requeridos.  

**Proyecto:** Parametrizacion que se realiza en basico de proyectos **[BPRY]**.  


******
* En la pestaña **Presupuesto:**  

 Su funcionabilidad se establece apartir de la parametrizacion del documento: **[BDOC]**, concepto **[BCON]**, plantilla **[BPLA]** o en su defecto: 

 Se insertan los debitos que afectaran presupuestalmente, registrar los auxilires contable: centro costo, negocio, proyecto; como se ilustra.  

 

 ![](oord3.png)  
 
 
 ## [Cómo relacionar una orden de compra con una factura](http://docs.oasiscom.com/Operacion/scm/compras/oorden/oord#cómo-relacionar-una-orden-de-compra-con-una-factura)  
 
 En la aplicación **OORD**, se adiciona un nuevo registro (+), se abre el zoom en el campo **_Documento_** y se selecciona la opción **_OC_** de Ordenes de compra, en el campo **_Ubicación_** Cero (0) y en el campo **_Concepto_** también **_OC_** de Ordenes de compra, en el campo **_Motivo_** Cero (0), en el campo **_Tercero_** se selecciona el tercero (también con el Zoom) al que le se le realiza la orden de compra, en el campo **_Condición pago_** la forma cómo se realiza el pago y se guarda el registro.  
 
 
![](oord4.png)  

![](oord5.png)  


Ahora, se procede a realizar el detalle.  Se adiciona un nuevo registro (+).  En el campo **_Producto_** se selecciona del Zoom el producto deseado; el campo **_Cantidad_** se diligencia de acuerdo con la necesidad y el campo **_Precio_** con el valor y se guarda.  


![](oord6.png)  

Ahora, se procede a procesar  

![](oord7.png)  

![](oord8.png)  

En este momento, se ingresa a la aplicación [Facturas de compra - OFAC](http://docs.oasiscom.com/Operacion/scm/compras/ofactura/ofac).  En el campo **_Documento_** se selecciona **_FP_** de Facturas proveedor, en el campo **_Ubicación_** Cero (0) y en el campo **_Concepto_** también **_FP_** de Facturas proveedor 























