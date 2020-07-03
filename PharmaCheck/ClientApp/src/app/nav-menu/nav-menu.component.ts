import { Component } from '@angular/core';
import { SecurityService } from '../core/services/security.service';
import { ApplicationService } from '../core/services/application.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
    isExpanded = false;
    isLoggedIn: boolean;

    constructor(private securityService: SecurityService,
        private applicationService: ApplicationService,
        private location: Location) {
    }

    ngOnInit() {
        this.isLoggedIn = this.applicationService.isLoggedIn();
        console.log("logged in" + this.isLoggedIn);
    }

    collapse() {
        this.isExpanded = false;
    }

    toggle() {
        this.isExpanded = !this.isExpanded;
    }

    logoutUser() {
        this.securityService.logout();
        window.location.reload();
    }
}
