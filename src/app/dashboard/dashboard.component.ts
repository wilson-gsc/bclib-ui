import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css'],
    standalone: true,
    imports: [MatCardModule, CommonModule ],  
})
export class HomeComponent {
    user?: User | null;

    status = false;
    addToggle() {
        this.status = !this.status;
    }


constructor(private accountService: AccountService) {
    this.user = this.accountService.userValue;
}
    
}