<template>
  <div class="flex justify-center w-full h-28 bg-brand-main">
    <header-logged />
  </div>
</template>
<script>
import HeaderLogged from '../../components/HeaderLogged'
// import useStore from '../../hooks/useStore'

export default {
  components: { HeaderLogged }

}
// const store = useStore('User')
// console.log(store.currentUser.name)

</script>