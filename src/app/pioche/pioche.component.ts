import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game.service';
import { DeckService } from '../deck.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { zoomIn } from 'ng-animate';


@Component({
  selector: 'app-pioche',
  templateUrl: './pioche.component.html',
  styleUrls: ['./pioche.component.scss'],
  animations: [
    trigger('zoomIn', [transition('* => *', useAnimation(zoomIn))]),
  ],
})
export class PiocheComponent implements OnInit {

  zoomIn: any

  constructor(public game: GameService, public deck: DeckService) { }

  ngOnInit() {

  }

  rotateTile() {
    this.game.rotationTile()
  }




}
