<template>
  <!-- Sidebar Start -->
  <nav class="navbar bg-light navbar-light">
    <a href="index.html" class="navbar-brand mx-4 mb-3">
      <h3 class="text-primary"><i class="fa fa-hashtag me-2"></i>DASHMIN</h3>
    </a>
    <div class="d-flex align-items-center ms-4 mb-4">
      <div class="position-relative">
        <img
          class="rounded-circle"
          :src="require('../assets/img/user.jpg')"
          alt=""
          style="width: 40px; height: 40px"
        />
        <div
          class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"
        ></div>
      </div>
      <div class="ms-3">
        <h6 class="mb-0">Jhon Doe</h6>
        <span>Admin</span>
      </div>
    </div>
    <div class="navbar-nav w-100">
      <router-link v-for="nav in sideNavbar" :to="nav.path" :key="nav.id"
        ><a
          href=""
          @click="selectPage(nav)"
          class="nav-item nav-link"
          :class="nav.active ? 'active' : ''"
          ><i class="fa fa-laptop me-2"
            ><font-awesome-icon icon="fa-solid fa-gauge" /></i
          >{{ nav.label }}</a
        ></router-link
      >
      <!-- <div class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
          ><router-link to="/about  "
            ><i class="fa fa-laptop me-2"
              ><font-awesome-icon icon="fa-solid fa-gauge" /></i
            >Add Category</router-link
          ></a
        >
        <div class="dropdown-menu bg-transparent border-0">
          <a href="button.html" class="dropdown-item">Buttons</a>
          <a href="typography.html" class="dropdown-item">Typography</a>
          <a href="element.html" class="dropdown-item">Other Elements</a>
        </div>
      </div>
      <a href="widget.html" class="nav-item nav-link"
        ><i class="fa fa-th me-2"
          ><font-awesome-icon icon="fa-solid fa-gauge" /></i
        >Widgets</a
      >
      <a href="form.html" class="nav-item nav-link"
        ><i class="fa fa-keyboard me-2"
          ><font-awesome-icon icon="fa-solid fa-gauge" /></i
        >Forms</a
      >
      <a href="table.html" class="nav-item nav-link"
        ><i class="fa fa-table me-2"
          ><font-awesome-icon icon="fa-solid fa-gauge" /></i
        >Tables</a
      >
      <a href="chart.html" class="nav-item nav-link"
        ><i class="fa fa-chart-bar me-2"
          ><font-awesome-icon icon="fa-solid fa-gauge" /></i
        >Charts</a
      >
      <div class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
          ><i class="far fa-file-alt me-2"
            ><font-awesome-icon icon="fa-solid fa-gauge" /></i
          >Pages</a
        >
        <div class="dropdown-menu bg-transparent border-0">
          <a href="signin.html" class="dropdown-item">Sign In</a>
          <a href="signup.html" class="dropdown-item">Sign Up</a>
          <a href="404.html" class="dropdown-item">404 Error</a>
          <a href="blank.html" class="dropdown-item">Blank Page</a>
        </div>
      </div> -->
    </div>
  </nav>
  <!-- Sidebar End -->
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  data: () => ({
    sideNavbar: [
      {
        id: 1,
        label: "Dashboard",
        active: true,
        path: "/home",
      },
      // {
      //   id: 2,
      //   label: "Add Category",
      //   active: false,
      //   path: "/addCategoery",
      // },
      {
        id: 2,
        label: "Add Event",
        active: false,
        path: "/addProduct",
      },
      // {
      //   id: 4,
      //   label: "Product List",
      //   active: false,
      //   path: "/products",
      // },
      // {
      //   id: 5,
      //   label: "Orders",
      //   active: false,
      //   path: "/orders",
      // },
    ],
  }),
  methods: {
    selectPage(selecteditem) {
      debugger;
      this.sideNavbar.forEach((item) => {
        item.active = false;
        selecteditem.active = true;
      });
    },
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped></style>
