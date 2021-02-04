<template>
<div>
     <h2>The Customer Page</h2>

    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur esse
      voluptatum illum fugit velit. Laborum quas reprehenderit, sint deserunt
      earum laboriosam fuga, aperiam molestiae quae assumenda exercitationem
      accusamus velit quia? Nobis adipisci fugit ratione fugiat architecto
      accusamus quisquam nulla unde.
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur esse
      voluptatum illum fugit velit. Laborum quas reprehenderit, sint deserunt
      earum laboriosam fuga, aperiam molestiae quae assumenda exercitationem
      accusamus velit quia? Nobis adipisci fugit ratione fugiat architecto
      accusamus quisquam nulla unde.
    </p>

      
     <button class="btn btn-success" @click="goHome">Back to Home</button>
     <hr>
     <router-view></router-view>
    
     
</div>
   
</template>

<script>
export default {
    methods: {
        goHome(){
            this.$router.push('/')
        }
    },
    //set false to active navigation gured 
    beforeRouteEnter (to, from, next) {
        next(true);
    },
    beforeRouteLeave (to, from, next) {
        next(true)
    }
}
</script>