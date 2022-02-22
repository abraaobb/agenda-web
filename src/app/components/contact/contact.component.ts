import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ConfigService } from 'src/app/services/config.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
    contact: Contact = new Contact();
    contacts: Array<Contact> = new Array();

    constructor(private service: ConfigService) {}

    ngOnInit(): void {
        this.listContacts();
    }

    listContacts() {
        this.service.getAll().subscribe({
            next: (contacts) => {
                this.contacts = contacts['results'];
            },
            error: (e) => console.error(e),
            complete: () => console.info('complete'),
        });
    }
    createContact() {
        this.service.create(this.contact).subscribe({
            next: () => {
                this.contact = new Contact();
                this.listContacts();
            },
            error: (e) => console.error(e),
            complete: () => console.info('complete'),
        });
    }
    editContact(id: any) {
        this.service.edit(id, this.contact).subscribe({
            next: () => {
                this.contact = new Contact();
                this.listContacts();
            },
            error: (e) => console.error(e),
            complete: () => console.info('complete'),
        });
    }
}
