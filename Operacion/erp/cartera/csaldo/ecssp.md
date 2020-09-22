---
layout: default
title: Saldos de Cartera
permalink: /Operacion/erp/cartera/csaldo/ecssp
editable: si
---

# Saldos de Cartera - ECSSP

Aplicación que permite realizar pago según medio de la transacción.  

Para que los clientes puedan consultar los saldos de cartera pendientes por pagar en la aplicación ECSEC, es importante parametrizar previamente en la aplicación **Usuarios - SUSU**.  Al tercero que corresponda, se le debe entrar a asociar el NIT o cédula del cliente, tanto en el campo _Tercero_ como en el campo _Organización_.  

![](ecssp9.png)

La aplicación ECSSP arrojará los saldos de cartera pendientes por pagar; allí seleccionamos el saldo que se desea cancelar.  En la parte inferior también se muestran y de igual forma, se pueden eliminar las que se quieran dando click en el botón (-) de la parte derecha, campo _Actions_.  Finalmente, damos click en el botón ![](ecssp.png) de _PayU_.  

![](ecssp1.png)  

Lo importante aquí, es que si nuestro cliente de OASISCOM, requiere que sus clientes puedan pagar desde acá, debe haber un acuerdo comercial para poder hacer el pago respectivo.

Al dar click en el botón _Pagar_, el sistema nos direccionará a la siguiente ventana en donde seleccionaremos la forma de pago.  

![](ecssp2.png)

Al estar configurado en ambos casos la pasarela de Zona Virtual, cualquiera de los dos botones redirigirá a la misma página, donde se seleccionará el medio de pago que será utilizado.  
Se debe seleccionar la opción "Pago Tarjeta de Credito" y dar clic en el botón "Clic para continuar con el pago" y así poder ingresar los datos de la tarjeta de credito.  

![](ecssp3.png)

Se deben diligenciar los datos de la tarjeta de credito y luego dar clic en el boton "Continuar". Importante solo el número de la tarjeta es predefinido; en el archivo adjunto se encuetran los datos de las tarjetas que pueden ser utilizados.  

![](ecssp4.png)

Indicamos que se va a finalizar la transacción.  

![](ecssp5.png)

La pasarela muestra que la transacción quedo pendiente para que el sistema la resuelva después.  

![](ecssp6.png)

* EPAY *  [PAGOS]
 
Oasiscom valida el estado de la transacción cada 7 minutos hasta que retorna el estado APROBADA, RECHAZADA o PENDIENTE.  
Desde la aplicacion **EPAY**  [PAGOS].
	Pendiente.

![](ecssp7.png)

	Aprobada.

![](ecssp8.png)

















