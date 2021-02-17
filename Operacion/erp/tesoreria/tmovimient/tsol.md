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































