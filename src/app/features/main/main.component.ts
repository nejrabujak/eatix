import { Component } from '@angular/core';
import {Route} from "../../constants/route.constants";

@Component({
  selector: 'app-login',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public route = Route;
}
