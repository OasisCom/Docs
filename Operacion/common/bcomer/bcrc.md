---
layout: default
title: Comerciales
permalink: /Operacion/common/bcomer/bcrc
editable: si
---

# Características - BCRC

En esta aplicación se parametrizan todas las características que queramos diligenciar por ejemplo si la empresa es de producción podemos diligenciar las características que definen nuestro producto como lo es talla, ancho, color, material, referencia, peso, entre otros.  

![](bcrc1.png)

**Característica:** Consecutivo automático que arroja el sistema.  
**Nombre de la característica:** Nombre de la característica que queremos registrar.  


## [Parametrización características - Análisis de Calidad](http://docs.oasiscom.com/Operacion/common/bcomer/bcrc#parametrización-características---análisis-de-calidad)

En esta opción se parametrizan las características que estarán asociadas a cada campo del formulario dinámico previamente parametrizado en el detalle de la opción [**BMOT - Motivos**](http://docs.oasiscom.com/Operacion/common/bsistema/bmot#parametrización-formularios-dinámicos-opción-aana---análisis-de-calidad) para el proceso de Análisis de Calidad en la aplicación [**AANA - Análisis de Calidad**](http://docs.oasiscom.com/Operacion/utility/calidad/bregis/aana):  

En el maestro:  

**Característica** y **Nombre Característica:** ingresar el id de la característica y su nombre respectivamente.  

**Nombre del Campo:** ingresar el nemotécnico del campo previamente parametrizado en la opción [**BMOT - Motivos**](http://docs.oasiscom.com/Operacion/common/bsistema/bmot#parametrización-formularios-dinámicos-opción-aana---análisis-de-calidad). De esta manera se asocian las características aquí parametrizadas, a un campo de un formulario dinámico.  

![](bcrc2.png)

En el detalle se deben parametrizar las características del campo, es decir, la información aquí ingresada será la misma que se mostrará al abrir el zoom de ayuda del campo en el detalle de la opción [**AANA - Análisis de Calidad**](http://docs.oasiscom.com/Operacion/utility/calidad/bregis/aana):  

**Característica** y **Nombre Característica:** ingresar el id de la característica y su nombre respectivamente.  
**Código:** se debe ingresar el código de la característica, por lo general es el mismo que el id.  

![](bcrc3.png)

