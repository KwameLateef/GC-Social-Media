"use srtict";

const post = {
    bindings: {
        postList: "<"
    },

    template:`
    <section>
        <div ng-repeat="post in $ctrl.postList">
            <p>{{ post.title }}</p>
            <p>{{ post.words }}</p>
            <p>X</p>
        </div>
    </section>
    `
}

angular
    .module("myThought")
    .component("post", post);