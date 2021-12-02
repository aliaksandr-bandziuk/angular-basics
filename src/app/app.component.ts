import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic title'
  number = 42
  arr = [1, 2, 3]
  obj = { a: 1, b: {c: 2} }
  img = 'https://www.shareicon.net/data/256x256/2016/07/08/117367_logo_512x512.png'
  inputValue = ''

  constructor() {
    setTimeout( () => {
      console.log('timeout is over')
      this.img = 'https://cdn.iconscout.com/icon/free/png-256/angular-3628622-3029847.png'
    }, 5000)
  }

  onInput(event: any) {
    console.log('Event', event)
    this.inputValue = event.target.value
  }

  onClick() {
    console.log('Click!');
  }

  onBlur(str: string) {
    this.inputValue = str
  }

  // to way data binding
  titleNew = ''

  onInputNew(event: any) {
    this.titleNew = event.target.value
  }

  backgroundToggle = false

  // ngIf else
  toggle = false

  // ngSwitch
  toggleSwitch: any = false

  // ngFor
  array = [1, 1, 2, 3, 5, 8, 13]

  objs = [
    {title: 'Post 1', author: 'Alex', comments: [
        {name: 'Max', text: 'lorem 1'},
        {name: 'Max', text: 'lorem 2'},
        {name: 'Max', text: 'lorem 3'},
      ]},
    {title: 'Post 2', author: 'Alex 2', comments: [
        {name: 'Max 2', text: 'lorem 1'},
        {name: 'Max 2', text: 'lorem 2'},
        {name: 'Max 2', text: 'lorem 3'},
      ]}
  ]

  // pipe
  now: Date = new Date()
}
