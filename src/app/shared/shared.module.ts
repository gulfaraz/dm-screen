import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { JsonExporterComponent } from './json-exporter/json-exporter.component';
import { JsonImporterComponent } from './json-importer/json-importer.component';

@NgModule({
    imports: [IonicModule],
    declarations: [JsonExporterComponent, JsonImporterComponent],
    exports: [JsonExporterComponent, JsonImporterComponent],
})
export class SharedModule {}
