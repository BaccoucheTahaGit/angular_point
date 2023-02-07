import { Component } from '@angular/core';
import { Inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class PointComponent {
  private _abs: number;
  private _ord: number;

  constructor(@Inject('ABS_TOKEN') private abs: number, @Inject('ORD_TOKEN') private ord: number) {
    this._abs = abs;
    this._ord = ord;
  }
  
  getAbs(): number {
    return this._abs;
  }

  setAbs(abs: number): void {
    this._abs = abs;
  }

  getOrd(): number {
    return this._ord;
  }

  setOrd(ord: number): void {
    this._ord = ord;
  }

  calculateDistance(p: PointComponent): number {
    const xDiff = this._abs - p._abs;
    const yDiff = this._ord - p._ord;
    return Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
  }
 calculateMidpoint(p: PointComponent): PointComponent {
    const xMid = (this._abs + p._abs) / 2;
    const yMid = (this._ord + p._ord) / 2;
    return new PointComponent(xMid, yMid);
  }
}
