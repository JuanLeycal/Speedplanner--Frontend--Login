<template>
    <v-card>
        <v-col class="space1"  cols="12" sm="12"></v-col>
        <v-col class="space2"  cols="12" sm="12"></v-col>
        <v-row>
            <v-col class = "fondo" cols="12" sm="4">
                <v-card-title class="title">Estadisticas</v-card-title>
            </v-col>
            <v-col class = "fondo" cols="12" sm="4">
                <v-card-text class="text">Profesor: </v-card-text>
                <v-card-text class="text">Carrera: </v-card-text>
            </v-col>
            <v-col class="fondo" cols="12" sm="4">
                <v-card-text class="text">Ciclo académico: </v-card-text>
            </v-col>
        </v-row>
        <div class="red"></div>
        <div class="red2"></div>
        <v-row>
            <v-col class = "fondo2" cols="12" sm="7">
                <v-card-text class="textTile">Cursos: Programación 2 </v-card-text>
            </v-col>
            <v-col class = "fondo2" cols="12" sm="5">
                <v-card-text class="text">Total estudiantes: </v-card-text>
            </v-col>
        </v-row>
        <div class="fondo2">
            <v-card-text class="text2">Hombres</v-card-text>
            <v-card-text class="text2">Mujeres</v-card-text>
        </div>
        <v-row>
            <v-col class = "fondo2" cols="12" sm="12">
                <v-card-text class="textTile">Secciones: </v-card-text>
            </v-col>
        </v-row>
        <div class="fondo2">
            <v-card-text class="text3">SW1A</v-card-text>
            <v-card-text class="text3">IN45</v-card-text>
        </div>
        <v-col style="background-color: #23313F"></v-col>
        <div class="red2"></div>
        <div class="red"></div>
        <v-col class = "imga" cols="12" sm="12">
                <v-img class="imag" src = @/assets/speedplanner.png></v-img>
        </v-col>

        <v-col class="space2"  cols="12" sm="12"></v-col>
        <v-col class="space3"  cols="12" sm="12">
            <v-card-text class ="Domain">Adaptimize, 2020</v-card-text>
        </v-col>
    </v-card>
</template>

<script>
    export default {
        name: "CourseStatistics"
    }
</script>

<style scoped>
    .imga{
        background-color: #2E3D4E;
    }
    .title{
        background-color: #2E3D4E;
        color: #FFFFFF !important;
        font-family: 'Khula', sans-serif;
        font-size: 4em;
        font-style: italic;
    }
    .text {
        color: #FFFFFF !important;
        font-family: 'Khula', sans-serif;
        font-size: 1.5em;
    }
    .text2{
        color: #FFFFFF !important;
        font-family: 'Khula', sans-serif;
        font-size: 1.3em;
    }
    .text3{
        color: #9F3833 !important;
        font-family: 'Khula', sans-serif;
        font-size: 1.3em;
        text-decoration-line: underline;
    }
    .textTile{

        color: #FFFFFF !important;
        font-family: 'Khula', sans-serif;
        font-size: 1.8em;
        text-decoration-line: underline;
    }

    .space1{
        background-color: #3055AB;
        height: 70px;
    }
    .space2{
        background-color: #D3D6E2;
        height: 5px;
    }
    .space3{
        background-color: #9F3833;
        height: 50px;
        font-weight: bold;
    }
    .fondo{
        background-color: #2E3D4E;
    }
    .fondo2{
        background-color: #23313F;
    }
    .red{
        background-color: #C55755;
        height: 10px;
    }
    .red2{
        background-color: #844243;
        height: 10px;
    }
    .Domain{
        color: #FFFFFF !important;
        text-align: right;
        font-family: 'Khula', sans-serif;
        padding-bottom: 10px;
    }

    .imag{
        height: 60px;
        width: 500px;
    }

</style>
