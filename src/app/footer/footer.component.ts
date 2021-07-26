import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public form: FormGroup
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:[null, Validators.required],
      email:[null, [Validators.required, Validators.email]],
      text: [null,Validators.maxLength(100)]
      
    })
  }

  submit() {
    console.log(this.form)
  }
}
