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
                    <button type="button" class="btn btn-priramy" v-on:click="guardar()">Guardar</button>
                    <button type="button" class="btn btn-dark margen" v-on:click="salir()">Salir</button>
                </div>

            </form>

        </div>

    </div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios';
export default {
    name:"El_Crear",

    data:function(){
    return{
        form:{
            "name" : ""
        }
    }
},
    methods:{
        guardar(){
            axios.post("http://127.0.0.1:8000/api/educational_levels",this.form)
            .then(data =>{
                alert("Nivel de educacion creado Creado");
                this.$router.push("/EL");
            })
        },
        salir(){
            this.$router.push("/EL");
        },
    }
}
</script>
<style scoped>

</style>