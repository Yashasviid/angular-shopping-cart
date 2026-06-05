import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  private readonly titleService = inject(Title);

  // User contact info
  readonly email = 'yashasvi.dixit@skycart.com';
  readonly phone = '+91 80 5550 0199';
  readonly address = 'Sky Towers, Suite 402, Indiranagar, Bengaluru, Karnataka, India';

  ngOnInit(): void {
    this.titleService.setTitle('Contact Us - SkyCart');
  }

  // Handle contact form submission mock
  onSubmit(event: Event): void {
    event.preventDefault();
    alert('📧 Message Sent successfully!\n\nThank you for reaching out. Yashasvi Dixit and the SkyCart support team will get back to you shortly.');
    const form = event.target as HTMLFormElement;
    form.reset();
  }
}
