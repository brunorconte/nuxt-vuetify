import axios from 'axios'
import { useNotificationStore } from '@/store/notification'


export default defineNuxtPlugin(nuxtApp => {
  let notify = useNotificationStore()

  let instance = axios.create({
    baseURL: useRuntimeConfig().public.apiBase,
    timeout: 60000,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    withCredentials: true,
  });

  instance.interceptors.request.use(async (config) => {
    let token = localStorage.getItem('token')
  
    // Configure Headers
    config.headers =  {
      Authorization: `Bearer ${token}`
    };
  
    return config
  })

  instance.interceptors.response.use(response => {
    if (response.config.url === 'login') {
      let token = response.headers.authorization
      instance.defaults.headers.common.Authorization = 'Bearer ' + token
      localStorage.setItem('token', token)
    }
    notify.sendSuccessNotification(response.data.messages)
    return response
  }, error => {
    notify.sendErrorNotification(error.response.data.messages)
    return Promise.reject(error.response)
  })
  
  return {
    provide: {
      axios: instance,
    },
  };
});