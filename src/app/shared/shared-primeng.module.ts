import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ChartModule } from 'primeng/chart';

@NgModule({
    declarations: [],
    imports: [],
    exports: [
        TableModule,
        TooltipModule,
        ButtonModule,
        InputTextModule,
        InputNumberModule,
        InputTextareaModule,
        InputMaskModule,
        ToastModule,
        ToolbarModule,
        ConfirmDialogModule,
        DropdownModule,
        InputTextareaModule,
        CardModule,
        DialogModule,
        ProgressSpinnerModule,
        ChartModule,
    ],
    providers: [MessageService, ConfirmationService],
})
export class SharedPrimengModule {}
