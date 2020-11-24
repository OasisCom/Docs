---
layout: default
title: Autorizaciones
permalink: /Operacion/is/salud/eautorizacion/movaut/eaut
editable: si
---

# EAUT - Autorizaciones  

## Autorizaciones - EAUT  

La aplicación **EAUT** permite llevar a cabo el registro de Autorizaciones de salud y el seguimiento correspondientes al proceso.  


#### **Registro**
Para registrar una autorizacion dar click en el botón **+** que se encuentra en la barra de herramientas, se desplegará un nuevo formulario en donde se deben diligenciar los campos correspondientes.  

![Nuevo formulario EAUT - Autorizaciones](eaut1.png)  

**Documento:** seleccionar el documento correspondiente para autorizaciones. Los documentos son parametrizados en la aplicación [**BDOC - Documentos**](http://docs.oasiscom.com/Operacion/common/bsistema/bdoc).  
**Número:** el número de consecutivo será asignado automáticamente por el sistema.  
**Ubicación:** seleccionar la ubicación desde donde se registra la autorizacion.  
**Id_Afiliado:** parametrizacion realizada en BTER, posee zoom de busqueda al dar doble clic.  
**Diagnostico:** .  criterio medico.  
**Nombre del Diagnostico:** Nombre especifico del tipo de diagnostico.  
**Clase:** Clase de cubrimiento que se le dará al diagnostico emitido.  
**Tipo:**  
**Fecha Acta Tutela:** si aplica.  
**Doc Medico:** documento del tratante.  
**Medico:**  nombres.  
**Especialidad:**  del servicio parametrizado en BBES.  
**Cuenta:**  
**Fuente:**  
**Fecha Factura**  campo tipo consulta, no editable.  

En el formulario de las Autorizaciones  **EAUT** se incluye el campo.  
**MIPRES:** código que permite a los profesionales de salud reportar la prescripción de tecnologías en salud no financiadas, con recursos de la UPC o servicios complementarios. como se ilustra resaltado.  

* Para actualizar los datos del afiliado se procede a insertar un nuevo registro en la autorizacion **EAUT**, clic derecho sobre el campo actualizar afiliado.  

![](eaut3.png)  
* Abre este submenu:  
	Donde siempre se deben actualizar los campos: dirección, teléfono, celular, email, barrio.  
    
![](eaut4.png)  
-  Al realizar una autorización con un producto que genera copago, cuando se da guardar en el detalle el servicio, no genera copago y deja el mensaje que el afiliado pertenece a población vulnerable.  
![](eaut4_01.png)  
- Se deben identificar los afiliados con esta condición, la marca está desde el **EBAF** en el campo tipo población.    
![](ebaf1.png)  

- Para la marcación de afiliados ya registrados en un formulario I60 se agregó el campo de población vulnerable para que se marque.  

![](eemov1.png)  

# PROCESO DE CONSUMO DE SERVICIOS MIPRES.  
Involucran funcionalidades como:  
**Direccionamiento:** Este proceso realiza la captura de información en que EPS genera el direccionamiento? a que proveedor? (Droguería, Etc.); para la entrega de medicamentos entre otros a los pacientes.  
**Anulación Direccionamiento:** Este proceso simplemente anula la información brindada en el direccionamiento.  

* Los procesos anteriores se realizan por el programa **EAUT ( AUTORIZACIONES).**  

A este nivel se puede realizar el proceso de direccionamiento ya que es donde se tiene conocimiento del número de entregas en cuanto a medicamentos para un paciente.  

Se muestra en el programa EAUT los botones ahora sobre el detalle.  
Este cambio debido a que una autorización se puede extender a mas de un servicio y cada uno a proveedores diferentes para realizar la atencion al paciente.  
![](mipres2.png)  



* Al darle clic sobre el botón de direccionamiento se abre una ventana modal; se da opcion a que el usuario pueda modificar algunos datos sobre el formulario.  

![](MIPRES3.png)  

* Posterior se e solicita los datos el “Nro. de entrega”, y “sub entrega” realizado al paciente.	 

**Token:** Se solicita el token ya que la EPS adquiere un token habilitado por 24 horas, este token generado desde un sitio web externo del Min. de Salud.  

Una vez ingresemos los datos se da aceptar.  

**PROCESO INTERNO QUE GENERA OASIS:**	  

**Pre-Validación:** Este proceso realizara la validación necesaria sobre los datos antes de que se envíen los datos.  
**Consumo de Servicio:** Este proceso tomará los datos solicitados por el servicio desde OasisCom. Se genera la petición de actualización sobre el servicio MIPRES.   
**Proceso Confirmación:** Este proceso notificará la respuesta a OasisCom para la captura de referenciación.  

**EL PROCESO DE ANULACIÓN ES DE LA SIGUIENTE MANERA.**  

Este proceso solo requiere el token.  
Y al ejecutarlo se genera el mismo proceso indicado en el direccionamiento.  

![](eaut9.png)  

**No Direccionamiento:** Este proceso es contradictorio al de "direccionamiento", este proceso le indica la causa por la que la EPS indica que NO se realizara el NO direccionamiento al proveedor ( Droguería u otro medio).  
**Anulación No Direccionamiento:** Anula el proceso de No direccionamiento.  

* Ambos procesos anteriores se realizan por el programa **ESOL (SOLICITUDES).**  

Todos los procesos piden token por el motivo indicado.  

Solo el proceso de direccionamiento pide los campos Nro. entrega y Nro. sub entrega.  

•	Para la opción de autorizaciones de salud **EAUT**, se crea nuevo tab **direccionamiento** tipo consulta; Autorizaciones No POS. Se muestra la pestaña a modo informativa del direccionamiento realizado y/o por realizar.  
Esta pestaña muestra datos a nivel informativo sobre documentos NP = autorización no POS.  

![](eaut10.png)  

# Circular 008, Anexo ST012.  

Se creo la vista v_Circular008ST012 y el BARC y BINT 33 para extraer la información requerida en el Anexo ST012 de la circular 008.  
Al archivo descargado a través de esta interface (33);  corresponde las autorizaciones, se plasman en este reporte.  






















