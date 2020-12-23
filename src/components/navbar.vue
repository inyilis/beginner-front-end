<template>
  <nav class="dropdown">
    <button
      class="btn"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
    >
      <img src="../assets/menu.png" alt="" />
    </button>
    <div class="dropdown-menu text-center" aria-labelledby="dropdownMenuButton">
      <router-link to="/" class="dropdown-item my-4" href="#"
        ><img src="../assets/fork.png" alt="" />
      </router-link>
      <router-link to="/history" class="dropdown-item my-4" href="#"
        ><img src="../assets/clipboard.png" alt="" />
      </router-link>
      <router-link to="/products" class="dropdown-item my-4" href="#"
        ><img src="../assets/add.png" alt="" />
      </router-link>
      <router-link to="/products" class="dropdown-item my-4" href="#"
        ><img src="../assets/profil.png" alt="" />
      </router-link>
      <router-link to="/products" class="dropdown-item my-4" href="#"
        ><img src="../assets/exit.png" alt="" />
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style scoped>
.dropdown-menu {
  min-width: 4rem;
  margin: 1.5rem 0 0;
}

.dropdown-item {
  padding: 0;
}
</style>
