const vm = Vue.createApp({
    data() {
        return {
            firstName: "Joe",
            lastName: "Doe",
        }
    },

    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`;
        }
    }
}).mount("#app");

setTimeout(() => {
    vm.firstName = "Bobby";
}, 2000);
