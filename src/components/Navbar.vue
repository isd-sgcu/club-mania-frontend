<template>
  <div class="headbar container h-64px backdrop-blur-14px overflow-hidden flex">
    <h2>Club Mania</h2>
    <ol class="flex">
      <li>
        <router-link :to="'#'">
          วิชาการ
        </router-link>
      </li>
      <li>
        <router-link :to="'#'">
          ศิลป์วัฒน์
        </router-link>
      </li>
      <li>
        <router-link :to="'#'">
          กีฬา
        </router-link>
      </li>
      <li>
        <router-link :to="'#'">
          พัฒน์
        </router-link>
      </li>
    </ol>
    <div id="#searchBar">
      <span>Icon1</span> <!---Wait for adding icon plugin--->
      <input type="text" placeholder="ชื่อชมรม" />
      <span>Icon2</span> <!---Wait for adding icon plugin--->
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.headbar {
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: space-between;
}

li {
  margin-right: 48px;
}

li:last-child {
  margin-right: 0px;
}

</style>
