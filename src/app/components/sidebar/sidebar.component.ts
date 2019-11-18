import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/LeadershipDashboard', title: 'Leadership view',  icon:'open_with', class: '' },
    { path: '/finance', title: 'finance',  icon:'local_atm', class: '' },
    { path: '/user-profile', title: 'Deal confirguration',  icon:'content_paste', class: '' },
    { path: '/table-list', title: 'Employee confirguration',  icon:'person', class: '' },
    { path: '/typography', title: 'Pipeline',  icon:'timeline', class: '' },
    { path: '/icons', title: 'Margin Expansion',  icon:'library_books', class: '' },
    { path: '/maps', title: 'J2IO',  icon:'category', class: '' },
    { path: '/notifications', title: 'User Management',  icon:'group', class: '' },
    { path: '/Internaltool', title: 'Internaltool',  icon:'account_tree', class: '' },
    { path: '/modules', title: 'Modules',  icon:'widgets', class: '' },
    { path: '/report', title: 'Reports',  icon:'event_note', class: '' },
    { path: '/we-at', title: 'We @ Accenture',  icon:'highlight', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
