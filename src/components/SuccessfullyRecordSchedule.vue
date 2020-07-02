<template>
    <v-card>
    <v-row>
        <v-col class="light-blue-space" cols="12" sm="12"></v-col>
    </v-row>
    <div class="white-space"></div>
    <v-row>
        <v-col class="dark-blue-space" cols="12" sm="12">
            <div class="text">¡Excelente!</div>
        </v-col>
    </v-row>
    <div class="light-red-stripe"></div>
    <div class="dark-red-stripe"></div>
    <v-row>
        <v-col class="btn-area" cols="12" sm="12">
            <h1>Se ha grabado correctamente su horario</h1>
            <div>
                <router-link to="ShowSchedule" style="text-decoration:none">
                    <v-btn class="btn-2">Mostrar Horario</v-btn>
                </router-link>
            </div>

            <div>
                <router-link to="/" style="text-decoration:none">
                    <v-btn class="btn-1">Cerrar Sesion</v-btn>
                </router-link>
            </div>
        </v-col>
    </v-row>

    <div class="dark-red-stripe"></div>
    <div class="light-red-stripe"></div>

    <v-row>
        <v-col class="image-space" cols="12" sm="12">
            <div class="img">
                <v-img class="image" src="@/assets/speedplanner.png"></v-img>
            </div>
        </v-col>
    </v-row>

    <div class="white-space"></div>

    <v-row>
        <v-col class="footer">
            ©Adaptimize, 2020
        </v-col>
    </v-row>

    </v-card>
</template>

<script>
    export default {
        name: "SuccessfullyRecordSchedule"
    }
</script>

<style scoped>
    .light-blue-space{
        background-color: #3055AB;
        height: 40px;
    }

    .white-space{
        background-color: white;
        height: 5px;
    }

    .dark-blue-space{
        background-color: #2E3D4E;
        height: 230px;
    }

    .light-red-stripe{
        background-color: #C45754;
        height: 5px;
    }

    .dark-red-stripe{
        background-color: #844243;
        height: 5px;
    }

    .btn-area{
        color: white;
        text-align: center;
        font-size: 30px;
        background-color: #23313F;
        height: 280px;
        font-family: 'Khula', sans-serif;
        font-style: normal;
    }

    .btn-1{
        float: right;
        background-color: #B8504F!important;
        font-size:13px;
        width:15%;
        height:15%;
        border-radius: 6px;
        border: 2px solid white;
        color: white;
        top: 90px;
        right: 27%;
    }

    .btn-2{
        float: right;
        background-color: #4377f2!important;
        font-size:13px;
        width:15%;
        height:15%;
        border-radius: 6px;
        border: 2px solid white;
        color: white;
        top: 30px;
        right: 42%;
    }
    .text{
        font-size: 75px;
        color: white !important;
        font-family: 'Khula', sans-serif;
        font-style: normal;
        text-align: center;
        margin-top: 65px;
    }

    .image-space{
        background-color: #2E3D4E;
        height: 160px;
    }

    .footer{
        background-color: #A33D37;
        height: 35px;
        font-size: 16px;
        color: white !important;
        font-family: 'Khula', sans-serif;
        font-style: normal;
        text-align: right;
        padding-right: 20px;
    }

    .image{
        height: 76px;
        width: 600px;
        opacity: 65%;
    }

    .img{
        padding-top: 65px;
    }

    @media screen and (max-width: 800px){
        .text{
            font-size: 40px !important;
        }
        .btn-area h1{
            font-size: 30px !important;
        }

        .btn-1{
            float: right;
            background-color: #B8504F!important;
            font-size:13px;
            width:40%;
            height:30%;
            border-radius: 6px;
            border: 2px solid white;
            color: white;
            top: 90px;
            left: 10%;
        }

        .btn-2{
            float: right;
            background-color: #4377f2!important;
            font-size:13px;
            width:40%;
            height:30%;
            border-radius: 6px;
            border: 2px solid white;
            color: white;
            top: 30px;
            right: 30%;
        }
        .image{
            width: 30%;
            height: 30%;
        }
    }
    @media screen and (max-width: 400px){
        .text{
            font-size: 40px !important;
        }
        .btn-area h1{
            font-size: 30px !important;
        }

        .btn-1{
            float: right;
            background-color: #B8504F!important;
            font-size:13px;
            width:40%;
            height:30%;
            border-radius: 6px;
            border: 2px solid white;
            color: white;
            top: 90px;
            left: 10%;
        }

        .btn-2{
            float: right;
            background-color: #4377f2!important;
            font-size:13px;
            width:40%;
            height:30%;
            border-radius: 6px;
            border: 2px solid white;
            color: white;
            top: 30px;
            right: 30%;
        }
        .image{
            width: 30%;
            height: 30%;
        }
    }
</style>
