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
        <div v-for="item in captadores" :key="item.id_captador">
          <ion-card color="danger">
  
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="" :src="item.img" />
            </ion-thumbnail>
            <ion-card-header>
                <ion-card-title router-direction="root" :router-link="/curso/+item.nombre">{{item.nombre}}</ion-card-title>
            </ion-card-header>
          </ion-item>
  
            <ion-card-content>
              EMAIL: {{item.email}}
              <br>
              TELEFONO: {{ item.tlf }} 
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
  
          const captadores = [ 
              {
                  id_captador : "1",
                  nombre : "Matias Perez",
                  email : "matias@gmail.com",
                  tlf : "123",
                  img: "https://www.blogdelfotografo.com/wp-content/uploads/2022/01/retrato-anillo-luz.jpg"
              },
          ]
          
          return { captadores }
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