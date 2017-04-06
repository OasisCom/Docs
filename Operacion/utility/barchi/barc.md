---
layout: default
title: Archivos
permalink: /Operacion/utility/barchi/barc
editable: si
---

## Archivos - BARC

Para la generación o descarga de un archivo en formato _.XML_ a través de un formato _.XSD_ se deben realizar las siguientes parametrizaciones iniciales en BARC:  

#### **Bajar Archivos**

En la aplicación **BARC** se debe realizar la parametrización de la estructura del archivo a bajar de la siguiente manera:  

**_Maestro_**

![](BARC1.png)

En el maestro se agrega un nuevo registro y se diligencian los siguientes campos:  

**Archivo:** ingresar el número de archivo a parametrizar.  
**Nombre Archivo:** ingresar el nombre del archivo a parametrizar.  
**Formato:** seleccionar el formato del archivo a generar. En este caso, se debe seleccionar de la lista _XML FROM XSD_.  
**Denifición:** este campo es uno de los más importantes, dado que aquí es donde se debe ingresar la estructura del archivo en formato XSD. El formato XSD es el que nos definirá la estructura del xml a generar. A continuación, un ejemplo de un formato XSD.

	<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" attributeFormDefault="unqualified" elementFormDefault="qualified"><xs:element name="ROWS"><xs:complexType><xs:sequence><xs:element name="OPERATIONS"><xs:complexType><xs:sequence><xs:element name="OPERATION"><xs:complexType><xs:sequence><xs:element name="COMPANYID" type="xs:unsignedByte" /><xs:element name="DOCUMENTID" type="xs:string" /><xs:element name="NUMBERID" type="xs:unsignedByte" /><xs:element name="LOCATIONID" type="xs:unsignedByte" /><xs:element name="DATE" type="xs:dateTime" /><xs:element name="CLIENTID" type="xs:unsignedInt" /><xs:element name="EXPIRATION" type="xs:dateTime" /><xs:element name="STATE" type="xs:dateTime" /></xs:sequence></xs:complexType></xs:element><xs:element maxOccurs="unbounded" name="OPERATIONDETAIL"><xs:complexType><xs:sequence><xs:element name="COMPANYID" type="xs:unsignedByte" /><xs:element name="DOCUMENTID" type="xs:string" /><xs:element name="NUMBERID" type="xs:unsignedByte" /><xs:element name="LOCATIONID" type="xs:unsignedByte" /><xs:element name="ROWID" type="xs:unsignedByte" /><xs:element name="OBSERVATION" type="xs:unsignedByte" /><xs:element name="QUANTITY" type="xs:decimal" /><xs:element name="PRICE" type="xs:float" /><xs:element name="TAXSALEPERCENTAGE" type="xs:decimal" /><xs:element name="DISCOUNTPERCENTAGE" type="xs:float" /><xs:element name="TOTAL" type="xs:decimal" /></xs:sequence></xs:complexType></xs:element></xs:sequence></xs:complexType></xs:element></xs:sequence></xs:complexType></xs:element></xs:schema>  

**QuerySql:** se debe ingresar la consulta a nivel de base de datos para generar el formato con los datos necesitados tanto de maestro y detalle, de la siguiente manera:

![](BARC2.png)

_IMPORTANTE_, cada consulta (sentencia) debe estar separada por ‘;’ (punto y coma) como se muestra en el recuadro azul.  

**_Detalle_**

Terminada la parametrización del maestro, se procede con el detalle:

![](BARC3.png)

**Tipo:**
 * Para el primer renglón que corresponde a _Date_, se selecciona el tipo **Argumento**, dado que este será el campo sobre el cuál será bajado el archivo desde la aplicación BINT (Descrita más adelante). Además, que corresponde al parámetro sobre el cuál serán consultados los registros maestros (padres) del archivo a generar.  

 * Para los renglones restantes _OperationDetail.DocumentId, OperationDetail.NumberId_ y _OperationDetail. LocationId_, el tipo corresponde a **Registro**, dado que son los campos de referencia entre maestro y detalle, es decir las llaves.


**Renglón:** ingresar el número del renglón correspondiente al registro.  
**Nombre:** ingresar el nombre del campo. Se debe tener en cuenta que cuando el campo corresponde a un detalle, se debe ingresar el nombre de la tabla y el nombre del campo, estos dos separados por un punto (
.).  
**Campo:** ingresar los nombres de los campos a los cuales haga referencia.Aquí, cuando los campos corresponden al detalle no se debe colocar el nombre de la tabla de donde provienen.  
**Operador:** seleccionar el operador del dato, por ejemplo, para los campos _DocumentId_, _NumberId_ y _LocationId_ el operador corresponde a _=_, es decir, que retornará los datos en donde maestro y detalle sean iguales.  
**Tipo Datos:** seleccionar el tipo de dato del campo, si corresponde a numérico, carácter, valor, fecha, etc.  
**Llave:** se debe activar el flag para los campos que corresponden a llaves foráneas, entre maestro y detalle, es decir, _DocumentId_, _NumberId_ y _LocationId_.  

Hecho esto, se ha culminado con la parametrización en la opción BARC.  





