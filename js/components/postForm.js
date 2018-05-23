"use strict";

const postForm = {
    bindings: {
        addPost: "&"
    },

template:`
    <form ng-submit="$ctrl.addPost({ newPost: $ctrl.newPost });">
        <input type="text" placeholder="subject" ng-model="$ctrl.newPost.title">
        <input type="text" placeholder="words" ng-model="$ctrl.newPost.words">
        <button>Add</button>
    </form>
`
}

angular   
    .module("myThought")
    .component("postForm", postForm);