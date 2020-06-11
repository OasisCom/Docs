---

layout: default
title: Costos
permalink: /Operacion/scm/inventarios/icosto/icci
editable: si

---



# Costeo de Inventario - ICCI

Esta aplicación organiza para cada transacción según su fecha actualiza el costo promedio de cada una de las transacciones. Ejecuta el costeo de inventarios de acuerdo con el sistema y método definido para la empresa. Lo ejecuta para todas las bodegas y verifica que el cierre de inventarios para el periodo ya se haya efectuado. Se puede ejecutar cuantas veces se quiera, en el caso de no tener los datos de costos consistentes. Sus resultados se pueden observar en la pantalla de Kardex.  

Antes de ejecutar este proceso primero se debe realizar la parametrización en la aplicación [BCUE - Cuentas](http://docs.oasiscom.com/Operacion/common/bcuenta/bcue#parametrización-proceso-de-costeo). 

El segundo paso que se debe realizar es la parametrización en la aplicación [BDOC - Documentos](http://docs.oasiscom.com/Operacion/common/bsistema/bdoc#parametrización-proceso-de-costeo) para activar el flag promedio. 

Luego de haber realizado los pasos anteriores diligenciamos el periodo, el año y ejecutamos el proceso dando clic en el botón ![](procesar.png).


![](icci1.png)


Para validar el promedio, ingresamos a la aplicación [ICKU - Kardex por Ubicación](http://docs.oasiscom.com/Operacion/scm/inventarios/icosto/icku).




