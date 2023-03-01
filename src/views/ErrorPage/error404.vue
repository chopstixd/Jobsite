<template>
    <h1> 404</h1>
    <h2>Page not found</h2>
   <p> The job id is {{ $route.params.id }}</p>
    </template>
    
    <script>
    export default {
        data() {
            return{
               id: this.$route.params.id
            }
        }
    }
    </script>
    
    <style>
    
    </style>