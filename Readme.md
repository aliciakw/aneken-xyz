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
For local development, create a `.env` file at the project root with the following values.
Be sure to set these values in Vercel as well for the production and preview environments.

```
VUE_APP_SUPPORT_EMAIL_ADDRESS=XXXXXX
VUE_APP_SUPPORT_EMAIL_PASSWORD=XXXXXX
```

If adding additional values, be sure to prefix them with `VUE_APP_` so that Vue CLI will automatically inject them into `process.env`.

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### References
* [Prismic JS Client Documentation](https://github.com/prismicio/prismic-javascript#readme)
* [Prismic API GraphQuery Documentation](https://prismic.io/docs/rest-api/query-the-api/graphquery)
