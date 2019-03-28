<template>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <router-link class="navbar-brand" to="/">
        <img alt="Vue logo" src="../assets/logo.png" height="30">
        </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <router-link class="nav-link" to="/" active-class="active" exact>Home <span class="sr-only">(current)</span></router-link>            </li>
            <li class="nav-item>">   
                <router-link class="nav-link" to="About" active-class="active">About</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="MyFriends" active-class="active">MyFriends</router-link>
            </li>
        </ul>
        <form class = "form-inl ine mt-2 mt-md 0" v-if="!user">
            <a href="#" class="nav-link"@click.prevent="login">Login</a>
            <a href="#" class="nav-Link">Sign Up"</a>
            <span class = "navbar-tax">Welcome Erik</span>
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <span class="navbar-text" v-if="user">Welcome {{user.name}}</span>
    </div>
    </nav>
    
</template>

<script>
export default {
    data: () => ({
        user: null
    }),        
    methods: {
        login() {
            this.user = { name: "Erik" };
        }
    }
}
</script>

<style>

</style>
