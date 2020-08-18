# aneken.xyz
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Deployment
Before deploy, checkout the staging link
https://aneken-xyz.vercel.app/

Currently hosting this site with aws s3.
```
npm install -g s3-deploy
// update ~/.aws/credentials with the correct credentials or profile
npm run release
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### References
* [Prismic JS Client Documentation](https://github.com/prismicio/prismic-javascript#readme)
* [Prismic API GraphQuery Documentation](https://prismic.io/docs/rest-api/query-the-api/graphquery)
