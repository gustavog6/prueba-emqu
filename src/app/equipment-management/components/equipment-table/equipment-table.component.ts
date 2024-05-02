import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { IMachine } from 'src/app/shared/interfaces/IMachine';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
    selector: 'app-equipment-table',
    templateUrl: './equipment-table.component.html',
    styleUrl: './equipment-table.component.scss',
    providers: [MessageService],
})
export class EquipmentTableComponent implements OnInit {
    equipments: IMachine[] = [];

    selectedEquipments: IMachine[] = [];

    cols: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    constructor(
        private _messageService: MessageService,
        private _crudService: CrudService,
        private _router: Router,
        private _confirmationService: ConfirmationService
    ) {}

    ngOnInit() {
        this.getEquipments();
		this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'ipv4', header: 'IPV4' },
            { field: 'mac', header: 'MAC' },
            { field: 'os', header: 'O.S' },
            { field: 'manufacturer', header: 'Manufacturer' },
            { field: 'status', header: 'Status' },
        ];
    }

    getEquipments() {
        this.equipments = this._crudService.getAll('equipment') as IMachine[];
    }

    addEquipment() {
        this._router.navigate(['/equipment/add']);
    }

    detailEquipment(equipment: IMachine) {
        this._router.navigate([`/equipment/detail/${equipment._id}`]);
    }

    deleteSelectedEquipments() {
        this._confirmationService.confirm({
            header: 'Confirm',
            message: `Do you want to delete all this (${this.selectedEquipments.length}) Equipments?`,
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'reject',
            rejectButtonStyleClass: 'p-button-outlined w-3',
            acceptButtonStyleClass: 'w-3',
            acceptLabel: 'Yes',
            rejectLabel: 'No',
            accept: () => {
                const ids = this.selectedEquipments.map( val => val._id );
                this._crudService.deleteByIds('equipment', ids);
                this.getEquipments();
                this._messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Equipments Deleted',
                    life: 3000,
                });
                this.selectedEquipments = [];
            },
            reject: () => {},
        });
    }

    deleteEquipment(equipment: IMachine) {
        this._confirmationService.confirm({
            header: 'Confirm',
            message: 'Do you want to delete this Equipment?',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'reject',
            rejectButtonStyleClass: 'p-button-outlined w-3',
            acceptButtonStyleClass: 'w-3',
            acceptLabel: 'Yes',
            rejectLabel: 'No',
            accept: () => {
                this._crudService.deleteById('equipment', equipment._id);
                this.getEquipments();

                this._messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Equipment Deleted',
                    life: 3000,
                });
            },
            reject: () => {},
        });
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal(
            (event.target as HTMLInputElement).value,
            'contains'
        );
    }
}
