import { Employees } from './../../shared/models/employees';
import { Component, OnInit } from '@angular/core';
import { MasterPageService } from '../services/master-page.service';
import { Filter } from 'src/app/shared/models/filter';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public elements: Employees [] = [ ];
  public modelFilter: Filter;
  constructor(
    private masterPageService: MasterPageService,
  ) { }

  ngOnInit() {
  }

  onLoad() {
    this.masterPageService.getAllEmployees().subscribe(response => {
     this.elements = [];
     this.elements = response;
    }, err => {
    });

  }

  onSearch(valor: any) {
    if (valor === '') {
      this.onLoad();
    } else {
      this.modelFilter = new Filter();
      this.modelFilter.id = Number(valor);
      this.masterPageService.getById(this.modelFilter).subscribe(response => {
        this.elements = [];
        this.elements.push(response);
       }, err => {
       });
    }
  }
  headElements  = ['id', 'name', 'contractTypeName', 'hourlySalary', 'monthlySalary', 'annualSalary'];

}
