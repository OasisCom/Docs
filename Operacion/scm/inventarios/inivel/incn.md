---
layout: default
title: Niveles de Stock
permalink: /Operacion/scm/inventarios/inivel/incn
editable: si
---

# Calcular Niveles de Stock - INCN

NIVELES DE STOCK  
PASOS A SEGUIR  
**1.	PARAMETRIZACIÓN**   
Los niveles de stock y el cálculo de los mismos permiten a la empresa saber como se comporta la mercancía, los niveles de rotación y consumo para tener unas políticas más eficientes en la labor de ventas, por ejemplo, saber con certeza como mover mercancía entre diferentes ubicaciones. El cálculo de niveles de stock puede realizarse a nivel de empresa o por ubicaciones (bodegas).   
**1.1	Conceptos de Consumo [ibcc]**  
El primer pasó para iniciar el proceso de niveles de stock en OASIS es parametrizar los conceptos de consumo, esto se realiza en la aplicación [ibcc].    
Esta aplicación se encuentra dentro del módulo de LOGÍSTICA SCM >> Inventarios dentro de la carpeta de DATOS BÁSICOS.
Los conceptos de consumo son definidos por la empresa aunque en una gran mayoría de los casos el consumo simplemente es **TODO LO QUE SE VENDE MENOS TODO LO QUE ES DEVUELTO A LA COMPAÑÍA.** 
**Generalmente las compañías consideran como consumo los traslados entre bodegas, este error es muy frecuente, sin embargo, no es consumo pues la mercancía nunca sale de la empresa como tal.**   

IBCC
![](ibcc11.png)


En la aplicación de Conceptos de Consumo [ibcc] encontrará 5 columnas:  
•	Tipo: “M” material.  
•	Ubicación: Los conceptos de consumo deben ser parametrizados para todas y cada una de las ubicaciones que la empresa haya definido como bodegas en el Básico de Bodegas [bubi].   
•	Inventario: Aquí se define para que tipo de inventarios se van a definir los conceptos de consumo. Sean productos terminados, suministros o materia prima.   
•	Documento: Es una parte fundamental de la parametrización pues se deben definir todos los documentos y conceptos que afectan consumo para cada una de las ubicaciones.   
•	Concepto: Se deben señalar todos los conceptos que afectan el consumo por cada documento que se especifique.   
Recuerde:   
La parametrización de los conceptos de consumo debe hacerse para todas y cada una de las ubicaciones (bodegas) de la empresa que se consideren como bodegas incluyendo todos los documentos y conceptos que afecten el consumo en cada una de las ubicaciones.   






Proceso que calcula el nivel de stock de acuerdo al consumo promedio y a los niveles definidos para cada una de las bodegas.  

![](incn1.png)

**Entrada:** Los parámetros de entrada que requiere este proceso son los siguientes: número de la ubicación donde se va a generar los cálculos de los niveles de stock, números de periodos por los cuales se va a repetir este proceso, identificación del canal, especificación del tipo por el cual se va a generar este proceso este se puede generar por producto, ubicación o por localización y por último definición del nivel de inventario a calcular.  

**Proceso:**  El proceso consiste en calcular el nivel de stock para cada bodega de acuerdo al consumo de los periodos anteriores al último cierre de inventario. Esto permite manejar un volumen de inventario adecuado que facilite la rotación del inventario. Este proceso se ejecuta en lote de acuerdo al tipo que se manejó en los datos de entrada.  

**Salida:** La salida de datos se puede observar en aplicaciones como: niveles por producto (inpr), niveles por bodega (inbo) o en la de reporte niveles
