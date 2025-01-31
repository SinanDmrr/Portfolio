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
  formSubmitted: boolean = false;

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response: any) => {
            if (response?.success) {
              ngForm.resetForm();
              this.formSubmitted = true;
              setTimeout(() => {
                this.formSubmitted = false;
              }, 3000);
            } else {
              alert('Fehler - Bitte versuchen Sie es später erneut');
            }
          },
          error: (error) => {
            console.error(error);
            alert('Serverfehler - Bitte kontaktieren Sie uns direkt');
          },
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log(this.contactData);
      this.formSubmitted = true;
      ngForm.resetForm();
      setTimeout(() => {
        this.formSubmitted = false;
      }, 3000);
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
