---  
layout: default  
title: Prescripciones 
permalink: /Operacion/is/salud/eautorizacion/movaut/epre  
editable: si  
---  

# EPRE- Prescripciones   

## Prescripciones  - EPRE  

Aplicación **EPRE**  extrae la información de las prescripciones originadas de la plataforma **MIPRES**, con los procedimientos, dispositivos, medicamentos, complementarios, principios activos, nutricionales que intervienen en el proceso de salud.  

![](epre1.png) 

Definicion **MIPRES:** código que permite a los profesionales de salud reportar la prescripción de tecnologías en salud no financiadas, con recursos de la UPC o servicios complementarios. como se ilustra resaltado.  

Creación de botón para consumo reporte de entrega por número de prescripción, proceso MIPRES.  

![](epre2.png)  
**Boton Consultar:** Se realiza mediante OasisCom los siguientes procesos.  
**Pre-Validación:** Este proceso se realiza mediante el procedimiento almacenado p_Mipres.  
**Consumo de Servicio:** Este proceso realiza el consumo de la plataforma mipres.  
**Proceso Confirmación:** Este proceso notificará la respuesta obtenida a OasisCom sobre el mismo Procedimiento Almacenado p_Mipres  

![](epre3.png)  

Sobre el usuario final se muestra la respuesta obtenida del servicio.  

![](epre4.png)  

Se muestra información del servicio sobre plataforma MIPRES.  

![](epre5.png)  

# Seguimiento de Prescripciones.  

Desde **EPRE**, se  visualiza por parte de la EPS el seguimiento actual de una **Prescripción.**  
Se crea nuevo Tab – seguimiento, al programa **EPRE.**  
Esta nueva pestaña mostrara la información solicitada:  
**Direccionamiento:** Proceso realizado por la EPS.    
**Programación:** Proceso realizado por el prestador.  
**Entrega:** Proceso realizado por el prestador.  
**Reporte Entrega:** Proceso realizado por el prestador.  
**Facturación:** Proceso realizado por el prestador.  
**Suministro:** Proceso realizado por la EPS.  

![](epre5_01.png)  

De esta manera el usuario de la EPS tendrá como validar en que proceso se encuentra actualmente la Prescripción.    
El programa **EEPRE,** está orientado al usuario de la Ips/Prestador, y al realizar la sincronización se alimenta la información sobre OASISCOM,  para que la EPS tenga conocimiento en qué momento realizar la finalización del ciclo que sería el envió de suministro sobre cada direccionamiento con todas las etapas realizadas.  
Se resalta el botón de sincronización.  

![](epre5_02.png)  

Se selecciona todos los direccionamientos realizados por la prescripción.  
Los procesos realizados por la IPS ya sean algunos de los mencionados anteriormente.  
Por ser un proceso que solo lo puede consultar la IPS/Prestador.  
Se debe ingresar el token base de la IPS/Prestador.  
Le damos en el botón de sincronizar.  

![](epre5_03.png)  

Esperamos a que termine el proceso de sincronización.  

![](epre5_04.png)  
Consultamos nuevamente el seguimiento de la prescripción.  
Se puede validar que se alimenta de manera correcta la información de la prescripción.  

![](epre5_06.png)  

**NOTA:**
Se ajusta el proceso de **Sincronización por Prescripción**; para permitir seleccionar el tipo de usuario: **IPS - EPS** que realizara la sincronización.  

La parte visual se modifica, para permitir seleccionar las etapas a sincronizar:  

![](epre5_07_.png)  

# Consumo del Servicio **Suministro**.  


Para el envío de suministro, la cual viene siendo el proceso final para cerrar el ciclo sobre el servicio MIPRES.  
Para este proceso que se realiza por la EPS.  
Se ingresa al programa **EPRE.**

Se visualiza el botón configurado sobre el programa **EPRE.**  

![](epre6.png)  

Al darle sobre el botón, se visualiza el siguiente resumen.  

Se muestra mensaje informativo de cantidad de registros a ejecutar para el proceso actual.  

![](epre7.png)  

Al darle aceptar se realiza el envío de la información sobre el servicio MIPRES.  
Todo esto tomando como referencia la información obtenida del reporte de entrega obtenida por parte de la IPS/Prestador.   

**OPERACIÓN DE SUMINISTRO = U**

Al realizar el envío se realiza sobre OASISCOM los siguientes procesos:  
•	Pre-Validación.  
•	Envío de datos sobre el servicio MIPRES.  
•	Captura de datos sobre respuesta para alanceamiento en OASISCOM.  

# Prescripciones sin direccionamiento.  

Se realiza ajuste sobre el programa **EEPRE y EPRE** para mostrar las prescripciones tipo hospitalarias ya que estas no tienen envió de direccionamiento sobre el servicio **MIPRES**.  

A nivel del maestro se corrige para mostrar solo las prescripciones sin detallar los números de entregas direccionados por parte de la EPS.  

Se mostrarán solo las prescripciones asignadas a la IPS y se adiciona sobre el maestro el mostrar a las prescripciones tipo hospitalarias.  

![](eepre_01.png)  

Sobre el detalle se agrega el tab creado anteriormente  de seguimiento, donde se visualiza el detalle de numero de entregas y en qué proceso actual se encuentra.  

![](eepre_02.png)  

En este tab de seguimiento se tiene incluido los registros sobre prescripciones tipo hospitalarios.  

****
Se realiza ajuste para agregar campo de validación en la pestaña de seguimiento, esto para especificar a la EPS, si el proceso en general realizado por la IPS fue correcto según el direccionamiento inicializado por la EPS.  

**Campo que es actualizado cada vez que se realiza la sincronización por parte de la IPS desde el programa EEPRE.**

![](eepre_03.png)  























