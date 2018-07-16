---
layout: default
title: Importaciones
permalink: /Operacion/scm/importacion/yimportaci/yimp
editable: si
---

# YIMP - Importaciones


# [Proceso de importaciones](http://docs.oasiscom.com/Operacion/scm/importacion/yimportaci/yimp)

A continuación, se dará a conocer el proceso de importaciones y la parametrización requerida para ejecutarlo.  

### Parametrización

Para realizar el proceso de importaciones es necesario realizar previamente la parametrización de las siguientes aplicaciones. (_Ver cada aplicación_).  

 * [**BDOC - Documentos**](http://docs.oasiscom.com/Operacion/common/bsistema/bdoc)  

En la aplicación BDOC - Documentos es necesario parametrizar el documento _IM - Importación_ y asociar en el detalle los conceptos por los cuales se podrá realizar un documento IM.  

![](yimp.png)

**_Nota:_** El campo _ORDEN_ es de gran importancia asignarlo, dado que es el que define el orden de ejecución de los conceptos.  


 * [**BCON - Conceptos**](http://docs.oasiscom.com/Operacion/common/bsistema/bcon)  

En la aplicación BCON se reflejan los conceptos asociados en la aplicación BDOC al documento _IM - Impotaciones_, aquí se deberán asignar las fórmulas a cada concepto.  

![](yimp1.png)


 * [**BINC - Incoterms**]()  

De acuerdo con el modelo de importación y de incoterms que maneje la empresa, se crean los conjuntos de conceptos en la aplicación _BINC - Incoterms_.  

Por cada registro que se cree en el maestro se deberá asociar el conjunto de conceptos en el detalle.  

![](yimp2.png)






 * [**YBMO - Modos de transporte**]()  
 * [**BADU - Aduanas**]()  
 * [**BCUE - Cuentas**]()  



