import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';
import{ CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ActivationEnd } from '@angular/router';
import { __values } from 'tslib';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})

export class MainViewComponent implements OnInit {
  title = 'TalentCenter';
  term!: string;
  filterData=[{firstName:
    "Kartikeya Sita"},
    {firstName:"Jagadisha Gopinatha"},
    {firstName: "Saraswati Brahma"},
    {firstName:"Lakshmana Madhav"},
     {firstName: "Shanta Indrani"},
     {firstName: "Gargi Vikrama"},
     {firstName: "Rameshvara Pankaja"},
     {firstName: "Girisha Baladeva"},
     {firstName: "Mohana Vijaya"},
     {firstName: "Mani Padmavati"},
     {firstName: "Indrani Gauri"}, 
     {firstName: "Shiva Sita"},
     {firstName: "Sunita Drupam"},
     {firstName: "Harishmitha V"},
     {firstName: "Bala Murali"},
     {firstName: "Kalyani Madhavi"},
     {firstName: "Jayanti Kapila"},
     {firstName: "Maya Kanti"},
     {firstName: "Bhima Kapila"},
     {firstName: "Karthikeyan Reva"}
  ]
   ngOnInit(): void {
      throw new Error('Method not implemented.');
  }
board: Board = new Board('Open', [
    new Column('Open - 2', [
      "Maya Kanti",
      "Bhima Kapila",
      "Karthikeyan Reva"]),
    new Column('Contacted - 3 ', [
      "Bala Murali",
      "Kalyani Madhavi",
      "Jayanti Kapila"]),
    new Column('Written test - 5', [
      "Mani Padmavati",
      "Indrani Gauri", 
      "Shiva Sita",
      "Sunita Drupam",
      "Harishmitha V"]),
    new Column('Technical round - 5', [
      "Shanta Indrani",
      "Gargi Vikrama",
      "Rameshvara Pankaja",
      "Girisha Baladeva",
      "Mohana Vijaya" ]),
    new Column('Culture fit round - 4', [
      "Kartikeya Sita",
      "Jagadisha Gopinatha",
      "Saraswati Brahma",
      "Lakshmana Madhav"])
  ]);
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  active(){
   this.term;
  } 
}
