import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';
import{ CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})

export class MainViewComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
searchInput:any;
datas:any;
 
  board: Board = new Board('Open', [
    new Column('open', [
      "Maya Kanti",
      "Bhima Kapila",
      "Karthikeyan Reva"]),
    new Column('Contacted', [
      "Bala Murali",
      "Kalyani Madhavi",
      "Jayanti Kapila"]),
    new Column('written test', [
      "Mani Padmavati",
      "Indrani Gauri", 
      "Shiva Sita",
      "Sunita Drupam"]),
    new Column('Technical Round', [
      "Shanta Indrani",
      "Gargi Vikrama",
      "Rameshvara Pankaja",
      "Girisha Baladeva",
      "Mohana Vijaya" ]),
    new Column('Culture fit Round', [
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
}