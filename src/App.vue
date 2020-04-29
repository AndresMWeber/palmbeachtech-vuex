<template>
  <div id="app">
    <h1>Recipes app</h1>
    <h3>Filters</h3>
    <ul style="list-style-type: none;">
      <li>
        <label>
          <input v-model="filter" type="radio" value="all" />
          All
        </label>
      </li>
      <li>
        <label>
          <input v-model="filter" type="radio" value="lowcal" />
          All
        </label>
      </li>
      <li>
        <label>
          <input v-model="filter" type="radio" value="easy" />
          Easy
        </label>
      </li>
      <li>
        <label>
          <input v-model="filter" type="radio" value="asian" />
          Asian
        </label>
      </li>
    </ul>

    <h3>Recipes</h3>
    <ul>
      <li v-for="recipe in recipes" :key="recipe.id">{{ recipe.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      filter: "all",
    };
  },
  computed: {
    recipes() {
      if (this.filter !== "all") {
        return this.$store.getters[this.filter];
      }
      return this.$store.state.recipes;
    },
  },
  created() {
    this.$store.dispatch("getRecipes");
  },
};
</script>

<style></style>
