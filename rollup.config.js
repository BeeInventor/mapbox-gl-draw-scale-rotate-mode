import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';


export default [
  {
    input: 'src/index.js',
    plugins: [
      image(),
      resolve(),
      commonjs(),
    ],
    output: {
      file: 'dist/index.js',
      format: 'es',
      exports: 'named',
      name: 'ScaleRotateMode',
      sourcemap: process.env.NODE_ENV !== 'production',
    },
    external: ['@mapbox/mapbox-gl-draw', '@turf/turf']
  },
];
