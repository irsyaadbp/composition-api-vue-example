<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const links = [
  {
    path: '/',
    title: 'Home'
  },
  {
    path: '/teleport',
    title: 'Teleport'
  },
  // {
  //   path: '/ref-reactive',
  //   title: 'Ref & Reactive'
  // },
  {
    path: '/computed',
    title: 'Computed'
  },
  {
    path: '/watch',
    title: 'Watch'
  },
  {
    path: '/component-reusable',
    title: 'Component Reusable'
  },
  {
    path: '/hoc',
    title: 'High Order Component'
  }
]
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Week 2 Sesi 2" />

      <nav>
        <ol>
          <li v-for="item in links" :key="`link-${item.path}`">
            <RouterLink :to="item.path">{{ item.title }}</RouterLink>
          </li>
        </ol>
      </nav>
    </div>
  </header>
  <hr class="divider" />
  <div class="page--wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  margin-top: 2rem;
}
.divider {
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-top: none;
  border-inline: none;
  border-bottom: thin solid var(--color-border);
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.page--wrapper {
  border-radius: 16px;
  display: flex;
  align-items: center;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  .divider {
    display: none;
  }
}
</style>
