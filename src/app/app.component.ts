import { Component } from '@angular/core';
import 'aframe';
import 'aframe-environment-component';
import 'aframe-google-poly-component';
import 'aframe-environment-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-webvr-demo';
}
