import { defineStore } from "pinia"

export let useNotificationStore = defineStore({
  id: 'notification-store',
  state: () => {
    return {
      title: '',
      color: '',
      messages: [],
      show: false
    }
  },
  getters: {
    getTitle: state => state.title,
    getColor: state => state.color,
    getMessages: state => state.messages,
    getShow: state => state.show,
  },
  actions: {
    /**
     * Sends a Success Notification Pop-up.
     * 
     * @param {array} messages Messages.
     * 
     * @return {void}
     */
    sendSuccessNotification(messages) {
      this.title = 'Sucesso'
      this.color = 'success'
      this.messages = messages
      this.show = true
    },
    /**
     * Sends a Warning Notification Pop-up.
     * 
     * @param {array} messages Messages.
     * 
     * @return {void}
     */
    sendWarningNotification(messages) {
      this.title = 'Aviso'
      this.color = 'warning'
      this.messages = messages
      this.show = true
    },
    /**
     * Sends a Error Notification Pop-up.
     * 
     * @param {array} messages Messages.
     * 
     * @return {void}
     */
    sendErrorNotification(messages) {
      this.title = 'Erro'
      this.color = 'error'
      this.messages = messages
      this.show = true
    },
    /**
     * Closes notification pop-up.
     * 
     * @return {void}
     */
    closeNotification() {
      this.title = ''
      this.color = ''
      this.messages = []
      this.show = false
    }
  },
})