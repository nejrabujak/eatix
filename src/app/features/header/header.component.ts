import {Component} from '@angular/core';
import {Route} from "../../constaints/route.constants";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public route = Route;

}

