import { DatabaseService } from './../database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  submitted = false;
  captcha;
  resolved = false;

  constructor(public readonly ds: DatabaseService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.ds.sendMailMessage(this.name, this.email, this.message);
  }

  resolve(captchaResponse: string) {
    if (captchaResponse !== null) {
      this.resolved = true;
    }
  }

}
