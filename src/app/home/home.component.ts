import { Component, OnInit } from '@angular/core';
import { FetchListService } from '../fetch-list.service';
import { Match } from '../listType.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

    listData! : Match[];
    constructor(
    private fetchListService : FetchListService
    ){}

    ngOnInit(): void {
        this.listData = this.fetchListService.list();
    }


}
