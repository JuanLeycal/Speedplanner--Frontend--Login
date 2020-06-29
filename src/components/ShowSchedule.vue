<template>
    <v-card>
        <v-col class="space1"  cols="12" sm="12"></v-col>
        <v-col class="space2"  cols="12" sm="12"></v-col>
        <v-col class="back"></v-col>
        <v-row>

            <v-col class="dark">
                <v-sheet height="400">
                    <v-calendar
                            type="week"
                            weekdays="1, 2, 3, 4, 5, 6"
                            first-interval="6"
                            interval-count="18"
                            dark
                    ></v-calendar>
                </v-sheet>
            </v-col>
        </v-row>
        <v-row>
        <v-col class = "imga" cols="12" sm="5">
            <v-img class="imag" src = @/assets/speedplanner.png></v-img>
        </v-col>
        <v-col  class="btn-area" cols="12" sm="7">
            <v-btn class="btn1" outlined color="white" rounded >Regresar</v-btn>
        </v-col>
        </v-row>
        <v-col class="space2"  cols="12" sm="12"></v-col>
        <v-col class="space3"  cols="12" sm="12">
            <v-card-text class ="Domain">Adaptimize, 2020</v-card-text>
        </v-col>
    </v-card>
</template>

<script>
    export default {
        name: "ShowSchedule"
    }
</script>

<style scoped>
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
    .Domain{
        color: #FFFFFF;
        text-align: right;
        font-family: 'Khula', sans-serif;
    }
    .dark{
        background-color: #23313F;
    }
    .back{
        background-color: #2E3D4E;
    }
    .imga{
        background-color: #2E3D4E;
        height: 90px;
    }
    .imag{
        width: 500px;
        height: 60px;
        opacity: 42%;
    }
    .btn-area{
        text-align: right;
        padding-right: 45px;
        padding-top: 20px;
        background-color: #2E3D4E;
    }

    .btn1{
        font-size: 16px;
        color: white !important;
        font-family: 'Khula', sans-serif;
        font-style: normal;
        border-width: thick;
        background-color: #A43E38;
        height: 45px;
        width: 150px;
        margin-right: 40px;
    }
</style>
