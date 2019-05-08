import { Component, OnInit } from '@angular/core';
import { DeckService } from '../deck.service';
import { GameService } from '../game.service';
import { MapService } from '../map.service';
import { PanZoomConfig, PanZoomAPI, PanZoomModel } from 'ng2-panzoom';
import { tilesDeck } from '../tuilesData';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  cases = undefined

  public panZoomConfig: PanZoomConfig = new PanZoomConfig({
    zoomLevels: 4,
    scalePerZoomLevel: 1.5,
    initialPanX : -10000,
    initialPanY : -10500,
    freeMouseWheelFactor: 0.01,
    zoomToFitZoomLevelFactor: 0.98,
    dragMouseButton: 'right',
  });

  tileSound: any;

  constructor(public deck: DeckService, public game: GameService, public map: MapService) { }

  ngOnInit() {
    this.cases = this.map.generateMap()
    this.game.ngOnDestroy()
    this.game.playerTurn()
    this.game.helpText()
  }

  
  rotateTile() {
    this.game.rotationTile()
  }

  // submitVoleur(){
  //   this.game.voleurPosition()
  // }

}





