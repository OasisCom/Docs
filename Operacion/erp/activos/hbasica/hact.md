---
layout: default
title: Activos
permalink: /Operacion/erp/activos/hbasica/hact
editable: si
---

# HACT - Activos

En la aplicación HACT se valida la creación de los activos fijos ingresados previamente en la aplicación [**HMOV - Movimientos**](http://docs.oasiscom.com/Operacion/erp/activos/hmovimient/hmov) y se editan las características de este.

En la aplicación HACT consultamos por el número de activo asignado en [**HMOV - Movimientos**](http://docs.oasiscom.com/Operacion/erp/activos/hmovimient/hmov) y damos clic en el botón _editar_.

![](hact.png)

Procedemos a ingresar las características del activo fijo.

![](hact1.png)

**Código alterno:** código interno que la empresa le tenga al activo fijo registrado.
**Tipo:** seleccionar de la lista desplegable, el tipo de activo que se registra.
**Estado:** Activo.
**Brand:** Marca del activo fijo.

Deslizamos la ventana hacia la derecha y diligenciamos los campos pertinentes.

##### Sección Adquisición

![](hact2.png)

**Fecha de compra:** fecha en la cual se compró el activo fijo.
**Fecha de la garantía:** fecha en la cual se cumple la garantía.
**Modelo:** modelo del activo fijo.

Para las siguientes secciones: vehículos, activos intangibles, inmuebles, muebles y enseres, los campos se diligencian dependiendo el activo fijo que se ingrese, es decir, si por ejemplo el activo fijo que se registra es un vehículo, se escribe la palabra *Yes* en el campo vehículo y se diligencian los campos siguientes de la sección Vehículos. Al guardar el registro, el sistema muestra un *Check* en estado activo, en el campo Vehículo y no la palabra Yes. Veamos un ejemplo en la siguiente imagen.

![](hact3.png)

![](hact4.png)

Finalizada la edición de las características del activo fijo en el maestro, nos dirigimos a la pestaña del detalle, se denomina **_Depreciación_**, dicho detalle también ha sido creado por el registro hecho anteriormente en la aplicación  [**HMOV - Movimientos**](http://docs.oasiscom.com/Operacion/erp/activos/hmovimient/hmov).

El detalle especifica la depreciación del activo fijo para el libro 0 (Contabilidad nacional) y el libro 1 (IFRS).

En el detalle se debe indicar para los dos libros contables, si el activo fijo registrado se va a depreciar, el tipo de depreciación es la fecha en la que inicia su depreciación y el estado del activo.

Igualmente, se permite elegir el estado en el que se encuentra el activo fijo, ya sea: _Activo, Depreciado, Retirado, Anulado_.

![](hact5.png)

Finalmente, damos clic en el botón ![](hact6.png) _Guardar_ del detalle.

En la pestaña **_Distribución_** se distribuye el gasto de la depreciación para diferentes centros de costo.

![](hact7.png)  

### Entrada del activo desde OFAC  

Desde la aplicación OFAC se hace el ingreso del activo cuando se compra.  

![](hact8.png)  

Una vez procesado, el sistema genera un consecutivo que se le asigna al activo fijo

![](hact9.png)

(Para ver el proceso completo de la entrada del activo por OFAC, favor remitirse a: [**OFAC - Facturas de compra**](http://docs.oasiscom.com/Operacion/scm/compras/ofactura/ofac))

Después de procesado el ingreso y validada la contabilización, se entra a la aplicación HACT para completar la hoja de vida del activo fijo que acabamos de comprar.  Se ingresa con el número de consecutivo que asignó el sistema

![](hact10.png)

En el maestro se escriben los datos dependiendo del activo que sea, por ejemplo, si es un vehículo, si es un activo intangible, si es un inmueble o si es un mueble y enser

![](hact11.png)
![](hact12.png)
![](hact13.png)
![](hact14.png)

En la parte inferior o detalle, vemos características de depreciación, podemos escribir si se deprecia o no y qué clase de depreciación tiene; estos datos los toma el sistema de la parametrización del grupo contable

![](hact15.png)

Por último, en el campo distribución, vamos a indicarle al activo fijo a qué centro de costo va el gasto, por ejemplo cuando se va a realizar la depreciación el Documento es MA y el concepto DP, traemos la cuenta del gasto a la cual este activo fijo debería contabilizar y por último, en el campo DestinyCostCenterID, se registra a qué centro de costo va la contabilización y en este caso el porcentaje es del 100%, pero si se quiere, se pueden generar diferentes porcentajes en diferentes centros de costos.

![](hact16.png)

Finalmente, se guarda el registro.  

![](hact17.png)

Después de este proceso, se ingresa a la aplicación HSSP para validar los saldos del activo.

(Para conocer el proceso de validación de los saldos de activos, favor remitirse a: [**HSSP - Saldos por periodo**](http://docs.oasiscom.com/Operacion/erp/activos/hsaldo/hssp))

