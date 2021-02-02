---

layout: default
title: Reevaluación Proveedores
permalink: /Operacion/scm/compras/oorden/oevp
editable: si

---



# Reevaluación de Proveedores - OEVP


En el maestro del documento de la opción **OEVP** se podrán ver los datos generales como el proveedor que se ha evaluado, la fecha de la evaluación, responsable que ejecuto el proceso y el puntaje total obtenido por el proveedor. Los documentos que generemos en esta opción quedaran en estado Activo.  
Dividiendo este, en periodo de reevaluación, observaciones, productos negociados, reevaluación por criterios y en grandes categorías como lo son calidad del servicio.  


![](imagenes/oevp.png)  

**Valores Generados:** En la pestaña *“Detalle de Formulario”* se podrán ver los valores finales para cada una de las variables involucradas en el proceso.  

![](imagenes/oevp1.png)


**Detalle de los Cálculos:** En la pestaña *“Detalle”* se podrán ver los datos calculados para cada una de las variables del proceso. El campo **"Tipo"** se podrán identificar los datos correspondientes a cada una de las variables.
![](imagenes/oevp3.png)  


Para conocer el proceso de Parámetros del Proceso dirijase a la aplicación [OPEP](http://docs.oasiscom.com/Operacion/scm/compras/oproceso/opep) - Provider_Reevaluation.  

**Importante:**  
Se incluyen validaciones para que el puntaje que se encuentre en la pestaña de formulario concuerde con el detalle; que se tiene en la pestaña "detalle" para cada uno de los factores. Así mismo, que cuando se procese el documento el sistema valide que la sumatoria de los factores sea lo mismo que está en el encabezado en el campo puntaje.  

Al intentar confirmar el movimiento con un dato en el factor de seguimiento a la orden de 10 en el formulario, pero recordando que tenía 6 en el detalle y el sistema genera la alerta:  

![](oevp1.png)

