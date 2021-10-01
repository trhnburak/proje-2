<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-md navbar-light bg-light">
      <router-link :to="{ name: 'Home' }">
        <a class="navbar-brand dummy">
          <link
            rel="alternate"
            href="atom.xml"
            type="application/atom+xml"
            title="Atom" />
          <div>
            <img
              src="@/assets/dummy.png"
              style="width: 50px"
              class="ml-2"
            /></div></a
      ></router-link>
      <ul class="navbar-nav">
        <li class="nav-item active sm-dummy">
          <router-link :to="{ name: 'Home' }" style="text-decoration: none">
            <a class="nav-link active">
              {{ currentRouteName }} <span class="sr-only">(current)</span></a
            ></router-link
          >
        </li>
      </ul>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav d-none">
          <li class="nav-item active">
            <router-link :to="{ name: 'Home' }" style="text-decoration: none">
              <a class="nav-link active" v-if="currentRouteName == 'Home'">
                {{ $t("Dummy") }} <span class="sr-only">(current)</span></a>
              <a class="nav-link active" v-if="currentRouteName == 'Contact'">
                {{ $t("Contact") }} <span class="sr-only">(current)</span></a>
            </router-link>
          </li>
        </ul>

        <ul class="nav navbar-nav ml-auto mr-2">
          <li class="nav-item">
            <router-link
              :to="{ name: 'Contact' }"
              style="text-decoration: none"
            >
              <a class="nav-link active">
                {{ $t("Contact Us") }}
              </a></router-link
            >
          </li>

          <select
            @change="handleChange()"
            v-model="lang"
            class="mr-2 selectbox"
          >
            <option class="option" @change="handleChange()" value="en">
              {{ $t("English") }}
            </option>
            <option class="option" @change="handleChange()" value="tr">
              {{ $t("Turkish") }}
            </option>
          </select>
          <li class="nav-item" v-if="!isAuthenticated">
            <a
              style="cursor: pointer"
              class="nav-link active"
              @click="showModal = true"
            >
              {{ $t("Login") }}
            </a>
          </li>
        </ul>

        <div class="menu" v-if="isAuthenticated">
          <li style="cursor: pointer" @click="dropdown = !dropdown">
            <a
              ><i class="far fa-user mr-2 icon">
                <span class="ml-2"> {{ userInfo.name }}</span>
              </i>
            </a>

            <transition name="fade">
              <ul
                class="drop"
                @mouseleave="dropdown = false"
                v-if="dropdown"
                @click="dropdown = !dropdown">
                <li>
                  <a> {{ userInfo.email }} </a>
                </li>
                <li @click="logout">
                  <a> {{ $t("Logout") }} </a>
                </li>
              </ul>
            </transition>
          </li>
        </div>
      </div>
    </nav>
    <div id="app">
      <div id="exampleModal">
        <transition
          @enter="startTransitionModal"
          @after-enter="endTransitionModal"
          @before-leave="endTransitionModal"
          @after-leave="startTransitionModal">
          <div class="modal fade" v-if="showModal" ref="modal">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">

                    <div class="col-6">
                      <h5 class="modal-title">{{ $t("Login Form") }}</h5>
                    </div>
                    <div class="col-6 text-right">
                      <div class="row">
                        <div class="col-4 ml-auto">
                          <select
                              @change="handleChange()"
                              v-model="lang"
                              class="mr-2 selectbox"
                          >
                            <option class="option" @change="handleChange()" value="en">
                              {{ $t("English") }}
                            </option>
                            <option class="option" @change="handleChange()" value="tr">
                              {{ $t("Turkish") }}
                            </option>
                          </select>
                        </div>
                        <div class="col-4">
                          <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close">
                    <span aria-hidden="true" @click="showModal = false"
                    >&times;</span>
                          </button>
                        </div>
                      </div>
                    </div>





                </div>
                <div class="modal-body" style="height: 250px">
                  <form>
                    <div class="form-group">
                      <input
                          type="text"
                          class="form-control"
                          v-model="user.title"
                          id="title"
                          :placeholder="$t('Title')"
                      />
                    </div>
                    <div class="form-group">
                      <input
                          type="text"
                          class="form-control"
                          v-model="user.name"
                          id="name"
                          :placeholder="$t('Name')"
                      />
                    </div>
                    <div class="form-group">

                      <input
                        type="email"
                        class="form-control"
                        v-model="user.email"
                        id="email"
                        :placeholder="$t('Email')"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        v-model="user.password"
                        id="password"
                        :placeholder="$t('Password')"
                      />
                    </div>
                    <div class="form-group">
                      <button
                          type="button"
                          class="btn btn-info btn-block btn-round"
                          @click="login">
                        {{ $t("Login") }}
                      </button>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </transition>
        <div class="modal-backdrop fade d-none" ref="backdrop"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      lang: "en",
      showModal: false,
      dropdown: false,
      isAuth: "",
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  created() {
    this.refreshPage();
  },
  computed: {
    ...mapGetters(["isAuthenticated", "userInfo"]),
    currentRouteName() {
      return this.$route.name;
    },
  },
  mounted() {},
  methods: {
    login() {
      this.$store.dispatch("Login", this.user).then((_) => {
        this.showModal = false;
      });
    },
    logout() {
      this.$store.dispatch("Logout");
    },

    handleChange() {
      this.$i18n.locale = this.lang;
      localStorage.setItem("lang", this.lang);
    },
    refreshPage() {
      this.lang = localStorage.getItem("lang");
      this.$i18n.locale = localStorage.getItem("lang");
    },
    startTransitionModal() {
      this.$refs.backdrop.classList.toggle("d-block");
      this.$refs.modal.classList.toggle("d-block");
    },
    endTransitionModal() {
      this.$refs.backdrop.classList.toggle("show");
      this.$refs.modal.classList.toggle("show");
    },
    handleChange() {
      this.$i18n.locale = this.lang;
      localStorage.setItem("lang", this.lang);
    },
    refreshPage() {
      this.lang = localStorage.getItem("lang");
      this.$i18n.locale = this.lang;
      this.isAuth = JSON.parse(localStorage.getItem("user"));
    },
  },
};
</script>

<style>
</style>
