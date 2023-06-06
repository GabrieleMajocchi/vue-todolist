const { createApp } = Vue;

createApp({
    data() {
        return {
            arrayTodo: [
                {text: 'volare', done: false},
                {text: 'cantare', done: false},
                {text: 'giocare', done: false},
                {text: 'ohhh', done: false},
            ]
        }
    },
    methods: {
        doneTask(index){
            this.arrayTodo[index].done = !this.arrayTodo[index].done
        }
    }
}).mount('#app');