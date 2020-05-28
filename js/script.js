var app = new Vue({
    el: '#app',
    data: {
        color: "#"
    },
    methods: {
        colorUse() {
            document.body.style.backgroundColor = this.color;
            document.getElementById("color").value = "#";
        }
    }
})