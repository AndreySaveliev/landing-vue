<template>
  <div class="w-full flex flex-col mx-auto items-center">
    <h1 class="text-6xl font-semibold mb-8">Профиль</h1>
    <Popup :showpopup :handleClosePopup />
    <img class="w-40 h-40 mb-4" alt="profileIcon" :src="store.user.image" />
    <button class="bg-green-500 p-3 rounded-md mb-10" @click="handleOpenPopup">
      Редактировать аватар
    </button>
    <form class="flex flex-col">
      <input class="border-2" placeholder="Имя" :value="store.user.firstName" />
      <input
        class="border-2"
        placeholder="Фамилия"
        :value="store.user.lastName"
      />
      <input class="border-2" placeholder="Возраст" :value="store.user.age" />
      <!-- из за того что бесплатное API которым я пользуюсь -->
      <!-- возвращет ненужные поля я захардкодил значение профессии -->
      <input class="border-2" placeholder="Профессия" value="Шахтер" />
      <input class="border-2" placeholder="Email" :value="store.user.email" />
      <input class="border-2" placeholder="Телефон" :value="store.user.phone" />
    </form>
  </div>
</template>
<script setup>
import { store } from "./../store/store.js";
import Popup from "./../components/Popup.vue";
import { ref, onMounted } from "vue";

const showpopup = ref(false);

const handleOpenPopup = () => {
  showpopup.value = true;
};

const handleClosePopup = () => {
  showpopup.value = false;
};

onMounted(() => {
  const getUserData = async () => {
    console.log("lol");
    const res = await fetch("https://dummyjson.com/users/2");
    if (res.status == 200) {
      const response = await res.json();
      console.log(response);
      Object.assign(store.user, response);
      console.log(store.user, "user");
    }
  };
  getUserData();
});
</script>
<style></style>
