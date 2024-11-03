<template>
  <AuthForm :email :pass :login :error :isLoading />
</template>
<script setup>
import { ref, onMounted } from "vue";
import AuthForm from "./../components/AuthForm.vue";
import { useRouter } from "vue-router";

const email = ref("michaelw");
const pass = ref("michaelwpass");
const error = ref(false);
const isLoading = ref(false);
const router = useRouter();
import { store } from "./../store/store.js";

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
  if (res.ok) {
    const data = await res.json();
    Object.assign(store.user, data);
    localStorage.setItem("accessToken", data.accessToken);
    router.push("/profile");
    console.log(store.user);
    isLoading.value = false;
  } else if (res.status == 400) {
    error.value = true;
  } else {
    throw new Error("Unhadled error");
  }
};
</script>
<style></style>
