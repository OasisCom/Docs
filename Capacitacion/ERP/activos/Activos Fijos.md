---
layout: default
title: Activos fijos
permalink: /Capacitacion/ERP/activos
editable: si
---

# CURSO ACTIVOS FIJOS


En este curso, usted encontrará información más detallada sobre temas relacionados con los activos fijos, tales como: parametrización básica, cómo ingresar un activo fijo (entrada), adición a un activo fijo, baja y depreciación de un activo fijo, los cuales le servirán para aprender a realizar ciertas operaciones en el sistema y algunas herramientas que le facilitarán y le harán más agradable la navegabilidad.

Para comenzar con **la parametrización básica** para el módulo de Activos Fijos, iniciaremos con la aplicación BCLA - Clasificaciones. 

# BCLA - Clasificaciones 

En esta aplicación se clasifican los productos según requieran nuestras necesidades. Por ejemplo, si es una empresa de alimentos, puede ser: Lácteos, cereales, granos, frutas e incluso maquinaria.
De esta manera la aplicacón BCLA sólo es un el primer paso para la organización del inventario de la empresa. 

**Clasificación:** Consecutivo automático que arroja el sistema y funciona como las cuentas contables, funciona por niveles y padres.
**Nombre clasificación:** Especificar el nombre de la clasificación definida.
<br>
**Imputable:** Habilitar en caso de que la clasificación sea imputable.<br>
**Inventario:** Lista desplegable en la que se selecciona el tipo de inventario de la clasificación.<br>
**Clasificación:** Consecutivo automático que arroja el sistema y funciona como las cuentas contables, funciona por niveles y padres.<br>
**Nombre clasificación:** Especificar el nombre de la clasificación definida.<br>
**Imputable:** Habilitar en caso de que la clasificación sea imputable.<br>
**Inventario:** Lista desplegable en la que se selecciona el tipo de inventario de la clasificación.<br>

Para continuar con el proceso de parametrización de activos fijos, hay que dirigirse a la aplicación **BGRU**.

# BGRU - Grupos
BGRU permite crear grupos en los cuales se pueden alojar diferentes tipos de items, entre ellos, los activos fijos.

Para conocer los parametros básicos para la parametrización de BRGU se necesitan conocer los principales items de esta aplicación.

**Grupo:** Número del grupo que se desea crear.<br>
**Nombre grupo:** Nombre del grupo que se desea crear.<br>
**Tipo:** Tipo de grupo, es decir, si es un producto, activo, tercero, cargo, ubicación, impuesto o ninguno.<br>
**Tipo de activo:** En caso tal que en el campo anterior se haya seleccionado tipo activo, se debe indicar de la lista desplegable que tipo de activo es: PP&E, P. Inversión, Construcción, Intangibles, Activos E&E, Activo Biológicos, Activo MV o ninguno.<br>

Recuerda que siempre se puede filtrar la información requerida para una mayor precición en la busqueda.

La sección del detalle cuenta con una gran importancia en la parametrización de los activos. 

**Código:** Código de la cuenta contable que afectará el grupo. Código parametrizado en BCOD.<br>
**Nombre código:** Nombre del código ingresado anteriormente.<br>
**Libro:** Número del libro en el cual afectará los movimientos del grupo.<br>
**Cuenta:** Número de cuenta contable la cual se verá afectada en los movimientos que se realicen con dicho grupo.<br>

A continuación, los items básicos de la aplicación **BPRO**, aquí se deben parametrizar todos los productos o servicios que ofrece nuestra organización con sus respectivas características.  

# PRODUCTOS - BPRO

Es de suma importancia tener en cuenta que aparte de parametrizar los productos, en la aplicación BPRO agrupamos los activos en la pestaña "ESTADO". De igual manera es esencial que se tengan claros todos las pestañas contenidas en la aplicación.

En el maestro de la aplicación encontramos:

**Producto:** Consecutivo automático que arroja el sistema.  
**Nombre del producto:** Se debe registrar el nombre del producto de acuerdo a nuestro portafolio.  
**Clasificación:** Se debe indicar el Id de la clasificación previamente parametrizada en BCLA, esta clasificación la define la empresa.  
**Servicio:** Se debe activar el Check box en caso de ofrecer un servicio.  
**Inventario:** Se debe especificar si es un servicio, materia prima, producto en proceso, un suministro, producto terminado, activo fijo, entre otros.  
**Impuesto:** Se debe activar el Check box en caso que al producto se le deba aplicar impuestos.  
**Grupo:** Id del grupo previamente parametrizado en la aplicación **BGRU**.  
**Estado:** Debemos registrar si el producto está activo o inactivo.  
**Porcentaje IVA:** Se debe indicar el porcentaje de IVA en número entero, por ejemplo 16.  

En el detalle de BPRO encontramos:

**Tipo de impuesto:** Id del tipo de impuesto que le aplica al producto previamente parametrizado en **BTIM**, esto permite calcular los impuestos parametrizados a ese producto.  
**EAN:** Se debe especificar el número EAN del producto para que se pueda diligenciar automáticamente el producto con un lector.  
**Marca:** Registrar el Id de la marca que aplica al producto y esta previamente parametrizada en **BMAR**.  
**Línea:** Registrar el Id de la línea que aplica el producto y esta previamente parametrizada en **BLIN**.  
**Unidad de medida:** El Id de la unidad de medida del producto parametrizada en **BMED**.  
**Ingreso:** Registrar la fecha de ingreso del producto.

Por último tenemos la aplicación **BPLA**, en esta aplicación parametrizamos los documentos que serán utilizados en el módulo de activos fijos.

# BPLA - Planillas

**Documento:** Tipo de documento al que se le crea la plantilla.  
**Concepto:** Concepto por el cual se genera el documento.  
**Motivo:** Motivo del documento.  
**Código:** Siglas del código o nombre de la cuenta.  
**Nombre código:** Nombre de la cuenta.  
**Cuenta:** Cuenta contable a la cual relaciona la plantilla.  
**Naturaleza:** Naturaleza de la cuenta: débito, crédito.  
**Depende:** Si la plantilla depende de un producto, activo, tercero, ubicación, impuesto, salud o ninguno.  
**Depende cliente:** Si el cliente depende de un tercero, una entidad, una empresa, un detalle o ninguno.  
**Depende de impuestos:** Igualmente permite seleccionar sobre que depende el impuesto, si de un tercero, producto, empresa, salud o ninguno.  
**Libro:** libro contable en el cual se va a operar la plantilla.  
**Estado:** estado de la plantilla.  

