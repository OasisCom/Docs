---
layout: default
title: MANUAL DE AUDITORIA DE CAMPOS
permalink: /Soporte/auditoria
editable: si
---

# MANUAL DE AUDITORIA DE CAMPOS

Para auditar determinados campos de las aplicaciones de OasisCom se debe realizar la siguiente parametrización:  

1.	SACO (Column Auditing): Aquí se deberá parametrizar el nombre de la tabla y el campo a auditar (Columna).  


![](auditoria1.png)  
Para saber tanto el nombre de la tabla como del campo en la opción correspondiente se podrá utilizar el comando Shift + F11 para identificarlo el cual mostrará un cuadro de dialogo mostrando esta información:  

![](auditoria2.png)  


2.	STAB (Tablas): Se debe validar que tanto la tabla como los campos que se parametricen en el SACO se encuentren previamente creados en el STAB. El campo debe tener el mismo tipo de dato que se tiene configurado en la base de datos. Para el ejemplo se observa que el campo Formula se encuentra creado dentro de la tabla Variables del maestro del STAB:

Por lo tanto, nos dirigimos a la aplicación [**BDOC - Documentos**](http://docs.oasiscom.com/Operacion/common/bsistema/bdoc) y buscamos nuestro documento, activamos el campo _**Automático**_ y procedemos a guardar, esto nos indica que el consecutivo del documento será automático o de lo contrario el sistema lo tomará como un consecutivo manual. Una vez realizado el proceso el sistema nos permite realizar la creación del documento sin inconsistencias.  

![](consecutivo1.png)