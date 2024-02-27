<template>
  <!-- Recent Sales Start -->
  <!-- <div class="container-fluid pt-4"> -->
  <div class="bg-light text-center rounded p-4">
    <div class="d-flex align-items-center justify-content-between mb-4">
      <h6 class="mb-0 d-inline-block">All Products</h6>

      <button @click="addNew" class="btn btn-primary float-right">
        Add Event
      </button>
    </div>
    <div class="table-responsive">
      <table
        class="table text-start align-middle table-bordered table-hover mb-0"
      >
        <thead>
          <tr class="text-dark">
            <th scope="col">
              <input class="form-check-input" type="checkbox" />
            </th>
            <th scope="col">Product Name</th>
            <th scope="col">Details</th>
            <th scope="col">Purchase Price</th>
            <th scope="col">Sale Price</th>
            <th scope="col">Category</th>
            <th scope="col">Quantity in stock</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in productList" :key="product.id">
            <td><input class="form-check-input" type="checkbox" /></td>
            <td>{{ product.productName }}</td>
            <td>{{ product.productDetail }}</td>
            <td>£{{ product.purchagePrice }}</td>
            <td>£{{ product.salePrice }}</td>
            <td>{{ product.productCategory }}</td>
            <td>{{ product.quantity }}</td>
            <td>Active</td>
            <td>
              <button class="btn btn-sm" @click="UpdateProduct(product)">
                <i class="fa fa-times"
                  ><font-awesome-icon icon="fa-solid fa-pen-to-square"
                /></i>
              </button>
              <button class="btn btn-sm" @click="DeleteProduct(product.id)">
                <i class="fa fa-times"
                  ><font-awesome-icon icon="fa-solid fa-trash"
                /></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- </div> -->
  <!-- Recent Sales End -->
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../data/firebase";

export default {
  name: "ProductsList",
  data() {
    return {};
  },
  components: {
    FontAwesomeIcon,
  },
  props: ["productList"],
  methods: {
    addNew() {
      this.$emit("addNewProduct");
    },
    UpdateProduct(product) {
      this.$emit("updateProduct", product);
    },
    DeleteProduct(ProductID) {
      debugger;
      const docref = doc(db, "Products", ProductID);
      deleteDoc(docref).then(() => {
        console.log("Product delete successfuly");
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
