<template>
<div>
    <h2>Customer Detail {{$route.params.id}} </h2>

    <router-link :to="{name: 'customerEdit', params: {id: $route.params.id}, query: {name:'Naeem', age:23}}" tag="button" class="btn btn-primary">Edit Customer</router-link>
</div>
    
</template>