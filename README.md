# VineDev Animation Library (VAL)

A simple, but expandable, library for bare-bone animations and default scroll trigger functionalities. 

# Getting Started

- [Getting Started Guide](https://github.com/marcandrelavigne/vinedev-animation-library/wiki/Getting-Started-Guide)
- [Demos](https://github.com/marcandrelavigne/vinedev-animation-library/wiki/Demos)

# Dist / Src

On production, use files (JS and CSS) only from `dist/` folder. Files located in the `src/` folder is only for the library development purpose.

### Build the library

VAL uses `webpack` to build a production (dist) version.

First you need to install all dependencies, in the repo’s root:

```
yarn install
```

Then you can build the library for production:

```
yarn build
```

Production build will available in `dist/` folder.

### Import Package
In your project, you can import the `index.js` file located in the repo’s root to include both the builded JS and the CSS at once. Ex.: 
```
import('vinedev-animation-library')
```

# Changelog
Coming soon