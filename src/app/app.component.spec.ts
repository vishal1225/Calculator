/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should append to operation`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.operation).toEqual('');
    app.append('1+2');
    expect(app.operation).toEqual('1+2');
  }));

  it(`should clear the operation`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.operation).toEqual('');
    app.append('1+2');
    expect(app.operation).toEqual('1+2');
    app.clear();
    expect(app.operation).toEqual('');
  }));


  it(`should evaluate result`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.result).toEqual('');
    app.operation = '1+2';
    app.evaluate();
    expect(app.result).toEqual(3);
  }));

});
