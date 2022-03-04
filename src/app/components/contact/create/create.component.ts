import {Component, OnInit} from '@angular/core';
import {Contact} from "../../../models/contact";
import {ConfigService} from "../../../services/config.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  contact: Contact = new Contact();

  constructor(private service: ConfigService, private router: Router) {
  }

  ngOnInit(): void {
  }

  createContact() {
    this.service.create(this.contact).subscribe({
      next: () => {
        this.contact = new Contact();
        this.router.navigate(['/contact'])
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }

  cancel() {
    this.router.navigate(['/contact'])
  }
}
