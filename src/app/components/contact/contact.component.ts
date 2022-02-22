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
        this.service.list().subscribe(
            (contacts) => {
                this.contacts = contacts['results'];
            },
            (err) => {
                console.error(err);
            }
        );
    }
}
