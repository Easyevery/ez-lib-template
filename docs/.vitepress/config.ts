import { defineConfig } from 'vitepress';

//github仓库名称
const repo = 'ez-lib-template';

const isProd = process.env.NODE_ENV === 'production';
const base = isProd ? `/${repo}/` : '/';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
});
