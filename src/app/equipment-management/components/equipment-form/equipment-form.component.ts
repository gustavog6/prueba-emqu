import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IMachine } from 'src/app/shared/interfaces/IMachine';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
    selector: 'app-equipment-form',
    templateUrl: './equipment-form.component.html',
    styleUrl: './equipment-form.component.scss',
})
export class EquipmentFormComponent implements OnInit {
    // selectedMachine: IMachine;

    equipmentId: string;

    action: string;

    edit: boolean = false;

    fgMachine!: UntypedFormGroup;

	isDisplay: boolean = false;

	manufacturers = [
		{ label: 'Lenovo', value: 'Lenovo' },
		{ label: 'HP', value: 'HP' },
		{ label: 'Dell', value: 'Dell' },
		{ label: 'Apple', value: 'Apple' },
		{ label: 'Acer', value: 'Acer' },
		{ label: 'Toshiba', value: 'Toshiba' },
		{ label: 'ASUS', value: 'ASUS' },
		{ label: 'Samsung', value: 'Samsung' },
		{ label: 'Sony (VAIO)', value: 'Sony (VAIO)' },
		{ label: 'LG', value: 'LG' }
	  ];
	  
	  statuses = [
		{ label: 'Active', value: 'Active' },
		{ label: 'Inactive', value: 'Inactive' }
	  ];

    constructor(
        private _formBuilder: FormBuilder,
        private _activatedRoute: ActivatedRoute,
		private _crudService: CrudService,
		private _router: Router,
		private _confirmationService: ConfirmationService,
		private _messageService: MessageService,
    ) {}

    ngOnInit() {
        this._activatedRoute.params.subscribe((params: any) => {
            this.equipmentId = params.id ?? null;
            this.action = params.action ?? null;
        });

		this.setForm();

        if (this.equipmentId) this.getMachine(this.equipmentId);
        if (this.action) this.edit = true;

    }

    private setForm() {
        this.fgMachine = this._formBuilder.group({
			_id: [ null ],
            name: [
                null,
                [
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(30),
                ],
            ],
            ipv4: [
                null,
                [
                    Validators.required,
                    Validators.minLength(7),
                    Validators.maxLength(15),
                ],
            ],
            mac: [
                null,
                [
                    Validators.required,
                    Validators.minLength(17),
                    Validators.maxLength(17),
                ],
            ],
            os: [
                null,
                [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(30),
                ],
            ],
            manufacturer: [ null ],
            description: [ null ],
            status: [ null ],
        });
    }

    private getMachine(equipmentId: string) {
        const selectedEquipment = this._crudService.getById('equipment', equipmentId);
		this.fgMachine.patchValue(selectedEquipment);
    }

	onSubmit() {
		const machine = this.fgMachine.value;
        // const path = this.equipmentId
        //     ? `/provider/${this.equipmentId}`
        //     : '/provider/save';

        this.isDisplay = true;

        if (this.equipmentId) {
			this._crudService.update('equipment', this.equipmentId , machine)
			this._router.navigate([`/equipment/detail/${this.equipmentId}`])
            return;
        }

		machine._id = this.createId();
		this._crudService.save('equipment', machine);
		this._router.navigate(['/equipment'])
    }

	onDelete() {
		console.log('delete');
		this._confirmationService.confirm({
            header: 'Confirm',
            message: `Do you want to delete this Equipment?`,
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'reject',
            rejectButtonStyleClass: 'p-button-outlined w-3',
            acceptButtonStyleClass: 'w-3',
            acceptLabel: 'Yes',
            rejectLabel: 'No',
            accept: () => {
                this._crudService.deleteById('equipment', this.equipmentId);
                this._messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Equipment Deleted',
                    life: 3000,
                });
                this._router.navigate(['/equipment'])
            },
            reject: () => {},
        });
	}

	isInvalid(form: UntypedFormGroup, control: string, errorName: string) {
        return (
            form.controls[control].errors?.[`${errorName}`] &&
            form.controls[control].touched
        );
    }

	private createId(): string {
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		return Array.from({length: 5}, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
	}
}
