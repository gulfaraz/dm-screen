import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core';

@Component({
    selector: 'app-json-importer',
    templateUrl: './json-importer.component.html',
})
export class JsonImporterComponent<T> {
    @ViewChild('fileInput') fileInput!: ElementRef;
    @Input() label = 'Import JSON';
    @Input() expand = '';
    @Input() fill = 'solid';
    @Input() size = 'small';
    @Input() classes = '';
    @Output() importEvent = new EventEmitter<T>();

    click = () => this.fileInput.nativeElement.click();

    import = () => {
        const files = this.fileInput.nativeElement.files;
        if (files?.length) this.readFile(files[0]);
        this.fileInput.nativeElement.value = '';
    };

    readFile = (file: File) => {
        const fileReader = new FileReader();
        fileReader.onload = () =>
            this.importEvent.emit(JSON.parse(String(fileReader.result)));
        fileReader.readAsText(file);
    };
}
