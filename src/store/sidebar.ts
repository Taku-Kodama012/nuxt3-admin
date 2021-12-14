import { defineStore } from 'pinia'

export const useSidebar = defineStore('sidebar', {
  state: () => ({
    toggleState: true,
  }),
  actions: {
    setSidebarToggle() {
      this.toggleState = !this.toggleState
    },
  },
})
