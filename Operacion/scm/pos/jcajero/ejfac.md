---
layout: default
title: Cajero
permalink: /Operacion/scm/pos/jcajero/ejfac
editable: si
---

# EJFAC - Facturas

La aplicación **EJFAC** es la versión Post-Touch para facturación, adaptable para tablets y dispositivos móviles, cumpliendo con la misma función de la versión web.  

Los campos que sean de fondo azul indican que tienen zoom, en el cual pueden consultar datos relacionados con el nombre del campo, para acceder se hace doble click sobre el mismo.  

![](ejfac.png)

**DocumentId:** Documento parametrizado con anterioridad en la aplicación [**BDOC - Documentos**](http://docs.oasiscom.com/Operacion/common/bsistema/bdoc). Este documento puede ser FA (Factura) o DE (Devolución). Este campo consta con un zoom, en el cual al dar doble click se pueden consultar los documentos disponibles.  

![](ejfac1.png)

**NumberId:** Consecutivo de documento automático.  
**LocationId:** Ubicación de punto de venta.  
**Date:** Fecha de registro de la factura.  
**ConceptId:** Iniciales del concepto por el cual se desea realizar el documento. Los conceptos se deben parametrizar previamente en la aplicación [**BCON - Conceptos**](http://docs.oasiscom.com/Operacion/common/bsistema/bcon), en este caso el concepto puede ser FA (Factura) o DE (Devolución).  
**MotiveId:** Este se encuentra definido como 0.  
**ClientId:** Número de identificación del cliente al cual se le realiza el documento.  
**ClientName:** El nombre del cliente el sistema lo arroja automáticamente después de diligenciar el número de identificación.  
**State:** El estado es asignado por el sistema, al crear una nueva factura el estado será _Activo_, al confirmarla pasará a _Procesado_ o si la factura es anulada su estado será _Anulado_.  
**VendorId:** Número de identificación de la persona que se encuentra facturando.  
**ConditionPaymentId:** Representa un acuerdo establecido con clientes y proveedores en forma de tipos de descuento y plazos de pago, las diferentes opciones de condición de pago se encuentran parametrizadas en la aplicación [**BCND - Condiciones de Pago**](http://docs.oasiscom.com/Operacion/common/bcomer/bcnd).  

![](ejfac2.png)

**TypePriceId:** seleccionar el tipo de precio que se asignará a la factura. Los tipos de precio deben estar previamente parametrizados en la aplicación [**FBTP - Tipo de Precio**](http://docs.oasiscom.com/Operacion/scm/facturacion/fbasica/fbtp).

![](ejfac3.png)

**DiscountPercentage:** Si se desea que el total de la factura tenga un porcentaje de descuento se debe ingresar en este campo el número y este hará el descuento en el valor total de la factura.  
**WarehouseId:** ingresar el Id del almacén que realiza el documento.  
**Brute:** valor bruto del total del documento que se realiza.  
**Discount:** valor del descuento.  
**Subtotal:** valor subtotal del documento.  
**TaxSale:** ingresar el valor por impuesto a las ventas.  
**Total:** ingresar el valor total del documento.  

Ingresados los anteriores datos, damos click en el botón _Guardar_ ![](guardar.png) el cual asignará un número a la factura. 

![](ejfac12.png)

### Detalle

En la parte inferior de la ventana se encuentra la pestaña _Detalle_, en donde se seleccionará el producto correspondiente al documento que se realiza, ya sea que se factura o se realiza devolución.  

![](ejfac4.png)

**ProductId:** ingresar el código del producto o seleccionarlo desde el zoom, para ingresar dar doble click sobre el campo, seleccionar el producto y cerrar la ventana del zoom.  

![](ejfac5.png)

Seleccionado el producto, se debe dar click en el botón ![](mas.png) para que este sea adjuntado a la lista de productos.  

![](ejfac6.png)

Si se desean agregar más productos, se vuelve a buscar en el campo _ProductId_ y se da click en el botón ![](mas.png).

![](ejfac8.png)

Para eliminar algún producto de la lista se debe dar click sobre el mismo.  


### Pago

Seguidamente se encuentra la pestaña _Pago (Payment)_, la cual permite realizar la modificación de la forma de pago de la factura, en el campo forma de pago se debe modificar la misma, puede ser efectivo, débito, crédito entre otros, esto se parametriza previamente en el sistema en la aplicación [**BFOR - Formas de Pago**](http://docs.oasiscom.com/Operacion/common/bcomer/bfor).  

![](ejfac9.png)

**FormPaymentId:** seleccionar de la lista desplegable la forma de pago. Parametrización de formas de pago en la aplicación [**BFOR - Formas de Pago**](http://docs.oasiscom.com/Operacion/common/bcomer/bfor).

![](ejfac10.png)

**Value:** ingresar el valor total del documento.
**BaseTax:** valor base sobre el cual se aplica el impuesto.  
**Tax:** valor del impuesto
**Card:** en caso de pagar con tarjeta ingresar el número.  
**Expiration:** fecha de expiración de la tarjeta.  
**Authorization:** número de autorización.  

Si el desembolso se va a realizar por diferentes formas de pago, la aplicación permite adicionarlas, igualmente se verán reflejadas en la lista inferior de la ventana.  

Por ejemplo, si una parte del documento se pagará en efectivo, se deberá seleccionar esta forma de pago de la lista desplegable y adicionarla a la lista inferior de la ventana dando click en el botón ![](mas.png), así mismo se deberá hacer con las otras formas de pago que se deseen agregar.  

![](ejfac11.png)

Diligenciado el formulario de la pestaña _Pago_ procedemos a procesar la factura dando click en el botón _Procesar_  ![](procesar.png).

### Botones

![](botones.png)


#### Nuevo ![](nuevo.png)

Permite adicionar un formulario para crear un nuevo documento.  

#### Guardar ![](guardar.png)

Permite guardar los cambios que se hayan realizado en el documento.  

#### Procesar ![](procesar.png)

Botón que permite confirmar o procesar el documento.  

#### Reversar ![](reversar.png)

Cuando el documento se encuentra en estado _Procesado_, este botón permite reversarlo y poder realizar cambios.  

#### Anular ![](anular.png)

Este botón permite anular el documento que se generó. El documento pasará a estado _Anulado_.

#### Traer Información ![](traer.png)

Botón que permite traer a la aplicación todos los documentos generados en la misma.  

#### Vista Preliminar ![](vista.png)

Al dar click en este botón se podrá ver en vista preliminar el documento generado.  

#### Imprimir ![](imprimir.png)

Botón que permite convertir a formato PDF el documento generado e imprimirlo.  

#### Refrescar ![](refrescar.png)

Al dar click en este botón la ventana de la aplicación será refrescada y mostrará el formulario sin datos.  

#### Anterior ![](devolver.png)

Este botón permite devolverse al documento anterior.  

#### Número de página ![](pagina.png)

Indica la página en la cual se encuentra el documento.  

#### Siguiente ![](pagina.png)

Este botón permite pasar al documento siguiente.  

