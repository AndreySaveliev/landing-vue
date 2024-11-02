<template>
  <div
    v-if="showpopup"
    class="after:absolute after:w-screen after:h-screen after:bg-black after:opacity-70 after:top-0 after:left-0"
  >
    <div
      class="absolute w-[450px] p-20 bg-green-300 z-20 h-[100px] top-1/4 -translate-x-1/2 flex flex-col items-center justify-center rounded-xl gap-3"
    >
      <p class="text-xl font-bold w-max">Вставьте ссылку на вашу аватарку</p>
      <v-icon
        @click="handleClosePopup"
        class="w-6 h-6 absolute top-1 right-1 cursor-pointer"
        name="bi-x-lg"
        fill="black"
      />
      <form
        class="flex flex-col items-center"
        @submit.prevent="handleChangeImage"
      >
        <input
          type="url"
          v-model="imageLink"
          required
          placeholder="URL картинки"
        />
        <button class="w-10 h-10" @submit="">
          <v-icon class="w-6 h-6" name="bi-check2" fill="black" />
        </button>
      </form>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import { store } from "./../store/store.js";

const props = defineProps({
  showpopup: Boolean,
  handleClosePopup: Function,
});

const showpopup = computed(() => props.showpopup);

const imageLink = ref("");

const handleChangeImage = async () => {
  if (!!imageLink) {
    try {
      const res = await fetch(`https://dummyjson.com/users/2`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image: imageLink.value,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        Object.assign(store.user, data);
        props.handleClosePopup();
      } else {
        throw new Error("Unhadled error");
      }
    } catch (error) {
      console.error(error);
    }
  }
};
</script>
<style></style>
