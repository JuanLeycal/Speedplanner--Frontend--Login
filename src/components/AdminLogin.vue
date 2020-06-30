<template>
    <v-card>
        <v-row>
            <v-col class="light-blue-space" cols="12" sm="12"></v-col>
        </v-row>
        <div class="white-space"></div>
        <v-row>
            <v-col class="dark-blue-space" cols="12" sm="12">
                <div class="text">Bienvenido, Administrador
                </div>
            </v-col>
        </v-row>
        <div class="light-red-stripe"></div>
        <div class="dark-red-stripe"></div>
        <v-row>
            <v-col class="btn-area" cols="12" sm="12">
                <div class="button1">
                    <router-link to ="/Statistic" style="text-decoration:none">
                        <v-btn outlined color="white" rounded x-large top class="btn">Consulta de estadísticas</v-btn>
                    </router-link>
                </div>

                <div class="button2">
                    <router-link to ="/SectionRequests" style="text-decoration:none">
                        <v-btn outlined color="white" rounded x-large bottom width="280" class="btn">Apertura de cursos</v-btn>
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
        name: "AdminLogin"
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
        background-color: #23313F;
        height: 280px;
    }

    .btn{
        font-size: 18px;
        color: white !important;
        font-family: 'Khula', sans-serif;
        font-style: normal;
        border-radius: 10px;
        border-style: solid;
        border-color: #FFFFFF;
        background-color: #A43E38;
    }

    .button1{
        text-align: center;
        margin-top: 40px;
    }

    .button2{
        text-align: center;
        margin-top: 40px;
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

</style>
