
import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('btn', { static: false })
  btn: ElementRef;

  public title = 'GalleryAngular';
  private count: number = 0;
  private subscription: Subscription;

  ngAfterViewInit(): void {
    this.subscription = fromEvent(this.btn.nativeElement, 'click')
      .subscribe(() => this.click());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public click(): void {
    this.count++;
    if (this.count === 4) {
      this.count = 0;
      alert('Пора в отпуск');
    }
  }
}

