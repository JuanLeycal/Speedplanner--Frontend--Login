<template>
    <v-card class="a">
        <v-row>
            <v-col class="space1" cols="12" sm="12">
                <h1>SpeedPlanner</h1>
            </v-col>
            <v-col class="space2" cols="12" sm="12"></v-col>
        </v-row>
        <v-card-text class="dialog">
            <v-col>
                <h1>Se ha guardado su actual horario</h1>
                <router-link to ="/StudentHome" style="text-decoration:none">
                    <v-btn class ="Ok">Ok</v-btn>
                </router-link>
            </v-col>
        </v-card-text>
        <v-col class="space2" cols="12" sm="12">
            <v-col class = "footer" >
                <div class="container" style="clear: right">
                    <v-img class="imag" position="25% 75%" src = @/assets/speedplanner.png aspect-ratio = "6.5"></v-img>
                </div>
            </v-col>
        </v-col>
    </v-card>
</template>

<script>
    export default {
        name: "DialogSaveSchedule"
    }
</script>

<style scoped>
    .a{
        font-family: 'Khula', sans-serif;
        font-style: normal;
        color: white;
    }
    .space1{
        background-color: #3B62B7;
        color: white;
        text-align: center;
        height: 70px;
    }
    .space2{
        background-color: #2E3D4E;
        height: 60px;
    }
    .dialog{
        background-color: #23313F;
        text-align: center;
        color: white !important;
        height: 200px;
    }
    .Ok{
        float:right;
        background-color: #3055AB !important;
        display: block;
        font-size:13px;
        width:15%;
        height:100%;
        border-radius: 6px;
        border: 2px solid white;
        color: white;
        right: 42%;
        top: 30px;
    }
    .footer{
        background-color: #2E3D4E;
    }
    .imag{
        float: left;
        opacity: 0.5;
        width: 50%;
        height: 50%;
        left: -200px;
        top: -50px;
    }
    @media screen and (max-width: 800px) {
        .space1 h1 {
            font-size: 30px;
        }
        .dialog h1{
            font-size: 20px;
        }

        .imag{
            display: none !important;
        }
    }
    @media screen and (max-width: 400px) {
        .space1 h1 {
            font-size: 30px;
        }
        .dialog h1{
            font-size: 20px;
        }

        .imag{
            display: none !important;
        }
    }
</style>
