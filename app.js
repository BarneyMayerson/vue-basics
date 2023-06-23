Vue.createApp({
    data() {
        return {
            firstName: "Joe",
            lastName: "Doe",
        }
    }
}).mount("#app");

Vue.createApp({
    name: "MyApp",
    data() {
        return {
            firstName: "Mary",
            lastName: "Ewing",
        }
    }
}).mount("#app2");