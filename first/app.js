const app = Vue.createApp({

    //you can create variables you can use here:
    data(){
        //you'll create everything inside this return
        return{
            courseGoalA:'Learn Vue JS and all its features',
            courseGoalB:'<i>Master Vue JS and all its features</i>',
            vueLink: 'https://vuejs.org'
        }
    },
    methods:{
        outputGoal(){
            const randomNumber = Math.random()
            if(random < 0.5){
                retun this.courseGoalA
            }
            else{
                return this.courseGoalB
            }
        }
    }
});

app.mount('#user-goal');