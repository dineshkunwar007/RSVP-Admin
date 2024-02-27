<template>
  <!-- Recent Sales Start -->
  <div class="container-fluid pt-4 px-4">
    <div class="bg-light text-center rounded p-4" v-if="orderList">
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h6 class="mb-0">Todays Orders</h6>
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
              <th scope="col">Date</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in undeliveredOrders" :key="order.orderNumber">
              <td><input class="form-check-input" type="checkbox" /></td>
              <td>{{ order.orderDate }}</td>
              <td>
                {{
                  order.customerDetails.fName +
                  " " +
                  order.customerDetails.lName
                }}
              </td>
              <td>{{ order.customerDetails.phone }}</td>
              <td>{{ order.customerDetails.email }}</td>
              <td>
                {{ order.orderStatus }}
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-primary ms-2"
                  @click="GetOrderDetails(order)"
                >
                  View/Update
                </button>
                <!-- <a
                  class="btn btn-sm btn-primary"
                  @click="dialog = true"
                  href="#"
                  >View/Update</a
                > -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row g-4" v-else>
      <div class="col-sm-12 col-md-5 col-xl-5">
        <v-card class="h-100 bg-light rounded p-4" :loading="loading">
          <v-card-title>{{
            selectedOrder.customerDetails.fName +
            " " +
            selectedOrder.customerDetails.lName
          }}</v-card-title>

          <v-card-text>
            <div class="bg-light p-30 mb-3">
              <p class="mb-2">
                <i class="fa fa-map-marker-alt mr-3"
                  ><font-awesome-icon icon="fa-solid fa-map-marker-alt" /></i
                >{{
                  selectedOrder.customerDetails.addressLine1 +
                  " " +
                  selectedOrder.customerDetails.addressLine2 +
                  " " +
                  selectedOrder.customerDetails.city +
                  " " +
                  selectedOrder.customerDetails.postCode
                }}
              </p>
              <p class="mb-2">
                <i class="fa fa-envelope mr-3"
                  ><font-awesome-icon icon="fa-solid fa-envelope" /></i
                >{{ selectedOrder.customerDetails.email }}
              </p>
              <p class="mb-2">
                <i class="fa fa-phone-alt mr-3"
                  ><font-awesome-icon icon="fa-solid fa-phone-alt" /></i
                >{{ selectedOrder.customerDetails.phone }}
              </p>
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Order Status</v-card-title>

          <v-card-text>
            <v-chip-group
              v-model="selectedOrderStatus"
              active-class="success accent-4 white--text"
              column
            >
              <v-chip>Received</v-chip>

              <v-chip>Preparing</v-chip>

              <v-chip>Ready</v-chip>

              <v-chip>Collected</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary lighten-2" text @click="updateOrderStatus">
              Update
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <div class="col-sm-12 col-md-7 col-xl-7">
        <div class="h-100 bg-light rounded p-4">
          <div class="d-flex align-items-center justify-content-between mb-2">
            <h6 class="mb-0">Order Number: {{ selectedOrder.orderNumber }}</h6>
            <small
              ><h6>{{ selectedOrder.orderDate }}</h6></small
            >
          </div>
          <div
            class="d-flex align-items-center border-bottom py-3"
            v-for="(item, index) in selectedOrder.items"
            :key="item"
          >
            <img
              class="flex-shrink-0"
              :src="item.image"
              alt=""
              style="width: 50px; height: 50px"
            />
            <div class="w-100 ms-3">
              <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-0">product {{ ++index }}</h6>
                <small>4</small>
              </div>
              <span>{{ item.productDetails }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Recent Sales End -->
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { db, collection } from "../data/firebase";

import { onSnapshot, doc, updateDoc } from "firebase/firestore";
export default {
  components: { FontAwesomeIcon },
  data: () => ({
    selectedOrderStatus: "",
    selectedOrder: {},
    orders: [
      // {
      //   orderDate: "01 Jan 2045",
      //   customer: {
      //     customerName: "Anil Kumar",
      //     phone: "079878787",
      //     email: "test@gmail.com",
      //     Address: "44 cranmer street, nottingham",
      //   },
      //   orderStatus: "Received",
      //   orderStatusCode: 0,
      //   orderNumber: "123456",
      //   items: [
      //     {
      //       productName: "product1",
      //       productDetails: "details",
      //       productCategory: "cat1",
      //       productImg:
      //         "https://firebasestorage.googleapis.com/v0/b/click-collect-shop.appspot.com/o/Milk-Bottle.png?alt=media&token=9a775f9e-e350-4efc-8f94-a8c50134c232",
      //       purchagePrice: 0,
      //       margin: 0,
      //       salePrice: 0,
      //       productQuantity: 0,
      //       reduction: 0,
      //       reducedPrice: 0,
      //       isActive: "yes",
      //     },
      //     {
      //       productName: "product1",
      //       productDetails: "details",
      //       productCategory: "cat1",
      //       productImg:
      //         "https://firebasestorage.googleapis.com/v0/b/click-collect-shop.appspot.com/o/Milk-Bottle.png?alt=media&token=9a775f9e-e350-4efc-8f94-a8c50134c232",
      //       purchagePrice: 0,
      //       margin: 0,
      //       salePrice: 0,
      //       productQuantity: 0,
      //       reduction: 0,
      //       reducedPrice: 0,
      //       isActive: "yes",
      //     },
      //     {
      //       productName: "product1",
      //       productDetails: "details",
      //       productCategory: "cat1",
      //       productImg:
      //         "https://firebasestorage.googleapis.com/v0/b/click-collect-shop.appspot.com/o/Milk-Bottle.png?alt=media&token=9a775f9e-e350-4efc-8f94-a8c50134c232",
      //       purchagePrice: 0,
      //       margin: 0,
      //       salePrice: 0,
      //       productQuantity: 0,
      //       reduction: 0,
      //       reducedPrice: 0,
      //       isActive: "yes",
      //     },
      //     {
      //       productName: "product1",
      //       productDetails: "details",
      //       productCategory: "cat1",
      //       productImg:
      //         "https://firebasestorage.googleapis.com/v0/b/click-collect-shop.appspot.com/o/Milk-Bottle.png?alt=media&token=9a775f9e-e350-4efc-8f94-a8c50134c232",
      //       purchagePrice: 0,
      //       margin: 0,
      //       salePrice: 0,
      //       productQuantity: 0,
      //       reduction: 0,
      //       reducedPrice: 0,
      //       isActive: "yes",
      //     },
      //     {
      //       productName: "product1",
      //       productDetails: "details",
      //       productCategory: "cat1",
      //       productImg:
      //         "https://firebasestorage.googleapis.com/v0/b/click-collect-shop.appspot.com/o/Milk-Bottle.png?alt=media&token=9a775f9e-e350-4efc-8f94-a8c50134c232",
      //       purchagePrice: 0,
      //       margin: 0,
      //       salePrice: 0,
      //       productQuantity: 0,
      //       reduction: 0,
      //       reducedPrice: 0,
      //       isActive: "yes",
      //     },
      //   ],
      // },
      // {
      //   orderDate: "01 Jan 2045",
      //   customer: {
      //     customerName: "Anil Kumar",
      //     phone: "079878787",
      //     email: "test@gmail.com",
      //     Address: "44 cranmer street, nottingham",
      //   },
      //   orderStatus: "Received",
      //   orderStatusCode: 0,
      //   orderNumber: "123457",
      //   items: [
      //     {
      //       productName: "product1",
      //       productDetails: "details",
      //       productCategory: "cat1",
      //       productImg:
      //         "https://firebasestorage.googleapis.com/v0/b/click-collect-shop.appspot.com/o/Milk-Bottle.png?alt=media&token=9a775f9e-e350-4efc-8f94-a8c50134c232",
      //       purchagePrice: 0,
      //       margin: 0,
      //       salePrice: 0,
      //       productQuantity: 0,
      //       reduction: 0,
      //       reducedPrice: 0,
      //       isActive: "yes",
      //     },
      //     {
      //       productName: "product1",
      //       productDetails: "details",
      //       productCategory: "cat1",
      //       productImg:
      //         "https://firebasestorage.googleapis.com/v0/b/click-collect-shop.appspot.com/o/Milk-Bottle.png?alt=media&token=9a775f9e-e350-4efc-8f94-a8c50134c232",
      //       purchagePrice: 0,
      //       margin: 0,
      //       salePrice: 0,
      //       productQuantity: 0,
      //       reduction: 0,
      //       reducedPrice: 0,
      //       isActive: "yes",
      //     },
      //     {
      //       productName: "product2",
      //       productDetails: "details",
      //       productCategory: "cat2",
      //       productImg:
      //         "https://firebasestorage.googleapis.com/v0/b/click-collect-shop.appspot.com/o/Milk-Bottle.png?alt=media&token=9a775f9e-e350-4efc-8f94-a8c50134c232",
      //       purchagePrice: 0,
      //       margin: 0,
      //       salePrice: 0,
      //       productQuantity: 0,
      //       reduction: 0,
      //       reducedPrice: 0,
      //       isActive: "yes",
      //     },
      //     {
      //       productName: "product1",
      //       productDetails: "details",
      //       productCategory: "cat1",
      //       productImg:
      //         "https://firebasestorage.googleapis.com/v0/b/click-collect-shop.appspot.com/o/Milk-Bottle.png?alt=media&token=9a775f9e-e350-4efc-8f94-a8c50134c232",
      //       purchagePrice: 0,
      //       margin: 0,
      //       salePrice: 0,
      //       productQuantity: 0,
      //       reduction: 0,
      //       reducedPrice: 0,
      //       isActive: "yes",
      //     },
      //     {
      //       productName: "product1",
      //       productDetails: "details",
      //       productCategory: "cat1",
      //       productImg:
      //         "https://firebasestorage.googleapis.com/v0/b/click-collect-shop.appspot.com/o/Milk-Bottle.png?alt=media&token=9a775f9e-e350-4efc-8f94-a8c50134c232",
      //       purchagePrice: 0,
      //       margin: 0,
      //       salePrice: 0,
      //       productQuantity: 0,
      //       reduction: 0,
      //       reducedPrice: 0,
      //       isActive: "yes",
      //     },
      //   ],
      // },
    ],
    img: require("../assets/img/product-3.jpg"),
    orderList: true,
  }),
  computed: {
    undeliveredOrders() {
      return this.orders;
    },
  },
  methods: {
    GetOrderDetails(order) {
      this.orderList = false;
      this.selectedOrder = order;
      this.selectedOrderStatus = this.selectedOrder.orderStatusCode;
    },
    updateOrderStatus() {
      var objOrderStatus = "";
      let objOrderStatusCode = 0;
      if (this.selectedOrderStatus == 0) {
        objOrderStatus = "Received";
        objOrderStatusCode = 0;
      } else if (this.selectedOrderStatus == 1) {
        objOrderStatus = "Prepairing";
        objOrderStatusCode = 1;
      } else if (this.selectedOrderStatus == 2) {
        objOrderStatus = "Ready";
        objOrderStatusCode = 2;
      } else if (this.selectedOrderStatus == 3) {
        objOrderStatus = "Collected";
        objOrderStatusCode = 3;
      }
      const productRef = doc(db, "Orders", this.selectedOrder.id);
      updateDoc(productRef, {
        orderStatus: objOrderStatus,
        orderStatusCode: objOrderStatusCode,
      })
        .then((res) => {
          console.log(res);
          this.orderList = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    const catsRef = collection(db, "Orders");
    //const objcategories = [];
    onSnapshot(catsRef, (snapshot) => {
      this.orders = [];
      snapshot.docs.forEach((doc) => {
        this.orders.push({ ...doc.data(), id: doc.id });
      });
    });
    // const OrdersRef = ref(firebaseDb, "Orders");
    // onValue(OrdersRef, (snapshot) => {
    //   const data = snapshot.val();
    //   this.orders = data;
    //   alert(JSON.stringify(this.orders));
    // });
  },
};
</script>

<style lang="scss" scoped></style>
