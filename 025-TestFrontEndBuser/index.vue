<template>
	<div id="app buser-theme">
    <!-- 
      Nome: Rodrigo Gabriel
      Desafio: Achei o desafio interessante, incrementei algumas coisas, porem queria componentizar
      deixei tudo nesse componente, mas queria fazer algumas coisas
      Componentizar o formulario
      Componentizar a lista
      Queria colocar alguns filtros para lista
      Componentizar o notification

      é isso no mas me diria como contratado <3
      
     -->
		<div class="header">
			<img class="header__img" src="https://dals0gb6i1pll.cloudfront.net/img/buser-horizontal-rosa.0109919.svg"/>
			<div class="header__form">
				<p><strong>Add a new contact:</strong></p>
				<div>
					<label>First Name: <br><input type="text" v-model="user.firstName" class="userFirstname" /></label> <br />
					<label>Last Name: <br><input type="text" v-model="user.lastName" class="userLastname" /></label> <br />
					<label>Phone: <br><input type="number" v-model="user.phone" class="userPhone" /></label> <br />
					<button class="submitButton" @click="addUser">Add New Contact</button>
				</div>
			</div>
    </div>
    <div class="contentList" v-show="items.length > 0">
			<table id="phoneBookItems" class="informationTable">
				<tr>
					<th v-for="(item, index) in phoneBookHeader" :key="index">{{item.title}}</th>
				</tr>
				<tr v-for="(item, index) in listPhoneBook" :key="index">
					<td>
						{{fullName(item)}}
					</td>
					<td>
						{{item.phone}}
					</td>
				</tr>
				</td>
			</table>
    </div>
    <div class="modal" v-show="isModalActive" :class="{ errorBackground : isModalError}"> <span>{{messageError}} </span> </div>
		</div>
</template>

<script>
	export default {
    name: "App",
    data() {
      return {
        phoneBookHeader: [
          {title: "Name"}, 
          {title: "Phone"}
        ],
        user: {
          firstName: "Coder",
          lastName: "Byte",
          phone: 8885559999,
          created_at: null
        },
        items: [],
        messageError: "Error",
        isModalActive: false,
        isModalError: false
      }
    },
    computed:{
      listPhoneBook(){
        return this.items.sort( (a, b) => new Date(b.created_at) - new Date(a.created_at));
      },
    },
    methods: {
      userAlreadyExist(){
        const user = this.items.some( x => x.phone == this.user.phone)

        return user
        
      },
      compareData(a,b){
        return a.created_at < b.created_at
      },
      notification(message, error = true){
        this.isModalActive = true
        this.messageError = message
        this.isModalError = error

        setTimeout(() => {
          this.isModalActive = false
        }, 3000)
      },
      isDataFormValid(){
       let messageError = ""

        if(this.user.firstName == undefined || this.user.firstName == ""){
          messageError = "Fill First Name"
        }

        if(this.user.lastName == undefined || this.user.lastName == ""){
          messageError = "Fill Last Name"
        }

        if(this.user.phone == undefined || this.user.phone == ""){
          messageError = "Fill Phone"
        }

        if(messageError.length > 0){
          this.notification(messageError)
          return false
        }
        return true
      },
      userConsistency(){

        if(!this.isDataFormValid()){
          return false
        }

        if(this.userAlreadyExist()){
          this.notification("Phone already used")
          return false
        }

        return true
      },
      addUser(){
        
        if(!this.userConsistency())  return
        
        console.log(new Date())
        this.user.created_at = new Date()

        this.items.push( {...this.user} );

        this.notification("Add user success!", false)

      },
      fullName(user){
        return `${user.firstName} ${user.lastName}`
      }
    }
  };
</script>

<style type="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap');

  *{
    font-family: 'Roboto', sans-serif;
    --color-primary: rgb(234,17,114);
    --color-font-primary: #000;
    --color-font-btn-primary: #fff;
    --color-error: #ff5251;
    --color-success: #4caf50;
  }

  .app{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

  .header{
    box-shadow: 0 0 5px 5px rgba(0,0,0,0.1);
    margin: 20px auto;
    max-width: 350px;
    padding: 40px;
  }

  .header__img{
    margin-bottom: 15px;
  }

  .header__form p{
    font-size: 1.1em;
  }

  .contentList{
    box-shadow: 0 0 5px 5px rgba(0,0,0,0.1);
    max-width: 350px;
    padding: 40px;
    margin: 0 auto;
  }

  input{
    padding:10px;
    margin-bottom: 15px;
    border-radius: 3px;
    border: 1px solid;
    font-size:1.1em;
    width: calc(100% - 20px);
  }

  table{
    width: 100%;
  }

  table td{
    text-align: center;
  }
  table tr:nth-child(even){
    background-color: var(--color-primary);
    color: var(--color-font-btn-primary)
  }

  .submitButton{
    background-color: var(--color-primary);
    color: var(--color-font-btn-primary);
    padding: 10px;
    margin-top:20px;
    width: 100%;
    cursor:pointer;
    border: none;
    border-radius: 3px;
    font-size: 1em;
  }

  .modal{
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 5px;
    right: 0px;
    width: 200px;
    padding: 15px;
    background:var(--color-success);
    color: white;
  }

  .errorBackground{
    background: var(--color-error);
    color: white;
  }
</style>