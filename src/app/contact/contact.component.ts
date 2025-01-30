import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslatePipe, FormsModule, CommonModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  isChecked: boolean = false;

  post = {
    endPoint: 'https://developerdemir.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  mailTest = false;

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            alert('Nachricht versendet');
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      alert('Nachricht versendet');
      console.log(this.contactData);
      ngForm.resetForm();
    }
  }

  scrollToTop(): void {
    console.log('Scrollen');

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
