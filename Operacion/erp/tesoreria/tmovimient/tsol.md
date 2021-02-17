---
layout: default
title: Solicitudes Tesoreria
permalink: /Operacion/erp/tesoreria/tmovimient/tsol
editable: si
---

# Solicitudes Tesoreria - TSOL  

Opción **TSOL**, similar TGTR compuesta por maestro y detalle. En el maestro esta solicitado el valor por agencia y en el detalle los valores aprobados a las cajas destino.  

Para el correcto funcionamiento de la funcionalidad se debe tener presente las siguientes configuraciones básicas previo a realizar utilización de la opción **[TSOL]:**  

1.	Hacer configuración del programa [TSOL] en [SPRO], esta información esta incluida en el Script de actualización, sin embargo, se adjunta en este documento.  

insert into Program ( ProgramId, ProgramName, Permission, Type, "Level", "Order",Parent, Model, "View", ModuleId, Company, State, Source, Device,Controller,Action)  
Values ('tsol', 'Treasury Requests', 15, 'C', 3, 1,'tmovimient','Movement', 'MovementTreasuryRequests', 'Treasury', 1, 'A', 'T', 'W','Genericg','Index')  

insert into ProgramDetail (ProgramId, Type, "RowId", Argument, Name,Enable,Focus,Model,[View])  
values ('tsol', 'B', 1, 'p_MovementTransfer','Generar Movimientos Transferencia',1,'M','','');  

insert into ProgramDetail (ProgramId, Type, "RowId", Argument, Name,Enable,Focus,Model,[View])  
values ('tsol', 'R', 1, 'DocumentId','',0,'','','');  

insert into ProgramDetail (ProgramId, Type, "RowId", Argument, Name,Enable,Focus,Model,[View])  
values ('tsol', 'R', 2, 'NumberId','',0,'','','');  

insert into ProgramDetail (ProgramId, Type, "RowId", Argument, Name,Enable,Focus,Model,[View])  
values ('tsol', 'R', 3, 'LocationId','',0,'','','');  

insert into ProgramDetail (ProgramId, Type, "RowId", Argument, Name,Enable,Focus,Model,[View])  
values ('tsol', 'T', 1, '','Detail',1,'M','MovementDetail','MovementDetailTreasuryRequests');  

-- Creacion opcion zcash3, zoom cajas destino detalle tsol   
insert into Program ( ProgramId, ProgramName, Permission, Type, "Level", "Order",Parent, Model, "View", ModuleId,       Company, State, Source, Device,Controller,Action)  
Values ('zcash3', 'Cash', 8, 'A', 3, 2,'reciclar','Location', 'CashDestinyZoom', 'Basic', 1, 'A', 'T', 'W','','')  

insert into ProgramDetail (ProgramId, Type, "RowId", Argument, Name,Enable,Focus,Model,[View])  
values ('zcash3', 'A', 1, 'LocationId1','',0,'','','');  

insert into ProgramDetail (ProgramId, Type, "RowId", Argument, Name,Enable,Focus,Model,[View])  
values ('zcash3', 'R', 1, 'LocationId','',1,'M','','');  

insert into ProgramDetail (ProgramId, Type, "RowId", Argument, Name,Enable,Focus,Model,[View])  
values ('zcash3', 'R', 2, 'SourceId','',1,'D','','');  

2 . Realizar las configuraciones pertinentes en los roles a los cuales deben tener acceso los diferentes usuarios.  Importante denegar la confirmación y anulación.  

![](srol1.png)  

3 .  Configurar Documento y Concepto en la opción [bdoc], allí configurar el documento ST o STE, importante asociar el programa [tsol] y el módulo tesorería “T”  

![](bdoc1.png)  

4 .	Con figurar motivo 0 INDEFINIDO  en la opción [bmot]  

![](bmot1.png)  










































