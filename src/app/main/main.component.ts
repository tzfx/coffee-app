import { Component } from '@angular/core';

interface formData {
  brewStyle: string;
  date: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  brewStyle: string = '';
  date: string = '';

  onSubmit(formData: formData) {
    console.log(formData);
  }
}
