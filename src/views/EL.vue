<template>
    <div>

      <button class="btn btn-primary" v-on:click="crear()">Agregar Nivel de Educacion</button> <br><br>

      <div class="content">
          <table class="table">
            <thead>
              <th>id</th>
              <th>nombre</th>
              <th>Acciones</th>
            </thead>

            <tbody>
              <tr v-for="educational in lista_educational" :key="educational.id" v-on:click="editar(educational.id)">
                <td>{{educational.id}}</td>
                <td>{{educational.name}}</td>
                <td><router-link to="/HomeView"><img class="ver" src="../assets/visible.png"  alt=""></router-link>
                  <router-link to="/HomeView"><img class="editar" src="../assets/edit.png" alt=""></router-link>
                  <router-link to="/HomeView"><img class="eliminar" src="../assets/eliminar.png" alt=""></router-link></td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios'
export default{
  name: 'EL',
  data(){
    return{
      lista_educational:null
    }
  },
  methods:{
    editar(id){
      this.$router.push('/el_editar/' + id);
    },
    crear(){
        this.$router.push('/EL_Crear');
    }
  },
  mounted:function(){
    let ruta = "http://127.0.0.1:8000/api/educational_levels";
    axios.get(ruta).then( data =>{
      this.lista_educational= data.data;
    });
    }
  }
  
</script>
<style scoped>
.content{
    margin-left: 20%;
    margin-right: 20%;
}
.ver{
    background-color: rgb(78, 200, 74);
    margin-right: 1vh;
}
.editar{
    background-color: rgb(232, 73, 73);
    margin-right: 1vh;
}
.eliminar{
     background-color: rgb(117, 65, 249);
}
.table {
    
    width: 100%;
    border: 1px solid #ccc;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    table-layout: fixed;
}



.table tr {
    background-color: #f8f8f8;
    border: 1px solid #ddd;
}

.table th, .table td {
    font-size: 16px;
    padding: 8px;
    text-align: center;
}

.table thead th{ 
    text-transform: uppercase;
    background: linear-gradient(to top, rgb(255, 255, 255), 5%, #349990);
}

.table tbody tr:hover {
    background-color: #ffffff;
}

.table tbody td:hover {
    background-color: rgba(227, 35, 35, 0.3);
}

@media screen and (max-width: 600px) {
    .table {
        border: 0px;
    }
    .table caption {
        font-size: 22px;
    }
    .table thead {
        display: none;
    }
    .table tr {
        margin-bottom: 8px;
        border-bottom: 4px solid #ddd;
        display: block;
    }
    .table th, .table td {
        font-size: 12px;
    }
    .table td {
        display: block;
        border-bottom: 1px solid #ddd;
        text-align: right;
    }
    .table  td:last-child {
        border-bottom: 0px;
    }
    .table td::before {
        content: attr(data-label);
        font-weight: bold;
        text-transform: uppercase;
        float: left;
    }
}

</style>
