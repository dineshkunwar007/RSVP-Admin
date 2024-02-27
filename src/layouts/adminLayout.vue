<template>
  <div>
    <div class="sidebar pe-4 pb-3" :class="sidebarClose ? 'open' : ''">
      <side-bar />
    </div>
    <div class="content" :class="sidebarClose ? 'open' : ''">
      <!-- Navbar Start -->
      <nav
        class="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0"
      >
        <a href="index.html" class="navbar-brand d-flex d-lg-none me-4">
          <h2 class="text-primary mb-0">
            <i class="fa fa-hashtag"
              ><font-awesome-icon icon="fa-solid fa-hashtag"
            /></i>
          </h2>
        </a>
        <a
          href="#"
          class="sidebar-toggler flex-shrink-0"
          @click="sidebarClose = !sidebarClose"
        >
          <i class="fa fa-bars"
            ><font-awesome-icon icon="fa-solid fa-bars"
          /></i>
        </a>
        <form class="d-none d-md-flex ms-4">
          <input
            class="form-control border-0"
            type="search"
            placeholder="Search"
          />
        </form>
        <div class="navbar-nav align-items-center ms-auto">
          <div class="nav-item dropdown">
            <a href="#" class="nav-link" data-bs-toggle="dropdown">
              <img
                class="rounded-circle me-lg-2"
                :src="img"
                alt=""
                style="width: 40px; height: 40px"
              />
              <span class="d-none d-lg-inline-flex">John Doe</span>
              <v-menu bottom left class="ms-4">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn dark icon v-bind="attrs" v-on="on" class="ms-4">
                    <v-icon color="black">mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

                <v-card class="mx-auto" max-width="300" tile>
                  <v-list dense>
                    <v-list-item-group color="primary">
                      <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                        @click="onItemClick(item)"
                      >
                        <v-list-item-icon>
                          <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title
                            v-text="item.text"
                          ></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-card>
              </v-menu>
            </a>
          </div>
        </div>
      </nav>
      <!-- Navbar End -->
      <router-view />
    </div>
  </div>
</template>

<script>
//import SideBar from "@/components/Admin/sideBar.vue";
import { getAuth, signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import SideBar from "@/components/sideBar.vue";
export default {
  components: {
    SideBar,
    FontAwesomeIcon,
  },

  data: () => ({
    sidebarClose: false,
    items: [
      { text: "Logout", icon: "mdi-logout" },
      // { text: "Audience", icon: "mdi-account" },
      // { text: "Conversions", icon: "mdi-flag" },
    ],
    img: require("../assets/img/user.jpg"),
  }),
  methods: {
    onItemClick(item) {
      if (item.text == "Logout") {
        const auth = getAuth();
        signOut(auth)
          .then(() => {
            this.$router.push("/");
          })
          .catch(() => {});
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
