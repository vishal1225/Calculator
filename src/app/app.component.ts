import {Component} from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "app.component.html"
})
export class AppComponent {
  operation: string = '';
  result: string= '';

  append(element: string){
    this.operation += element;
  }
  clear(){
    this.operation = '';
  }
  evaluate(){
    try {
      this.result = eval(this.operation);
      this.operation = this.result;
    }
    catch(e){
      alert('Cannot evaluate expression!');
    }
  }
}
