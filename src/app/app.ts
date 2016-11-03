import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'

export interface NewsEntry {
  topic;
  timestamp;
  id;
  url;
  votes;
  posted;
  ignore;
}

declare var newsArray: NewsEntry[];

@Component({
  selector: 'my-app',
  templateUrl: 'src/app/views/main.html',
  directives: []
})
export class AppComponent {
  hiddenNews = {};
  public news : NewsEntry[];

  constructor() {
    this.update();

    for(var i = 0; i < localStorage.length; i++) {
      var id = localStorage.key(i);
      var item = this.hiddenNews[id] = localStorage.getItem(id);

      if(!this.news.some(item => item.id == id)) {
        localStorage.removeItem(id);
      }
    }

    this.update();
  }

  update() {
    this.news = newsArray.filter(item => !(item.id in this.hiddenNews));
  }

public onOpenItem(item: NewsEntry) {
  this.onHideItem(item);

  window.open(item.url, '_blank');
}

hideItem(item: NewsEntry) {
  this.hiddenNews[item.id] = item;
  localStorage.setItem(item.id, JSON.stringify(item));
}

  public onHideItem(item: NewsEntry) {
    this.hideItem(item);
    this.update();
  }

  public onHideAllItem() {
    newsArray.forEach(item => this.hideItem(item));
    this.update();
  }
}

bootstrap(AppComponent);
