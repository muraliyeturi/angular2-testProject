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

  it('should have product should show price', async(() => {
    const fixture = TestBed.createComponent(pdpComponent);
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('.productPrice b').textContent).toContain('$139.99');
  }));
});
