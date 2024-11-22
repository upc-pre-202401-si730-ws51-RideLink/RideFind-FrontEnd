<template>
  <div class="container">
    <h1 class="titlecontainer">Lo más destacado</h1>
  </div>

  <div class="card">
    <Galleria :value="vehicles" :responsiveOptions="responsiveOptions" :numVisible="4"
              :showItemNavigators="true" :showThumbnails="false" :showIndicators="true"
              containerStyle="max-width: 400px; margin: auto;">
      <template #item="slotProps">
        <div class="vehicle-item">
          <img :src="slotProps.item.image" :alt="slotProps.item.modelo" style="width: 100%" />
          <div class="vehicle-details">
            <h3>{{ slotProps.item.marca }} - {{ slotProps.item.modelo }}</h3>
            <p>{{ slotProps.item.caracteristicas }}</p>
            <button @click="handleButtonClick(slotProps.item.id)" class="btncontainer">Ver más</button>
          </div>
        </div>
      </template>
    </Galleria>

  </div>
</template>

<script>
import Galleria from 'primevue/galleria';
import { obtenerVehiculos } from '@/shared/services/http-common.js';
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      vehicles: [],
      responsiveOptions: [
        {
          breakpoint: '1024px',
          numVisible: 4
        },
        {
          breakpoint: '768px',
          numVisible: 3
        },
        {
          breakpoint: '560px',
          numVisible: 1
        }
      ]
    };
  },
  async created() {
    this.vehicles = await obtenerVehiculos();
  },
  components: {
    Galleria
  },
  methods: {
    /**
     * This method is called when the "Ver más" button is clicked.
     * It navigates to the 'RentVehicle' route, passing the id of the clicked vehicle as a route parameter.
     * @param {Number} id - The id of the clicked vehicle.
     */
    handleButtonClick(id) {
      this.$router.push({ name: 'RentVehicle', params: { id: id } });
    }
  },
  setup() {
    const router = useRouter();
    return { router };
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  justify-content: space-between;
  padding: 2rem 1rem;
}

.titlecontainer {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: bold;
  color: #0097b2;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

.card {
  width: 90%;
  max-width: 640px;
  margin: auto;
  margin-bottom: 4rem;
  border: none;
  padding: 2rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}

.vehicle-item {
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
}

.vehicle-item img {
  transition: transform 0.3s ease;
}

.vehicle-item:hover img {
  transform: scale(1.05);
}

.vehicle-details {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4), transparent);
  color: white;
  padding: 1.5rem 1rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  transition: opacity 0.3s ease;
}

.vehicle-details h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.vehicle-details p {
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.p-galleria-item-nav {
  background-color: rgba(255, 255, 255, 0.7);
  color: #333;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.p-galleria-item-nav:hover {
  background-color: rgba(255, 255, 255, 0.9);
  transform: scale(1.1);
}

.p-galleria {
  background-color: #f0f0f0;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
}

.btncontainer {
  margin-top: 1rem;
  background: #0097b2;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btncontainer:hover {
  background-color: #007a8c;
  transform: scale(1.05);
}

:deep(.p-galleria-indicator > button) {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: rgba(0, 151, 178, 0.5);
  transition: background-color 0.3s ease, transform 0.3s ease;
}

:deep(.p-galleria-indicator.p-highlight > button) {
  background-color: #0097b2;
  transform: scale(1.2);
}
</style>
