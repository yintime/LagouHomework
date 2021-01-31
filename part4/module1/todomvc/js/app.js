(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	//声明常量保存本地存储事项的key
	const TODOS_KEY = 'todos-vue';
	let todoStorage = {
		get(){
			return JSON.parse(localStorage.getItem(TODOS_KEY)) || [];
		},
		set(todos){
			localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
		}
	};
	let filters = {
		all(todos){
			return todos;
		},
		active(todos){
			return todos.filter(todo => !todo.completed);
		},
		completed(todos){
			return todos.filter(todo => todo.completed);
		}
	}
	new Vue({
		el:'#app',
		data:{
			// todos:[
			// 	{ id: 1, title: '待办事项1', completed: false },
			// 	{ id: 2, title: '待办事项2', completed: true },
			// 	{ id: 3, title: '待办事项3', completed: true }
			// ],
			todos: todoStorage.get(),
			//存储新增输入框的数据
			newTodo:'',
			//存储正在编辑项
			editingTodo: null,
			//存储正在编辑的原始内容
			titleBeforeEdit:'',
			todoType:'all'
			//从上面开始加，开始追加新的data
		},
		methods:{
			// footer计数单位单复数形式处理
			pluralize: function(word){
				return word +(this.remaining === 1 ? '' : 's');
			},
			//新增事项操作
			addTodo(){
				let value = this.newTodo.trim();
				if(!this.newTodo) {
					return;
				}
				this.todos.push({id:this.todos.length+1,title:value,completed:false});
				this.newTodo = '';
			},
			//删除事项
			removeTodo(todo){
				let index = this.todos.indexOf(todo);
				this.todos.splice(index,1)
			},
			//删除已完成事项
			removeCompleted(){
				//this.todos = this.todos.filter((todo) => {return !todo.completed;})
				this.todos = filters.active(this.todos);
			},
			//编辑todo项
			editTodo(todo){
				this.editingTodo = todo;
				this.titleBeforeEdit = todo.title;
			},
			//取消编辑
			cancelEdit(todo){
				this.editingTodo = null;
				todo.title = this.titleBeforeEdit;
			},
			//用于保存编辑
			editDone(todo){
				if(!this.editingTodo) return;
				this.editingTodo = null;
				todo.title = todo.title.trim();
				if(!todo.title){
					this.removeTodo(todo)
				}
			}
			//从上面一行添加methods(加,)
		},
		computed: {
			// 计算未完成事项的数量
			remaining () {
				//return this.todos.filter(function(todo){return !todo.completed;}).length;
				return filters.active(this.todos).length;
			},
			//全选（全部完成）
			allDone: {
				get(){return this.remaining === 0;},
				set(value){
					this.todos.forEach((todo)=>{
						todo.completed = value;
				}
				)}
			},
			filteredTodo(){
				return filters[this.todoType](this.todos);
			}
			//从上面加，追加computed
		},
		directives:{
			'todo-focus'(el,binding){
				if(binding.value){
					el.focus();
				}
			}
		},
		watch:{
			todos:{
				deep:true,
				handler:todoStorage.set
			}
		}
	})

})(window);
