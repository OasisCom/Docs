---
layout: default
title: Documentos
permalink: /Operacion/common/bsistema/bcns
editable: si
---

# Consecutivos - BCNS

Se define el número en el cual se encuentra el consecutivo de cada uno de los documentos parametrizados en **BDOC**. Sirve para definir el consecutivo inicial o hacer alguna actualización que desee el usuario sobre los consecutivos, esta se va actualizando automáticamente a medida que se inserte un nuevo documento de los definidos en la opción documentos. En caso que en el documento se haya definido que maneja varias ubicaciones o maneja niveles, entonces la pantalla nos permitirá definir a que ubicación se está haciendo referencia con el consecutivo, en caso contrario la oficina siempre va a aparecer en cero (0) y el sistema no dejará parar en este sitio.  

>+ [Secuencia de Consecutivos](http://docs.oasiscom.com/Operacion/common/bsistema/bcns#secuencia-de-consecutivos)

![](bcns1.png)

**Documento:** Siglas del documento previamente parametrizado en **BDOC**.  
**Nombre documento:** Nombre del documento al cual se parametrizará el consecutivo, no es necesario diligenciarlo, al dar TAB en el documento este se diligencia automáticamente.  
**Ubicación:** Número de ubicación al cual está asociado el documento.  
**Nombre ubicación:** Nombre de la ubicación la cual está asociada el documento. Igualmente, ese campo no es necesario diligenciarlo, al dar TAB este campo se diligencia automáticamente.  
**Número:** Número desde el cual se desea que inicie el consecutivo para el documento. Cuando se suben archivos por plano, es decir que se importan al sistema desde un archivo en Excel y posteriormente se va a realizar un documento desde el sistema es necesario revisar el consecutivo.  

## [Secuencia de Consecutivos](http://docs.oasiscom.com/Operacion/common/bsistema/bcns#secuencia-de-consecutivos)

La funcionalidad de _Secuencia de Consecutivos_ se basa en la capacidad que tiene el sistema de asignar automáticamente, un consecutivo a aquellas aplicaciones que tengan los documento parametrizados en el opción [**BDOC - Documentos**](http://docs.oasiscom.com/Operacion/common/bsistema/bdoc#secuencia-de-consecutivos) y que su consecutivo este basado en el nombre de la tabla que la compone, ej. BPRO - productid, pues su tabla base es product.  

Para realizar la parametrización de la funcionalidad, inicialmente ingresamos a la aplicación **BCNS** y adicionamos el documento al cual le deseamos asignar consecutivos automáticos, para este ejemplo utilizaremos el documento PR - Produtos.  

![](bcns2.png)

Seguidamente, debemos ingresar a la aplicación [**BDOC - Documentos**](http://docs.oasiscom.com/Operacion/common/bsistema/bdoc#secuencia-de-consecutivos) a consultar el documento y activar el flag de _Automático_ para que los consecutivos sean asignados por el sistema. (_Ver aplicación_)




