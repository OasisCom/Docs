---
layout: default
title: Financieros
permalink: /Operacion/common/bcuenta/bgru
editable: si
---

# Grupos - BGRU

La aplicación **BGRU** permite crear grupos, en los cuales, según la parametrización que contenga en el detalle, indicará que cuentas contables afectará al momento de causar impuestos.  

![](bgru1.png)

**Grupo:** Número del grupo que se desea crear.  
**Nombre grupo:** Nombre del grupo que se desea crear.  
**Tipo:** Tipo de grupo, es decir, si es un producto, activo, tercero, cargo, ubicación, impuesto o ninguno.  
**Tipo de activo:** En caso tal que en el campo anterior se haya seleccionado tipo activo, se debe indicar de la lista desplegable que tipo de activo es: PP&E, P. Inversión, Construcción, Intangibles, Activos E&E, Activo Biológicos, Activo MV o ninguno.  
**Tipo depreciación:** Seleccionar de la lista desplegable tipo de depreciación: línea recta, suma dígitos, unidades producidas, reducción de saldos.  
**Vida útil:** Si se requiere indicar años de vida útil.  
**Depreciar:** Según como se requiera se marca el Check.  
**Finita:** Según como se requiera se marca el Check.  
**Método costeo:** Método de costeo razonable o costo.  

_Detalle_  

![](bgru2.png)

**Código:** Código de la cuenta contable que afectará el grupo. Código parametrizado en **BCOD**.  
**Nombre código:** Nombre del código ingresado anteriormente.  
**Libro:** Número del libro en el cual afectará los movimientos del grupo.  
**Cuenta:** Número de cuenta contable la cual se verá afectada en los movimientos que se realicen con dicho grupo.  

Por ejemplo, si se crea un grupo para los productos con IVA Excluido, este grupo tendrá que afectar las cuentas contables descritas en el detalle, quedando de la siguiente manera:  

![](bgru3.png)

## [Parametrización ingreso de activo fijo por compras](http://docs.oasiscom.com/Operacion/common/bcuenta/bgru#parametrización-ingreso-de-activo-fijo-por-compras)

Para el proceso de Ingreso de Activo Fijo por Compras, en la aplicación BGRU se debe incluir el código IVC a los activos fijos. A continuación un ejemplo.  

En el ejemplo el código del producto del activo fijo es 2008877, el cual se puede observar al consultar el movimiento en la aplicación [**OFAC - Facturas de Compras**](http://docs.oasiscom.com/Operacion/scm/compras/ofactura/ofac).  

![](bgru4.png)

Identificado el código del producto, lo consultamos en la aplicación [**BPRO - Productos**]() para conocer el Id del grupo al cual pertenece.  

![](bgru5.png)

Finalmente, identificado el grupo al cual pertenece el producto, en la aplicación BGRU incluimos el código IVC en el grupo correspondiente.  

![](bgru6.png)










