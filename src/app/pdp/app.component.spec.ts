/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { pdpComponent } from './app.component';

describe('pdpComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        pdpComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(pdpComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have product should have title', async(() => {
    const fixture = TestBed.createComponent(pdpComponent);
    fixture.componentInstance.productDetails.title = "product Title";
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();

    expect(compiled.querySelector('.productTitle').textContent).toContain('product Title');
  }));

  it('should have add to cart', async(() => {
  var purchasingChannelCode = "0";
     var fixture = TestBed.createComponent(pdpComponent);
     fixture.componentInstance.productDetails.isOnline = (purchasingChannelCode==="0" || purchasingChannelCode==="1") ? true  : false;;
     const compiled = fixture.debugElement.nativeElement;
     fixture.detectChanges();

     expect(compiled.querySelectorAll('.addToCart')).toBeDefined();
  }));

  it('should not have add to cart', async(() => {
  var purchasingChannelCode = "3";
     var fixture = TestBed.createComponent(pdpComponent);
     fixture.componentInstance.productDetails.isOnline = (purchasingChannelCode==="0" || purchasingChannelCode==="1") ? true  : false;;
     const compiled = fixture.debugElement.nativeElement;
     fixture.detectChanges();

     expect(compiled.querySelectorAll('.addToCart').length).toBe(0);
  }));

  it('should have pick up in store', async(() => {
  var purchasingChannelCode = "0";
     var fixture = TestBed.createComponent(pdpComponent);
     fixture.componentInstance.productDetails.puis = (purchasingChannelCode==="0" || purchasingChannelCode==="2") ? true  : false;
     const compiled = fixture.debugElement.nativeElement;
     fixture.detectChanges();

     expect(compiled.querySelectorAll('.pickUpInStore')).toBeDefined();
  }));

  it('should not have pick up in store', async(() => {
      var purchasingChannelCode = "3";
      var fixture = TestBed.createComponent(pdpComponent);
     fixture.componentInstance.productDetails.puis = (purchasingChannelCode==="0" || purchasingChannelCode==="2") ? true  : false;
     const compiled = fixture.debugElement.nativeElement;
     fixture.detectChanges();

     expect(compiled.querySelectorAll('.pickUpInStore').length).toBe(0);
  }));

});
