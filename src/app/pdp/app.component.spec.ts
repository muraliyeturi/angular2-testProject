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

  it('should have product title in h1 tag', async(() => {
    const fixture = TestBed.createComponent(pdpComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Ninja\u2122 Professional Blender with Single Serve Blending Cups');
  }));
});
