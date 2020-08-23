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
Vercel auto-generates a preview link for each branch in the repo.
Be sure to confirm all is well on the preview link before merging to master, as production deployment will happen automatically you click the merge button.

Production url: `https://aneken-xyz.vercel.app/`

### Environment Vars
A `.env` file at the project root should be created with the following variables. If adding additional values, note that only variables prefixed with `VUE_APP_` will be injected into `process.env` by `vue-cli-service`.

```
VUE_APP_SUPPORT_EMAIL_ADDRESS=XXXXXX
VUE_APP_SUPPORT_EMAIL_PASSWORD=XXXXXX
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
