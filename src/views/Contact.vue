<template>
  <div class="mt-5">
    <div class="row">
      <div class="col mt-5">
        <h2 class="text-center py-3">{{ $t("Contact Us") }}</h2>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-8">
        <form class="col-xs-6 col-sm-2 col-md-4 col-lg-12">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="Title"> {{ $t("Title") }} </label>
              <input
                  type="text"
                  v-model="userInfo.title"
                  class="form-control"
                  id="title"
                  :placeholder="$t('Title')"
              />
              <!-- <small v-if="!$v.email.required" class="form-text text-danger"
                >Bu alan zorunludur</small
              > -->
            </div>
            <div class="form-group col-md-6">
              <label for="Name"> {{ $t("Name") }} </label>
              <input
                type="text"
                v-model="userInfo.name"
                class="form-control"
                id="Name"
                :placeholder="$t('Name')"
              />
              <!-- <small v-if="!$v.email.required" class="form-text text-danger"
                >Bu alan zorunludur</small
              > -->
            </div>
            <div class="form-group col-md-6">
              <label for="Email"> {{ $t("Email") }} </label>
              <input
                type="email"
                v-model="userInfo.email"
                class="form-control"
                id="Email"
                :placeholder="$t('Email')"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="Password"> {{ $t("Password") }} </label>
              <input
                type="password"
                v-model="userInfo.password"
                class="form-control"
                id="password"
                :placeholder="$t('Password')"
              />
            </div>
            <div class="form-group col-md-12">
              <label for="Telephone"> {{ $t("Telephone") }} </label>
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': $v.tel.$error }"
                v-model="$v.tel.$model"
                id="input"
                :placeholder="$t('Telephone')"
              />
              <small v-if="!$v.tel.numeric" class="form-text text-danger">
                {{ $t("phone number must consist of numbers.") }}
              </small>
              <small v-if="!$v.tel.minLength" class="form-text text-danger">
                {{ $t("Enter your 11 digit phone number.") }}
              </small>
            </div>
          </div>

          <div class="form-group">
            <label for="Country"> {{ $t("Country") }} </label>
            <vue-bootstrap-typeahead
              v-model="search"
              :data="[$t('Canada'), $t('Turkey'), $t('USA'), $t('Mexico')]"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">
              {{ $t("Description") }}
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div class="form-group"></div>
          <button type="submit" class="btn btn-primary">
            {{ $t("Submit") }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  required,
  email,
  numeric,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
import VueBootstrapTypeahead from "vue-bootstrap-typeahead";

export default {
  components: {
    VueBootstrapTypeahead,
  },
  data() {
    return {
      search: "",
      info: "",
      tel: "",
      email: "",
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    tel: {
      required,
      numeric,
      minLength: minLength(11),
      maxLength: maxLength(11),
    },
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  methods: {
    submit() {},
  },
};
</script>

<style>
</style>
