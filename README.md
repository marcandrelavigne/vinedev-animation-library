# vinedev Animation Library (BAL)

A simple, but expandable, library for bare-bone animations and default scroll trigger functionalities. 

# Getting Started

- [Getting Started Guide](https://gitlab.com/malavigne/vinedev-animation-library/-/wikis/Getting-Started)
- [Wiki](https://gitlab.com/malavigne/vinedev-animation-library/-/wikis/home)
- [Demos](https://gitlab.com/malavigne/vinedev-animation-library/-/wikis/Demos)

# Dist / Src

On production, use files (JS and CSS) only from `dist/` folder. Files located in the `src/` folder is only for the library development purpose.

### Build the library

BAL uses `webpack` to build a production (dist) version.

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