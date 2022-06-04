import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../models/product";

@Component({
  selector: 'app-root',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit{

  name = '';
  type = '';
  expiring_date = '';
  price = '';


  constructor(private productservice:ProductService) { }

  product : Product=new Product();
  submitted = false;

  ngOnInit() {
    this.submitted = false;
  }


  create() {
    this.productservice.create(this.product)
      .subscribe(data => {
        console.log(data);
      }, error => console.log(error));
  }



}
