<template>
    <v-card>
        <a>prueba</a>
    </v-card>
</template>

<script>
    import router from '../router'
    export default {
        name: "FindPassword",
        data: () => ({
                email: null,

            }
        ),
        methods: {
            navigate() {
                router.push({ name: "Login" });
            }
        }

    }


</script>

<style scoped>

</style>
