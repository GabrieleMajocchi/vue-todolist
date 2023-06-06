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
        doneTask(task){
            task.done = !task.done;
        },
        removeItem(task){
            const taskindex = this.arrayTodo.indexOf(task);
            this.arrayTodo.splice(taskindex, 1);
        }
    }
}).mount('#app');