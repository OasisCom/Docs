---
layout: default
title: Campos
permalink: /Operacion/system/sconfig/scam
editable: si
---

# SCAM - Campos

La aplicación SCAM permite la configuración de reglas de negocio, control, tipos de campos y su obligatoriedad por empresa.  

### Parametrizar nueva restricción

Para parametrizar una nueva restricción, es necesario diligenciar el _programa_, el _tab_ al cual pertenece el campo (0 para el maestro y para los detalles el RowId de la parametrización del spro), el _nombre del campo_ (con la ayuda del comando Shift + F11), el _código del lenguaje_ (1 Ingles, 2 Español y 5 Portugues).  

![](scam.png)

**Nombre:** ingresar la etiqueta que se asignará al campo.  
**Descripción:** colocar un texto que se mostrará como ayuda al momento de editar.  
**Obligatorio:** se puede indicar si el campo parametrizado será obligatorio.  
**ErrorId:** se puede colocar un código de un error que se encuentre parametrizado en la opción **SERR - Errores**.  
**Condicion:** se puede parametrizar (en formato JSON) el tipo de datos que se debe validar en el campo y un conjunto de reglas de negocio como validaciones booleanas.  

![](scam1.png)

En el campo **"format"** se debe indicar el tipo de datos que debe validar la aplicación. Los tipos de datos que serán validados son: integer, number, date, time, datetime, url, email. Si este campo no se indica en el **JSON**, el sistema toma por defecto el formato de edición del JqGrid.  

En el campo **"customValidators"** se debe agregar una lista de condiciones lógicas que deben ser validadas, estas líneas serán unidas por medio del operador **"And"** de Javascript (&&), para hacer referencia a el valor que se está almacenado en el campo se debe utilizar la variable **"value"**.  

Si se desea hacer una validación de longitud de una cadena, se deben utilizar las funciones "maxLength(value, N)" y "minLength(value, N)" donde N es la longitud que será validada. Adicionalmente, se pueden validar expresiones regulares por medio de la función "evaluateRegex(pattern, value)" donde pattern es la expresión regular que será validada.  

### Parametrizar restricciones maestro tipo A y B

![](scam2.png)

En la aplicación BBAN:  

![](scam3.png)

El error parametrizado se mostrará al momento de guardar si no se cumple alguna de las condiciones parametrizadas.  

![](scam4.png)

### Parametrización restricciones maestros tipo C

![](scam5.png)

![](scam6.png)

El error parametrizado se mostrará al momento de guardar en caso tal que no se cumpla alguna de las condiciones definidas.  

![](scam7.png)

### Parametrización detalles opciones tipo B y C

![](scam8.png)

![](scam9.png)

El error parametrizado se mostrará al momento de guardar en caso tal que no se cumpla alguna de las condiciones definidas.  

![](scam10.png)

### Parametrización Zoom

![](scam11.png)

![](scam12.png)

![](scam13.png)

El error parametrizado se mostrará al momento de guardar en caso tal que no se cumpla alguna de las condiciones definidas.  

![](scam14.png)


