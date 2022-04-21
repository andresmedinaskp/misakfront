<template>
    <div>
        <div class="container">
            <form action="" class="form-horizontal">  <!-- clase de boostrap -->
                <div class="form-group"> <!-- clase de boostrap -->
                    <label for="" class="control-label col-sm-2">Nombre</label> <!-- clase de boostrap -->
                    <div class="col-sm-10"> <!-- clase de boostrap -->
                        <input type="text" class="form-control" name="name" id="name" v-model="form.name"> <!-- clase de boostrap -->
                    </div>
                </div>
                <div class="form-group"> <!-- clase de boostrap -->
                    <button type="button" class="btn btn-priramy" v-on:click="editar()">Editar</button>
                    <button type="button" class="btn btn-danger " v-on:click="eliminar()">Eliminar</button>
                    <button type="button" class="btn btn-dark" v-on:click="salir()">Salir</button>
                </div>

            </form>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios';
export default {
   name:"EL_Editar",

data:function(){
    return{
        form:{
            "id" : "",
            "name" : ""
        }
    }
},
methods:{
    editar(){
        axios.put(`http://127.0.0.1:8000/api/educational_levels/${this.form.id}`,this.form)
        .then( data =>{
            console.log(data);
            alert('exito al actualizar')
            this.$router.push("/EL");
        })
    },
    salir(){
        this.$router.push('/EL');
    },
    eliminar(){
        var enviar = {
            "id" : this.form.id
        };
        axios.delete(`http://127.0.0.1:8000/api/educational_levels/${this.form.id}`, { headers : enviar})
        .then( datos => {
            console.log(datos);
            alert('exito al eliminar')
           this.$router.push("/EL");
        });

      }
},
mounted:function(){
    this.form.id = this.$route.params.id;
        axios.get("http://127.0.0.1:8000/api/educational_levels?id="+ this.form.id)
        .then(datos => {
           
           this.form.name = datos.data[0].name;
           console.log(this.form);
        })
    }
}
</script>
<style scoped>

</style>