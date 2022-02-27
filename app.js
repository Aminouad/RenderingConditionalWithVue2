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
    },
    removeGoal(id){
      this.goals.splice(id,1);
    }
  }
});

app.mount('#user-goals');
