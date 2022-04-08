import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TalentCenter';
  public searchInput: string | undefined;
  public datas = ["Maya Kanti",
  "Bhima Kapila",
  "Karthikeyan Reva","Bala Murali",
  "Kalyani Madhavi",
  "Jayanti Kapila","Mani Padmavati",
  "Indrani Gauri", 
  "Shiva Sita",
  "Sunita Drupam","Shanta Indrani",
  "Gargi Vikrama",
  "Rameshvara Pankaja",
  "Girisha Baladeva",
  "Mohana Vijaya", "Kartikeya Sita",
  "Jagadisha Gopinatha",
  "Saraswati Brahma",
  "Lakshmana Madhav"
    ]
}