<template>
<h1> jobs</h1>
<div v-for="job in jobs" :key="job.id" >
    <router-link :to="{ name: 'jobdetails', params: { id: job.id}}">
        <h2>{{ jobs.title }}</h2>

    </router-link>
</div>
</template>

<script>
export default {
     
    data() {
        return{
            jobs: [
                { title: 'Ninja ux designer', id: 1, details: 'lorem'},
                { title: 'Ninja web developer', id: 2, details: 'lorem'},
                { title: 'Ninja vue developer', id: 3, details: 'lorem'},

            ]
        }
    }
}
</script>

<style>

</style>