<template>
   <v-card class="a">
      <v-row>
         <v-col class="space1">
            <h1>Filtros</h1>
         </v-col>
      </v-row>
      <v-row>
         <v-col class="stripe1"></v-col>
      </v-row>
      <v-row>
         <v-col class="stripe2"></v-col>
      </v-row>
      <v-row class="space3">
         <v-col class="space2">
            <h2 class="po">Docente :</h2>
         </v-col>

         <v-col class="d-flex" cols="12" sm="6">
            <v-select
                    :items="List"
                    label="Ingrese el nombre del profesor"
                    solo
                    dark
            ></v-select>
         </v-col>
      </v-row>
      <v-row class="line"></v-row>
      <v-row class="space4">
         <v-col class="space3">
            <h2 class="btxt">Quiero que mis clases sean desde </h2>
         </v-col>

      </v-row >
      <v-row class="space4" justify="right">
         <v-col  class="btn-area" cols="12" sm="6" >
            <v-btn outlined color="white" rounded x-large bottom width="280" class="btn">Cancelar</v-btn>
            <v-btn outlined color="white" rounded x-large bottom width="280" class="btn1">Aceptar</v-btn>
         </v-col>
      </v-row>
      <v-row>
         <v-col class="stripe3"></v-col>
      </v-row>
      <v-row>
         <v-col class="stripe4"></v-col>
      </v-row>
      <v-row>
         <v-col class="stripe5"></v-col>
      </v-row>
      <v-row>
         <v-col class="stripe6"></v-col>
      </v-row>
      <v-row>
         <v-col class="stripe7">
            <div class="buttonText">©Adaptimize, 2020</div>
         </v-col>
      </v-row>
   </v-card>
</template>

<script>
   export default {
      data() {
         return {
            List: ['Juan Carlos', 'Rodrigo Ramirez', 'Marcelo Martinez', 'Rafael '],
            pred: 'Rafael'
         }
      }
   }
</script>

<style scoped>
   .btn{
      font-size: 18px;
      color: white !important;
      font-family: 'Khula', sans-serif;
      font-style: normal;
      border-radius: 10px;
      border-style: solid;
      border-color: #FFFFFF;
      background-color: #A43E38;
      margin-right: 10px;
   }
   .btn1{
      font-size: 18px;
      color: white !important;
      font-family: 'Khula', sans-serif;
      font-style: normal;
      border-radius: 10px;
      border-style: solid;
      border-color: #FFFFFF;
      background-color: #4377F2;
   }
   .space4{
      background-color:#2E3D4E;
      height: 80px;
      color: White;
      font-size: 20px;
      text-align: left;
      left: 50px;
   }
   .btxt{
      width: 550px;
      height: 50px;
   }
   .line{
      height: 10px;
      background-color: gray;
   }
   .po{
      width: 100px;
      height: 50px;
      color: White;
      font-size: 20px;
      text-align: left;
      left: 50px;
   }
   .space3{
      height: 75px;
   }
   .a{
      font-family: 'Khula', sans-serif;
      font-style: normal;
   }
   .space1 {
      background-color:#2E3D4E;
      height: 125px;
      color: White;
      font-size: 20px;
      text-align: left;
      left: 50px;
   }

   .space2 {
      background-color:#2E3D4E;
      height: 75px;
      width: 100px;
      color: White;
      font-size: 15px;
      text-align: left;
      left: 50px;
   }
   .stripe7{
      background-color: #9F3833;
      height: 50px;
   }
   .stripe6{
      background-color: white;
      height: 5px;
   }
   .stripe5{
      background-color: #2E3D4E;
      height: 25px;
   }
   .stripe4{
      background-color: #FF6158;
      height: 5px;
   }
   .stripe3{
      background-color: #A43E38;
      height: 5px;
   }
   .stripe2{
      background-color: #2C4982;
      height: 5px;
   }

   .stripe1{
      background-color: #4377F2;
      height: 5px;
   }
   .buttonText{
      color: white;
      font-size: 20px;
      font-family: "Khula" , sans-serif;
      font-weight: lighter;
      text-align: right;
   }
</style>
