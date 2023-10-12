<template>
  <v-snackbar
    v-model="showUp"
    :color="snackbarColor"
    elevation="24"
    location="bottom right"
  >
    <p>
      {{ (title) }}
    </p>
    <br>
      <p
        v-for="message in messages"
        :key="message"
      >
        {{ message }}
      </p>
    <template v-slot:actions>
      <v-btn
        icon
        @click="showUp = false"
      >
        <v-icon icon="mdi-close" />
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
  // Define Notification Store.
  import { useNotificationStore } from '@/store/notification';
  let notificationStore = useNotificationStore()

  // Define component variables.
  let showUp = computed({
    get () {
      return notificationStore.getShow 
    },
    set (value) {
      if (!value) { notificationStore.closeNotification() }
    }

  }
  )
  let snackbarColor = computed(() => notificationStore.getColor)
  let title = computed(() => notificationStore.getTitle)
  let messages = computed(() => notificationStore.getMessages)
</script>