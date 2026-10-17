import { defineConfig } from 'vite';
import { resolve } from 'node:path';
export default defineConfig({base:'./',build:{rollupOptions:{input:{home:resolve('index.html'),experience:resolve('experience.html'),projects:resolve('projects.html'),leadership:resolve('leadership.html'),vaylo:resolve('vaylo.html')}}}});
