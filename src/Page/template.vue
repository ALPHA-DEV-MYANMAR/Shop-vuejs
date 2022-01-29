<template>
  <div>
    <div class="container">
      <div class="row">
        <div>
          <button @click='reload'>Reload</button>
          <p v-for='n in names' :key="n.id">{{n}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "template",
  data() {
    return {
      names: ["foo", "bar", "baz"],
    }
  },
  methods: {
    reload() {
      this.$forceUpdate();
      console.log(this.names)
    }
  },
}
</script>

<style scoped>

</style>