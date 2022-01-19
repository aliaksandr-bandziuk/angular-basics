import { MyValidators } from './my.validators';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form!: FormGroup

  ngOnInit(): void {
      this.form = new FormGroup({
        email: new FormControl('', [
          Validators.email,
          Validators.required,
          MyValidators.restrictedEmails
        ], MyValidators.uniqEmail),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(6)
        ]),
        address: new FormGroup({
          country: new FormControl('by'),
          city: new FormControl('', Validators.required)
        }),
        skills: new FormArray([])
      })
  }

  submit() {
    console.log('Form:', this.form)
    const formData = {...this.form.value}
    console.log('Form Data:', formData)

    // это очищает форму
    this.form.reset()
  }

  setCapital() {

    const cityMap: any = {
      by: 'Минск',
      ua: 'Киев',
      ru: 'Москва'
    }

    const cityKey = this.form.get('address')?.get('country')?.value
    const city = cityMap[cityKey]
    // console.log('city: ', city);

    this.form.patchValue({
      address: {city: city}
    })

  }

  // это как-то связано с методом addSkill()
  getControls() {
    return (this.form.get('skills') as FormArray).controls
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    // (<FormArray>this.form.get('skills')).push()
    (this.form.get('skills') as FormArray).push(control)

  }

}
