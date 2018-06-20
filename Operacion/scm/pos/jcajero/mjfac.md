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

A continuación, seleccionamos los productos a comprar y estos se verán reflejados en la ventana izquierda.  

Si deseamos filtrar la búsqueda de los productos, seleccionamos la opción deseada como se muestra a continuación y digitamos el dato correspondiente.  

![](mjfac3.png)

La aplicación nos mostrará el valor bruto, descuento, subtotal, total de impuesto y valor total de la factura los cuales se irán acumulando dependiendo del producto y las cantidades seleccionadas.  

![](mjfac1.png)

En la parte inferior encontramos el botón _Pagar_, al dar click podremos seleccionar la forma de pago de la factura.  

![](mjfac4.png)


Al crear la factura, la condición de pago es asignada automáticamente y se puede ver reflejada en la aplicación **JFAC - Facturas**, allí consultaremos por la fecha en la que se realizó la factura y de ser necesario modificamos dicha condición de pago.  

![](mjfac2.png)

El precio del producto se visualiza de acuerdo a la parametrización de la aplicación [**BUBI - Ubicaciones Organización**](http://docs.oasiscom.com/Operacion/common/borgan/bubi), en esta aplicación el sistema tomará el precio de la ubicación según lo indicado en el campo _TypePriceDepend_. Si en dicho campo está seleccionada la opción _Ubicación_, se tomará el precio de la aplicación [**BUBI - Ubicaciones Organización**](http://docs.oasiscom.com/Operacion/common/borgan/bubi), es decir, lo indicado en el campo _Tipo Precio_.  

![](mjfac5.png)

![](mjfac7.PNG)

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

Finalmente, seleccionados los productos a comprar, las cantidades, la forma de pago y verificada la condición de pago, debemos procesar la factura. Al dar click en el botón _Procesar_ el sistema arrojará inmediatamente una ventana para imprimir la factura.  

![](mjfac15.png)

Al cerrar la anterior ventana, se visualizará la factura de la siguiente forma:  

![](mjfac28.png)

Esta factura la podremos ver en la aplicación **JFAC - Facturas** al consultar por la fecha en que se realizó.  

![](mjfac16.png)

### FUNCIONALIDADES EN MJFAC

#### Seleccionar caracteristica del producto

En la parte superior derecha, se encuentra una fila con las características de los productos, al seleccionar alguna el sistema traerá los productos que tengan asociada dicha característica.  

![](mjfac34.png)

La aplicación cuenta con una lista desplegable con las opciones: _Código de barras, nombre producto, código producto_ lo cual facilita la consulta del usuario.  

![](mjfac35.png)


#### Búsqueda de terceros

El botón ![](buscar.png) permite consultar los terceros creados y ya existentes en OasisCom.  

Damos click en el botón de búsqueda y el sistema nos arrojará un zoom con todos los terceros. En este zoom también podremos filtrar por número de identificación de un tercero en específico para facilitar la consulta.  

![](mjfac17.png)

![](mjfac18.png)

También cuenta con el campo _Vendedor_ lo que permite identificar quién realizó la venta.  

![](mjfac36.png)



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

En MJFAC se permite trabajar varias facturas por medio de Tabs al tiempo.  

![](mjfac27.png)

## [Modificación de Precio y Descuento](http://docs.oasiscom.com/Operacion/scm/pos/jcajero/mjfac#modificación-de-precio-y-descuento)

El usuario tiene la opción de modificar los campos _Precio_ y _Descuento_, para ello, el sistema solicitará credenciales del administrador del sistema.  

Primero modificaremos el campo **_Precio_**, en donde inicialmente el valor es 13.850.00, para esto necesitamos validar nuestro usuario, damos click en el valor del precio y mostrará la ventana donde solicitará _Usuario_ y _Contraseña_.  

![](mjfac29.png)

Luego ingresamos el valor **5** y damos en _Aceptar_.  

![](mjfac30.png)

Y como vemos en la siguiente imagen el valor ha cambiado de acuerdo al valor que hemos ingresado, recordemos que el campo de _Precio_, al ingresar un valor es restado.  

![](mjfac31.png)

Ahora realizaremos el mismo proceso pero con el valor del **_Descuento_**, para ello realizamos el mismo proceso de dar click en el valor del campo y luego ingresamos nuestras credenciales, en este ejemplo digitaremos un valor de 10 referente a 10%.  

![](mjfac32.png)

Y como vemos el valor se ha modificado tanto en el producto como en el detalle de pago.  

![](mjfac33.png)





