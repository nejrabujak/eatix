import {Component} from '@angular/core';
import {Route} from "../../../constants/route.constants";

@Component({
  selector: 'page_not_found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})

export class PageNotFound {
  public route = Route;

}
