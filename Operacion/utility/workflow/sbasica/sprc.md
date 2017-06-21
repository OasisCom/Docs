---
layout: default
title: Datos Basicos
permalink: /Operacion/utility/workflow/sbasica/sprc
editable: si
---

## Procesos - SPRC

En esta aplicación se realiza la parametrización de todos los procesos que se requieran.

### Flujo de trabajo de tareas

Se pueden obtener tres esquemas de flujo de trabajo de tareas, los cuales son:

- Planeado: En este esquema se realiza la planeación de las diferentes actividades que se requieran, se procesan y posteriormente se realiza la ejecución
- Dinámico: En este esquema unicamente se realiza la ejecución a las actividades registradas 
- Planeado avance: En este esquema se realiza la planeación de las diferentes actividades que se requieran con su respectiva ejecución, este esquema se diferencia con el primero "planeado" dado que tiene configurado correos de respuesta por cada actividad planeada o ejecutada

En el maestro, se realiza la parametrización del proceso que se requiere de la siguiente manera:

![](SPRC Maestro.png)

**Id Proceso:** Id del proceso, es un campo único para cada registro
**Nombre del proceso:**

Para estos tres esquemas se requiere realizar la misma parametrización en el detalle:

![](SPRC Detalle.png)

**Renglón:** Consecutivo que arroja el sistema, este consecutivo es único para que cada registro, es decir, no se puede repetir
**Nombre:** Nombre de la actividad definida para este proceso
