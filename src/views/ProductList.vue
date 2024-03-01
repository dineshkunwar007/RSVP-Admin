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
            <th scope="col">Event Title</th>
            <th scope="col">Summary</th>
            <th scope="col">Event Type</th>
            <th scope="col">Total Seat</th>
            <th scope="col">Event Location</th>
            <th scope="col">Contact Person</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in productList" :key="event.id">
            <td><input class="form-check-input" type="checkbox" /></td>
            <td>{{ event.eventTitle }}</td>
            <td>{{ event.eventSummary }}</td>
            <td>{{ event.eventStatus }}</td>
            <td>{{ event.totalseat }}</td>
            <td>{{ event.eventLocation }}</td>
            <td>{{ event.contactPerson }}</td>
            <td>Active</td>
            <td>
              <button class="btn btn-sm" @click="UpdateProduct(event)">
                <i class="fa fa-times"
                  ><font-awesome-icon icon="fa-solid fa-pen-to-square"
                /></i>
              </button>
              <button class="btn btn-sm" @click="DeleteProduct(event.id)">
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
    UpdateProduct(event) {
      this.$emit("updateEvent", event);
    },
    DeleteProduct(EventId) {
      debugger;
      const docref = doc(db, "RSVPEvents", EventId);
      deleteDoc(docref).then(() => {
        console.log("Product delete successfuly");
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
