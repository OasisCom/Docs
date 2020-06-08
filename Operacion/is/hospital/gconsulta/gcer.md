---
layout: default
title: Certificados de Hospital
permalink: /Operacion/is/hospital/gconsulta/gcer
editable: si
---

# Certificados de Hospital - GCER

La aplicación **GCER** permite imprimir certificados médicos según el concepto que se registre, como por ejemplo: Autorización de Anestesia, Orden de Hospitalización, Orden de cirugía, Autorización de Eutanasia, Retiro Voluntario, Remisión.  

Los diferentes tipos de formatos se deben parametrizar previamente en la aplicación [**SPRO - Programas**](http://docs.oasiscom.com/Operacion/cloud/smetadata/spro#parametrización-de-formatos-de-impresión) y asignar al documento correspondiente en la aplicación [**BDOC - Documentos**](http://docs.oasiscom.com/Operacion/common/bsistema/bdoc#parametrización-de-formatos-de-impresión) (_Ver aplicaciones_).  

Para imprimir un certificado, agregamos un nuevo registro en el maestro y diligenciamos los campos.  

![](gcer.png)

Guardamos el registro y si el certificado a emitir requiere asociar algún producto, lo ingresamos en el detalle de la aplicación.  

![](gcer1.png)

Para ver y descargar el certificado damos clic en el botón ![](lupa.png) ubicado en la barra de herramientas. Allí la aplicación nos dará la opción de descargar el certificado en formato de Excel, PDF o Word.  

![](gcer2.png)

El certificado visto en formato PDF.  

![](gcer3.png)
