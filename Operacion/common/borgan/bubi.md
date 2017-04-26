---
layout: default
title: Ubicaciones Organizacion
permalink: /Operacion/common/borgan/bubi
editable: si
---

# Ubicaciones Organización - BUBI


Esta aplicación perimite realizar parametrización para diferentes procesos del sistema OasisCom, cómo lo son los bancos para el módulo de tesorería, las cajas para el módulo de punto de venta, las bodegas para el proceso de producción entre otros. Por lo tanto, se realizará una explicación de esta aplicación para los procesos que interfieran con la misma y una general de la explicación de los campos.  

## Producción

Como se realiza la parametrización del producto es necesario parametrizar las bodegas correspondientes para el proceso de producción, en algunas empresas se tienen bodegas de materia prima y la planta de producción, por lo tanto, ingresaremos a la aplicación **BUBI** y diligenciamos nuestras bodegas, para esto debemos tener en cuenta lo siguiente:  

-	Ubicación: Id de la ubicación
-	Nombre de la ubicación: Por ejemplo, Bodega materia prima
-	Imputable: El flag se debe activar  


![](bubi1.png)


Si requerimos reservar o separar insumos para un proceso de producción con el fin que no se utilicen en algún otro proceso y tengamos asegurados esos insumos cuando vayamos a realizar el proceso, debemos tener en cuenta que en el **BUBI** en las ubicaciones que hemos parametrizado anteriormente debemos diligenciar lo siguiente:

-	Separada: Activar el flag
-	ApprovesOrder: Activar el flag
-	WMS: Activar el flag
-	DispatchType: Se debe diligenciar la letra D  


![](bubi2.png)








