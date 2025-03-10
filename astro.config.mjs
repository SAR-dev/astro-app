// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import partytown from "@astrojs/partytown";

import db from "@astrojs/db";

import auth from "auth-astro";

import deno from "@deno/astro-adapter";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: deno(),
  integrations: [react(), partytown(), db(), auth()]
});