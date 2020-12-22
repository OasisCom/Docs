---
layout: default
title: Recibo de caja TMOV
permalink: /Soporte/FinancieroFIN/recibocajaTMOV
editable: si
---
# Error al procesar Recibo de Caja TMOV  

Error al procesar un recibo de caja en TMOV; el centro de costo no puede ser cero accountid: 51959502.00 rowid: 4


Se debe tener en cuenta lo siguiente: si la cuenta está pidiendo centro de costo, es porque en el [**Cuentas - BCUE**](http://docs.oasiscom.com/Operacion/common/bcuenta/bcue), está prendido el flag.  Por otra parte, en el detalle del [**Movimientos - TMOV**](http://docs.oasiscom.com/Operacion/common/bcuenta/bcue), para esta cuenta, en el campo de _Centro de costo_, se debe asociar un dato, para que se pueda continuar con el proceso.  
  



