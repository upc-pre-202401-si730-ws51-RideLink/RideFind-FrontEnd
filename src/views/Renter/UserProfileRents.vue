<script>
import profileImage from "@/assets/img/rentador.png";
import { obtenerUsuarios } from "@/shared/services/http-common.js";

export default {
  name: "RentVehicleView",
  data() {
    return {
      usuarios: [],
      checked: false,
      profileImage
    };
  },
  async created() {
    this.usuarios = await obtenerUsuarios();
  }
};
</script>

<template>
  <div class="Rent">
    <pv-card class="card">
      <template #content>
        <div class="containerent">
          <div class="titleinformation">
            <h1>Mi Perfil</h1>
          </div>

          <div class="profile-content">
            <div class="profileImage">
              <pv-image :src="profileImage" alt="profile Image" width="350" preview />
            </div>

            <div class="containersinformation">
              <div class="container1information" v-if="usuarios.length > 0">
                <div class="categories">
                  <p>Nombre: {{ usuarios[1].nombre }}</p>
                  <p>Vehículos: {{ usuarios[1].Vehículos }}</p>
                  <p>Ubicación: {{ usuarios[1].ubicación }}</p>
                  <p>Teléfono: {{ usuarios[1].telefono }}</p>
                </div>
              </div>
            </div>
          </div>

          <pv-button class="buttonwpp" label="Ver más"></pv-button>
        </div>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
.Rent {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  min-height: 80vh;
}

.card {
  background: white;
  border: 2px solid #0097b2;
  border-radius: 8px;
  width: 700px;
  max-width: 800px;
  padding: 1rem;
  margin-top: -10vh;
}

.containerent {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.titleinformation h1 {
  color: #0097b2;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
  margin-top: -5vh;
}

.profile-content {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.profileImage {
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  overflow: hidden;
}

.containersinformation {
  width: 80%;
}

.container1information {
  border: 3px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
  background: white;
  width: 100%;
}

.categories p {
  margin: 0.75rem 0;
  font-size: 1rem;
  color: #333;
}

.buttonwpp {
  margin-top: 2rem;
  background-color: #0097b2;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 2rem;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.buttonwpp:hover {
  background-color: #007a8c;
}

@media (max-width: 768px) {
  .Rent {
    padding: 1rem;
  }

  .profile-content {
    gap: 1rem;
  }

  .profileImage {
    width: 100%;
  }

  .container1information {
    padding: 1rem;
  }

}
</style>
