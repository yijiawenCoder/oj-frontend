<template>
  <div id="BasicLayout">
    <a-layout style="height: 400px">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer"
        ><a href="https://github.com/yijiawenCoder">
          design by yijiawenCoder</a
        ></a-layout-footer
      >
    </a-layout>
  </div>
</template>

<style>
#BasicLayout {
}

#BasicLayout .header {
  margin-bottom: 16px;
}

#BasicLayout .content {
  margin-bottom: 16px;
}

#BasicLayout .footer {
  padding: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>
