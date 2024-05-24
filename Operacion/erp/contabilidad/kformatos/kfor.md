---
layout: default
title: Balance de Formatos
permalink: /Operacion/erp/contabilidad/kformatos/kfor
editable: si
---
# Balance de Formatos - KFOR

En esta aplicación el sistema mostrará la información generada anteriormente en la aplicación [**KPGF - Genera Formatos**](http://docs.oasiscom.com/Operacion/erp/contabilidad/kproceso/kpgf) , consultamos por año, número de formato asignado en la aplicación [**KBFO - Formatos**](http://docs.oasiscom.com/Operacion/erp/contabilidad/kbasica/kbfo) y damos _Enter_.  


- [Verificación de medios magnéticos para Activo Fijo por Compras](http://docs.oasiscom.com/Operacion/erp/contabilidad/kformatos/kfor#verificación-de-medios-magnéticos-para-activo-fijo-por-compras)
- [Verificación de medios magnéticos para Activo Fijo por HMOV](http://docs.oasiscom.com/Operacion/erp/contabilidad/kformatos/kfor#verificación-de-medios-magnéticos-para-activo-fijo-por-hmov)

El valor indicado en el maestro debe coincidir con el Balance de Prueba.  

![](KFOR1.png)

Es importante validar que en el maestro de la aplicación aparezca la información de los campos _Proceso, Periodicidad y Fuente_, la cual fue parametrizada anteriormente en  [**KBFO - Formatos**](http://docs.oasiscom.com/Operacion/erp/contabilidad/kbasica/kbfo).

En el detalle de esta aplicación se observará la información discriminada por tercero y cuenta.  

![](KFOR2.png)

Se debe validar que en la aplicación [**KPME - Medios Magnéticos**](http://docs.oasiscom.com/Operacion/erp/contabilidad/kmedios/kpme) también haya generado información.


## [Verificación de medios magnéticos para Activo Fijo por Compras](http://docs.oasiscom.com/Operacion/erp/contabilidad/kformatos/kfor#verificación-de-medios-magnéticos-para-activo-fijo-por-compras)


Generados los medios magnéticos previamente en la aplicación [**KPGF - Genera Formatos**](http://docs.oasiscom.com/Operacion/erp/contabilidad/kproceso/kpgf#medios-magnéticos-para-el-ingreso-de-activo-fijo-por-compras), ingresamos a la aplicación _KFOR - Balance de Formatos_ a validar la información que se generó.  

Consultamos por año generado y Id del formato.  

![](kfor3.png)

Vemos que el sistema tomó el valor de $285.000 que corresponde al IVA de los 2 activos fijos así:  

![](kfor4.png)

## [Verificación de medios magnéticos para Activo Fijo por HMOV](http://docs.oasiscom.com/Operacion/erp/contabilidad/kformatos/kfor#verificación-de-medios-magnéticos-para-activo-fijo-por-hmov)

Generados los medios magnéticos previamente en la aplicación [**KPGF - Genera Formatos**](http://docs.oasiscom.com/Operacion/erp/contabilidad/kproceso/kpgf#medios-magnéticos-para-el-ingreso-de-activo-fijo-por-compras), ingresamos a la aplicación _KFOR - Balance de Formatos_ a validar la información que se generó con las adiciones realizadas.  

![](kfor5.png)











