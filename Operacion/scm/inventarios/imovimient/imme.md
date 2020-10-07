---

layout: default
title: Inventario a Entregar
permalink: /Operacion/scm/inventarios/imovimient/imme
editable: si

---



# Inventario a entregar - IMME



La aplicación **IMME** permite realizar control de la mercancia pendiente por entregar. En el momento de crear facturas desde la opción [**JFAC - Facturas**](http://docs.oasiscom.com/Operacion/scm/pos/jcajero/jfac), si el producto a facturar tiene el campo _Pendiente_ activo, indica que dicho producto no pudo ser entregado y se creará un documento en la opción **IMME** indicando que está pendiente de entrega.  



* **JFAC - Facturas**



![](jfac.png)



Al procesar la factura en la aplicación **JFAC,** se creará el documento _MT - Mercancía por entregar_ en la aplicación IMME. Allí filtraremos en el campo _Número1_ por el número de la factura creada en JFAC.



![](imme1.png)



Seguidamente, se deberá procesar el documento dando clic en el botón ![](procesar.png) _Procesar_ ubicado en la barra de herramientas del maestro.  