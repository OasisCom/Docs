---
layout: default
title: Facturas
permalink: /Operacion/scm/pos/jcajero/mjfac
editable: si
---

# MJFAC - Facturas

La aplicación MJFAC permite crear facturas por la compra de productos seleccionados mediante la versión post - touch de OasisCom.  

Para crear una factura, damos click en el botón _Agregar_.  

![](mjfac.png)

A continuación, seleccionamos los productos a comprar y estos se verán reflejados en la ventana del medio.  

Si deseamos filtrar la búsqueda de los productos, seleccionamos la opción deseada como se muestra a continuación y digitamos el dato correspondiente.  

![](mjfac3.png)

En la parte inferior la aplicación nos mostrará el valor bruto, descuento, subtotal, total de impuesto y valor total de la factura los cuales se irán acumulando dependiendo del producto y las cantidades seleccionadas.  

![](mjfac1.png)

En la parte inferior izquierda, podremos seleccionar la forma de pago de la factura.  

![](mjfac4.png)


Al crear la factura, la condición de pago es asignada automáticamente y se puede ver reflejada en la aplicación **JFAC - Facturas**, allí consultaremos por la fecha en la que se realizó la factura y de ser necesario modificamos dicha condición de pago.  

![](mjfac2.png)

El precio del producto se visualiza de acuerdo a la parametrización de la aplicación [**BUBI - Ubicaciones Organización**](http://docs.oasiscom.com/Operacion/common/borgan/bubi), en esta aplicación el sistema tomará el precio de la ubicación según lo indicado en el campo _TypePriceDepend_. Si en dicho campo está seleccionada la opción _Ubicación_, se tomará el precio de la aplicación [**BUBI - Ubicaciones Organización**](http://docs.oasiscom.com/Operacion/common/borgan/bubi), es decir, lo indicado en el campo _Tipo Precio_.  

![](mjfac5.png)

![](mjfac7.png)

Si por el contrario, en el campo _TypePriceDepend_ está seleccionada la opción _Ninguno_, el sistema tomará la parametrización del tipo de precio de la aplicación [**BTER - Terceros**](http://docs.oasiscom.com/Operacion/common/btercer/bter).  

![](mjfac8.png)

Parametrización de [**BTER - Terceros**](http://docs.oasiscom.com/Operacion/common/btercer/bter).  

![](mjfac9.png)

Con esta nueva parametrización el precio del producto en la opción **MJFAC** cambia:  

![](mjfac10.png)

#### Creación de terceros mediante MJFAC

La aplicación MJFAC permite la creación de terceros dando click en el botón señalado a continuación.  

![](mjfac11.png)

Se abrirá una ventana donde ingresaremos los datos del tercero, al dar click en el botón _Guardar_, se crea el tercero en la aplicación [**BTER - Terceros**](http://docs.oasiscom.com/Operacion/common/btercer/bter). Es importante diligenciar el tipo de cliente.  

![](mjfac12.png)

El sistema mediante un mensaje de control informará que el tercero ha sido creado correctamente.  

![](mjfac13.png)

Consultamos en la aplicación [**BTER - Terceros**](http://docs.oasiscom.com/Operacion/common/btercer/bter) la creación del tercero.  

![](mjfac14.png)

Finalmente, seleccionados los productos a comprar, las cantidades, la forma de pago y verificada la condición de pago, debemos procesar la factura.  

![](mjfac15.png)

Esta factura la podremos ver en la aplicación **JFAC - Facturas** al consultar por la fecha en que se realizó.  

![](mjfac16.png)

### FUNCIONALIDADES EN MJFAC

#### Búsqueda de terceros

El botón ![](buscar.png) permite consultar los terceros creados y ya existentes en OasisCom.  

Damos click en el botón de búsqueda y el sistema nos arrojará un zoom con todos los terceros. En este zoom también podremos filtrar por número de identificación de un tercero en específico para facilitar la consulta.  

![](mjfac17.png)

![](mjfac18.png)

#### Zoom de Documento

Esta funcionalidad nos permite seleccionar el documento con el que se realizará la factura.  

Damos doble click y seleccionamos el documento.  

![](mjfac19.png)

![](mjfac20.png)

#### Zoom para relacionar documentos

La aplicación MJFAC, cuenta con una función que permite relacionar los pedidos con el documento a realizar, esto, teniendo en cuenta el tercero y el documento.  

En el campo _Docu1_ ingresamos el documento a relacionar, por ejemplo PD (Pedidos) y damos doble click en el zoom _Num1_ para seleccionar de los pedidos existentes, el correspondiente al documento que se realiza.  

![](mjfac21.png)

![](mjfac22.png)

Al seleccionar el pedido, se observará el producto en MJFAC.  

![](mjfac23.png)

#### Botón _Buscar_ ![](buscar1.png)  

Cuando demos click en el botón _Buscar_, este nos mostrará las facturas Activas y Procesadas de la fecha actual, para así poder utilizarlas y realizar las diferentes operaciones: Procesar, Reversar.  

![](buscar2.png)

Como podemos ver en el resultado del Zoom tenemos varios documentos en estado _Activo_ y _Procesado_, al seleccionar alguno de ellos el ícono de "buscar" cambiará según el estado del documento seleccionado.  

![](mjfac24.png)  

Es decir, si el documento seleccionado se encuentra en estado _Activo_ el ícono que se reflejará será el de _Procesar_. Si una factura se encuentra en estado _Activo_, pendiente de ser procesada, el fondo del detalle estará habilitado para realizar todo tipo de accciones.  

![](mjfac25.png)

Si por el contrario, seleccionamos un documento que se encuentre en estado _Procesado_, el ícono que se reflejará será el de _Reversar_. Si el documento tiene estado _Procesado_ el fondo estará en color Gris y no permitirá ediciones.  

![](mjfac26.png)

