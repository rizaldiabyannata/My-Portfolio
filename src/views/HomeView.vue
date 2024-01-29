<template>
  <div>
    <NavbarComp></NavbarComp>
    <HeroComp></HeroComp>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
import HeroComp from "@/components/HeroComp.vue";
import FooterComp from "@/components/FooterComp.vue"

export default {
  components: {
    NavbarComp,
    HeroComp,
    FooterComp,
  }
}
</script>

