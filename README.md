# manuals
Users Manuals
# <a name="OasisCom-technical-documentation-contributor-guide"></a>Guía del colaborador de documentación técnica de OasisCom
Ha encontrado el repositorio de GitHub que contiene los archivos de origen de la documentación técnica que se publica en [http://docs.oasiscom.com](http://docs.oasiscom.com).

Este repositorio también incluye una guía para ayudarle a colaborar con nuestra documentación técnica. Si quiere ver la lista de artículos de la guía del colaborador, consulte [el índice](contributor-guide/contributor-guide-index.md).

## <a name="contribute-to-OasisCom-documentation"></a>Colaboración en la documentación de OasisCom
Gracias por su interés en la documentación de OasisCom.

* [Formas de colaborar](#ways-to-contribute)
* [Código de conducta](#code-of-conduct)
* [Acerca de su colaboración en el contenido de OasisCom](#about-your-contributions-to-OasisCom-content)
* [Organización del repositorio](#repository-organization)
* [Uso de GitHub, GIT y este repositorio](#use-github-git-and-this-repository)
* [Uso de Markdown para dar formato al tema](#how-to-use-markdown-to-format-your-topic)
* [Comentarios, sugerencias y soporte técnico](./contributor-guide/feedback-and-comments.md)
* [Más recursos](#more-resources)
* [Índice de todos los artículos de la guía del colaborador](contributor-guide/contributor-guide-index.md) (abre una nueva página)

## <a name="ways-to-contribute"></a>Formas de colaborar
Puede enviar actualizaciones a la [documentación de OasisCom](https://docs.oasiscom.com/OasisCom) como se indica a continuación:

* Puede colaborar fácilmente en artículos técnicos en la interfaz de usuario de GitHub. Busque el artículo en este repositorio, o consulte al artículo en [https://docs.oasiscom.com/OasisCom](https://docs.oasiscom.com/OasisCom) y haga clic en el vínculo del artículo que abre el origen del artículo en GitHub.
* Si realiza cambios sustanciales en un artículo existente, agrega o cambia imágenes, o colabora en un nuevo artículo, necesitará bifurcar este repositorio, instalar GIT Bash, MarkdownPad y obtener información acerca de algunos comandos de GIT.

## <a name="code-of-conduct"></a>Código de conducta
Este proyecto ha adoptado el [oasiscom Open Source Code of Conduct](https://opensource.oasiscom.com/codeofconduct/) (Código de conducta de código abierto de oasiscom). Para más información, consulte las [preguntas más frecuentes del código de conducta](https://opensource.oasiscom.com/codeofconduct/faq/) o póngase en contacto con [opencode@oasiscom.com](mailto:opencode@oasiscom.com) si tiene cualquier otra pregunta o comentario.

## <a name="about-your-contributions-to-OasisCom-content"></a>Acerca de su colaboración en el contenido de OasisCom
### <a name="minor-corrections"></a>Correcciones menores
Las correcciones menores o aclaraciones que se envían para la documentación y los ejemplos de código de este repositorio se rigen por los [Términos de uso del sitio docs.oasiscom.com](/enterprise-mobility-security/termsofuse).

### <a name="larger-submissions"></a>Aportaciones mayores
Si envía una solicitud de incorporación de cambios con cambios importantes o nuevos en la documentación y los ejemplos de código, pondremos un comentario en GitHub para solicitarle que acepte el contrato de licencia de colaboración (CLA, por sus siglas en inglés) si no es un empleado de oasiscom. Necesitamos que rellene el formulario en línea para aceptar su solicitud de incorporación de cambios.

## <a name="repository-organization"></a>Organización del repositorio
El contenido del repositorio OasisCom-docs está organizado como la documentación de https://docs.oasiscom.com/OasisCom. Este repositorio tiene dos carpetas raíz:

### <a name="articles"></a>\articles
La carpeta *\articles* contiene los artículos de la documentación en formato de archivos de Markdown, con la extensión *.md*. Los artículos normalmente se agrupan por servicio de OasisCom.

Los artículos deben seguir directrices estrictas de nomenclatura de archivos. Para más información, consulte [nuestra guía de nombres de archivo](contributor-guide/file-names-and-locations.md).

La carpeta *\articles* contiene la carpeta *\media* para los archivos multimedia de los artículos del directorio raíz; dentro de ella se encuentran subcarpetas con las imágenes de cada artículo.  Las carpetas de servicio contienen una carpeta multimedia independiente para los artículos que se encuentran en cada carpeta de servicio. Las carpetas de imágenes de los artículos tienen el mismo nombre que el archivo del artículo, sin la extensión de archivo *.md* .

### <a name="includes"></a>\includes
Puede crear secciones de contenido reutilizable para incluirlo en uno o varios artículos. Consulte [Custom extensions used in our technical content](contributor-guide/custom-markdown-extensions.md)(Extensiones personalizadas que se usan en el contenido técnico).

### <a name="markdown-templates"></a>\markdown templates
Esta carpeta contiene la plantilla de Markdown estándar con el formato de Markdown básico que se necesita para un artículo.

### <a name="contributor-guide"></a>\contributor-guide
Esta carpeta contiene artículos que forman parte de nuestra guía del colaborador.

## <a name="use-github-git-and-this-repository"></a>Uso de GitHub, GIT y este repositorio
Para más información acerca de cómo colaborar, cómo usar la IU de GitHub para colaborar con pequeños cambios, y cómo bifurcar y clonar el repositorio para colaboraciones más importantes, consulte [Install and set up tools for authoring in GitHub](contributor-guide/tools-and-setup.md)(Instalación y configuración de herramientas para crear en GitHub).

Si instala GitBash y decide trabajar en local, los pasos para crear una nueva rama de trabajo local, realizar cambios y devolver los cambios a la rama principal se indican en [Git commands for creating a new article or updating an existing article](contributor-guide/git-commands-for-master.md) (Comandos de GIT para crear un artículo nuevo o actualizar uno existente)

### <a name="branches"></a>Ramas
Recomendamos crear ramas de trabajo locales dirigidas a un ámbito de cambio específico. Cada rama debe limitarse a un único concepto o artículo para simplificar el flujo de trabajo y reducir la posibilidad de conflictos de fusión mediante combinación.  Los siguientes elementos se ajustan al ámbito de una nueva rama:

* Un nuevo artículo (y las imágenes asociadas)
* Correcciones ortográficas y gramaticales de un artículo
* Aplicación de un solo cambio de formato a muchos artículos a la vez (por ejemplo, un nuevo pie de página con el copyright).

## <a name="how-to-use-markdown-to-format-your-topic"></a>Uso de Markdown para dar formato al tema
Todos los artículos de este repositorio usan Markdown adaptado a GitHub.  Aquí tiene una lista de recursos.

* [Reglas básicas de Markdown](https://help.github.com/articles/markdown-basics/)
* [Hoja de referencia de Markdown para impresión](./contributor-guide/media/documents/markdown-cheatsheet.pdf?raw=true)

## <a name="article-metadata"></a>Metadatos de los artículos
Los metadatos en los artículos habilitan ciertas funcionalidades, como la atribución de autor, la atribución de colaborador, las rutas de navegación, las descripciones de los artículos y las optimizaciones del motor de búsqueda, así como procesos de creación de informes que oasiscom usa para evaluar el rendimiento del contenido. Por lo tanto, los metadatos son importantes. [Consulte esta guía para asegurarse de que sus metadatos son correctos](contributor-guide/article-metadata.md).

### <a name="labels"></a>Etiquetas
Se asignan etiquetas automatizadas a las solicitudes de incorporación de cambios para ayudarnos a administrar el flujo de trabajo de este tipo de solicitudes y ayudarle a saber el estado de las mismas:

* Contrato de licencia de colaboración relacionado
  * cla-not-required: el cambio es relativamente pequeño y no requiere que firme un contrato de licencia de colaboración.
  * cla-required: el alcance del cambio es relativamente importante y requiere que firme un contrato de licencia de colaboración.
  * cla-signed: el colaborador ha firmado el contrato de licencia de colaboración por lo que la solicitud de incorporación de cambios ya puede seguir hacia delante para su revisión.
* Etiquetas de pilar: etiquetas como PnP, Modern Apps y CDC le ayudan a clasificar las solicitudes de incorporación de cambios según la organización interna que necesita revisar estas solicitudes.
* Cambio enviado al autor: se ha notificado al autor acerca de la solicitud de incorporación de cambios pendiente.

## <a name="more-resources"></a>Más recursos
Consulte en el [índice de la guía del colaborador](contributor-guide/contributor-guide-index.md) todos nuestros temas de orientación.



<!--HONumber=Dec16_HO1-->

### Operatividad

* [Funciones Basicas](http://docs.oasiscom.com/Operatividad/FuncionesBasicas)

orientación.



<!--HONumber=Dec16_HO1-->


