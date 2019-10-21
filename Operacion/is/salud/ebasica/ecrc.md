---
layout: default
title: Características
permalink: /Operacion/is/salud/ebasica/ecrc
editable: si
---

# ECRC - Características

En esta aplicación se parametrizan todas las características que se vayan a utlizar en el módulo de salud, por ejemplo, al identificar en la afiliación si un usuario pertenece a un grupo étnico.  

En el maestro agregamos un nuevo renglón, asignamos un número de característica, el nombre de esta característica y el nombre del campo donde se reflejará.  

![](ecrc.png)

En el detalle, ingresaremos las opciones a elegir que contiene la característica del maestro. El campo _Estado_ permite visualizar los registros que se encuentran en estado activo e inactivar los que no se necesitan  sin perder la trazabilidad.  

![](ecrc1.png)  

--------

** Parametrización de formularios de salud a nivel jerarquíco (documento, concepto, motivo)**:  
* Desde características  [ECRC], se limiten por documento, concepto y motivo, esto para el tema de afiliaciones en contributivo y subsidiado, se adiciona control por tipo lista.  
**Características**.  

![](ecrc5.png)  

* Parametrizacion del motivo **BMOT:**  

![](ecrc6.png)  
* Jerarquía.  

![](ecrc7.png)  

Se realiza prueba en programa **EEMOV**  
Generamos el detalle del **EEMOV**.  

![](ecrc8.png)  

Generamos el detalle del **EEMOV**.  

![](ecrc9.png)  

Visualizamos que se cargan los datos configurados para el formulario.  
Anteriormente los campos resaltados estan como zoom.  
Al modificarle la configuración se carga a modo lista como se puede confirmar.  

![](ecrc10.png)  

Realizamos la prueba de grabación.   
Ingresamos los datos para el formulario.   
Se comprueba que se realiza la grabación de manera correcta.   

![](ecrc11.png)  

Se confirma los datos guardados de manera correcta ingresando al programa emov.   
Filtramos los campos tipo lista.   
Podemos confirmar que el proceso se genera de manera correcta.   

 ![](ecrc12.png)  


****













