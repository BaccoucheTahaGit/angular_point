import { Component } from '@angular/core';
import { PointComponent } from '../point/point.component';
@Component({
  selector: 'app-troispoints',
  templateUrl: './troispoints.component.html',
  styleUrls: ['./troispoints.component.css']
})
export class TroispointsComponent {
  private _premier: PointComponent;
  private _deuxieme: PointComponent;
  private _troisieme: PointComponent;

  constructor(premier: PointComponent, deuxieme: PointComponent, troisieme: PointComponent) {
    this._premier = premier;
    this._deuxieme = deuxieme;
    this._troisieme = troisieme;
  }

  get premier(): PointComponent {
    return this._premier;
  }
  set premier(premier: PointComponent) {
    this._premier = premier;
  }

  get deuxieme(): PointComponent {
    return this._deuxieme;
  }

  set deuxieme(deuxieme: PointComponent) {
    this._deuxieme = deuxieme;
  }
  get troisieme(): PointComponent {
    return this._troisieme;
  }
  set troisieme(troisieme: PointComponent) {
    this._troisieme = troisieme;
  }

  sontAlignes(): boolean {
    const AB = this.premier.calculateDistance(this.deuxieme);
    const AC = this.premier.calculateDistance(this.troisieme);
    const BC = this.deuxieme.calculateDistance(this.troisieme);

    return AB + AC === BC || AB + BC === AC || AC + BC === AB;
  }
  estTriangleEquilateral(): boolean {
    const AB = this.premier.calculateDistance(this.deuxieme);
    const AC = this.premier.calculateDistance(this.troisieme);
    const BC = this.deuxieme.calculateDistance(this.troisieme);

    return AB === AC && AC === BC;
  }

}
