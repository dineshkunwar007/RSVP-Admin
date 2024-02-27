<template>
  <div class="container-fluid pt-4 px-4">
    <div class="row g-4">
      <div class="col-sm-12 col-md-6 col-xl-6">
        <div class="h-100 bg-light rounded p-4">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h6 class="mb-0">{{ buttonText + " Category" }}</h6>
          </div>
          <div class="d-flex form-floating mb-2">
            <input
              type="text"
              class="form-control"
              id="category"
              v-model="category.name"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Category Name</label>
            <button
              type="button"
              class="btn btn-primary ms-2"
              @click="AddCategory"
            >
              {{ buttonText }}
            </button>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-xl-12">
        <div class="h-100 bg-light rounded p-4">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h6 class="mb-0">Category List</h6>
          </div>

          <div
            class="d-flex align-items-center border-bottom py-2"
            v-for="(item, index) in categoryList"
            :key="index"
          >
            <input class="form-check-input m-0" type="checkbox" />
            <div class="w-100 ms-3">
              <div
                class="d-flex w-100 align-items-center justify-content-between"
              >
                <span> {{ item.name }}</span>
              </div>
            </div>
            <button class="btn btn-sm" @click="UpdateCategory(item)">
              <i class="fa fa-times"
                ><font-awesome-icon icon="fa-solid fa-pen-to-square"
              /></i>
            </button>
            <button class="btn btn-sm" @click="DeleteCategory(item.id)">
              <i class="fa fa-times"
                ><font-awesome-icon icon="fa-solid fa-trash"
              /></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { db, collection } from "../data/firebase";
import {
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
export default {
  data: () => ({
    addMode: true,
    category: {
      id: null,
      name: null,
    },
    categoryList: [],
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
    AddCategory() {
      const catRef = collection(db, "Categories");
      if (this.addMode) {
        addDoc(catRef, { name: this.category.name }).then(() => {
          this.category.name = null;
        });
      } else {
        const docref = doc(db, "Categories", this.category.id);
        updateDoc(docref, { name: this.category.name }).then(() => {
          this.category.name = null;
          this.category.id = null;
          this.addMode = true;
        });
      }
    },
    DeleteCategory(catID) {
      debugger;
      const docref = doc(db, "Categories", catID);
      deleteDoc(docref).then(() => {
        console.log("category delete successfuly");
      });
    },
    UpdateCategory(cat) {
      this.category.name = cat.name;
      this.category.id = cat.id;
      this.addMode = false;
    },
  },
  mounted() {
    const catRef = collection(db, "Categories");
    //const objcategories = [];
    onSnapshot(catRef, (snapshot) => {
      this.categoryList = [];
      snapshot.docs.forEach((doc) => {
        this.categoryList.push({ ...doc.data(), id: doc.id });
      });
    });
    //console.log(objcategories);
  },
};
</script>

<style lang="scss" scoped></style>
