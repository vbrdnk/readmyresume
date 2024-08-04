/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: [
    "prettier-plugin-tailwindcss",
    "@trivago/prettier-plugin-sort-imports",
  ],
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^react/(.*)$",
    "^next/(.*)$",
    "^@/server/(.*)$",
    "^@/trpc/(.*)$",
    "^@/types/(.*)$",
    "^@/utils/(.*)$",
    "^@/env/(.*)$",
    "^@/components/(.*)$",
    "@/styles/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

export default config;
