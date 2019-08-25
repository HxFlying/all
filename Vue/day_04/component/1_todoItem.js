var todoItem={
  template:`<li>
    {{i+1}} - {{task}} <button @click="del">x</button>
  </li>`,
  props:["task", "i", "tasks"],
  methods:{
    del(){
      this.tasks.splice(this.i,1);
    }
  }
}