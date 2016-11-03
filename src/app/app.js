"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var AppComponent = (function () {
    function AppComponent() {
        this.hiddenNews = {};
        this.update();
        for (var i = 0; i < localStorage.length; i++) {
            var id = localStorage.key(i);
            var item = this.hiddenNews[id] = localStorage.getItem(id);
            if (!this.news.some(function (item) { return item.id == id; })) {
                localStorage.removeItem(id);
            }
        }
        this.update();
    }
    AppComponent.prototype.update = function () {
        var _this = this;
        this.news = newsArray.filter(function (item) { return !(item.id in _this.hiddenNews); });
    };
    AppComponent.prototype.onOpenItem = function (item) {
        this.onHideItem(item);
        window.open(item.url, '_blank');
    };
    AppComponent.prototype.hideItem = function (item) {
        this.hiddenNews[item.id] = item;
        localStorage.setItem(item.id, JSON.stringify(item));
    };
    AppComponent.prototype.onHideItem = function (item) {
        this.hideItem(item);
        this.update();
    };
    AppComponent.prototype.onHideAllItem = function () {
        var _this = this;
        newsArray.forEach(function (item) { return _this.hideItem(item); });
        this.update();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'src/app/views/main.html',
            directives: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
browser_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map