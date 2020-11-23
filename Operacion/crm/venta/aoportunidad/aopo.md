---
layout: default
title: Oportunidades
permalink: /Operacion/crm/venta/aoportunidad/aopo
editable: si
---

# Oportunidades - AOPO

La aplicación AOPO permite registrar las oportunidades de negocio que puedan surgir de las diferentes campañas comerciales.  

Para agregar un nuevo registro damos click en el botón ![](mas.png) ubicado en la barra superior de herramientas y diligenciamos el formulario.  

![](aopo5.png)

**Documento:** ingresar el documento _OP_ correspondiente a Oportunidades.  Los documentos son parametrizables en la aplicación [**BDOC - Documentos**](http://docs.oasiscom.com/Operacion/common/bsistema/bdoc).  
**Ubicación:** seleccionar la ubicación desde donde se está realizando el registro.  
**Concepto:** ingresar el concepto OP (oportunidades). Los conceptos son parametrizables en la aplicación [**BCON - Conceptos**](http://docs.oasiscom.com/Operacion/common/bsistema/bcon).  
**Motivo:** seleccionar el motivo del registro. Los motivos son parametrizables en la aplicación [**BMOT - Motivos**](http://docs.oasiscom.com/Operacion/common/bsistema/bmot).  
**Asunto:** describir brevemente el asunto del registro.  
**Status:** seleccionar el status en el que se encuentra el tercero registrado como una oportunidadd de negocio.  
**Id Contacto:** seleccionar del zoom el número de consecutivo asignado a la oportunidad de negocio previamente en la aplicación [**APRO - Prospectos**](http://docs.oasiscom.com/Operacion/crm/venta/aprospecto/apro).  
**Tipo de Medio:** seleccionar el tipo de medio por el cual ingresó la oportunidad.  
**Id Campaña:** seleccionar la campaña por la cual ingresó la oportunidad.  
**Empleado:** ingresar el número de identificación del empleado a cargo de la oportunidad que se registra.  
**Tema:** seleccionar la solución que más se acomoda a las necesidades que tiene el cliente.  
**Probabilidad:**  
**Calificación:**  
**Tendencia:**  
**Proyecto:** seleccionar el proyecto al cual se asocia el registro de la oportunidad.  

Cuando la oportunidad se genera por haber convertido un prospecto, se entra a esta aplicación y se busca la oportunidad que se convirtió y se entra al icono de tareas workflow.  

![](aopo6.png)  

Aquí, se puuignar las tareas relacionadas.  Por ejemplo, se puede hacer la asignación de que se realiza la presentación del portafolio de la compañía, que se demora 10 minutos, la descripción de la tarea.  Se puede asignar como otra tarea una llamada de seguimiento, ya sea a nosotros mismos o a otra persona.  

![](aopo7.png)  

Al decirle _Ejecutado_, el sistema automáticamente asigna la otra tarea que queda en el renglón siguiente.  

![](aopo8.png)  

De esta manera, el sistema comienza a generar una lista de las tareas que se van ejecutando y la descripción en la que se genera el registro en la pestaña _Ejecución_ en la parte inferior.  Cada que se actualice la aplicación, el sistema va mostrando cada tarea que se va asignando y ejecutando.  Adicionalmente, se puede editr el maestro para indicar si este posible cliente se descartó por propuestas o por alguna referencia comercial; esto también se puede definir o paramterizar.

![](aopo9.png)  

![](aopo10.png)  

Se regresa a la apicación [**ACON - Contactos**](http://docs.oasiscom.com/Operacion/crm/servicio/acontacto/acon) y en la pestaña de _Oportunidades_ también va a indicar si este prospecto o cliente tiene un registro como _**Oportunidad**_.  

![](aopo11.png)  

En la pestaña _Ejecución_ se pueden observar las tareas ejecutadas por los trabajadores relacionadas a la oportunidad de negocio seleccionada en el maestro. Estas actividades se ejecutan por medio de la funcionalidad de workflow ubicada en la barra superior de herramientras, representada por el botón ![](aopo1.png) .  

![](aopo2.png)  

La opción **AOPO** también cuenta con una pestaña en el detalle llamada _Cuestionario_, la cual permitirá la calificación de oportunidades de negocio de acuerdo a las preguntas definidas previamente en la aplicación [**BMOT - Motivos**](http://docs.oasiscom.com/Operacion/common/bsistema/bmot) en la pestaña del detalle también llamada _Cuestionario_.  

![](aopo3.png)

Seguidamente se encuentra la pestaña _Cotizaciones_, en la cual se podrán observar las cotizaciones que están procesadas y asignadas a la oportunidad de negocio en los campos _Document1_, _NumberId1_, y _LocationId1_ de la cotización.  

![](aopo4.png)