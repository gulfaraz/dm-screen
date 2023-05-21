import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { JsonExporterComponent } from './json-exporter/json-exporter.component';
import { JsonImporterComponent } from './json-importer/json-importer.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [IonicModule],
    declarations: [
        JsonExporterComponent,
        JsonImporterComponent,
        FooterComponent,
    ],
    exports: [JsonExporterComponent, JsonImporterComponent, FooterComponent],
})
export class SharedModule {}
