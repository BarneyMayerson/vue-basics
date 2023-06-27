const vm = Vue.createApp({
    data() {
        return {
            firstName: "Joe",
            middleName: "",
            lastName: "Doe",
            url: "https://google.com",
            raw_url: "<a href='https://google.com' target='_blanc'>Google</a>",
            age: 25,
        }
    },

    methods: {
        increment() {
            this.age++;
        },

        updateLastName(msg, event) {
            console.log(msg);

            this.lastName = event.target.value;
        },

        updateMiddleName(event) {
            this.middleName = event.target.value;
        },
    },

    computed: {
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`;
        },
    }
}).mount("#app");

setTimeout(() => {
    vm.firstName = "Bobby";
}, 2000);
