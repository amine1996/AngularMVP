import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSearchFormComponent } from './article-search-form.component';

describe('ArticleSearchFormComponent', () => {
  let component: ArticleSearchFormComponent;
  let fixture: ComponentFixture<ArticleSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleSearchFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
