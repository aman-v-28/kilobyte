import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Details } from '../clientDetail';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  record!: Details[]
  constructor(
    private auth: AuthService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.auth.clients().subscribe(result=>{
      this.record = result.records;
    })
  }

  onClick(id: any,company: any){
    this.auth.id = id
    this.auth.companyname = company
    this.route.navigate(['/company-detail'])
  }

}
