<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>LIDER</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <div v-for="item in equipos" :key="item.id_equipo">
        <ion-card color="danger">

        <ion-item>
          <ion-thumbnail slot="start">
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
          </ion-thumbnail>
          <ion-card-header>
              <ion-card-title router-direction="root" :router-link="/curso/+item.nombre">{{item.nombre}}</ion-card-title>
          </ion-card-header>
        </ion-item>

          <ion-card-content>
            <strong>
              ACTIVOS: {{item.activos}}
            </strong>
            <br>
            CANTIDAD: {{ item.cantidad }} 
            <br>
            CODIGO: {{ item.id_equipo }}
          </ion-card-content>

        </ion-card>
      </div>
    </ion-content>
  </ion-page>
   
</template>
  
<script lang="ts">
    import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
    import { defineComponent } from 'vue';

    export default defineComponent({
      components: { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton},
      setup(){

        const equipos = [ 
            {
                id_equipo : "1",
                nombre : "Los Mufa",
                cantidad : "10",
                activos : "5"
            },
            {
                id_equipo : "2",
                nombre : "Los ",
                cantidad : "10",
                activos : "5"
            },
            {
                id_equipo : "3",
                nombre : "Los Mufa",
                cantidad : "10",
                activos : "5"
            },
        ]
        
        return { equipos }
      }
    });
</script>

<style scoped>
  /* iOS places the subtitle above the title */
  ion-card-header.ios {
    display: flex;
    flex-flow: column-reverse;
  }
</style>