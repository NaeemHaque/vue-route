<template>
     <ul class="nav nav-pills bg-primary">
       
            <router-link active-class="active" exact tag="li" class="nav-item nav-link text-white cursor" to="/" >Home</router-link>
            <router-link active-class="active" exact tag="li" class="nav-item nav-link text-white cursor" to="/customer" >Customer</router-link>
            <router-link active-class="active" exact tag="li" class="nav-item nav-link text-white cursor" to="/about" >About</router-link>
            
    </ul>
</template>

<style>
    .cursor {
        cursor: pointer;
    }
    ul .active{
        background-color: greenyellow!important;
        color: blue!important;
        font-weight: bold;
    }
</style>