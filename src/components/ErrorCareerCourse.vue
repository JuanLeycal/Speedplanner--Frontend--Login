<template>
    <v-card>
        <v-row>
            <v-col class="error-stripe" cols="12" sm="12">
                Speedplanner - Error
            </v-col>

            <v-col class="light-blue-stripe" cols="12" sm="12">
            </v-col>

            <v-col class="text-area" cols="12" sm="12">
                No se puede validar debido a un cruce con un curso
                ya elegido. Intente de nuevo.
            </v-col>

            <v-col class="text-area" cols="12" sm="12">
                Curso: Curso de carrera.
            </v-col>

            <v-col class="btn-area" cols="12" sm="12">
                <v-btn class="btn" outlined color="white" rounded x-large>Ok</v-btn>
            </v-col>

            <v-col class="light-blue-stripe" cols="12" sm="12">
                <v-img class="imag" src=@/assets/speedplanner.png></v-img>
            </v-col>

        </v-row>

    </v-card>
</template>

<script>
    export default {
        name: "ErrorCareerCourse"
    }
</script>

<style scoped>
    .error-stripe{
        background-color: #C55755;
        height: 50px;
    }

    .light-blue-stripe{
        background-color: #2E3D4E;
        height: 80px;
    }

    .text-area{
        background-color: #23313F;
        height: 170px;
        color: white !important;
        font-family: 'Khula', sans-serif;
        font-style: normal;
        text-align: center;
        font-size: 42px;
        padding-left: 50px;
        padding-right: 50px;
        padding-top: 35px;
    }

    .btn-area{
        background-color: #23313F;
        text-align: center;
        padding-bottom: 75px;
        height: 120px;
    }

    .imag{
        height: 60px;
        width: 500px;
        opacity: 65%;
    }

    .error-stripe{
        color: white !important;
        font-family: 'Khula', sans-serif;
        font-style: normal;
        text-align: center;
        font-size: 24px;
    }

    .btn{
        background-color: #C55755;
        font-size: 32px;
        color: white !important;
        font-family: 'Khula', sans-serif;
        font-style: normal;
        width: 250px;
        border-width: 5px;
    }
</style>
