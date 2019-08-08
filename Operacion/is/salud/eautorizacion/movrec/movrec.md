---
layout: default
title: Recobros CTC - Tutelas
permalink: /Operacion/is/salud/eautorizacion/movrec/efrc
editable: si
---

# RECOBROS - EFRC 

Para verificar las facturas que se deben recobrar, se ingresa a la aplicación EFRC y se consulta.  

![](eitra12.png)  

Existen dos tipos de recobros, por tutelas o por actas. En caso tal que la factura no arroje detalle, se debe ejecutar el proceso en la aplicación EPRF.  

![](eitra12.png)  

Se diligencia el número y la ubicación de la factura que no tiene detalle en la aplicación EFRC – Facturas recobro.  

En el detalle de la aplicación EFRC se visualiza la clasificación asociada al producto a recobrar, el precio, el valor del sustituto, el valor del recobro, el tercero a quien se le realiza el recobro y el número de identificación del afiliado.  

![](eitra12.png)  

El campo sustituto y recobro deben ser diligenciados, correspondiendo el campo sustituto al valor del producto o servicio alterno al que se está recobrando, claro está, en caso tal que dicho producto o servicio posea sustituto, de lo contrario se deja 0. El campo recobro hace referencia al valor total por el cual se va a efectuar el recobro.  

![](eitra12.png)  

Una vez diligenciado completamente el detalle, en el maestro se debe activar el Check de “revisado”, los Check de enviado y recibido deben estar previamente marcados. Finalmente, se ejecuta el proceso dando clic en el botón superior derecho R (Recobro).  

![](eitra12.png)  

Al ejecutar el proceso anterior, si la factura que se recobró anteriormente en el detalle tenía sustituto, el cual debe estar definido en la aplicación EPRO, el sistema crea dos documentos en la aplicación ERET Recobros Tutela - CTC:  

* Un primer documento RT (Recobro tutela-CTC) por el concepto con el cual se generó el recobro en la aplicación EFRC, sea CT (Comité técnico científico) o TU (Tutelas). En el detalle, si se deben recobrar varias facturas a un mismo tercero con el mismo tipo de recobro (CT) o (TU), la aplicación almacena dichas facturas recobradas en un paquete, alimentándolo cuantas veces se recobre al mismo tercero.  

![](eitra12.png)  

* Un segundo documento NR (No recobro tutela-CTC) por concepto Indefinido, hace de contra partida del primer documento RT. En el detalle, si se deben recobrar varias facturas a un mismo tercero con el mismo tipo de recobro (CT) o (TU), la aplicación almacena dichas facturas recobradas en un paquete, alimentándolo cuantas veces se recobre al mismo tercero.  





