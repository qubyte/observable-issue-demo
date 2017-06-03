import resolve from 'rollup-plugin-node-resolve';

export default {
  format: 'es',
  plugins: [resolve()],
  dest: 'bundle.js'
};
