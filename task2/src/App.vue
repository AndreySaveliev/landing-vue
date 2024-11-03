<script setup>
import { RouterView } from "vue-router";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { store } from "./store/store.js";

const router = useRouter();
onMounted(() => {
  const accessToken = localStorage.getItem("accessToken");

  const getAuth = async () => {
    const res = await fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (res.status == 200) {
      const response = await res.json();
      console.log(response);
      router.push("/profile");
      Object.assign(store.user, response);
      localStorage.setItem("accessToken", store.user.accessToken);
      localStorage.setItem("refreshToken", store.user.refreshToken);
    }
  };

  if (accessToken != "undefined") {
    getAuth();
  } else {
    router.push("/");
  }
});
</script>
<template>
  <RouterView />
</template>

<style scoped></style>
