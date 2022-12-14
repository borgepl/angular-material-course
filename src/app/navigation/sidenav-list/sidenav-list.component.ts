import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SideNavListComponent implements OnInit {

  @Output() closeNav = new EventEmitter<void>() ;

  constructor() {}

  ngOnInit(): void {

  }

  onCloseNav() {
    this.closeNav.emit();
  }

}
