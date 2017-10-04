---
layout: default
title: Casos
permalink: /Operacion/crm/helpdesk/hdcaso/
editable: si
---

# CASOS

En la aplicación **ACAS - Casos** se pueden observar todos los casos que se encuentran registrados desde la aplicación **ASOP - Soporte**, igualmente si no se registran desde dicha aplicación, en esta misma se puede realizar el registro.

![](ACASmaestro.png)

En el maestro de la aplicación se pueden registrar campos cómo lo son:

**Documento:** Se tiene definido el documento CA de casos de soporte.  
**Número:** El sistema diligencia este campo automáticamente de acuerdo al consecutivo.  
**Fecha:** Fecha en la cual se registró el caso.  
**Hora:** Hora en la cual se registró el caso.  
**Prioridad:** Se asigna la prioridad correspondiente al caso registrado.  
**Tercero:** Número de NIT de la empresa la cual registró el caso.  
**Nombre Tercero:** Nombre de la empresa asociada al campo anterior, este campo no se debe diligenciar dado que se diligencia automáticamente de acuerdo al campo registrado anteriormente.  
**Asunto:** Título del caso.  
**Descripción:** Descripción detallada del caso identificado.  
**Id Contacto:** Número de cédula de la persona que realizó el resgistro del caso.  
**Nombre contacto:** Persona asociada al campo anterior.  
**Proyecto:** Si se tiene definido que los casos se asocien a un proyecto especifico, se debe diligenciar el número del proyecto correspondiente.  
**Status:** El estado en el cual se encuentra el caso, este se va modificando automáticamente de acuerdo a las actividades ejecutadas del caso.  
**Producto:** En que producto se ha identificado el caso.  
**Fecha requerido:** Fecha en la cual se requiere la solución del caso y entrega al cliente.  
**Falla:** El caso se puede asociar a unas fallas parametrizadas, para posteriormente realizar estadísticas y mejoras para evitar el registro de un caso similar.  
**Causa:** El caso se puede asociar a una causa identificada.  

![](ACASdetalle.png)

En el detalle se registran las actividades ejecutadas del caso seleccionado en el maestro, cabe resaltar que esta información no se agrega directamente en el detalle de la aplicación sino que se diligencia por medio de un flujo de trabajo, el cual se puede identificar en el botón Workflow-tasks, en donde se registra la actividad ejecutada, el tiempo requerido para solventar dicha actividad y una breve descripción de lo realizado.

![](ACAStaskworkflow.png)

En el workflow tanto los ingenieros de soporte como los clientes pueden ejecutar actividades. Los ingenieros ejecutan lo que es registro, análisis, solución y/o cierre de caso. Cuando el cliente requiera hacer seguimiento o una aclaración sobre el caso registrado y que se encuentra activo en el sistema se habilitará la opción "Aclaración Cliente" para que allí diligencie lo requerido.

