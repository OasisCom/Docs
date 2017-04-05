---
layout: default
title: Niveles de Stock
permalink: /Operacion/scm/inventarios/inivel/incn
editable: si
---

# Calcular Niveles de Stock - INCN

Proceso que calcula el nivel de stock de acuerdo al consumo promedio y a los niveles definidos para cada una de las bodegas.  

![](incn1.png)

**Entrada:** Los parámetros de entrada que requiere este proceso son los siguientes: número de la ubicación donde se va a generar los cálculos de los niveles de stock, números de periodos por los cuales se va a repetir este proceso, identificación del canal, especificación del tipo por el cual se va a generar este proceso este se puede generar por producto, ubicación o por localización y por último definición del nivel de inventario a calcular.  

**Proceso:**  El proceso consiste en calcular el nivel de stock para cada bodega de acuerdo al consumo de los periodos anteriores al último cierre de inventario. Esto permite manejar un volumen de inventario adecuado que facilite la rotación del inventario. Este proceso se ejecuta en lote de acuerdo al tipo que se manejó en los datos de entrada.  

**Salida:** La salida de datos se puede observar en aplicaciones como: niveles por producto (inpr), niveles por bodega (inbo) o en la de reporte niveles
