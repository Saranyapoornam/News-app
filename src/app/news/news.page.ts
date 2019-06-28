import { Component, OnInit } from '@angular/core';
import { NewsService} from '../news.service'
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  users:any;
  constructor(private newsService  :NewsService) { }

  ngOnInit() {
    this.newsService.getData().subscribe(
      data=>{
        this.users = data
        console.log(this.users);
      }
    )
  }

}
