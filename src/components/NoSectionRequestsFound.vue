<template>
    <v-card>
        <v-row>
            <v-col class="light-blue-space" cols="12" sm="12"></v-col>
        </v-row>
        <div class="white-space"></div>
        <v-row>
            <v-col class="dark-blue-space" align="center" cols="12" sm="12">
                <v-img class="image" src="@/assets/speedplanner.png"></v-img>
            </v-col>
        </v-row>
        <div class="light-red-stripe"></div>
        <div class="dark-red-stripe"></div>
        <v-row>
            <v-col class="text-area" cols="12" sm="12">No se han encontrado</v-col>
            <v-col class="text-area" cols="12" sm="12">pedidos de apertura</v-col>
            <v-col class="text-area" cols="12" sm="12">de secciones</v-col>
            <v-col class="btn-area" cols="12" sm="12">
                <div class="btn1">
                    <v-btn outlined color="white" rounded x-large top class="btn">Volver</v-btn>
                </div>
            </v-col>

        </v-row>

        <div class="dark-red-stripe"></div>
        <div class="light-red-stripe"></div>

        <v-row>
            <v-col class="lower-space" cols="12" sm="12"></v-col>
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
        name: "NoSectionRequestsFound"
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
        height: 180px;
        padding-top: 65px;
    }

    .light-red-stripe{
        background-color: #C45754;
        height: 5px;
    }

    .dark-red-stripe{
        background-color: #844243;
        height: 5px;
    }

    .text-area{
        font-size: 56px;
        color: white !important;
        font-family: 'Khula', sans-serif;
        font-style: normal;
        text-align: center;
        background-color: #23313F;
        height: 80px;
    }

    .lower-space{
        background-color: #2E3D4E;
        height: 57px;
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
        height: 75px;
        width: 600px;
        opacity: 65%;
    }

    .btn1{
        text-align: center;
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

    .btn-area{
        background-color: #23313F;
    }

</style>
