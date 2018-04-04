---
layout: default
title: Ordenes de produccion
permalink: /Operacion/mrp/control/lcontrol/lord
editable: si
---

# ÓRDENES DE PRODUCCIÓN - LORD


Cuando ya se tienen los insumos correspondientes en la planta se inicia el control de piso, lo cual son todas las operaciones respectivas para transformar al producto final. Por lo tanto, ingresamos a la aplicación **LORD – Ordenes de producción**, se crea un registro diligenciando los siguientes campos:  


-	Documento: OE Orden de producción  
-	Ubicación: Ubicación de la planta en donde se realizará la producción, en este caso 1  
-	Concepto: OE Orden de producción  
-	Motivo: 0 indefinido  
-	Fecha: Fecha en la que iniciará la producción  
-	Hora inicial: Hora en la que iniciará la producción  
-	Hora Final: Hora en la que termina la producción  
-	Fecha final: Fecha en la que termina la producción  
-	Documento1: Programa de producción que se va a asociar, en este caso el 38  
-	Ubicación1: Ubicación del programa de producción anterior  
-	Número1: Número del programa de producción asociado  
-	Tipo de operación: La operación a realizar en este caso cortado, se debe poner el ID de la operación  


![](lord1.png)


Al guardar el registro se visualiza que se diligencia automáticamente el detalle:  


![](lord2.png)

En el campo _Calidad_ de la pestaña del detalle **Inputs**, se permite registrar por renglón varias fallas, causas y acciones e indicar el estado de la calidad. Estas se parametrizan en la aplicación [BCRC - Características](http://docs.oasiscom.com/Operacion/common/bcomer/bcrc).  

![](lord9.png)

Parametrización en BCRC.  

![](lord8.png)

Para asignar la calidad al producto del renglón, damos doble click en el zoom del campo _Calidad_, en la ventana agregamos un nuevo renglón por medio del botón **+**. Seleccionamos de la lista desplegable la calidad del producto.  

![](lord10.png)

Seguidamente, si la calidad del producto tuvo algún defecto seleccionamos la falla, la causa y la acción que se tomó.  

![](lord11.png)

![](lord12.png)

![](lord13.png)

Finalmente, registradas las diferentes fallas que pudieron ocurrir en la producción, damos click en _Aceptar_ y guardamos el registro en el detalle. El sistema asignará la letra que representa la calidad asignada.  

![](lord14.png)

En la pestaña _PARADAS_ se registran los diferentes tipos de paradas existentes por orden. Los tipos de parada se parametrizan desde la opción [BCRC - Características](http://docs.oasiscom.com/Operacion/common/bcomer/bcrc).  

En **BCRC** para la característica de paradas de producción se asocian en el detalle los tipos de parada que se pueden presentar en la producción y los cuales asociaremos en la aplicación LORD.  

![](lord6.png)

En la pestaña del detalle LORD agregamos un nuevc renglón y seleccionamos el tipo de parada presentado en la producción, la hora inicial y final y el producto al cual afectó. Guardamos el registro.  

![](lord7.png)

Posteriormente se procesa el registro  

![](lord3.png)

Una vez procesado las pestañas de outputs se diligencia de acuerdo a los insumos con sus respectivas cantidades que se utilizaron para dicho producto:  

![](lord4.png)

Y la respectiva contabilización  

![](lord5.png)

Aquí finaliza el proceso de producción.  







