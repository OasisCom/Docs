---
layout: default
title: Cuentas
permalink: /Operacion/common/bcuenta/bcue
editable: si
---

## Cuentas - BCUE

La aplicación **BCUE** permite parametrizar el Plan Único de Cuentas (PUC). En el cual se pueden ver todas sus cuentas y subcuentas, facilitando su búsqueda, puesto que, permite filtrar por cuenta, nivel, padre, nombre de cuenta, naturaleza, tipo, tipo de impuesto, entre otros.  

![](bcue1.png)

### [Parametrización cuenta importaciones](http://docs.oasiscom.com/Operacion/common/bcuenta/bcue#parametrización-cuenta-importaciones)

En la aplicación BCUE se debe crear la cuenta contable de importaciones como parametrización para el proceso de _Importaciones_.  

Es necesario que a la cuenta creada de importaciones se parametrice el módulo _Y_, se marque el flag como _Imputable_ y el flag _Project_ para que siempre se deba asociar un proyecto en cada importación.  

![](bcue2.png)

### [Parametrización para el módulo activos fijos](http://docs.oasiscom.com/Operacion/common/bcuenta/bcue#parametrización-para-el-módulo-activos-fijos)  

En esta aplicación debemos marcar las cuentas de activos fijos con el módulo correspondiente, esto solo se debe hacer para las cuentas que son imputables.  

![](bcue3.png)

El módulo en activos fijos se marca con la letra H; esto es importante para que solo se muevan las cuentas en el módulo de activos fijos y no en los demás módulos de OASISCOM.

![](bcue4.png)
