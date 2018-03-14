import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Article } from '../models/article'
import { RawArticle } from "../models/rawArticle"
import { ArticleService } from "../services/article.service"
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-article-modification',
  templateUrl: './article-modification.component.html',
  styleUrls: ['./article-modification.component.css']
})
export class ArticleModificationComponent implements OnInit {

  @Input("article")
  article: Article;

  articleForm: FormGroup;

  @Output()
  private updatedArticle: EventEmitter<Article> = new EventEmitter();

  constructor(private fb: FormBuilder, private articleService: ArticleService) { }

  modifyArticle() {
    let modifiedArticles: Article = {
      id: this.article.id,
      title: this.articleForm.value.title,
      content: this.articleForm.value.content,
      authors: this.articleForm.value.authors
    }

    this.articleService.modifyArticle(modifiedArticles).subscribe(() => {
      this.updatedArticle.emit();
    });
  }

  ngOnInit() {
    this.articleForm = this.fb.group({
      title: [this.article.title, Validators.required],
      content: [this.article.content, Validators.required],
      authors: [this.article.authors, Validators.required]
    });
  }

}
