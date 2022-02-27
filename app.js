const app = Vue.createApp({
  data() {
    return { 
      
      eneteredValue:'',
      goals: [] 
    };
  },
  methods:{
    addGoal(){
      this.goals.push(this.enteredGoalValue);
    }
  }
});

app.mount('#user-goals');
