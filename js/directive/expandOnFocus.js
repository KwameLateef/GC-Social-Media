"use srtict";
const expandOnFocus = {
    binding: {
        addThought: "&"
    },
    template:`
    <form ng-submit="$ctrl.addThough({ newUser: $ctrl.newUser});">
        <input type="text" placeholder="name" ng-model="$ctrl.newUser.name">
        <input type="text" placeholder="phone number" ng-model="$ctrl.newUser.phone">
        <button>New Post</button>
    </form>
    `
};
// Does ng-repeat go above?
angular
    .module("myThought")
    .directive("expandOnFocus", expandOnFocus);