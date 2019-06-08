import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';
import { AppComponent, RatingService } from './app.component';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],

  providers: [RatingService],

  entryComponents: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const strategyFactory = new ElementZoneStrategyFactory(AppComponent, this.injector);
    const customElement = createCustomElement(AppComponent, { injector, strategyFactory });
    customElements.define('my-app', customElement);

  }

  ngDoBootstrap() {}
}
