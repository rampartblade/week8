/*import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  //untuk template driven
  formModel = {
    nama: "",
    umur: 0
  };

  //untuk reactive form
  myReactiveForm: FormGroup;

  form;

  ngOnInit() {
    console.log("initialize");

    this.myReactiveForm = new FormGroup({
      nama: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      umur: new FormControl(null, [Validators.required, Validators.min(18), Validators.max(80)]),
      check: new FormControl(null, [Validators.requiredTrue])
    });

    this.myReactiveForm.valueChanges.subscribe(form => {
      this.form = form;
    });
  }

  get nama() {
    return this.myReactiveForm.get("nama");
  }

  get umur() {
    return this.myReactiveForm.get("umur");
  }

  get check() {
    return this.myReactiveForm.get("check");
  }

  //untuk template driven
  submit1() {
    console.log(this.formModel);
    alert("submitted!");
  }

  //untuk reactive form
  submit2() {
    alert("submitted!");
  }
}*/

import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";
function NumberValidator(
    control: AbstractControl
  ): { [key: string]: any } | null {
      const valid = /^d+$/.test(control.value)
    return valid
      ? null
      : { invalidNumber: { valid: false, value: control.value } }
}
export interface Faculty {
  value: string;
  viewValue: string;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  form : FormGroup;
    faculties: string[] = [
      "Teknik Informatika", "Sistem Informasi", "Managemen"
    ];
  //untuk template driven
  formModel = {
    nama: "",
    email: "",
  };

  //untuk reactive form
  myReactiveForm: FormGroup;

  ngOnInit() {
    console.log("initialize");

    this.myReactiveForm = new FormGroup({
      nama: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      nim: new FormControl('', [Validators.required, NumberValidator,Validators.pattern('^(?=.*[0-9])[0-9]+$')]),
      check: new FormControl(null, [Validators.requiredTrue])
    });

    this.myReactiveForm.valueChanges.subscribe(form => {
      this.form = form;
    });
  }

  get nama() {
    return this.myReactiveForm.get("nama");
  }

  get email() {
    return this.myReactiveForm.get("email");
  }

  get nim() {
    return this.myReactiveForm.get("nim");
  }

  get check() {
    return this.myReactiveForm.get("check");
  }

  submit1() {
    console.log(this.formModel);
    alert("submitted!");
  }
}

