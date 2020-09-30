---
layout: default
title: Notificación de Urgencia WEB
permalink: /Operacion/crm/portal/proveedor/eenou
editable: si
---

# Notificación de Urgencia WEB - EENOU

En la aplicación **EENOU** se registran las urgencias de los pacientes. El prestador del servicio debe registrar todas las notificaciones de urgencia, donde se debe especificar datos básicos del afiliado y  motivo de la urgencia. En el formulario hay varios campos y algunos se deben diligenciar obligatoriamente, de lo contrario, el sistema arroja un mensaje de control; de igual forma, hay campos que no son estrictamente necesarios de llenar;  también están los campos grises, en los que no podemos realizar ningún tipo de edición.   

El primer campo que se encuentra es el campo _Número_, está en color gris y por tanto no se puede diligenciar. Al guardar el registro, el sistema lo diligencia automáticamente.  
El siguiente campo es _Prestador_, que tampoco tiene posibilidad de edición.  En este campo, se encuentra un número que está asociado a un usuario en la aplicación **Usuarios - SUSU** (campo _Organización_) y hace referencia a la IPS que está realizando la notificación de urgencia.  
El siguiente es el campo _Sucursal_; en este, hay un Zoom con Nombres de ubicaciones y sus respectivos códigos.  Este campo hace referencia a las diferentes sucursales que pueda tener la IPS.  Estas sucursales se encuentran parametrizadas en la aplicación **Terceros - BTER**: el campo tercero debe coincidir con el número del campo _Prestador_ de este formulario.  En el detalle de la aplicación **Terceros - BTER** existe una pestaña llamada _Direcciones_; en esta pestaña, deben aparecer todas las direcciones de las sucursales de esta IPS.  
El siguiente es el campo _Fecha_ que está en gris y por tanto el sistema lo diligencia automáticamente.  
El siguiente campo es _No.Atención_, no necesita parametrización previa para poderlo diligenciar.  Es importante anotar que este campo solo acepta números.  
En los siguiente campos se diligencia la fecha y hora de ingreso según sea el caso.  
El siguiente campo es _Afiliado_; este campo tiene un Zoom y se debe tener en cuenta que el afiliado debe estar previamente parametrizado en la aplicación **Terceros - BTER**.  
Los siguientes son campos de _Diagnóstico_, en ellos también hay un Zoom del cual se debe seleccionar el diagnóstico dado por el médico. Los diagnósticos se parametrizan en la aplicación **Diagnóstico - EBDI**.  
En el campo _Origen_, se encuentra un menú desplegable en el cual se encuentran las diferentes causas para la enfermedad diagnosticada.  
Sigue el campo _Triage_, también tiene un menú desplegable con 5 opciones que hacen referencia a la prioridad de la urgencia.  Se selecciona la que corresponda al caso.  
Continúa el campo _Destino_, que hace referencia al destino hacia el cual va a ser remitido el paciente.  

Finalmente aparece una pregunta _Viene remitido?_. De activarse el flag _SI_, aparecen 2 campos adicionales, los cuales son nombre IPS que remite y ciudad de la IPS que remite, los cuales se deben diligenciar según el caso.  

Al lado derecho se encuentran otro formulario llamado _Informante: en este, se deben diligenciar los datos del médico responsable funcionario de la IPS que realiza la notificación.  Para estos campos, no se necesita de una parametrización previa.  

En el campo _Justificación clínica_ se escriben las observaciones de ser necesarias.  


![](Imagen 1 eenou.png)

Luego de diligenciar los campos en su totalidad, es importante que se guarde la solicitud luego enviar, para que su solicitud quede guardada en el sistema.

![](Imagen 2 eenou.png)


