"use strict";
const thought = {
    template:`
    <section>
    <user-form add-thought=$ctrl.addThought(newUser);"></user-form>
    <list thought-lst+"$ctrl.thoughtList></list>
    </section>
    `,
    controller: function() {
        const vm = this;
        vm.thoughtList = [];
        vm.addThought = (newUser) => {
            vm.thoughtList.push({
                name: NewUser.name,
                phone: newUser.phone
            });
        };
    }
};

angular   
    .module("myThougths")
    .component("thought", thought);