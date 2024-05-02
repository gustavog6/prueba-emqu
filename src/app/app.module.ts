import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { CrudService } from './shared/services/crud.service';
import { BrowserModule } from '@angular/platform-browser';

export function initLocalStorage(localStorageInitService: CrudService) {
    return () => localStorageInitService.init();
}

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [BrowserModule, AppRoutingModule, AppLayoutModule],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService,
        CrudService, // Asegúrate de agregar CrudService a tus proveedores
        { provide: APP_INITIALIZER, useFactory: initLocalStorage, deps: [CrudService], multi: true } // Agrega tu función initLocalStorage a los APP_INITIALIZER
      ],
    // providers: [
    //     { provide: LocationStrategy, useClass: PathLocationStrategy },
    //     CountryService, CustomerService, EventService, IconService, NodeService,
    //     PhotoService, ProductService
    // ],
    bootstrap: [AppComponent],
})
export class AppModule {}
