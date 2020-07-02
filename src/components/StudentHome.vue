<template>
    <v-card class ="a">
        <v-row>
            <v-col class="space1" style="clear: right">
                <v-img class="imag" position="25% 75%" src = @/assets/speedplanner.png aspect-ratio = "6.5"></v-img>
            </v-col>
            <v-col class="space2" cols="12" sm="12"></v-col>
        </v-row>

        <v-card-text class ="Data">
            <v-form class="Data1">
                <h1>Ciclo:</h1>
                <h1>Centro Educativo:</h1>
                <h1>Carrera:</h1>
            </v-form>
        </v-card-text>

        <v-card-text class ="student-home">
            <h1>Cursos Disponibles</h1>
            <v-row class="schedule">
                <v-col class="dark">
                    <v-sheet height="400" >
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
            <v-card class="mx-auto">
                <v-navigation-drawer class="deep-purple accent-4" dark permanent>
                    <v-list class="list">
                        <v-item>
                            <router-link to="/CareerCourse" style="text-decoration:none">
                                <v-btn class ="button-career"> > Cursos de Carrera</v-btn>
                            </router-link>
                        </v-item>
                        <v-item>
                            <router-link to="/OptionalCourse" style="text-decoration:none">
                                <v-btn class ="button-optional"> > Cursos Electivos</v-btn>
                            </router-link>
                        </v-item>
                    </v-list>

                    <template v-slot:append>
                        <div class="pa-2">
                            <router-link to="/DialogSaveSchedule" style="text-decoration:none">
                                <v-btn class ="button" >Guardar</v-btn>
                            </router-link>
                            <router-link to="/QuestionSaveSchedule" style="text-decoration:none">
                                <v-btn class ="button">Grabar</v-btn>
                            </router-link>
                        </div>
                    </template>

                    <v-layout column align-center>
                        <v-flex class="mt-4 mb-3">
                        </v-flex>
                    </v-layout>
                </v-navigation-drawer>
            </v-card>
        </v-card-text>


        <v-col class="space2" cols="12" sm="12"></v-col>
        <v-col class="space3"  cols="12" sm="12">
            <v-card-text class ="text">@Adaptimize, 2020</v-card-text>
        </v-col>

    </v-card>
</template>

<script>
    export default {
        name: "StudentHome",

    }
    //Calendar de Vuetify
    /*<v-row>
    <v-col>
    <v-sheet height="400">
        <v-calendar
    ref="calendar"
    :now="today"
    :value="today"
    :events="events"
    color="primary"
    type="week"
        ></v-calendar>
        </v-sheet>
        </v-col>
        </v-row>*/
</script>

<style scoped>
    .space1 {
        background-color: #3055AB;
        height: 150px;
    }
    .imag{
        float: left;
        height: 40%;
        width: 25%;
        top: 25px;
        left: 50px;
    }
    .space2{
        background-color: #D3D6E2;
        height: 10px;
    }
    .space3{
        background-color: #9F3833;
        height: 95px;
        font-weight: bold;
        color: #FFFFFF;
        text-align: right;
    }

    .Data{
        background-color: #2E3D4E;
        height: 140px;
        font-size: 13px;
    }

    .Data h1{
        color: #FFFFFF;
    }

    .student-home{
        background-color: #23313F;
        height: 550px;
        width: 100%;
    }
    .mx-auto{
        height: 400px;
        width: 256px;
        border-radius: 6px;
        border: 2px solid white;
    }

    .student-home h1{
        font-size: 25px;
        text-align: left;
        color : #9F3833;;
        padding-top: 30px;
        padding-left: 20px;
    }

    .dark{
        top: -40px;
    }
    .accent-4{
        background-color: #48617C;
    }
    .button{
        background-color: #3055AB !important;
        display: block;
        font-size:13px;
        width:100%;
        height:100%;
        border-radius: 6px;
        border: 2px solid white;
    }
    .button-career{
        background-color: #48617C !important;
        display: block;
        font-size:13px;
        width:100%;
        height:100%;
        color:white;
    }

    .button-optional{
        background-color: #48617C !important;
        display: block;
        font-size:13px;
        width:100%;
        height:100%;
        color:white;
    }
    .a{
        font-family: 'Khula', sans-serif;
        font-style: normal;
    }

    .schedule{
        float: right;
        height: 75%;
        width: 75%;
    }
    @media screen and (max-width: 800px){
        .imag{
            width: 75%;
            height: 35%;
            top: 30px;
        }

        .Data{
            background-color: #2E3D4E;
            height: 140px;
            font-size: 10px;
        }

        .student-home h1{
            font-size: 30px;
            text-align: left;
            color : #9F3833;;
            padding-top: 30px;
            padding-left: 55px;
        }
        .mx-auto{
            height: 400px;
            width: 256px;
            border-radius: 6px;
            border: 2px solid white;
            left: 50px;
        }
        .schedule{
            display: none !important;
        }
    }
    @media screen and (max-width:400px) {
        .imag{
            width: 75%;
            height: 35%;
            top: 30px;
        }

        .Data{
            background-color: #2E3D4E;
            height: 140px;
            font-size: 10px;
        }
        .student-home h1{
            font-size: 30px;
            text-align: left;
            color : #9F3833;;
            padding-top: 30px;
            padding-left: 55px;
        }
        .mx-auto{
            height: 400px;
            width: 256px;
            border-radius: 6px;
            border: 2px solid white;
            left: 50px;
        }
        .schedule{
            display: none !important;
        }
    }
</style>
