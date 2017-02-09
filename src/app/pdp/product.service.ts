import {Injectable} from "@angular/core";
import { Http, Response }          from '@angular/http';
import {ProductDetails} from "./data.con";

@Injectable()

export class ProdcutService {
   getApi() {
      return Promise.resolve(ProductDetails);
   }
}
