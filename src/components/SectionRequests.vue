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
        <v-row>
            <v-col class="table-area">
                <v-data-table
                    class="table"
                    :headers="headers"
                    :items="requests"
                    :dark="true"
                    :items-per-page="5">
                </v-data-table>
            </v-col>
        </v-row>

        <div class="dark-red-stripe"></div>
        <div class="light-red-stripe"></div>

        <v-row>
            <v-col class="image-space" cols="12" sm="12">
                <v-img class="image" src="@/assets/speedplanner.png"></v-img>
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
        name: "SectionRequests",
        data (){
            return {
                headers: [
                    {
                        text: 'Código',
                        align: 'start',
                        sortable: true,
                        value: 'codigo',
                    },
                        { text: 'Nombre', value: 'nombre' },
                        { text: 'Curso', value: 'curso' },
                ],
                requests: [
                    {
                        codigo: '202014045',
                        nombre: 'Ror, Empe',
                        curso: 'MO-05-Natación 2'
                    },
                    {
                        codigo: '201810101',
                        nombre: 'Milos, Ricardo',
                        curso: 'Cálculo II'
                    }
                ]
            }
        }
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
        height: 100px;
        padding-top: 40px;
        color: white !important;
        font-family: 'Khula', sans-serif;
        font-style: normal;
        text-align: left;
        font-size: 42px;
        padding-left: 24px;
    }

    .light-red-stripe{
        background-color: #C45754;
        height: 5px;
    }

    .dark-red-stripe{
        background-color: #844243;
        height: 5px;
    }

    .table-area{
        font-size: 36px;
        color: white !important;
        font-family: 'Khula', sans-serif;
        font-style: normal;
        text-align: center;
        background-color: #23313F;
        height: 380px;
    }

    .image-space{
        background-color: #2E3D4E;
        height: 95px;
        padding-top: 30px;
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

    .table{
        background-color: #23313F;

    }
</style>
