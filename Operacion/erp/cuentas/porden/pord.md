---
layout: default
title: Orden de Pago
permalink: /Operacion/erp/cuentas/porden/pord
editable: si
---

# Orden de Pago - PORD

**Entrada:** La entrada de datos a este programa proviene de la aplicación de movimientos (pmov), en donde los documentos generados son de cuentas por pagar.  

**Proceso:** El proceso comienza cuando se marca el campo para dar la orden de pago y luego se confirma al oprimir el botón de orden de pago, el proceso incluye la generación de un comprobante de egreso en el módulo de tesorería en estado de activo y con la cual se actualiza las cuentas contables afectadas por el movimiento y los saldos de las cuentas que se tienen con los terceros.  

**Salida:** La salida de datos de este proceso se observa en la generación del comprobante de egreso en el módulo de tesorería. Cuando se ejecuta este proceso el movimiento que estaba pendiente de pago ya no se puede consultar por la aplicación de orden de pago.  

![](PORD1.png)

**Tercero:** Identificación del cliente, empleado o  tercero en general que presente saldo en cuentas por pagar.  
**Nombre Tercero:** Nombre del cliente, empleado o  tercero en general que presente saldo en cuentas por pagar.  
**Documento:** Hace referencia al tipo de comprobante.  
**Número:** Número con el cual se generó el comprobante.  
**Ubicación:** Identificación de la ubicación de un punto de la empresa.  
**Cuota:** Número de cuotas de la orden de pago.  
**Vencimiento:** Fecha de vencimiento de la orden de pago.  
**Días:** Días de vencimiento de la orden de pago.  
**Factura:** Factura a pagar.  
**Invoice Number:** Valor de la factura a pagar.  
**Saldo:** Saldo pendiente por pago.  


![](PORD2.png)

**Payment Date:** Fecha de pago de la Orden de Pago.  
**Payment Value:** Valor de pago de la Orden de Pago.  
**Pago:** Se marca si se realizó el pago.  
**Concepto:** Código del Concepto por el cual se hace el movimiento. Este define automáticamente la afectación contable del movimiento, por tanto debe estar perfectamente definido.  
**Moneda:** Campo que indica el tipo de moneda a manejar en la generación de los movimientos.  
**Cuenta:** Identificación numérica de las cuentas afectadas.  
**Prompt Payment Percentage:** Porcentaje que se pagará de la obligación.  
**Prompt Payment Date:** Fecha para el pronto pago de la obligación.  
**Prompt Payment Value:** Valor que se pagará de la obligación.  
**Plan:** En este campo se colocara el código del plan del cual se tomaran las cuentas.  



