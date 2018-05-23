"use strict";
const socialPost = {
    template:`
    <section>
    <heading>Social Media</heading>
   
    <button ng-click="$ctrl.openForm();">Add New Blog</button>
    <post-form add-post="$ctrl.addPost(newPost);"></post-form>
    <post post-list="$ctrl.postList"></post>
    </section>
    `,
     
    controller: function($element) {
        const vm = this;
        vm.postList = []; 
        vm.addPost = (newPost) => {
            vm.postList.push({
                title: newPost.title,
                words: newPost.words
             });
        }
    }

}
angular   
    .module("myThought")
    .component("socialPost", socialPost);