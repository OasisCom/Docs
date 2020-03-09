---

layout: default
title: Formulario de Afiliados WEB
permalink: /Operacion/crm/portal/cliente/eemov
editable: si

---

# EEMOV - Formulario de Afiliados WEB


Consulta los procesos que puedes ejecutar desde EEMOV.


- [Explicación general de como usar EEMOV](http://docs.oasis.com/Operacion/crm/portal/cliente/eemov/#Explicación-general-de-como-usar-EEMOV)
- [Creación de nuevos afiliados](http://docs.oasis.com/Operacion/crm/portal/cliente/eemov/#Creación de nuevos afiliados)
- [Proceso de novedades para Régimen Subsidiado y Contributivo](http://docs.oasis.com/Operacion/crm/portal/cliente/eemov/#Proceso-de-novedades-para-Regímen-Subsidiado-y-Contributivo)
- [Proceso de translado para los Regímenes Subsidiado y Contributivo](http://docs.oasis.com/Operacion/crm/portal/cliente/eemov/#Proceso-de-translado-para-los-Regímenes-Subsidiado-y-Contributivo)
- [Proceso de portabilidad para el Régimen Subsidiado](http://docs.oasis.com/Operacion/crm/portal/cliente/eemov/#Proceso-de-portabilidad-para-el-Régimen-Subsidiado)


### [Explicación general de como usar EEMOV](http://docs.oasis.com/Operacion/crm/portal/cliente/eemov/#Explicación-general-de-como-usar-EEMOV)

La aplicación EEMOV nos permite realizar el registro de los diferentes movimientos referentes al aseguramiento de los afiliados en el sistema de información institucional. Diligenciamos los campos del formulario y damos click en _Guardar_.

![](eemov.png)

**Documento:** en el campo documento, damos click en la lupa y seleccionamos el documento del movimiento que se desea generar. (FUI - formulario Único Novedad Internas, FUN – Formulario Único de Novedades, MC – Movimiento Contributivo, MS – Movimiento Subsidiado, NS – Novedad Salud).

![](eemov1.png)

**Número:** consecutivo asignado por el sistema al momento de guardar el registro, igualmente este número sirve para llamar un documento que se encuentre en estado ACTIVO y así poderlo editar nuevamente.  
**Concepto:** damos click en la lupa y seleccionamos el concepto por el cual se realiza el movimiento, por cada documento el sistema traerá diferentes conceptos. Ejemplo: (Documento MS Movimiento Contributivo – Concepto IN).  

![](eemov2.png)

**Ubicación:** seleccionamos del zoom la ubicación de donde se está llevando a cabo el movimiento.  

![](eemov3.png)

**Motivo:** seleccionamos del zoom el motivo correspondiente al movimiento que se genera. Los motivos también varían de acuerdo al documento y el concepto. En este ejemplo, seleccionaremos el motivo 2 (adición de beneficiario) para el documento MS con concepto IN.  

![](eemov4.png)

**Afiliado:** digitar o seleccionar del zoom el número de identificación del afiliado, de igual forma este campo nos brinda la opción de buscar en la Base de Datos según los criterios de búsqueda, siempre y cuando se mantenga un historial.  

![](eemov5.png)

**Madre:** digitar o seleccionar del zoom el número de identificación de la madre del afiliado. Esto aplica cuando se registra un ingreso nuevo o beneficiario.  
**Beneficiarios:** digitar la cantidad de beneficiarios asociados al afiliado. El sistema solo contempla el ingreso de máximo 5 beneficiarios y de acuerdo a la cantidad ingresada, el sistema arroja los campos para ingresar los datos de cada beneficiario.  

Diligenciados todos los campos requeridos, damos click en el botón _Guardar_ y el sistema arrojará un mensaje de control indicando el número de consecutivo asignado al movimiento.  

![](eemov66.png)  

* Descripción de los botones del formulario **EEMOV**  


![](eemov6.png)  

1.	Nuevo: se agrega o crea un nuevo registro de Afiliado.  

2.	Al dar click en _Guardar_, la aplicación arrojará un formulario, en donde inicialmente seleccionaremos del zoom la condición del usuario que se registra y activaremos el flag para las declaraciones y autorizaciones según aplique.   

3.	Elimina detalle: realiza el borrado únicamente del detalle del afiliado.  

4.	Agregar beneficiario: despliega la venta donde solo edita cantidad.  

5.	Eliminar beneficiario: realiza el borrado de la cantidad de beneficiarios.   

6.	Imprime Encuesta, previa parametrizacion de EENC.  



![](eemov7.png)

![](eemov8.png)


Seguidamente se encuentran los anexos, en donde digitaremos el número 1 en el campo del documento que se haya recibido por parte del afiliado, este campo se verá con una **X** en el formulario cuando se genere, también activaremos los flag de los demás anexos recibidos por parte del afiliado según se requieran.  



![](eemov9.png)

A continuación, se encuentran los campos para ingresar los datos del beneficiario.  

![](ben1.png)

**Tipo subsidiado:** seleccionamos del zoom el tipo de subsidiado que es el beneficiario: Cabeza (Cotizante), Otro (Beneficiario).  

![](eemov10.png)

Diligenciados todos los datos del beneficiario, damos click en el botón 
_Guardar_.

A continuación adjuntamos los documentos: formulario único, copia del documento de identificación y encuesta del sisben. Estos documentos son de carácter obligatorio de acuerdo a la parametrización realizada en la aplicación [**BMOT – Motivos**](http://docs.oasiscom.com/Operacion/common/bsistema/bmot#parametrización-anexos-eemov) para el documento MS, concepto IN y motivo 2. (_Ver aplicación_)  

Damos click en el botón _Adjuntar_, elegimos la ruta donde se encuentran los soportes digitales del afiliado por norma y se proceden a cargar al sistema.  

![](adjuntar.png)


![](adjuntar1.png)

Seleccionamos de la ruta los documentos a cargar y asignamos el tipo de adjunto.  

![](adjuntar2.png)

Para cargar los documentos adjuntos damos click en el botón _Aceptar_.

![](adjuntar3.png)

Finalmente, para confirmar el cargue de los soportes damos click en el botón _Save changes_ (Guardar cambios).  

![](adjuntar4.png)

Al quedar cargados los documentos, estos se visualizarán de la siguiente manera:  

![](adjuntar5.png)

Cargados correctamente los documentos digitales, procesamos el formulario dando click en el botón ![](procesar.png) y a continuación, el sistema arrojará un mensaje indicando que la transacción fue exitosa.  

![](procesar1.png)

Los Movimientos de cada registro figuran en el Sistema de información OASISCOM en estado _Procesado_ y _No Reportado_, este estado le permite al responsable de los reportes de los archivos exportar los registros grabados en el sistema para su debido proceso ante el FOSYGA.  

Para confirmar el registro del movimiento realizado anteriormente, ingresamos a la aplicación [**EMOV – Formulario de Afiliados**](http://docs.oasiscom.com/Operacion/is/salud/eafiliacion/movafi/emov#confirmar-registro-generado-en-eemov) y filtramos por documento, consecutivo, ubicación y concepto. Allí verificamos que el registro se encuentre en estado procesado. (_Ver aplicación_)

Cuando un registro presenta algún inconveniente en sus datos, el responsable de los reportes de los archivos puede realizar una reversión de estado para hacer la modificación necesaria en la aplicación [**EBAF - Afiliados**](http://docs.oasiscom.com/Operacion/is/salud/eafiliacion/movafi/ebaf).



La aplicación EEMOV nos permite realizar el registro de los diferentes movimientos referentes al aseguramiento de los afiliados en el sistema de información institucional para los regímenes Subsidiado y Contributivo, aplicación en la cual se pueden realizar creación de nuevos afiliados, novedades y traslados para cada régimen.

A continuación, se explica el proceso para la creación de nuevos afiliados tanto para el Régimen Subsidiado como el Contributivo. 

Consulta los procedimientos que puedes ejecutar desde EEMOV


### [Creación de nuevos afiliados](http://docs.oasiscom.com/Operacion/crm/portal/cliente/eemov/#Creación-de-nuevos-afiliados)
Para la creación de nuevos afiliados se debe ingresar a la aplicación EEMOV y realizar un nuevo registro diligenciando cada uno de los campos como se indica a continuación:

![](Imagen 1 Aplicacion EEMOV.png)	


**Documento:** En el campo documento, damos clic en la lupa y seleccionamos el documento del movimiento que se desea generar (FUN – Formulario Único de Novedades, 
MC – Movimiento Contributivo, MS – Movimiento Subsidiado, NS – Novedad Salud).

- Si se va a registrar un afiliado del Régimen Contributivo se debe seleccionar el                                    documento MC.
- Si se va a registrar un afiliado del Régimen Subsidiado se debe seleccionar el                                      documento MS.

![](Imagen 2 Aplicacion EEMOV.png)


**Número:** consecutivo asignado por el sistema al momento de guardar el registro, igualmente este número sirve para llamar un documento que se encuentre en estado ACTIVO y así poderlo editar nuevamente.

**Concepto:** se debe dar clic en la lupa y seleccionamos el concepto por el cual se realiza el movimiento, por cada documento el sistema traerá diferentes conceptos.

Para el caso de la creación de nuevos afiliados, para ambos documentos, se selecciona la opción IN.

![](Imagen 3 Aplicacion EEMOV.png)


**Ubicación:** seleccionamos del zoom la ubicación de donde se está llevando a cabo el movimiento.
![](Imagen 4 Aplicacion EEMOV.png)


**Motivo:** seleccionamos del zoom el motivo correspondiente al movimiento que se genera. Los motivos también varían de acuerdo con el documento y el concepto. En este ejemplo, seleccionaremos el motivo 2 (adición de beneficiario) para el documento MS con concepto IN.

![](Imagen 5 Aplicacion EEMOV.png)

**Afiliado:** Seleccionamos del zoom el número de identificación del afiliado. De igual forma este campo nos brinda la opción de buscar en la Base de Datos según los criterios de búsqueda en el caso de que el usuario no se encuentre registrado allí, siempre y cuando se mantenga un historial.

![](Imagen 6 Aplicacion EEMOV.png)

**Madre:** digitar o seleccionar del zoom el número de identificación de la madre del afiliado. Esto aplica cuando se registra un ingreso nuevo o beneficiario.

**Beneficiarios:** digitar la cantidad de beneficiarios asociados al afiliado. El sistema solo contempla el ingreso de máximo 5 beneficiarios.

Diligenciados todos los campos requeridos, damos clic en el botón Guardar y el sistema arrojará un mensaje de control indicando el número de consecutivo asignado al movimiento.

![](Imagen 7 Aplicacion EEMOV.png)

Inmediatamente luego de Guardar, se habilitan unos campos para ingresar los datos del usuario. Algunos campos del formulario cambian dependiendo del tipo de documento que haya sido ingresado.

Los campos que aparecen con el asterisco (*) se deben diligenciar obligatoriamente, al momento de dar clic el sistema valida. Los campos que aparecen resaltados en color azul tienen un filtro de consulta el cual se habilita dando doble clic.

![](Imagen 8 Aplicacion EEMOV.png)

Inmediatamente después del formulario se encuentra el subtítulo **Vll. Declaraciones y autorizaciones.** Al poner el cursor sobre el recuadro de cada número aparece una leyenda y se selecciona según corresponda.

![](Imagen 9 Aplicacion EEMOV.png)

A continuación, aparece el subtítulo **IX. Anexos.** En los recuadros con espacio para diligenciar se debe indicar la cantidad de cada documento que se está anexando y en los demás recuadros, de acuerdo con la leyenda, se debe marcar según corresponda.

![](Imagen 10 Aplicacion EEMOV.png)

Dependiendo de la cantidad de beneficiarios que haya sido ingresada inicialmente, el sistema arroja un formulario para ingresar los datos por cada beneficiario.

![](Imagen 11 Aplicacion EEMOV.png)

Diligenciados todos los datos del beneficiario, damos clic en el botón Guardar.

A continuación, adjuntamos los documentos: formulario único, copia del documento de identificación y encuesta del Sisbén. Estos documentos son de carácter obligatorio de acuerdo a la parametrización realizada en la aplicación **BMOT – Motivos** para el documento MS, concepto IN y motivo 2. 

Damos clic en el botón Adjuntar, elegimos la ruta donde se encuentran los soportes digitales del afiliado por norma y se proceden a cargar al sistema.

![](Imagen 12 Aplicacion EEMOV.png)

Seleccionamos de la ruta los documentos a cargar y asignamos el tipo de adjunto.

![](Imagen 13 Aplicacion EEMOV.png)

Para cargar los documentos adjuntos damos clic en el botón Aceptar.

![](Imagen 14 Aplicacion EEMOV.png)

Finalmente, para confirmar el cargue de los soportes damos clic en el botón Save changes (Guardar cambios).

![](Imagen 15 Aplicacion EEMOV.png)

Al quedar cargados los documentos, estos se visualizarán de la siguiente manera:

![](Imagen 16 Aplicacion EEMOV.png)

Cargados correctamente los documentos digitales, procesamos el formulario dando clic en el check y a continuación, el sistema arrojará un mensaje indicando que la transacción fue exitosa.

![](Imagen 17 Aplicacion EEMOV.png)

Los Movimientos de cada registro figuran en el Sistema de información OASISCOM en estado Procesado y No Reportado, este estado le permite al responsable de los reportes de los archivos exportar los registros grabados en el sistema para su debido proceso ante el FOSYGA.

Para confirmar el registro del movimiento realizado anteriormente, ingresamos a la aplicación **EMOV – Formulario de Afiliados** y filtramos por documento, consecutivo, ubicación y concepto. Allí verificamos que el registro se encuentre en estado procesado.


### [Proceso de novedades para Régimen Subsidiado y Contributivo](http://docs.oasis.com/operacion/crm/portal/cliente/eemov/#Proceso-de-novedades-para-Regímen-Subsidiado-y-Contributivo)

Para realizar novedades en ambos regímenes se debe ingresar a la aplicación EEMOV.
En este caso surgen dos opciones, la primera es para realizar una novedad para un único concepto y la segunda es para realizar múltiples novedades.

**Para realizar una novedad para un único concepto se debe realizar lo siguiente:**

**Documento:** en este campo, de las opciones que se despliegan al dar clic en la lupa, se debe seleccionar el documento NS-Novedad Salud.

![](Imagen 18 Aplicacion EEMOV.png)

**Número:** consecutivo asignado por el sistema al momento de guardar el registro, igualmente este número sirve para llamar un documento que se encuentre en estado ACTIVO y así poderlo editar nuevamente.

**Concepto:** se debe dar clic en la lupa y seleccionar el concepto específico por el cual se realiza la novedad. Es importante tener en cuenta que los conceptos que inician por “n” son los que se pueden reportar. En este campo se despliegan las siguientes opciones:

![](Imagen 19 Aplicacion EEMOV.png)

**Ubicación:** seleccionamos del zoom la ubicación de donde se está llevando a cabo el movimiento.

![](Imagen 20 Aplicacion EEMOV.png)

**Motivo:** en este campo el sistema arroja una opción dependiendo del concepto que haya sido seleccionado anteriormente, por ejemplo, si en el concepto se seleccionó la opción **N03-Actualización o corrección de apellidos,** el motivo que aparecerá será el siguiente:

![](Imagen 21 Aplicacion EEMOV.png)

Afiliado: se debe seleccionar el número de identificación del afiliado al cual se le realizará la novedad.

![](Imagen 22 Aplicacion EEMOV.png)

Diligenciados todos los campos requeridos, se debe dar clic en el botón Guardar y el sistema arrojará un mensaje de control indicando el número de consecutivo asignado al movimiento. 

![](Imagen 23 Aplicacion EEMOV.png)

Así mismo, se habilitan dos campos donde se puede realizar la acción que fue escogida en el concepto **N03 - Actualización o corrección de apellidos,** como se muestra a continuación:

![](Imagen 24 Aplicacion EEMOV.png)

En los campos que se habilitan se debe realizar el cambio correspondiente, luego se da clic en Guardar, por ejemplo:

![](Imagen 25 Aplicacion EEMOV.png)

Con el cambio realizado se debe dar clic en guardar y el sistema arroja un mensaje indicando que la transacción realizada ha sido exitosa:

![](Imagen 26 Aplicacion EEMOV.png)

Después de que los cambios han sido guardados con éxito, nos dirigimos a la aplicación **EMOV- Formulario de Afiliados** para verificar que el cambio también aparezca allí. En esta aplicación se debe filtrar por documento NS y la fecha en la cual se realizó el cambio.

![](Imagen 27 Aplicacion EEMOV.png)

En la parte del detalle se puede verificar por cada renglón el campo antiguo (dato antes del cambio) y el cambio nuevo (luego de realizar el cambio):

![](Imagen 28 Aplicacion EEMOV.png)

A continuación, se procede a realizar la descarga de archivos en la aplicación **BINT,** diligenciando los campos de la siguiente manera:

**Publication:** se debe seleccionar el archivo #67 NS si el proceso corresponde al Régimen Subsidiado o archivo #57 si el proceso corresponde al Régimen Contributivo.

**Operation:** se escoge la opción Download (descargar).

**Fecha Final:** se diligencia la fecha hasta donde se desea que el sistema tome los datos (los datos son tomados a partir de la fecha que se diligencia y las fechas anteriores a esta), utilizando el formato día/mes/año, separado por un slash.

**Proceso Pre plano (P) Final (F):** en este campo se tiene la opción de diligenciar las letras “P” o “F” en mayúscula, al diligenciar la “P” el sistema descarga un archivo Pre-plano que permite verificar la información antes de enviar el archivo final a la entidad ADRES. Con la letra “F” el sistema descarga el archivo final para ser enviado.

Al completar los campos se da clic en *Accept* (Aceptar).

![](Imagen 29 Aplicacion EEMOV.png)

Al diligenciar la letra “P” se descarga el archivo Pre-Plano, para verificar que los datos contenidos en el archivo sean correctos.

![](Imagen 30 Aplicacion EEMOV.png)

Al verificar los datos contenidos en el archivo, digitamos la letra “F” para realizar la descarga final, el cual descarga el mismo archivo del Pre-Plano, a diferencia que este genera unos cambios en la aplicación EMOV cambiando el status a *Reportado.*

**Para realizar múltiples novedades se debe realizar lo siguiente:**

**Documento:** en este campo, de las opciones que se despliegan al dar clic en la lupa, se debe seleccionar el documento FUN – Formulario Único Novedad.

![](Imagen 31 Aplicacion EEMOV.png)

**Número:** consecutivo asignado por el sistema al momento de guardar el registro, igualmente este número sirve para llamar un documento que se encuentre en estado ACTIVO y así poderlo editar nuevamente.

**Concepto:** se debe dar clic en la lupa y seleccionar en la opción GEN- GENERALES.

![](Imagen 32 Aplicacion EEMOV.png)

**Ubicación:** seleccionamos del zoom la ubicación de donde se está llevando a cabo el movimiento.

![](Imagen 33 Aplicacion EEMOV.png)

**Motivo:** en este campo seleccionamos la opción que el sistema arroja: GENERALES EXTERNAS.

![](Imagen 34 Aplicacion EEMOV.png)

Afiliado: se debe seleccionar el número de identificación del afiliado al cual se le realizarán las novedades.

![](Imagen 35 Aplicacion EEMOV.png)

Diligenciados todos los campos requeridos, se debe dar clic en el botón *Guardar* y el sistema arrojará un mensaje de control indicando el número de consecutivo asignado al movimiento. 

![](Imagen 36 Aplicacion EEMOV.png)

Inmediatamente al dar clic en *Guardar* el sistema arroja un formulario con los datos del usuario.

![](Imagen 37 Aplicacion EEMOV.png)

En los campos se procede a realizar los cambios y/o actualizaciones según las novedades:

![](Imagen 38 Aplicacion EEMOV.png)

Al momento de finalizar los cambios y/o actualizaciones en los datos del usuario se procede a dar clic en *Guardar* y el sistema arroja un mensaje indicando que la transacción realizada ha sido exitosa.

![](Imagen 39 Aplicacion EEMOV.png)

Después de que los cambios han sido guardados con éxito, nos dirigimos a la aplicación **EMOV- Formulario de Afiliados** para verificar que el cambio también aparezca allí. En esta aplicación se debe filtrar por documento FUN y la fecha en la cual se realizó el cambio.

![](Imagen 40 Aplicacion EEMOV.png)

En la parte del detalle se puede verificar por cada renglón el campo antiguo (dato antes del cambio) y el cambio nuevo (luego de realizar el cambio):

![](Imagen 41 Aplicacion EEMOV.png)

A continuación, se procede a realizar la descarga de archivos en la aplicación **BINT,** diligenciando los campos de la siguiente manera:

**Publication:** se debe seleccionar el archivo #67 NS si el proceso corresponde al Régimen Subsidiado o archivo #57 si el proceso corresponde al Régimen Contributivo.

**Operation:** se escoge la opción Download (descargar).

**Fecha Final:** se diligencia la fecha hasta donde se desea que el sistema tome los datos (los datos son tomados a partir de la fecha que se diligencia y las fechas anteriores a esta), utilizando el formato día/mes/año, separado por un slash.

**Proceso Pre plano (P) Final (F):** en este campo se tiene la opción de diligenciar las letras “P” o “F” en mayúscula, al diligenciar la “P” el sistema descarga un archivo Pre-plano que permite verificar la información antes de enviar el archivo final a la entidad ADRES. Con la letra “F” el sistema descarga el archivo final para ser enviado.

Al completar los campos se da clic en *Accept* (Aceptar).

![](Imagen 42 Aplicacion EEMOV.png)

Al diligenciar la letra “P” se descarga el archivo Pre-Plano, el cual permite verificar que los datos contenidos en el archivo sean correctos.

![](Imagen 43 Aplicacion EEMOV.png)

Al verificar los datos contenidos en el archivo, digitamos la letra “F” para realizar la descarga final del archivo, el cual descarga el mismo archivo del Pre-Plano, pero a diferencia, este genera unos cambios en la aplicación EMOV cambiando el status a *Reportado*.



### [Proceso de traslado para los Regímenes Subsidiado y Contributivo](http://docs.oasis.com/operacion/crm/portal/cliente/eemov/#Proceso-de-traslado-para-los-Regímenes-Subsidiado-y-Contributivo)

Para realizar el proceso de traslados se debe ingresar a la aplicación EEMOV y realizar un nuevo registro diligenciando cada uno de los campos como se indica a continuación:

![](Imagen 44 Aplicacion EEMOV.png)

**Documento:** En el campo documento, damos clic en la lupa y seleccionamos el documento del movimiento que se desea generar (FUN – Formulario Único de Novedades, MC – Movimiento Contributivo, MS – Movimiento Subsidiado, NS – Novedad Salud).
Si se va a realizar un traslado del Régimen Contributivo se debe seleccionar el documento MC.
Si se va a realizar un traslado del Régimen Subsidiado se debe seleccionar el documento MS.

![](Imagen 45 Aplicacion EEMOV.png)

**Número:** consecutivo asignado por el sistema al momento de guardar el registro, igualmente este número sirve para llamar un documento que se encuentre en estado ACTIVO y así poderlo editar nuevamente.

**Concepto:** se debe dar clic en la lupa y seleccionamos el concepto por el cual se realiza el movimiento, por cada documento el sistema traerá diferentes conceptos.

Para el caso del proceso de traslado de afiliados, para ambos documentos (subsidiado y Contributivo), se selecciona la opción TR.

![](Imagen 46 Aplicacion EEMOV.png)

**Ubicación:** seleccionamos del zoom la ubicación de donde se está llevando a cabo el movimiento.

![](Imagen 47 Aplicacion EEMOV.png)

**Motivo:** seleccionamos del zoom el motivo correspondiente al movimiento que se genera. Los motivos también varían de acuerdo con el documento y el concepto. Las opciones que se muestran en la siguiente imagen corresponden al documento MS.

![](Imagen 48 Aplicacion EEMOV.png)

**Afiliado:** Seleccionamos del zoom el número de identificación del afiliado. De igual forma este campo nos brinda la opción de buscar en la Base de Datos según los criterios de búsqueda en el caso de que el usuario no se encuentre registrado allí, siempre y cuando se mantenga un historial.

![](Imagen 49 Aplicacion EEMOV.png)

**Beneficiarios:** digitar la cantidad de beneficiarios asociados al afiliado. El sistema solo contempla el ingreso de máximo 5 beneficiarios.

Diligenciados todos los campos requeridos, damos clic en el botón *Guardar* y el sistema arrojará un mensaje de control indicando el número de consecutivo asignado al movimiento.

![](Imagen 50 Aplicacion EEMOV.png)

Luego de Guardar, se habilitan unos campos para ingresar los datos del usuario. Algunos campos del formulario cambian dependiendo del tipo de documento que haya sido ingresado.
Los campos que aparecen con el asterisco (*) se deben diligenciar obligatoriamente, al momento de dar clic el sistema valida. Los campos que aparecen resaltados en color azul tienen un filtro de consulta el cual se habilita dando doble clic.

![](Imagen 51 Aplicacion EEMOV.png)

Inmediatamente después del formulario se encuentra el subtítulo **Vll. Declaraciones y autorizaciones.** Al poner el cursor sobre el recuadro de cada número aparece una leyenda y se selecciona según corresponda.

![](Imagen 52 Aplicacion EEMOV.png)

A continuación, aparece el subtítulo **IX. Anexos.** En los recuadros con espacio para diligenciar se debe indicar la cantidad de cada documento que se está anexando y en los demás recuadros, de acuerdo con la leyenda, se debe marcar según corresponda.

![](Imagen 53 Aplicacion EEMOV.png)

Dependiendo de la cantidad de beneficiarios que haya sido ingresada inicialmente, el sistema arroja un formulario para ingresar los datos por cada beneficiario.

![](Imagen 54 Aplicacion EEMOV.png)

Diligenciados todos los datos del beneficiario, damos clic en el botón *Guardar*.

![](Imagen 55 Aplicacion EEMOV.png)

Nota: En caso de que el proceso de traslado requiera adjuntar archivos, el sistema tiene la opción para hacer este procedimiento:

![](Imagen 56 Aplicacion EEMOV.png)



### [Proceso de portabilidad para el Régimen Subsidiado](http://docs.oasis.com/operacion/crm/portal/cliente/eemov/#Proceso-de-portabilidad-para-el-Régimen-Subsidiado)

En la aplicación EESON, se registran las solicitudes que realizan los afiliados para cambiar la IPS de atención entre ciudades. Para registrar una nueva solicitud, diligenciamos los campos del formulario y damos clic en el botón *guardar*.

![](Imagen 57 Aplicacion EEMOV.png)

Documento: en el campo documento, damos clic en la lupa y seleccionamos SO – Solicitud Afiliado.

![](Imagen 58 Aplicacion EEMOV.png)

**Número:** consecutivo asignado por el sistema al momento de guardar el registro.

**Concepto:** damos clic en la lupa y seleccionamos el concepto por el cual se realiza la solicitud, SP – Portabilidad.

![](Imagen 59 Aplicacion EEMOV.png)

**Ubicación:** seleccionamos del zoom la ubicación de donde se está llevando a cabo la solicitud.

![](Imagen 60 Aplicacion EEMOV.png)

**Motivo:** seleccionamos del zoom el motivo correspondiente a la solicitud que se genera.

![](Imagen 61 Aplicacion EEMOV.png)

**Afiliado:** digitar o seleccionar del zoom el número de identificación del afiliado. Se debe validar en los campos *Estado Afiliado y Estado BDUA* que el afiliado se encuentre activo.

![](Imagen 62 Aplicacion EEMOV.png)

Diligenciados todos los campos requeridos, damos clic en el botón *guardar* y el sistema arrojará un mensaje de control indicando el número de consecutivo asignado a la solicitud, a su vez, desplegará un formulario para diligenciar todos los datos correspondientes al aportante.

![](Imagen 63 Aplicacion EEMOV.png)

A continuación, procedemos a diligenciar el formulario.

![](Imagen 64 Aplicacion EEMOV.png)

Los nombres del afiliado los arrojará el sistema automáticamente.

**Tipo de medio:** dar clic en la lupa y seleccionar del zoom el tipo de medio por el cual se recibió la solicitud de portabilidad.

![](Imagen 65 Aplicacion EEMOV.png)

**Fecha de ingreso de portabilidad:** seleccionar del calendario la fecha desde la cual iniciará la portabilidad.

**Tiempo de emigración en meses:** tiempo en meses el cual el afiliado estará en portabilidad.

**Tiempo de emigración en días:** si el afiliado se encontrará en portabilidad por ejemplo 2 meses y 15 días, se digitarán los 15 días en este campo, si son meses completos dejar en blanco.

**Sabe el tiempo:** si el afiliado conoce el tiempo el cual se encontrará en portabilidad digitar el número 1, de no conocerlo digitar el número 0 y dejar en blanco los dos campos inmediatamente anteriores.

**Municipio receptor:** digitar o dar clic en la lupa y seleccionar del zoom el código del municipio en el cual será atendido el afiliado.

![](Imagen 66 Aplicacion EEMOV.png)

**Dirección de emigración:** digitar la dirección en la cual atenderán al afiliado
**Barrio de emigración:** indicar el barrio en el cual atenderán al afiliado.
**Celular:** número de celular del afiliado.
**Teléfono fijo:** número fijo del afiliado
**Correo:** correo electrónico del afiliado.
**Escenario receptor:** dar clic en la lupa y seleccionar la IPS en la cual atenderán al afiliado en el municipio receptor.

![](Imagen 67 Aplicacion EEMOV.png)

**Portabilidad:** siempre se deberá digitar el número 1, puesto que, esto activará en la aplicación EBAF – Afiliados el flag del campo *portabilidad.*

Diligenciado el formulario en su totalidad, damos clic en el botón *guardar* y el sistema arrojará un mensaje confirmando el registro.

![](Imagen 68 Aplicacion EEMOV.png)

Ahora se debe procesar la solicitud dando clic en el botón. ![](Procesar.png)

![](Imagen 69 Aplicacion EEMOV.png)

Luego, se debe ingresar a la aplicación ESON – Solicitud Afiliados a verificar el registro y que se encuentre en estado procesado, consultamos por número de consecutivo.

![](Imagen 70 Aplicacion EEMOV.png)

Ahora ingresamos a la aplicación EBAF – Afiliados a verificar que se haya activado el campo *portabilidad* y que en la pestaña *movimientos* se visualice la solicitud. Consultamos por número de identificación del afiliado.

![](Imagen 71 Aplicacion EEMOV.png)

