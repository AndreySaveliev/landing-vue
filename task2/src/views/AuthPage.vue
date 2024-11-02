<template>
  <AuthForm :email :pass :login :error :isLoading />
</template>
<script setup>
import { ref } from "vue";
import AuthForm from "./../components/AuthForm.vue";
import { useRouter } from "vue-router";

const email = ref("michaelw");
const pass = ref("michaelwpass");
const error = ref(false);
const isLoading = ref(false);
const router = useRouter();
import { store } from "./../store/store.js";

// логика авторизации.
// но из за того как работает API
// не все поля нам нужны

const login = async (login, pass) => {
  isLoading.value = true;
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: login,
      password: pass,
    }),
  });
  console.log(res);
  if (res.ok) {
    const data = await res.json();
    store.user = data;
    router.push("/profile");
    isLoading.value = false;
  } else if (res.status == 400) {
    error.value = true;
  } else {
    throw new Error("Unhadled error");
  }
};
</script>
<style></style>
