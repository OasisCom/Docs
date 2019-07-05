---
layout: default
title: Supervisor
permalink: /Operacion/scm/pos/jsuperv/jtur
editable: si
---

# Turnos - JTUR

Aplicación cuya funcionabilidad es resumir las transacciones realizadas en un determinado lapso; donde al procesar cada factura, devoluciones u otros documentos parametrizados, estos se insertarán automáticamente en el detalle del turno [JTUR].  

![](jfac2.png)  

**Documento:** Documento parametrizado con anterioridad en el sistema. Este documento puede ser FA (Factura) o DE (Devolución).  
**Número:** Consecutivo de documento automático.  
**Ubicación:** Ubicación de punto de venta.  
**Fecha:** Fecha de registro de la factura.  
**Concepto:** Iniciales del concepto por el cual se desea realizar el documento Éste se debe parametrizar previamente en el sistema, en este caso el concepto puede ser FA (Factura) o DE (Devolución).  
**Motivo:**  Este se encuentra definido como 0.  
**Vendedor:** Número de identificación de la persona que se encuentra facturando.  
**Condición de Pago:** Representa un acuerdo establecido con clientes y proveedores en forma de tipos de descuento y plazos de pago, las diferentes opciones de condición de pago se encentran parametrizadas en la opción BCND.  
**Tipo de precio:** Precio debidamente parametrizado en la aplicación FBTP.  
**Periodo:** Este campo se llena automaticamente, al insertar el registro.  
**Año:** Campo que se llena automaticamente, al insertar el registro.   
**Tercero:** Número de identificación del tercero al cual se carga el movimiento.   


Desde el Basico de documentos **[BDOC]** se parametrizan los: Abonos, sobrantes, faltantes etc. Que podrán ser editados en el detalle del turno **[JTUR]**.  


Para revisar cuanto facturó el cajero en su turno, ingresamos a revisar el turno en la aplicación [JTUR] - Turnos, nos dirigimos al menú y seleccionamos la opción.  


Existen dos formas de realizar la apertura del turno: una es realizar la primera factura de venta y al confirmarla, automáticamente se abre el **[JTUR]**. La segunda forma es desde el **[JTUR]** realizar la inserción y guardar. 
La forma correcta de confirmar o procesar un turno es realizar la equivalencia entre: el valor de las facturas, menos notas que se registran en el detalle del JTUR versus las formas de pago que resumen en la tercera pestana del turno denominada Pagos.  



Existe un formato tipo tirilla. Desde el detalle del Turno (JTUR) para el caso donde el cliente realiza abonos o pagos parciales, estos podrán ser impresos con el botón "imprimir colilla" tipo recibo de caja.  






![](jfac2.png)



