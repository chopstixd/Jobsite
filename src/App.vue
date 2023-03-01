<template>
  
   <div id = "nav">
    <router-link to="/">Home</router-link>
    <router-link to="/About">About</router-link>
    <router-link to="/jobs">jobs</router-link>


   </div>
   <button @click="redirect">Redirect</button>
   <button @click="back">Back</button>

   <button @click="forward">Forward</button>

   <router-view/>
    </template>
    
    <script>
  export default {
    methods: {
      redirect() {
        this.$router.push({ name: 'Home'})
      },
      back() {
        this.$router.go(-1)
      },
      forward() {
        this.$router.go(1)
      }
    }
  }
  </script>
    
    
   
    <style >
   
    #app{
      font-family: Arial, Helvetica, sans-serif;
      text-align: center;
      color: #2c3e5e;
    }
    #nav {
      padding: 30px;
    }
    #nav a{
      font-weight: bold;
      color: #2c3e5e;
      text-decoration: none;
      padding: 10px;
      border-radius: 4px;

    }
    #nav a.router-link-exact-active {
      color:aliceblue;
      background: green;
    }
    </style>
    