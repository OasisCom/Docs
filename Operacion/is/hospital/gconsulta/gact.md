---
layout: default
title: Actividades
permalink: /Operacion/is/hospital/gconsulta/gact
editable: si
---

# GACT - Actividades

En esta aplicación podemos registrar las diferentes actividades que se pueden encontrar en un hospital, veterinaria entre otros. Aqui vamos a explicar diferentes actividades que se pueden presentar en una veterinaria.  

Al procesar el documento en el maestro, el sistema creará automáticamente la factura en la opción [**JFAC - Facturas**](http://docs.oasiscom.com/Operacion/scm/pos/jcajero/jfac).  

![](MaestroGACT.png)

## [Guardería](http://docs.oasiscom.com/Operacion/is/hospital/gconsulta/gact#guardería)

Para generar un registro de guardería se debe crear un documento con las siguientes características:  

**Documento:** Se debe registrar TH correspondiente a actividades  
**Ubicación:** Se debe indicar la ubicación en la cual se presta el servicio  
**Concepto:** Se debe registrar GU correspondiente a guardería  
**Fecha:** Se debe registrar la fecha de inicio del servicio prestado  
**Tercero:** Se debe registrar el nombre de la mascota   
**Recurso:** Cédula del recurso que está atendiendo  

En el detalle debemos diligenciar el formulario correspondiente al servicio de guardería, este formulario se parametriza en la aplicación [**BMOT - Motivos**](http://docs.oasiscom.com/Operacion/common/bsistema/bmot#creación-formularios) de acuerdo a los campos requeridos por la veterinaria cómo lo son fecha de ingreso, fecha de entrega de la mascota, entre otros.  

En la siguiente pestaña del detalle se podrá encontrar el (los) producto (s) relacionados a la actividad registrada en el maestro, así como la fecha de la siguiente actividad a realizar en el campo _Próxima_. Se debe tener en cuenta que si se desmarca el check de _Factura_, el producto no se insertará en la opción JFAC - Facturas y por lo tanto no se factuará.  


## [Vacunación](http://docs.oasiscom.com/Operacion/is/hospital/gconsulta/gact#vacunación)

Para generar un registro de vacunación se debe crear un documento con las siguientes características:  

**Documento:** Se debe registrar TH correspondiente a actividades  
**Ubicación:** Se debe indicar la ubicación en la cual se presta el servicio  
**Concepto:** Se debe registrar VA correspondiente a vacunación  
**Fecha:** Se debe registrar la fecha de inicio del servicio prestado  
**Tercero:** Se debe registrar el nombre de la mascota   
**Recurso:** Cédula del recurso que está atendiendo  

En el detalle debemos diligenciar el formulario correspondiente al servicio de vacunación, este formulario se parametriza en la aplicación [**BMOT - Motivos**](http://docs.oasiscom.com/Operacion/common/bsistema/bmot#creación-formularios) de acuerdo a los campos requeridos por la veterinaria cómo lo son estado vacunal, última fecha de vacunación, estado cardiaco, temperatura, entre otros.  

En la siguiente pestaña del detalle se podrá encontrar el (los) producto (s) relacionados a la actividad registrada en el maestro, así como la fecha de la siguiente actividad a realizar en el campo _Próxima_. Se debe tener en cuenta que si se desmarca el check de _Factura_, el producto no se insertará en la opción JFAC - Facturas y por lo tanto no se factuará.  

![](gact.png)


## [Desparasitación](http://docs.oasiscom.com/Operacion/is/hospital/gconsulta/gact#desparasitación)

Para generar un registro de desparasitación se debe crear un documento con las siguientes características:  

**Documento:** Se debe registrar TH correspondiente a actividades  
**Ubicación:** Se debe indicar la ubicación en la cual se presta el servicio  
**Concepto:** Se debe registrar DE correspondiente a desparasitación  
**Fecha:** Se debe registrar la fecha de inicio del servicio prestado  
**Tercero:** Se debe registrar el nombre de la mascota  
**Recurso:** Cédula del recurso que está atendiendo  

En el detalle debemos diligenciar el formulario correspondiente al servicio de vacunación, este formulario se parametriza en la aplicación [**BMOT - Motivos**](http://docs.oasiscom.com/Operacion/common/bsistema/bmot#creación-formularios) de acuerdo a los campos requeridos por la veterinaria cómo lo son mucosa, estado de desparasitación, última fecha de desparasitación, peso, entre otros.  

En la siguiente pestaña del detalle se podrá encontrar el (los) producto (s) relacionados a la actividad registrada en el maestro, así como la fecha de la siguiente actividad a realizar en el campo _Próxima_. Se debe tener en cuenta que si se desmarca el check de _Factura_, el producto no se insertará en la opción JFAC - Facturas y por lo tanto no se factuará.  


## [Peluquería](http://docs.oasiscom.com/Operacion/is/hospital/gconsulta/gact#peluquería)

Para generar un registro de peluquería se debe crear un documento con las siguientes características:  

**Documento:** Se debe registrar TH correspondiente a actividades  
**Ubicación:** Se debe indicar la ubicación en la cual se presta el servicio  
**Concepto:** Se debe registrar PU correspondiente a peluquería  
**Fecha:** Se debe registrar la fecha de inicio del servicio prestado  
**Tercero:** Se debe registrar el nombre de la mascota   
**Recurso:** Cédula del recurso que está atendiendo  

En el detalle debemos diligenciar el formulario correspondiente al servicio de vacunación, este formulario se parametriza en la aplicación [**BMOT - Motivos**](http://docs.oasiscom.com/Operacion/common/bsistema/bmot#creación-formularios) de acuerdo a los campos requeridos por la veterinaria cómo lo son hora de ingreso, tipo de corte en la cara, cuerpo, patas, entre otros.  

En la siguiente pestaña del detalle se podrá encontrar el (los) producto (s) relacionados a la actividad registrada en el maestro, así como la fecha de la siguiente actividad a realizar en el campo _Próxima_. Se debe tener en cuenta que si se desmarca el check de _Factura_, el producto no se insertará en la opción JFAC - Facturas y por lo tanto no se factuará.  



## [Peluquería - Baño Medicado](http://docs.oasiscom.com/Operacion/is/hospital/gconsulta/gact#peluquería---baño-medicado)

Para generar un registro de baño medicado se debe crear un documento con las siguientes características:  

**Documento:** Se debe registrar TH correspondiente a actividades  
**Ubicación:** Se debe indicar la ubicación en la cual se presta el servicio  
**Concepto:** Se debe registrar PU correspondiente a peluquería  
**Motivo:** Se debe registrar el número 1 correspondiente a baño medicado  
**Fecha:** Se debe registrar la fecha de inicio del servicio prestado  
**Tercero:** Se debe registrar el nombre de la mascota  
**Recurso:** Cédula del recurso que está atendiendo  

En el detalle debemos diligenciar el formulario correspondiente al servicio de vacunación, este formulario se parametriza en la aplicación [**BMOT - Motivos**](http://docs.oasiscom.com/Operacion/common/bsistema/bmot#creación-formularios) de acuerdo a los campos requeridos por la veterinaria cómo lo son hora de ingreso, tipo de corte en la cara, cuerpo, patas, entre otros.  

En la siguiente pestaña del detalle se podrá encontrar el (los) producto (s) relacionados a la actividad registrada en el maestro, así como la fecha de la siguiente actividad a realizar en el campo _Próxima_. Se debe tener en cuenta que si se desmarca el check de _Factura_, el producto no se insertará en la opción JFAC - Facturas y por lo tanto no se factuará.  


Cómo se puede ver, el registro de los documentos es el mismo para todos los servicios, lo que cambia es el concepto el cual se parametriza en la aplicación [**BCON - Conceptos**](http://docs.oasiscom.com/Operacion/common/bsistema/bcon) de acuerdo a lo requerido.  

