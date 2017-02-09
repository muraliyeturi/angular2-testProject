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
    reviews: {},
    isOnline: true,
    puis: true
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
        var _pd = data[0].CatalogEntryView[0];
        vm.productDetails.title = _pd.title;
        vm.productDetails.DPCI = _pd.DPCI;
        vm.productDetails.images =  _pd.Images[0].AlternateImages;
        vm.productDetails.promotions = _pd.Promotions;
        vm.productDetails.returnPolicy = _pd.ReturnPolicy[0].legalCopy;
        vm.productDetails.ItemDescription = _pd.ItemDescription[0].features;
        vm.productDetails.reviews = _pd.CustomerReview[0];
        vm.productDetails.isOnline = _pd.purchasingChannelCode === "0" || _pd.purchasingChannelCode ==="1"? true : false
        vm.productDetails.puis = _pd.purchasingChannelCode === "0" || _pd.purchasingChannelCode ==="2"? true : false
      });
   }

  ngOnInit():any{
     this.getDetails();
  }

}
