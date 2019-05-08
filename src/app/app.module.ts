import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { GameService } from './game.service';
import { DeckService } from './deck.service';
import { PiocheComponent } from './pioche/pioche.component';
import { MapService } from './map.service';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { GameStartComponent } from './game-start/game-start.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { Ng2PanZoomModule } from 'ng2-panzoom';
import { RulesComponent } from './rules/rules.component';
import { HelpComponent } from './help/help.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'game-start',
    component: GameStartComponent
  }
  ,
  {
    path: 'rules',
    component: RulesComponent
  }
  ,

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
  ,
  {
    path: 'retour-menu',
    component: HomeComponent
  }
  ,

];


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PiocheComponent,
    MenuComponent,
    ModalComponent,
    HomeComponent,
    GameStartComponent,
    RulesComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ButtonsModule.forRoot(),
    Ng2PanZoomModule,
    BrowserAnimationsModule
  ],
  providers: [GameService, DeckService, MapService, NgbModal],
  bootstrap: [AppComponent]
})
export class AppModule { }