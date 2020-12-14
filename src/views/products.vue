<template>
  <div class="row">
    <header
      class="col sticky-top bg-white d-flex justify-content-between py-4 shadow"
    >
      <Navbar />
      <h2 class="font-weight-bold">Products</h2>
      <h2></h2>
    </header>
    <main class="col-12 mt-4">
      <div class="row">
        <div class="col-12 col-lg-8">
          <div class="card-body shadow">
            <!-- Button trigger modal Add Product -->
            <button
              type="button"
              class="btn btn-primary shadow mb-3"
              data-toggle="modal"
              data-target="#modalAddProduct"
            >
              Add Product
            </button>

            <!-- Modal Add Product -->
            <div
              class="modal fade"
              id="modalAddProduct"
              tabindex="-1"
              role="dialog"
              aria-labelledby="modalAddProductTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h3 class="modal-title" id="modalAddProductTitle">
                      Add Product
                    </h3>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <form class="modal-body">
                    <div class="form-group">
                      <label for="nama" class="form-label">Name : </label>
                      <input type="text" v-model="formAddProduct.nama" class="form-control" name="nama" value="" required>
                      <label for="price" class="form-label">Price : </label>
                      <input type="number" v-model="formAddProduct.harga" class="form-control" name="price" value="" required>
                      <label for="url_img" class="form-label">Image : </label>
                      <input type="text" v-model="formAddProduct.url_img" class="form-control" name="url_img" value="" required>
                      <label for="kategori_id" class="form-label">Category : </label>
                      <!-- <input type="number" v-model="formAddProduct.kategori_id" class="form-control" name="kategori_id" value="" required> -->
                      <select class="form-select form-control" aria-label="Default select example" v-model="formAddProduct.kategori_id">
                        <option selected></option>
                        <option 
                          v-for="category in categories" :key="category.id"
                          :value=category.id
                        >
                          {{category.tipe}}
                        </option>
                      </select>
                    </div>
                    <div class="text-right">
                      <button type="button" class="btn btn-primary" @click="addProduct(formAddProduct)">Add</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <table class="table text-center">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Category ID</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in products" :key="product.id">
                  <th scope="row">{{product.id}}</th>
                  <td>{{product.nama}}</td>
                  <td>{{product.harga}}</td>
                  <td>{{product.kategori_id}}</td>
                  <td>
                    <!-- Button trigger modal Edit Product -->
                    <button
                      type="button"
                      class="btn btn-warning"
                      data-toggle="modal"
                      data-target="#modalEditProduct"
                      @click="editProduct(product)"
                    >
                      Edit
                    </button>

                    <!-- Modal Edit Product -->
                    <div
                      class="modal fade"
                      id="modalEditProduct"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="modalEditProductTitle"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h3 class="modal-title" id="modalEditProductTitle">
                              Edit Product
                            </h3>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <form class="modal-body text-left">
                            <div class="form-group">
                              <input type="hidden" v-model="formProduct.id" class="form-control" name="kategori_id" value="" required>
                              <label for="nama" class="form-label">Name : </label>
                              <input type="text" v-model="formProduct.nama" class="form-control" name="nama" value="" required>
                              <label for="price" class="form-label">Price : </label>
                              <input type="number" v-model="formProduct.harga" class="form-control" name="price" value="" required>
                              <label for="url_img" class="form-label">Image : </label>
                              <input type="text" v-model="formProduct.url_img" class="form-control" name="url_img" value="" required>
                              <label for="kategori_id" class="form-label">Category : </label>
                              <select class="form-select form-control" aria-label="Default select example" v-model="formProduct.kategori_id">
                                <option selected></option>
                                <option 
                                  v-for="category in categories" :key="category.id"
                                  :value=category.id
                                >
                                  {{category.tipe}}
                                </option>
                              </select>  
                            </div>
                            <div class="text-right">
                              <button type="button" class="btn btn-warning" @click="updateProduct(formProduct)">Edit</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <button type="button" class="btn btn-danger ml-2" @click="delProduct(product)">
                      Del
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="card-body shadow">
            <!-- Button trigger modal Add Category -->
            <button
              type="button"
              class="btn btn-primary shadow mb-3"
              data-toggle="modal"
              data-target="#modalAddCategory"
            >
              Add Category
            </button>

            <!-- Modal Add Category -->
            <div
              class="modal fade"
              id="modalAddCategory"
              tabindex="-1"
              role="dialog"
              aria-labelledby="modalAddCategoryTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h3 class="modal-title" id="modalAddCategoryTitle">
                      Add Category
                    </h3>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <form class="modal-body">
                    <div class="form-group">
                      <label for="tipe" class="form-label">Name Category : </label>
                      <input type="text" v-model="formAddCategory.tipe" class="form-control" name="tipe" value="" required>
                    </div>
                    <div class="text-right">
                      <button type="button" class="btn btn-primary" @click="addCategory(formAddCategory)">Add</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <table class="table text-center">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Category</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="category in categories" :key="category.id">
                  <th scope="row">{{category.id}}</th>
                  <td>{{category.tipe}}</td>
                  <td class="d-flex justify-content-center">
                    <!-- Button trigger modal Edit Category -->
                    <button
                      type="button"
                      class="btn btn-warning"
                      data-toggle="modal"
                      data-target="#modalEditCategory"
                      @click="editCategory(category)"
                    >
                      Edit
                    </button>

                    <!-- Modal Edit Category -->
                    <div
                      class="modal fade"
                      id="modalEditCategory"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="modalEditCategoryTitle"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h3 class="modal-title" id="modalEditCategoryTitle">
                              Edit Category
                            </h3>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <form class="modal-body text-left">
                            <div class="form-group">
                              <label for="tipe" class="form-label">Name Category : </label>
                              <input type="hidden" v-model="formCategory.id" class="form-control" name="tipe" value="">
                              <input type="text" v-model="formCategory.tipe" class="form-control" name="tipe" value="" required>
                            </div>
                            <div class="text-right">
                              <button type="button" class="btn btn-warning" @click="updateCategory(formCategory)">Edit</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <button type="button" class="btn btn-danger ml-2" @click="delCategory(category)">
                      Del
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
import axios from "axios";
export default {
  name: "products",
  components: {
    Navbar,
  },
  data(){
    return{
      products:[],
      formAddProduct:{
        nama:null,
        harga:null,
        url_img:null,
        kategori_id:null,
      },
      formProduct:{
        id:null,
        nama:null,
        harga:null,
        url_img:null,
        kategori_id:null,
      },
      categories: [],
      formAddCategory:{
        tipe:null,
      },
      formCategory:{
        id:null,
        tipe:null,
      },
    }
  },
  methods:{
    loadProducts(){
      axios.get(process.env.VUE_APP_PRODUCT)
      .then((res) => {
        this.products = res.data.result;
        // console.log(this.products);
      })
      .catch((err) => {
        console.log(err);
      });
    },
    addProduct(value){
      // console.log(value)
      axios.post(process.env.VUE_APP_PRODUCT, value)
      .then(() => {
        this.loadProducts()
        this.formAddProduct.nama=null
        this.formAddProduct.harga=null
        this.formAddProduct.url_img=null
        this.formAddProduct.kategori_id=null
        // alert('Success Add Product!')
      })
      .catch((err) => {
        console.log(err);
        alert('Error Add Product!')
      });
    },
    editProduct(value){
      this.formProduct.id = value.id;
      this.formProduct.nama = value.nama;
      this.formProduct.harga = value.harga;
      this.formProduct.url_img = value.url_img;
      this.formProduct.kategori_id = value.kategori_id;
    },
    updateProduct(value){
      axios.put(process.env.VUE_APP_PRODUCT, value)
      .then(() => {
        this.loadProducts()
        alert('Success Update Product!')
      })
      .catch((err) => {
        console.log(err);
        alert('Error Update Product!')
      });
    },
    delProduct(value){
      axios.delete(process.env.VUE_APP_PRODUCT + `/${value.id}`)
      .then(() => {
        this.loadProducts()
        alert('Success Delete Product!')
      })
      .catch((err) => {
        console.log(err);
        alert('Error Delete Product!')
      });
    },

    loadCategories(){
      axios.get(process.env.VUE_APP_CATEGORY)
      .then((res) => {
        this.categories = res.data.result;
        // console.log(this.categories);
      })
      .catch((err) => {
        console.log(err);
      });
    },
    addCategory(value){
      axios.post(process.env.VUE_APP_CATEGORY, value)
      .then(() => {
        this.loadCategories()
        this.formAddCategory.tipe=null
        alert('Success Add Category!')
      })
      .catch((err) => {
        console.log(err);
        alert('Error Add Category!')
      });
    },
    editCategory(value){
      this.formCategory.id = value.id;
      this.formCategory.tipe = value.tipe;
    },
    updateCategory(value){
      axios.put(process.env.VUE_APP_CATEGORY, value)
      .then(() => {
        this.loadCategories()
        alert('Success Update Category!')
      })
      .catch((err) => {
        console.log(err);
        alert('Error Update Category!')
      });
    },
    delCategory(value){
      axios.delete(process.env.VUE_APP_CATEGORY + `/${value.id}`)
      .then(() => {
        this.loadCategories()
        alert('Success Delete Category!')
      })
      .catch((err) => {
        console.log(err);
        alert('Error Delete Category!')
      });
    },
  },
  mounted(){
    this.loadCategories()
    this.loadProducts()
  }
};
</script>
