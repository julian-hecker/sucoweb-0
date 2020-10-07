# Shopify Workflow
Template workflow for working locally with Shopify themes.

## About
This workflow allows you to compile and minify scss and javascript locally and instantly push changes to Shopify. Using this methodology allows you to take advantage of npm's vast collection of packages, up-to-date scss syntax, and deploys to multiple environments while still minifying everything.

## How to Use
Sucoweb Shopify Workflow depends upon Shopify's [Themekit](https://shopify.github.io/themekit/). Install on Windows using `choco install themekit`.
1. Configure your Shopify store to allow editing themes. [Read More about Theme API Credentials](https://www.shopify.com/partners/blog/95401862-3-simple-steps-for-setting-up-a-local-shopify-theme-development-environment#api-credentials)
2. Put the store and theme details in `config.yml`, with the same fields as `example.config.yml`.
   - Fill in `store`, `password`, and `theme_id`. The default `directory` is `build`.
3. Run the command `theme get` to download theme files into `directory` as set in `config.yml`.
4. Run `npm start` to start developing and pushing changes live to the server!

## Directory Structure
```bash
project
├───build # Theme files go here, to be updated live
│   ├───assets
│   ├───config
│   ├───layout
│   ├───locales
│   ├───sections
│   ├───snippets
│   └───templates
└───src # Resources here, compiled to /build
   ├───js
   └───scss
```

## Commands
- `start`: alias to `watch`.
- `dev`: uses webpack to compile assets in development mode.
- `prod`: uses webpack to compile assets in production mode.
- `watch-files`: uses webpack to watch changes in `src` and recompile.
- `watch-theme`: uses themekit to watch for changes in `build` and upload to Shopify.
- `production`: uses webpack to compile assets for production and themekit to upload to Shopify.
- `development`: uses webpack to compile assets for development and themekit to upload to Shopify.
- `pull`: uses Themekit to pull theme from Shopify.
- `push`: uses Themekit to push files to Shopify.
- `watch`: Runs `watch-files` and `watch-theme` simultaneously, to instantly compile and push code changes to Shopify.

## Credit
- Webpack config from [https://github.com/Youfront/shopify-development-boilerplate]
