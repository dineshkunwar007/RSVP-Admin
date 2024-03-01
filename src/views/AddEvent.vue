<template>
  <div class="container-fluid pt-4 px-4">
    <div class="row g-4" v-if="mode == 'Add'">
      <div class="h-100 bg-light rounded p-4">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <h6 class="mb-0">{{ buttonText }}</h6>
        </div>
        <div class="row d-flex">
          <div class="col-sm-12 col-md-5 col-xl-5 mx-4 mb-2">
            <div class="d-flex form-floating mb-2">
              <input
                type="text"
                class="form-control"
                id="category"
                v-model="Event.eventTitle"
                placeholder="E.G traditional music festival"
              />
              <label for="floatingInput">Event Title</label>
            </div>
          </div>
          <div class="col-sm-12 col-md-5 col-xl-5 mx-4 mb-2">
            <div class="d-flex form-floating mb-2">
              <input
                type="text"
                class="form-control"
                id="category"
                v-model="Event.eventSummary"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Event Summary</label>
            </div>
          </div>
          <div class="col-sm-12 col-md-5 col-xl-5 mx-4 mb-2">
            <div class="d-flex form-floating mb-2">
              <select
                v-model="Event.eventStatus"
                class="form-select"
                id="floatingSelect"
              >
                <option disabled value="">Please select status</option>
                <option
                  v-for="(option, index) in EventTypes"
                  :key="index"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
              <label for="floatingSelect">Event Status</label>
            </div>
          </div>
          <div class="col-sm-12 col-md-5 col-xl-5 mx-4 mb-2">
            <div class="d-flex form-floating mb-2">
              <input
                class="form-control"
                type="file"
                id="formFile"
                @change="previewImage"
              />
              <label for="formFile" class="form-label"
                >Select Event Image</label
              >
            </div>
          </div>

          <div class="col-sm-12 col-md-5 col-xl-5 mx-4 mb-2">
            <div class="d-flex form-floating mb-2">
              <input
                type="text"
                class="form-control"
                id="category"
                v-model="Event.totalseat"
                placeholder="2%"
              />
              <label for="floatingInput">Total Seat</label>
            </div>
          </div>
          <div class="col-sm-12 col-md-5 col-xl-5 mx-4 mb-2">
            <div class="d-flex form-floating mb-2">
              <input
                type="text"
                class="form-control"
                id="category"
                v-model="Event.eventLocation"
                placeholder="2%"
              />
              <label for="floatingInput">Event Location</label>
            </div>
          </div>
          <div class="col-sm-12 col-md-5 col-xl-5 mx-4 mb-2">
            <div class="d-flex form-floating mb-2">
              <input
                type="text"
                class="form-control"
                id="category"
                v-model="Event.contactPerson"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Contact Person</label>
            </div>
          </div>
          <div class="col-sm-12 col-md-5 col-xl-5 mx-4 mb-2">
            <div class="d-flex form-floating mb-2">
              <input
                type="text"
                class="form-control"
                id="category"
                v-model="Event.contactPhone"
                placeholder="2%"
              />
              <label for="floatingInput">Contact Phone Number</label>
            </div>
          </div>

          <div class="col-sm-12 col-md-5 col-xl-5 mx-4 mb-2">
            <div class="d-flex mb-2">
              <div class="">
                <div class="input_wrapper">
                  <input
                    type="checkbox"
                    v-model="Event.isActive"
                    true-value="yes"
                    false-value="no"
                    class="switch_4"
                  />
                  <svg
                    class="is_checked"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 426.67 426.67"
                  >
                    <path
                      d="M153.504 366.84c-8.657 0-17.323-3.303-23.927-9.912L9.914 237.265c-13.218-13.218-13.218-34.645 0-47.863 13.218-13.218 34.645-13.218 47.863 0l95.727 95.727 215.39-215.387c13.218-13.214 34.65-13.218 47.86 0 13.22 13.218 13.22 34.65 0 47.863L177.435 356.928c-6.61 6.605-15.27 9.91-23.932 9.91z"
                    />
                  </svg>
                  <svg
                    class="is_unchecked"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 212.982 212.982"
                  >
                    <path
                      d="M131.804 106.49l75.936-75.935c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.49 81.18 30.555 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.99 6.99-6.99 18.323 0 25.312L81.18 106.49 5.24 182.427c-6.99 6.99-6.99 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0L106.49 131.8l75.938 75.937c6.99 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.323 0-25.313l-75.936-75.936z"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <!-- <input
                class="form-check-input form-control-md"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDisabled"
              /> -->
              <label
                class="form-check-label"
                style="margin-left: 0.5rem"
                for="flexSwitchCheckDisabled"
                >Is Event Active</label
              >
            </div>
          </div>
          <div class="col-sm-12 col-md-5 col-xl-5 mx-4 mb-2"></div>
          <div class="col-sm-12 col-md-5 col-xl-5 mx-4 mb-2">
            <div class="d-flex mb-2">
              <button
                style="width: 100%"
                class="btn btn-primary"
                @click="AddEvent"
              >
                {{ buttonText }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ProductsList
      :productList="eventList"
      v-else-if="mode == 'Display'"
      @addNewProduct="onAddProduct"
      @updateEvent="onUpdateEvent"
    />
  </div>
</template>

<script>
//import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ProductsList from "./ProductList.vue";
import {
  db,
  collection,
  storage,
  sRef,
  uploadBytesResumable,
  getDownloadURL,
} from "../data/firebase";

import { addDoc, doc, updateDoc, onSnapshot } from "firebase/firestore";
export default {
  data: () => ({
    caption: "",
    productImage: "",
    imageData: null,
    addMode: true,
    mode: "Display",
    Event: {
      eventTitle: "",
      eventSummary: "",
      eventImg: "",
      eventStatus: "",
      eventDate: "",
      eventLocation: "",
      totalseat: 0,
      contactPerson: "",
      contactPhone: "",
      isActive: "yes",
    },
    EventTypes: ["Current", "Upcoming"],
    eventList: [],
  }),
  components: {
    //FontAwesomeIcon,
    ProductsList,
  },
  computed: {
    buttonText() {
      return this.addMode ? "Add Event" : "Update Event";
    },
  },

  methods: {
    onAddProduct() {
      this.mode = "Add";
    },
    AddEvent() {
      debugger;
      if (!this.Event !== null) {
        const EventsDocRef = collection(db, "RSVPEvents");
        if (this.addMode) {
          addDoc(EventsDocRef, this.Event).then(() => {
            this.Event = {
              eventTitle: "",
              eventSummary: "",
              eventImg: "",
              eventStatus: "",
              totalseat: 0,
              contactPerson: "",
              contactPhone: "",
              eventLocation: "",

              isActive: "yes",
              id: null,
            };
            this.mode = "Display";
          });
        } else {
          const docref = doc(db, "RSVPEvents", this.Event.id);
          updateDoc(docref, this.Event).then(() => {
            this.Event = {
              eventTitle: "",
              eventSummary: "",
              eventImg: "",
              eventStatus: "",
              totalseat: 0,
              contactPerson: "",
              contactPhone: "",
              eventLocation: "",

              isActive: "yes",
              id: null,
            };
            this.mode = "Display";
            this.addMode = true;
          });
        }
      }
    },
    onUpdateEvent(Event) {
      debugger;
      this.mode = "Add";
      this.addMode = false;
      this.Event = Event;
    },

    previewImage(event) {
      this.uploadValue = 0;
      this.productImage = null;
      this.imageData = event.target.files[0];
      this.onUpload();
    },

    onUpload() {
      debugger;
      this.img1 = null;
      const metadata = {
        contentType: "image/jpeg",
      };
      const storageRef = sRef(storage, this.imageData.name);
      const uploadTask = uploadBytesResumable(
        storageRef,
        this.imageData,
        metadata
      );
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;

            // ...

            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            this.Event.eventImg = downloadURL;
            console.log("File available at", downloadURL);
          });
        }
      );
    },
  },
  mounted() {
    // const catsRef = collection(db, "Categories");
    // //const objcategories = [];
    // onSnapshot(catsRef, (snapshot) => {
    //   this.categoryList = [];
    //   snapshot.docs.forEach((doc) => {
    //     this.categoryList.push({ ...doc.data(), id: doc.id });
    //   });
    // });
    // // get all products

    const productsRef = collection(db, "RSVPEvents");
    onSnapshot(productsRef, (snapshot) => {
      this.eventList = [];
      snapshot.docs.forEach((doc) => {
        this.eventList.push({ ...doc.data(), id: doc.id });
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 400px;
  margin: 50vh auto 0;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.switch_box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  max-width: 200px;
  min-width: 200px;
  height: 200px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

/* Switch 1 Specific Styles Start */

.box_1 {
  background: #eee;
}

input[type="checkbox"].switch_1 {
  font-size: 30px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 3.5em;
  height: 1.5em;
  background: #ddd;
  border-radius: 3em;
  position: relative;
  cursor: pointer;
  outline: none;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

input[type="checkbox"].switch_1:checked {
  background: #0ebeff;
}

input[type="checkbox"].switch_1:after {
  position: absolute;
  content: "";
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  background: #fff;
  -webkit-box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.3);
  -webkit-transform: scale(0.7);
  transform: scale(0.7);
  left: 0;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

input[type="checkbox"].switch_1:checked:after {
  left: calc(100% - 1.5em);
}

/* Switch 1 Specific Style End */

/* Switch 2 Specific Style Start */

.box_2 {
  background: #666;
}

input[type="checkbox"].switch_2 {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100px;
  height: 8px;
  background: #444;
  border-radius: 5px;
  position: relative;
  outline: 0;
  cursor: pointer;
}

input[type="checkbox"].switch_2:before,
input[type="checkbox"].switch_2:after {
  position: absolute;
  content: "";
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
}

input[type="checkbox"].switch_2:before {
  width: 40px;
  height: 40px;
  background: #ccc;
  border: 5px solid #666;
  border-radius: 50%;
  top: 50%;
  left: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

input[type="checkbox"].switch_2:after {
  width: 30px;
  height: 30px;
  background: #666;
  border-radius: 50%;
  top: 50%;
  left: 10px;
  -webkit-transform: scale(1) translateY(-50%);
  transform: scale(1) translateY(-50%);
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
}

input[type="checkbox"].switch_2:checked:before {
  left: calc(100% - 35px);
}

input[type="checkbox"].switch_2:checked:after {
  left: 75px;
  -webkit-transform: scale(0);
  transform: scale(0);
}

/* Switch 2 Specific Style End */

/* Switch 3 Specific Style Start */

.toggle_switch {
  width: 100px;
  height: 45px;
  position: relative;
}

input[type="checkbox"].switch_3 {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  outline: 0;
  z-index: 1;
}

svg.checkbox .outer-ring {
  stroke-dasharray: 375;
  stroke-dashoffset: 375;
  -webkit-animation: resetRing 0.35s ease-in-out forwards;
  animation: resetRing 0.35s ease-in-out forwards;
}

svg.checkbox {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

svg.checkbox .is_checked {
  opacity: 0;
  fill: yellow;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-transform: translateX(200%) rotate(45deg);
  transform: translateX(200%) rotate(45deg);
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
}

svg.checkbox .is_unchecked {
  opacity: 1;
  fill: #fff;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-transform: translateX(0) rotate(0deg);
  transform: translateX(0) rotate(0deg);
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
}

@-webkit-keyframes animateRing {
  to {
    stroke-dashoffset: 0;
    stroke: #b0aa28;
  }
}

@keyframes animateRing {
  to {
    stroke-dashoffset: 0;
    stroke: #b0aa28;
  }
}

@-webkit-keyframes resetRing {
  to {
    stroke-dashoffset: 0;
    stroke: #233043;
  }
}

@keyframes resetRing {
  to {
    stroke-dashoffset: 0;
    stroke: #233043;
  }
}

/* Switch 3 Specific Style End */

/* Switch 4 Specific Style Start */

.box_4 {
  background: #eee;
}

.input_wrapper {
  width: 80px;
  height: 40px;
  position: relative;
  cursor: pointer;
}

.input_wrapper input[type="checkbox"] {
  width: 80px;
  height: 40px;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: rgb(231, 74, 74);
  border-radius: 2px;
  position: relative;
  outline: 0;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

.input_wrapper input[type="checkbox"]:after {
  position: absolute;
  content: "";
  top: 3px;
  left: 3px;
  width: 34px;
  height: 34px;
  background: #dfeaec;
  z-index: 2;
  border-radius: 2px;
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
}

.input_wrapper svg {
  position: absolute;
  top: 50%;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  fill: #fff;
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
  z-index: 1;
}

.input_wrapper .is_checked {
  width: 18px;
  left: 18%;
  -webkit-transform: translateX(190%) translateY(-30%) scale(0);
  transform: translateX(190%) translateY(-30%) scale(0);
}

.input_wrapper .is_unchecked {
  width: 15px;
  right: 10%;
  -webkit-transform: translateX(0) translateY(-30%) scale(1);
  transform: translateX(0) translateY(-30%) scale(1);
}

/* Checked State */
.input_wrapper input[type="checkbox"]:checked {
  background: #23da87;
}

.input_wrapper input[type="checkbox"]:checked:after {
  left: calc(100% - 37px);
}

.input_wrapper input[type="checkbox"]:checked + .is_checked {
  -webkit-transform: translateX(0) translateY(-30%) scale(1);
  transform: translateX(0) translateY(-30%) scale(1);
}

.input_wrapper input[type="checkbox"]:checked ~ .is_unchecked {
  -webkit-transform: translateX(-190%) translateY(-30%) scale(0);
  transform: translateX(-190%) translateY(-30%) scale(0);
}
</style>
