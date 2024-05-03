import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { manufacturers, statuses } from 'src/app/shared/constants/manufacturers';
import { CrudService } from 'src/app/shared/services/crud.service';
import { IdGeneratorService } from 'src/app/shared/services/id-generator.service';

@Component({
    selector: 'app-equipment-form',
    templateUrl: './equipment-form.component.html',
    styleUrl: './equipment-form.component.scss',
})
export class EquipmentFormComponent implements OnInit {
    equipmentId: string;

    action: string;

    edit: boolean = false;

    fgMachine!: UntypedFormGroup;

	manufacturers = manufacturers;
	  
    statuses = statuses;

    constructor(
        private _formBuilder: FormBuilder,
        private _activatedRoute: ActivatedRoute,
		private _crudService: CrudService,
		private _router: Router,
		private _confirmationService: ConfirmationService,
		private _messageService: MessageService,
        private _idGeneratorService: IdGeneratorService
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

        if (this.equipmentId) {
			this._crudService.update('equipment', this.equipmentId , machine)
			this._router.navigate([`/equipment/detail/${this.equipmentId}`])
            return;
        }

		machine._id = this._idGeneratorService.createId();
		this._crudService.save('equipment', machine);
		this._router.navigate(['/equipment'])
    }

	onDelete() {
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
}
