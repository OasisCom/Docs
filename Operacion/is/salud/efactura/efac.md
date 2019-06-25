---
layout: default
title: Facturas
permalink: /Operacion/is/salud/efactura/efac
editable: si
---

# FACTURAS

Las facturas de salud **[EFAC]** se emiten a través de un proceso de interface [BINT] donde se carga el RIPS (registro individual de prestación de servicios).  
Existe dos escenarios: uno donde el sistema crea una glosa cuando la diferencia es menos a 30.000 se crea un documento **GT** (GLOSA TEMPORAL)  
El segundo escenario cuando es mayor a 30.000 se crea un documento **FD** (NOTA DEBITO SALUD).  


![](efac1.png)  

**Documento:** desde el BDOC basico de documento se realiza la parametrizacion.  
**Numero:** consecutivo automatico del BCNS.  
**Ubicacion:** parametrizacion creada en basico de ubicaciones.  
**Concepto:** desde el BDOC basico de documento se realiza la parametrizacion.  
**motivo:** parametrizacion del BMOT.  
**Fecha:** se inserta automaticamente al crear el documento o fecha del archivo plano.  
**Estado:** activo, procesado anulado segun correspanda.  
**Status:** desde el BDOC pestaña status se parametriza ejemplo: preradicada, no procede, avalada, avalada glosa, concurrencia, radicada, devuelta, enviada auditoria, entre otras.  
**Documento1:** documento asociado factura.  
**Numero1:** documento asociado factura.  
**Ubicacion1:** documento asociado factura.  
**Tercero:** IPS a quien se factura.  
**Facturas Char:** control interno alfanumerico.  
**Periodo:** mes del documemento.  
**Año:** año de realizacion de la factura.  









