import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article: Article;

  @Output()
  private deletedArticle: EventEmitter<Article> = new EventEmitter();

  @Output()
  private modifiedArticle: EventEmitter<Article> = new EventEmitter();

  constructor() {
  }

  delete() {
    this.deletedArticle.emit(this.article)
  }

  modify() {
    this.modifiedArticle.emit(this.article)
  }

  ngOnInit() {
  }

}
