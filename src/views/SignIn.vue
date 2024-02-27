<template>
  <div class="container-fluid pt-4 px-4">
    <!-- Sign In Start -->
    <div class="container-fluid">
      <div
        class="row h-100 align-items-center justify-content-center"
        style="min-height: 100vh"
      >
        <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
          <div class="bg-light rounded p-4 p-sm-5 my-4 mx-3">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <a href="index.html" class="">
                <h3 class="text-primary">
                  <i class="fa fa-hashtag me-2"
                    ><font-awesome-icon icon="fa-solid fa-hashtag" /></i
                  >DASHMIN
                </h3>
              </a>
              <h3>Sign In</h3>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                v-model="userDetails.email"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-4">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                v-model="userDetails.password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-4">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1"
                  >Check me out</label
                >
              </div>
              <a href="">Forgot Password</a>
            </div>
            <button
              type="submit"
              @click.prevent="SignIn"
              class="btn btn-primary py-3 w-100 mb-4"
            >
              Sign In
            </button>
            <p class="text-center mb-0">
              Don't have an Account? <a href="">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Sign In End -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  data: () => ({
    userDetails: {
      email: "",
      password: "",
    },
  }),
  components: {
    FontAwesomeIcon,
  },
  computed: {
    buttonText() {
      return this.addMode ? "Add" : "Update";
    },
  },

  methods: {
    ...mapActions(["loginUser"]),
    SignIn() {
      debugger;
      this.loginUser(this.userDetails); //.then((res) => {
      // this.$router.push({ path: "/home" });
      // if (res == "Admin") {
      //   this.$router.push({ path: "/home" });
      // }
      // });
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
