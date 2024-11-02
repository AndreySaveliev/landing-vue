<template>
  <div class="w-2/3 mx-auto items-center flex flex-col">
    <img alt="Vue logo" class="logo my-16 w-72" src="@/assets/logo.svg" />
    <h1 class="text-3xl mb-7">Hi, Wolcome back</h1>
    <form class="w-96 flex flex-col items-center gap-2">
      <p v-if="isErrorShown" class="w-full text-xl text-red-600">
        Неверный логин или пароль
      </p>
      <input
        class="w-full border-2 h-8"
        type="text"
        placeholder="LOGIN"
        v-model="refEmail"
      />
      <div class="relative w-full">
        <input
          :type="type"
          placeholder="PASSWORD"
          class="w-full h-8 border-2"
          v-model="refPass"
        />
        <button
          class="absolute -translate-x-full top-1/2 -translate-y-1/2"
          @click.prevent="changeInputType"
        >
          <v-icon class="w-6 h-6" fill="black" :name="icon" />
        </button>
      </div>
    </form>
    <button v-if="!isLoadinShow" @click="login(refEmail, refPass)">
      Войти
    </button>
    <v-icon v-else name="bi-arrow-clockwise" animation="spin" />
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  email: String,
  pass: String,
  login: Function,
  error: Boolean,
  isLoading: Boolean,
});
const isErrorShown = computed(() => props.error);
const isLoadinShow = computed(() => props.isLoading);
const refEmail = ref(props.email);
const refPass = ref(props.pass);
const type = ref("password");
const icon = ref("bi-eye-slash");
const changeInputType = () => {
  if (type.value == "password") {
    type.value = "text";
    icon.value = "bi-eye";
  } else {
    type.value = "password";
    icon.value = "bi-eye-slash";
  }
};
</script>
<style></style>
