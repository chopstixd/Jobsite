<template>
    <h1> job details</h1>
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