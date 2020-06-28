<template>
    <v-card>
        <v-row>
            <v-col class="light-blue-space" cols="12" sm="12"></v-col>
        </v-row>
        <div class="white-space"></div>
        <v-row>
            <v-col class="dark-blue-space" align="center" cols="12" sm="12">
                Peticiones
            </v-col>
        </v-row>
        <div class="light-red-stripe"></div>
        <div class="dark-red-stripe"></div>

        <v-row class="info-text">
            <v-col class="info-area-left" cols="12" sm="6">Código: </v-col>
            <v-col class="info-area-right" cols="12" sm="6">Curso: </v-col>
            <v-col class="info-area-left" cols="12" sm="12">Alumno: </v-col>
        </v-row>
        <div class="white-space"></div>
        <v-row>
            <v-col class="table-area">
            </v-col>
        </v-row>
        <div class="white-space"></div>
        <div class="dark-blue-stripe"></div>
        <div class="dark-red-stripe"></div>
        <div class="light-red-stripe"></div>

        <v-row>
            <v-col class="image-space" cols="12" sm="6">
                <v-img class="image" src="@/assets/speedplanner.png"></v-img>
            </v-col>
            <v-col  class="btn-area" cols="12" sm="6">
                <v-btn class="btn1" outlined color="white" rounded x-large width="200">Denegar petición</v-btn>
                <v-btn class="btn2" outlined color="white" rounded x-large width="200">Aceptar petición</v-btn>
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
        name: "SectionRequestDetails"
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
        height: 40px;
        color: white !important;
        font-family: 'Khula', sans-serif;
        font-style: normal;
        text-align: left;
        font-size: 42px;
        padding-left: 24px;
        padding-bottom: 48px;
    }

    .light-red-stripe{
        background-color: #C45754;
        height: 10px;
    }

    .dark-red-stripe{
        background-color: #844243;
        height: 10px;
    }

    .table-area{
        font-size: 36px;
        color: white !important;
        font-family: 'Khula', sans-serif;
        font-style: normal;
        text-align: center;
        background-color: #0F1B29;
        height: 380px;
    }

    .image-space{
        background-color: #2E3D4E;
        height: 85px;
    }

    .image{
        height: 60px;
        width: 500px;
        opacity: 65%;
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

    .info-area-left{
        background-color: #2E3D4E;
        height: 60px;
        padding-left: 20px;
    }

    .info-area-right{
        background-color: #2E3D4E;
        height: 60px;
    }

    .dark-blue-stripe{
        background-color: #23313F;
        height: 25px;
    }

    .btn-area{
        text-align: right;
        padding-right: 45px;
        background-color: #2E3D4E;
    }

    .btn1{
        font-size: 16px;
        color: white !important;
        font-family: 'Khula', sans-serif;
        font-style: normal;
        background-color: #A43E38;
        margin-right: 40px;
    }

    .btn2{
        font-size: 16px;
        color: white !important;
        font-family: 'Khula', sans-serif;
        font-style: normal;
        background-color: #093299;
    }

    .info-text{
        font-size: 38px;
        color: white !important;
        font-family: 'Khula', sans-serif;
        font-style: normal;
    }

</style>
