<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Logo from '@/Components/Logo.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span class="hamburger-icon"></span>
      </button>
      <nav :class="{ 'show': isMenuOpen }">
        <RouterLink to="/register">Sign Up</RouterLink>
        <RouterLink to="/login">Sign In</RouterLink>
        <RouterLink to="/Recommendations">Recommendations</RouterLink>
        <RouterLink to="/myProfile">My Profile</RouterLink>
        <RouterLink to="/vehicles">See Vehicles</RouterLink>
        <RouterLink to="/RentVehicle">Rent Vehicle</RouterLink>
        <RouterLink to="/PlansOwner">Plans</RouterLink>
        <RouterLink to="/OrderOwner">Order Owner</RouterLink>
        <RouterLink to="/OwnerProfileView">Owner Profile</RouterLink>
        <RouterLink to="/VehicleRegisterOwner">Vehicle registration</RouterLink>
        <RouterLink to="/OwnerViewVehicles">Owner: See Vehicle</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView/>
</template>

<style scoped>
.wrapper {
  max-width: 1700px;
  margin: 10px auto 90px auto;
  padding: 0 15px;
  position: relative;
}

nav {
  background-color: #D9D9D9;
  overflow: hidden;
  border-radius: 50px;
  font-size: 0.99rem;
}

nav a {
  float: left;
  display: block;
  color: #000;
  text-align: center;
  padding: 30px 25px;
  text-decoration: none;
}

nav a:hover {
  background-color: rgba(0, 151, 178, 0.2);
}
nav a.router-link-active {
  background-color: rgba(0, 151, 178, 0.4);
  font-weight: 500;
}


.menu-toggle {
  display: none;
  background:#0097b2;

  border: none;
  position: absolute;
  left: 15px;
  top: -60px;
  z-index: 1000;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  padding: 8px 6px;
}

.hamburger-icon {
  display: block;
  width: 28px;
  height: 2px;
  background-color: #fff;
  position: relative;
  transition: background-color 0.3s;
}

.hamburger-icon::before,
.hamburger-icon::after {
  content: '';
  position: absolute;
  width: 28px;
  height: 2px;
  background-color: #fff;
  transition: transform 0.3s;
}

.hamburger-icon::before {
  top: -8px;
}

.hamburger-icon::after {
  bottom: -8px;
}

@media screen and (max-width: 600px) {
  .menu-toggle {
    display: block;
  }

  nav {
    display: none;
    position: absolute;
    top: 10px;
    left: 15px;
    right: 15px;
    background-color: #D9D9D9;
    border-radius: 15px;
    z-index:1000;
    width:200px;

  }

  nav.show {
    display: block;
  }

  nav a {
    float: none;
    display: block;
    text-align: left;
    padding: 15px 25px;
  }
}
</style>
