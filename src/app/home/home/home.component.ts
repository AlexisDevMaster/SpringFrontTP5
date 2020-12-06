import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/services/product.service';
import {SellerService} from '../../shared/services/seller.service';
import {Product} from '../../shared/class/product';
import {Seller} from '../../shared/class/seller';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name'];
  productsSource: Product[];
  sellersSource: Seller[];

  constructor(private productsService: ProductService, private sellersService: SellerService) {
    this.productsSource = [];
    this.sellersSource = [];
  }

  ngOnInit(): void {
    this.productsService.findAll().subscribe((products) => {
        this.productsSource = products;
    });
    this.sellersService.findAll().subscribe((sellers) => {
      this.sellersSource = sellers;
    });

  }

}
