---
layout: default
title: Conceptos
permalink: /Operacion/common/bsistema/bcon
editable: si
---

## Conceptos - BCON

La aplicación Conceptos permite registrar los conceptos por los cuales se generan los distintos documentos que la compañía maneja, estos previamente parametrizados en **BDOC**.  

![](bcon1.png)

**Documento:** Siglas asignadas en BDOC al documento con el cual se relacionará el concepto.  
**Concepto:** Siglas del concepto con el cual se relacionará el documento.  
**Nombre concepto:** Nombre del concepto con el cual se relacionará el documento.  
**Módulo:** Abreviatura del módulo al cual afecta el concepto.  
**Cliente:** Se marca el Check cuando el concepto está relacionado estrictamente al cliente al cual se le generará el documento.  
**Cantidad:** Especifica la afectación del concepto en el módulo especificado anteriormente, ya sea sumando, restando o si no realiza afectación alguna.  
**Contabilidad:** Indicar la contabilidad que afectará el concepto, si afecta el libro local escribir L, si afecta la contabilidad **IFRS** escribir I.  

En la pestaña Motivos en el detalle, se asignan los distintos motivos por los cuales se pueden generar los documentos de acuerdo al concepto. Si el motivo es general para todos los documentos, se crea un motivo 0 el cual los identificará a todos, pero por si el contrario el concepto necesita hacer referencia a varios motivos por el cual se genera el documento se registran los que se crean convenientes. Esta parametrización también se puede realizar directamente desde la aplicación **BMOT**.  

![](bcon2.png)

**Documento:** documento con el cual se relaciona el concepto y por tal el motivo.  
**Concepto:** concepto registrado en el maestro al cual se le definirán los motivos.  
**Motivo:** número del motivo que será asignado al concepto. Motivo previamente parametrizado en **BMOT**.  
**Nombre motivo:** nombre asignado al motivo en **BMOT**.  





