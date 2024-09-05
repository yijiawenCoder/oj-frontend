<template>
  <a-row
    id="globalHeader"
    style="margin-bottom: 16px"
    align="center"
    :wrap="false"
  >
    <a-col flex="auto">
      <div>
        <a-menu
          mode="horizontal"
          :selected-keys="selectedKeys"
          @menu-item-click="doMenuClick"
        >
          <a-menu-item
            key="0"
            :style="{ padding: 0, marginRight: '38px' }"
            disabled
          >
            <div class="title_bar">
              <img class="logo" src="../assets/logo.png" />
              <div class="title">湖商OJ</div>
            </div>
          </a-menu-item>
          <a-menu-item v-for="item in visibleRoutes" :key="item.path">
            {{ item.name }}
          </a-menu-item>
        </a-menu>
      </div>
    </a-col>
    <a-col flex="100px">
      <a-avatar :style="{ backgroundColor: '#14a9f8' }">
        {{ store.state.user.loginUser.userName }}
      </a-avatar>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
import router from "@/router";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const selectedKeys = ref(["/"]);
const route = useRouter();
const store = useStore();
console.log(store.state.user.loginUser.userName);
setTimeout(() => {
  store.dispatch("user/getLoginUser", {
    userName: "yjw",
  });
}, 3000);
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
const visibleRoutes = routes.filter((item, index) => {
  if (item.meta?.hideInMenu) {
    return false;
  }
  return true;
});
</script>

<style scoped>
.title_bar {
  display: flex;
  align-items: center;
}

.title {
  color: #444;
  margin-left: 16px;
}

.logo {
  height: 48px;
}
</style>
