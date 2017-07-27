/* tslint:disable:no-unused-variable */
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
        });
        TestBed.compileComponents();
    });
    it('should create the app', async(function () {
        var fixture = TestBed.createComponent(AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it("should append to operation", async(function () {
        var fixture = TestBed.createComponent(AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app.operation).toEqual('');
        app.append('1+2');
        expect(app.operation).toEqual('1+2');
    }));
    it("should clear the operation", async(function () {
        var fixture = TestBed.createComponent(AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app.operation).toEqual('');
        app.append('1+2');
        expect(app.operation).toEqual('1+2');
        app.clear();
        expect(app.operation).toEqual('');
    }));
    it("should evaluate result", async(function () {
        var fixture = TestBed.createComponent(AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app.result).toEqual('');
        app.operation = '1+2';
        app.evaluate();
        expect(app.result).toEqual(3);
    }));
});
//# sourceMappingURL=C:/Users/vssharma/IdeaProjects/Calculator/src/app/app.component.spec.js.map