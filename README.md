# READ THIS FIRST!

Adapter Vercel Build Error Reproduction

## Building
```bash
npm i -g pnpm
```

`pnpm` commands run in the project's root directory will run on all sub-projects. You can checkout the code and build all sub-projects with:

```bash
git clone git@github.com:cryptodeal/BallerAnalytics.git
cd BallerAnalytics
pnpm install
pnpm build
```

## Notes: 

@sveltejs/adapter-vercel version 1.0.0-next.63 build succeeds locally, but fails when deployed to vercel. Here are links to the [build log](/errors/adapter-vercel_1.0.0-next.63.txt).

@sveltejs/adapter-vercel version 1.0.0-next.62 build succeeds locally and on vercel (with the noisy errors prior to cleanup merged in version 1.0.0-next.63). Here are links to the [build log](/errors/adapter-vercel_1.0.0-next.62.txt).

