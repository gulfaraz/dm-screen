import { Component, Input } from '@angular/core';

import { download } from './utils';

@Component({
    selector: 'app-json-exporter',
    templateUrl: './json-exporter.component.html',
})
export class JsonExporterComponent {
    @Input() label = 'Export JSON';
    @Input() json = {};

    export = () =>
        download(JSON.stringify(this.json), 'application/json', this.label);
}
