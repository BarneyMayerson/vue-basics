const vm = Vue.createApp({
    data() {
        return {
            firstName: "Joe",
            lastName: "Doe",
        }
    }
}).mount("#app");

setTimeout(() => {
    vm.firstName = "Bobby";
}, 2000);
