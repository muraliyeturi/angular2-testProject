import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import {OnInit} from "@angular/core";

import { ProdcutService } from './product.service';


@Component({
  selector: 'pdp-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProdcutService]
})
export class pdpComponent {

  constructor(private _ProdcutService: ProdcutService) {}

  starts = [1,2,3,4,5];

  quantity = 1;

  defaultProductImage = "assets/product1.jpg";

  setQuantity(x) {
    var vm = this;
    vm.quantity = ( x === 1 )? vm.quantity + 1 : vm.quantity - 1
  }

  changeImage(img){
    var vm = this;
    vm.defaultProductImage = img;
  }

  productDetails = {
    title: "",
    DPCI: "",
    images: [],
    offers: {},
    promotions: [],
    returnPolicy: "",
    ItemDescription: [],
    reviews: {}
  }

  cleanHtml(obj) {
    return obj.replace(/<\/?[^>]+(>|$)/g, "");
  }

  formateDate(date) {
    var _date = new Date(date);
    return _date.toDateString();
  }
  getDetails() {
      var vm = this;
      this._ProdcutService.getApi().then(function(data){
        vm.productDetails.title = data[0].CatalogEntryView[0].title;
        vm.productDetails.DPCI = data[0].CatalogEntryView[0].DPCI;
        vm.productDetails.images =  data[0].CatalogEntryView[0].Images[0].AlternateImages;
        vm.productDetails.promotions = data[0].CatalogEntryView[0].Promotions;
        vm.productDetails.returnPolicy = data[0].CatalogEntryView[0].ReturnPolicy[0].legalCopy;
        vm.productDetails.ItemDescription = data[0].CatalogEntryView[0].ItemDescription[0].features;
        vm.productDetails.reviews = data[0].CatalogEntryView[0].CustomerReview[0];
      });
   }

  ngOnInit():any{
     this.getDetails();
  }

}
