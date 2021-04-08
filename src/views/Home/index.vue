<template>
  <custom-header @create-account="handleCreateAccount" @login="handleLogin" />
  <contact />
  <!-- py = padding eixo y , ver configurações no arquivo tailwind -->
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">feedbacker ©️ 2021</p>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import CustomHeader from './CustomHeader.vue'
import Contact from './Contact.vue'
import useModal from '../../hooks/useModal'

export default {
  components: { CustomHeader, Contact },
  setup () {
    const router = useRouter()
    const modal = useModal()

    onMounted(() => {
      const token = window.localStorage.getItem('token')
      if (token) {
        router.push({ name: 'Feedbacks' })
      }
    })

    // no vue 2 utilizaria this.$router no vue 3 pode add da mesma forma que no 2 ou do modo abaixo
    function handleLogin () {
      modal.open({
        component: 'ModalLogin'
      })
    }
    function handleCreateAccount () {
      modal.open({
        component: 'ModalCreateAccount'
      })
    }
    return {
      handleLogin,
      handleCreateAccount
    }
  }
}
</script>
<style></style>