<template>
    <div>
        <h1 v-if= Globals.user>{{Globals.user.name}} Friends Page</h1>
        <ul>
            <li v-for="friend in friends" :key="friend.id">
                {{friend.FirstName}} {{friend.LastName}}
        </ul>
    </div>
</template>

<script>
import { Globals } from "@/models/api.js";  //{} used because api exports Globals, unlike Nav which exports default (no need for ())
import { GetFriends } from "@/models/users.js";

export default {
    data: () => ({
        Globals: Globals,
        friends: []
    }),
    async mounted(){
        this.friends = await GetFriends(); 
    },
}
</script>

<style>

</style>

