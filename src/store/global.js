import { reactive } from 'vue'

const state = reactive({
  isLoading: false
})
// exporta a função state para global
export default state

export function setGlobalLoading (status) {
  state.isLoading = status
}