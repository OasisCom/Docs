---
layout: default
title: Pedidos de produccion
permalink: /Operacion/mrp/produccion/lproceso/lped1
editable: si
---

# PEDIDOS DE PRODUCCIÓN - LPED


Al generar el **LPCP - confirma plan**, se genera automáticamente un pedido en esta aplicación que muestra los insumos que se deben trasladas a la bodega de materia prima.  


![](lped2.png)


Cómo se puede observar en el recuadro verde el sistema crea el documento y en los campos Documento1, número1, ubicación1 y bodega arroja la información que se encuentra en el **programa de producción LPRG**.  

En el detalle nos muestra el producto y su respectiva cantidad a fabricar:  


![](lped3.png)


En la pestaña explosión se pueden visualizar las materias primas o insumos para fabricar el producto anterior:  


![](lped4.png)


Cabe resaltar que aquí es donde podemos identificar que insumos nos han entregado de la bodega con sus respectivas cantidades, en este ejemplo no han realizado entrega de ninguno de los insumos como lo podemos ver en la imagen: 


![](lped5.png)


De igual manera si se realizó la respectiva parametrización para separar insumos, en el recuadro en verde se podrá observar la cantidad de insumos separados.


![](lped6.png)


Por otro lado, en la aplicación ISPL se puede visualizar los insumos reservados en el campo _“separada”_.


Una vez validada la información del pedido, se procesa el documento y se realiza un traslado de los insumos a la bodega requerida, lo cual se realiza a través de la aplicación **IMOV**. Se ingresa a la aplicación **LPED** validando en el detalle _“explosión”_ el campo entregado indica las unidades que han sido trasladadas y que ya se encuentran en planta.  


![](lped7.png)


Cuando ya se tienen los insumos correspondientes en la planta, se inicia el control de piso, lo cual son todas las operaciones respectivas para transformar al producto final. Por lo tanto, ingresamos a la aplicación **LORD – Ordenes de producción**.  











