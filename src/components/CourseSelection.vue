<template>
    <v-card>
        <v-row>
            <v-col class="header"  cols="12" sm="12">
                <v-card-text class="title">Curso de Carrera </v-card-text>
            </v-col>
        </v-row>
        <div class="blue"></div>
        <div class="blue2"></div>
        <v-col class="back" cols="12" sm="12">
            <v-card-text class="title">Horarios Disponibles <v-btn outlined color="white" rounded class="filtro">Filtro</v-btn></v-card-text>
        </v-col>
        <v-data-table
                v-model= "selected"
                :headers="headers"
                :items="courses"
                :single-select="singleSelect"
                item-key="name"
                show-select
                dark
                class="tableCourse"
        >
        </v-data-table>
        <v-row>
        <v-col class="back2" cols="12" sm="12">
            <div class="text-right">
                <v-btn  outlined color="white" rounded class="Log">No recibi un correo</v-btn>
                <v-btn href="/" outlined color="white" rounded class="Accept">Volver al Login</v-btn>
            </div>
        </v-col>
        </v-row>
        <div class="red2"></div>
        <div class="red"></div>

    </v-card>
</template>

<script>
    export default {
        name: "courseSelection",
        data () {
            return {
                singleSelect: false,
                selected: [],
                headers: [
                    {
                        text: 'Sección',
                        align: 'start',
                        sortable: false,
                        value: 'section',
                    },
                    { text: 'Curso', value: 'curso' },
                    { text: 'Docente', value: 'docente' },
                    { text: 'Hora', value: 'hora' },
                    { text: 'Salón', value: 'salon' },
                ],
                courses: [
                    {
                        section: 'PNG-31',
                        curso: 'MP404- Curso de Carrera',
                        docente: 'Wilson López',
                        hora: 'Lun 7-9am / Jue 9-1pm',
                        salon: 'UC-45',
                    },
                    {
                        section: '',
                        curso: '',
                        docente: '',
                        hora: '',
                        salon: '',
                    },
                    {
                        section: '',
                        curso: '',
                        docente: '',
                        hora: '',
                        salon: '',
                    },
                    {
                        section: '',
                        curso: '',
                        docente: '',
                        hora: '',
                        salon: '',
                    },
                    {
                        section: '',
                        curso: '',
                        docente: '',
                        hora: '',
                        salon: '',
                    },
                ],
            }
        },
    }
</script>

<style scoped>
    .text-right{
        text-align: right;
    }
.header{
background-color: #2E3D4E;
    color: #FFFFFF !important;
    font-family: 'Khula', sans-serif;
}
    .title{
        font-size: 3em;
        padding-bottom: 1px;
        color: #FFFFFF;
        font-family: 'Khula', sans-serif;
    }
    .blue{
        background-color: #3C65BF;
        height: 10px;
    }
    .blue2{
        background-color: #2C4B87;
        height: 10px;
    }
    .red{
        background-color: #C55755;
        height: 10px;
    }
    .red2{
        background-color: #844243;
        height: 10px;
    }
    .tableCourse{
        background-color: #00b0ff;
        font-family: 'Khula', sans-serif;
    }
    .back{
        background-color: #23313F;
    }
    .back2{
        background-color: #23313F;
        height: 80px;
    }
    .filtro{
        border-radius: 25px;
        outline-color: #FFFFFF !important;
        background-color: gray;
        color: #FFFFFF !important;
        border-width: thick;
        font-family: 'Khula', sans-serif;
        border-color: #FFFFFF;


    }

</style>
