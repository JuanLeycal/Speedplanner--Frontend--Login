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
                <h1>¿Seguro que desea grabar su horario?</h1>
                <h2> No podra volver a editar su horario </h2>
                <router-link to ="/StudentHome" style="text-decoration:none">
                    <v-btn class ="cancel">Cancelar</v-btn>
                </router-link>
                <router-link to="/SuccessfullyRecordSchedule" style="text-decoration:none">
                    <v-btn class ="accept">Aceptar</v-btn>
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
        name: "QuestionSaveSchedule"
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
    .accept{
        float: right;
        background-color: #4377f2 !important;
        font-size:13px;
        width:15%;
        height:15%;
        border-radius: 6px;
        border: 2px solid white;
        color: white;
        top: 20px;
        right: 18%;
    }

    .cancel{
        float: right;
        background-color: #B8504F !important;
        font-size:13px;
        width:15%;
        height:15%;
        border-radius: 6px;
        border: 2px solid white;
        color: white;
        top: 20px;
        right: 51%;
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

    .dialog h2{
        color: #B8504F;
        font-size: 28px;
    }
    @media screen and (max-width: 800px) {
        .dialog h1{
            font-size: 20px;
        }
        .dialog h2{
            font-size: 20px;
        }
        .accept{
            float: right;
            background-color: #4377f2 !important;
            font-size:13px;
            width:20%;
            height: 20%;
            border-radius: 6px;
            border: 2px solid white;
            color: white;
            top: 20px;
            right: 5%;
        }

        .cancel{
            float: right;
            background-color: #B8504F !important;
            font-size:13px;
            width:20%;
            height:20%;
            border-radius: 6px;
            border: 2px solid white;
            color: white;
            top: 20px;
            right: 55%;
        }
    }

    @media screen and (max-width: 400px) {
        dialog h1{
            font-size: 20px;
        }
        .dialog h2{
            font-size: 20px;
        }
    }
</style>
