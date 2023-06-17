---
layout: default
title: Nomina Electronica
permalink: /Operacion/cloud/nominaelectronica
editable: si
---


**Menú**  

[Integración de Nómina Electrónica con OasisCom](http://docs.oasiscom.com/Operacion/cloud/nominaelectronica#integración-de-nómina-electrónica-con-oasiscom)
* [Archivo XML](http://docs.oasiscom.com/Operacion/cloud/nominaelectronica#archivo-xml)   
* [Archivo Plano](http://docs.oasiscom.com/Operacion/cloud/nominaelectronica#archivo-plano)  

[Diccionario Nómina electrónica (descargar)](http://docs.oasiscom.com/Operacion/cloud/nominaelectronicadiccionariodatos-conceptos-XML-v5u.xlsx)  

---

## [Integración de Nómina Electrónica con OasisCom](http://docs.oasiscom.com/Operacion/cloud/nominaelectronica#integración-de-nómina-electrónica-con-oasiscom)
### [Archivo XML](http://docs.oasiscom.com/Operacion/cloud/nominaelectronica#archivo-xml)   

![](nominaelectronica.png)
![](nominaelectronica1.png)
![](nominaelectronica2.png)
![](nominaelectronica3.png)
![](nominaelectronica4.png)
![](nominaelectronica5.png)
![](nominaelectronica6.png)

Estructura XML [descargar.](http://docs.oasiscom.com/Operacion/cloud/NominaElectronica/Estructura_XML_v8.xml) 


### [Archivo Plano](http://docs.oasiscom.com/Operacion/cloud/nominaelectronica#archivo-plano) 


Cuando no se cuenta con una estructura en formato XML, OasisCom provee una estructura en formato de archivo plano el cual puede ser cargado de forma manual a la plataforma de OasisCom por medio de la aplicación **BINT - Interfaces o por medio del consumo de servicio web.**

**Nota:** al cargar el archivo plano, el sistema creará los terceros y contratos en caso de que no existan previamente.

La estructura enviada por OasisCom cuenta con comentarios en cada campo para facilitar su diligenciamiento, también puede consultar el diccionario de datos para validar los valores y formatos sobre cada campo.

![](nominaelectronica7.png)
![](nominaelectronica8.png)
![](nominaelectronica9.png)

Para convertir el archivo en formato **.CVS** vamos a _Archivo ![](flecha.png) Guardar como ![](flecha.png) Elegimos una ubicación ![](flecha.png) Asignamos un nombre ![](flecha.png) Tipo: CSV (delimitado por comas) ![](flecha.png) Guardar_.   

![](nominaelectronica11.png)

Una vez guardado, se ingresa a la aplicación *Interfaces - BINT,* se selecciona la publicación *995 (CARGA PLANO NE)*, se selecciona el archivo que se guardó en *.CSV* y se da clic en Aceptar y Ejecutar.

![](nominaelectronica10.png)


Estructura Archivo Plano [descargar](http://docs.oasiscom.com/Operacion/cloud/NominaElectronica/PlanoNE.xlsx) 