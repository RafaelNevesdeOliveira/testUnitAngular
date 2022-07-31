import { LikeWidgetModule } from './shared/components/like-widget/like-widget.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikeWidgetComponent } from './shared/components/like-widget/like-widget.component';
import { UniqueIdService } from './shared/services/unique-id/unique-id.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LikeWidgetModule
  ],
  providers: [UniqueIdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
