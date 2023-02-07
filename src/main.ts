import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { PointComponent } from './app/point/point.component';
import { TroispointsComponent } from './app/troispoints/troispoints.component';

let btn =document.getElementById("submit")! ;
let xA = document.getElementById("xpointA") ;
let yA = document.getElementById("ypointA") ;
let xB = document.getElementById("xpointB") ;
let yB = document.getElementById("ypointB") ;
let xC = document.getElementById("xpointC") ;
let yC = document.getElementById("ypointC") ;

btn.addEventListener("click", function(){
 const pointA = new PointComponent(Number((<HTMLInputElement>xA).value),Number((<HTMLInputElement>yA).value));
 const pointB = new PointComponent(Number((<HTMLInputElement>xB).value),Number((<HTMLInputElement>yB).value));
 const pointC = new PointComponent(Number((<HTMLInputElement>xC).value),Number((<HTMLInputElement>yC).value));
 console.log("distance entre A et B = "+pointA.calculateDistance(pointB));


 const midPoint = pointA.calculateMidpoint(pointB);
 console.log("le millieu point de A et B est ( "+midPoint.getAbs() +" , "+midPoint.getOrd()+" )");
 
 
 const troisPoints = new TroispointsComponent(pointA, pointB, pointC);
 console.log("A , B et C allignés ? "+troisPoints.sontAlignes());
 
 
 console.log("ABC est equilateral ? "+troisPoints.estTriangleEquilateral());
 
});




platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
