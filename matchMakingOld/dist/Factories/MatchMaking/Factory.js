"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Classes_1 = require("./../../Classes");
var MatchMakingFactory = /** @class */ (function () {
    function MatchMakingFactory() {
        this.theses = [];
        this.users = [];
    }
    MatchMakingFactory.prototype.addGroup = function (users) {
        var group = Array.apply(new Array(users).map(function (num) { return num; }));
        //   this.users.push(group);
    };
    ;
    MatchMakingFactory.prototype.addThesis = function (entropy) {
        var num = this.theses.length;
        var thesis = {
            text: "thesis_" + num,
            entropy: entropy
        };
        this.theses.push(thesis);
    };
    ;
    MatchMakingFactory.prototype.create = function () {
        var setup = {
            theses: this.theses,
            users: this.users
        };
        this.data = new Classes_1.EventData(setup);
        return this.data;
    };
    MatchMakingFactory.prototype.clear = function () {
        this.data = undefined;
        this.theses = [];
        this.users = [];
    };
    return MatchMakingFactory;
}());
exports.MatchMakingFactory = MatchMakingFactory;
;
