<template>
  <section>
    <div>
      <Logo :width="350" />
      <h1 class="title">NUXT<span class="green">JS</span></h1>
      <h2 class="subtitle">Starter for CodeSandBox</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green"
          >Documentation <IconLink
        /></a>
        <NLink to="/about" class="button--grey">About</NLink>
      </div>
      <div style="margin:1rem;">
        <ul style="text-align:left">
          <li v-for="(item, key) in posts" :key="key">
            <h2>{{ item.fields.title }}</h2>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";
import IconLink from "~/components/IconLink.vue";

import { createClient } from "~/plugins/contentful.js";

const client = createClient();

export default {
  components: {
    Logo,
    IconLink,
  },
  // `env` is available in the context object
  asyncData({ env }) {
    return Promise.all([
      // fetch the owner of the blog
      client.getEntries({
        "sys.id": "15jwOBqpxqSAOy2eOO4S0m",
      }),
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: "course",
        order: "-sys.createdAt",
      }),
    ])
      .then(([entries, posts]) => {
        // return data that should be available
        // in the template
        return {
          person: entries.items[0],
          posts: posts.items,
        };
      })
      .catch(console.error);
  },
};
</script>

<style scoped>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #2E495E;
  letter-spacing: 1px;
  font-size: 6em;
}
.green {
  color: #00C48D;
}

.subtitle {
  font-weight: 300;
  font-size: 3em;
  color: #2E495E;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
