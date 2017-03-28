---
layout: default
title: Caja Menor
permalink: /Operacion/erp/tesoreria/tmovimient/tmen
editable: si
---

## Caja Menor - TMEN

Esta opción permite administrar los gastos cotidianos de la empresa, para ello se realiza un movimiento de Caja Menor, mediante un documento **CM**. 


![](TMEN1.png)

Recuerde que este documento se realiza por la ubicación que haya sido designada para administrar estos recursos. 

No olvide ingresar el tercero responsable de la caja, el número de caja y la fecha inicial y final del movimiento, esta fecha corresponde al periodo abarcado por los diferentes desembolsos de caja, que se van a relacionar en el detalle del documento **CM**.

**Documento:** Iniciales del documento.  
**Número:** Número con el cual se ingresa al sistema el movimiento de la caja menor.  
**Ubicación:** Identificación numérica y nombre de la ubicación que genera el movimiento de caja menor.  
**Fecha:** Fecha en la cual se hace el movimiento de caja menor.  
**Concepto:** Concepto por el cual se va a registrar el movimiento en caja menor.  
**Motivo:** número que identifica un documento para casos especiales a nivel contable, se puede parametrizar los documentos por conceptos en la aplicación BDOC, los motivos se parametrizan desde la aplicación BPLA.  
**Total:** Valor por el cual se hace un crédito a la caja menor.
Tercero: número de identificación del tercero quien es responsable de la caja menor en determinada ubicación.  
**Nombre Tercero:** Nombre del tercero quien es responsable de la caja menor en determinada ubicación.  
**Estado:** Estado en el cual se encuentra el movimiento, Activo, Procesado, Anulado.  
**Caja:** Identificación numérica de la caja a la cual se genera el movimiento.  
**Observación:** Referente al movimiento de la caja menor.  
**Hora inicial:** Hora en la cual se asigna la caja menor a una ubicación.  
**Hora final:** Hora en la cual se procede a hacer el reembolso de la caja menor.  

En el detalle del documento **CM** se relacionan los conceptos que han sido designados para ser controlados por la Caja Menor. Antes se debe asegurar que los conceptos hayan sido creados en la opción **BDOC** y la contabilización se debe definir en la opción **BPLA**.  


![](TMEN2.png)


**Renglón:** Consecutivo generado que se manejan en el comprobante.  
**Fecha:** Fecha en que se hizo el gasto a registrar en caja menor.  
**Tercero:** número de identificación del tercero al cual se carga el movimiento.  
**Nombre Tercero:** nombre del tercero al cual se carga el movimiento.  
**Concepto:** abreviaturas del concepto a registrar.  
**Nombre Concepto:** nombre del concepto a registrar.  
**Naturaleza:** Hace referencia a la naturaleza de la cuenta si es débito o crédito.  
**Valor:** Valor numérico que afecta la cuenta según su naturaleza.  


![](TMEN3.png)


**Base Retención:** Valor al cual se le debe liquidar la retención que se le aplica de acuerdo al concepto.  
**Centro Costo:** Identificación del centro de costo al cual pertenece la cuenta.  
**Negocio:** Número de negocio al cual se carga el movimiento.  
**Projectld:** Identificación numérica del proyecto.  
**FiscalVoucher:** Número de autorización en caso que se utilice tarjeta.  
**Estado:** Estado de documento, activo, procesado, anulado.  
**Motivo:** número que identifica un documento para casos especiales a nivel contable, se puede parametrizar los documentos por conceptos en la aplicación BDOC, los motivos se parametrizan desde la aplicación BPLA.  
**Observación:** Referente al detalle del movimiento de la caja menor.  









