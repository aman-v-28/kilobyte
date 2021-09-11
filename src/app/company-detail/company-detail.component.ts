import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Details } from '../clientDetail';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  record!: Details[]
  companyName: any
  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.companyDetail().subscribe(result=>{
      this.record = result.records;
    })
    this.companyName = this.auth.companyname;
  }


}
