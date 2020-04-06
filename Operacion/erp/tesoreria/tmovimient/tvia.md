---
layout: default
title: VIAJES
permalink: /Operacion/erp/tesoreria/tmovimient/tvia
editable: si
---

## TVIA - Formato Solicitud Itinerario y Viáticos 


Aplicación de movimientos, donde se registran solicitudes de itinerario y viajes y legalizaciones de estos.  
Contablemente sus contrapartidas son cartera contra el gasto. En las legalizaciones se detallan los diferentes conceptos como: alimentación, tiquetes, hotel, trasportes etc. tipo débitos contra el gasto.  

Para crear una solicitud de viáticos, se debe ingresar a la aplicación TVIA y dar clic en el en el recuadro con el símbolo más (+), como se muestra a continuación: 

![](Imagen 1 tvia.png)

Seguidamente, aparece un formulario en el cual se deben diligenciar los campos teniendo en cuenta lo siguiente:

- **Documento:** Se debe diligenciar el documento VI debido a que es una solicitud de viático.  
- **Ubicación:** En este campo, si el colaborador que está realizando la solicitud tiene tarjeta debe ingresar el número de esta, de lo contrario, por defecto se debe diligenciar el número 1 en este campo.  
- **Concepto:** En este campo se debe ingresar el concepto por el cual se está realizando la solicitud.  
- **Identificación:** En este campo se diligencia el número del documento de identidad del colaborador que está realizando la solicitud.  

Al diligenciar el número de documento, los campos **Empleado, Ubicación laboral, Cuenta Bancaria, Banco, Tipo de Cuenta Bancaria, Email, Celular, Tarjeta de Crédito y Categoría** son diligenciados automáticamente por el sistema de acuerdo con la parametrización del [BTER.]()

- **ID Origen:** En este campo se diligencia la ubicación de partida del colaborador.  
- **ID Destino:** En este campo se diligencia el lugar de destino del colaborador.  
- **Fecha inicio:** Se diligencia la fecha desde cuando se realizará el viaje.  
- **Fecha final:** Se diligencia fecha hasta cuando se realizará el viaje.  
- **Días:** En este campo se debe diligenciar el número de días en total del viaje.  
- **Requiere ticket:** En este campo se despliegan dos opciones en caso de que se requiera (Si) o no se requiera ticket (No).  
- **Requiere hotel:** En este campo se despliegan dos opciones en caso de que se requiera (Si) o no se requiera hotel (No).  
- **Ciudad:** Se debe diligenciar la ubicación geográfica del colaborador.  
- **Aprobar:** Debe activarse el check en este campo.  

![](Imagen 2 tvia.png)

Al estar diligenciados los campos mencionados se debe dar clic en el botón **Guardar.** Cuando el registro queda guardado se puede evidenciar que el sistema genera un nuevo renglón. A continuación, en el Detalle se debe dar clic en el símbolo más (+) para ingresar las solicitudes de viáticos por los conceptos requeridos. 

![](Imagen 3 tvia.png)

Al dar doble clic en el campo *Concepto* el sistema arroja los conceptos que han sido asignados previamente en la parametrización, allí se selecciona el concepto requerido para la solicitud. 

![](Imagen 4 tvia.png)

En los siguientes campos se debe diligenciar de acuerdo con lo requerido.
Al tener los campos diligenciados debidamente, se debe dar clic en el botón que se muestra en la siguiente imagen para guardar.

![](Imagen 5 tvia.png)

Al guardar se crea un nuevo renglón en el Detalle. En caso de requerirse se pueden realizar más registros por otros conceptos. 

![](Imagen 6 tvia.png)

Una vez se culmina con el diligenciamiento de la solicitud, el área encargada procesa el documento para que el sistema realice la causación contable correspondiente de acuerdo con la parametrización del [**BPLA.**]() Esto se puede visualizar en la pestaña contabilización de la solicitud.

![](Imagen 7 tvia.png)

Recuerde que este documento se realiza por la ubicación que haya sido designada para administrar estos recursos.  

![](tvia1.png)

No olvide ingresar el tercero responsable, se manejan dos tipos de documentos un **VI - VIAJES ANTICIPO; VL - VIAJES LEGALIZACION**.

**Documento:** Iniciales del documento.  
**Número:** Número con el cual se ingresa al sistema el movimiento.  
**Ubicación:** Identificación numérica y nombre de la ubicación que genera el movimiento.  
**Fecha:** Fecha en la cual se hace el movimiento.  
**Concepto:** Concepto por el cual se va a registrar el movimiento.  
**Nombre Tercero:** Nombre del tercero quien es responsable del viaje.  
**Estado:** Estado en el cual se encuentra el movimiento, Activo, Procesado, Anulado.  

En el maestro se relacionan los siguientes campos:

>+ RequiresTicket.  
>+ RequiresHotel.  
>+ 'FechaOriginal' y 'ExpireDate'.  

*Funcionabilidad:  para que en la solicitud de los viáticos el solicitante pueda registrar si requiere tiquetes, hotel y editar fechas de la estadía del hotel.*  


En el detalle del documento se relacionan los conceptos que han sido designados para ser controlados. Antes se debe asegurar que los conceptos hayan sido creados en la opción [**BDOC**](http://docs.oasiscom.com/Operacion/common/bsistema/bdoc) y la contabilización se debe definir en la opción [**BPLA**.]()  


* Campos ImpConsumo, ValueTax en el detalle; para que cuando legalicen las facturas de lo gastado; los viáticos diferencien el subtotal y los impuestos (IVA e impuesto al consumo).  

![](tvia3.png)

Para ver en detalle el formato de legalización de Gastos del Viaje se debe dar clic en la lupa que aparece en la parte superior de la página:

![](Imagen 8 tvia.png)

El formato que se podrá visualizar es el siguiente:

![](Imagen 9 tvia.png)















