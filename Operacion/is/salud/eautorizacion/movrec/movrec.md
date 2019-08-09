---
layout: default
title: Recobros EFRC
permalink: /Operacion/is/salud/eautorizacion/movrec/efrc
editable: si
---

# RECOBROS - EFRC 

* Recobros: las IPS que prestan los servicios no POS le cobran a las EPS por estos y a su vez las Entidades Promotoras de Salud, le recobran al Estado estos procedimientos, medicamentos y dispositivos.  



Para verificar las facturas que se deben recobrar, se ingresa a la aplicación **EFRC** y se consulta.  

![](EFRC1.png)  


En el detalle de la aplicación **EFRC** se visualiza el producto a recobrar, codigo del proveedor, cantidad, precio, sustituto, recobro, el valor del recobro entre otros campos a editar.

![](eitra12.png)  

El campo sustituto y recobro deben ser diligenciados, correspondiendo el campo sustituto al valor del producto o servicio alterno al que se está recobrando, claro está, en caso tal que dicho producto o servicio posea sustituto, de lo contrario se deja 0. El campo recobro hace referencia al valor total por el cual se va a efectuar el recobro.  

![](eitra12.png)  

Una vez diligenciado completamente el detalle, en el maestro se debe activar el Check de “revisado”, los Check de enviado y recibido deben estar previamente marcados. Finalmente, se ejecuta el proceso dando clic en el botón superior derecho R (Recobro).  

![](eitra12.png)  

Al ejecutar el proceso anterior, si la factura que se recobró anteriormente en el detalle tenía sustituto, el cual debe estar definido en la aplicación EPRO, el sistema crea dos documentos en la aplicación ERET Recobros Tutela - CTC:  

* Un primer documento RT (Recobro tutela-CTC) por el concepto con el cual se generó el recobro en la aplicación EFRC, sea CT (Comité técnico científico) o TU (Tutelas). En el detalle, si se deben recobrar varias facturas a un mismo tercero con el mismo tipo de recobro (CT) o (TU), la aplicación almacena dichas facturas recobradas en un paquete, alimentándolo cuantas veces se recobre al mismo tercero.  

![](eitra12.png)  

* Un segundo documento NR (No recobro tutela-CTC) por concepto Indefinido, hace de contra partida del primer documento RT. En el detalle, si se deben recobrar varias facturas a un mismo tercero con el mismo tipo de recobro (CT) o (TU), la aplicación almacena dichas facturas recobradas en un paquete, alimentándolo cuantas veces se recobre al mismo tercero.  

![](eitra12.png)  

Si la factura de recobro en el detalle de la aplicación EFRC no tiene sustituto, el sistema solo genera el documento RT (Recobro tutela-CTC) en ERET.  

Al procesar el primer documento RT (Recobro tutela-CTC), se genera una factura en FFAC - FC por el total de facturas recobradas al tercero.  

![](eitra12.png)  

Igualmente, al procesar el documento NR (No recobro tutela-CTC), el sistema genera una nota de contabilidad en KMOV - NK.   

![](eitra12.png)  

Nota: Para poder procesar los anteriores documentos generados en ERET, estos deben estar previamente parametrizados en BPLA.  

Parametrización de factura de venta por concepto de Tutelas: documento FC por concepto TU.  

![](eitra12.png)  

Parametrización de factura de venta por concepto de Actas: documento CT por concepto CT.  

![](eitra12.png)  

El documento NK Nota de Contabilidad no requiere parametrización en BPLA para los conceptos CT Actas y TU Tutelas.  

**************









