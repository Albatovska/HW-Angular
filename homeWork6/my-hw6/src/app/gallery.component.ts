import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-gallery',
    template: `
    <div class="container selected-image">
    <div class="row">
        <div class="col-4" *ngFor="let item of images">
            <div class="card">
                <img [src]="item.url" (click)="onClick(item.url)" class="card-img-top" alt="">
            </div>
        </div>
    </div>
</div>
    `,
    styleUrls: ['./app.component.css']
})

export class GalleryComponent {
    @Input()
    public images;

    @Output()
    public selectImage = new EventEmitter<string>();

    public onClick(currentUrl: string): void {
        this.selectImage.emit(currentUrl);
    }
}
