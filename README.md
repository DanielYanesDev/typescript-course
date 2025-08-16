# TypeScript Course

<div style="display: flex; justify-content: flex-start; align-items: center; gap: 20px;">
  <img src="./doc/typescript-image.webp" alt="Typescript logo" width="250px" height="100px" style="border-radius: 10px;"  />
  Practices of TypeScript Course.
</div>

## Run and Build

For run only change the file to work on `package.json` with `start` and `dev` scripts.

```json
{
  "scripts": {
    "build": "tsc",
    "start": "node practices/build/fileToWork.js",
    "dev": "ts-node-dev --respawn --transpile-only practices/fileToWork.ts"
  }
}
```

By default the `build` script compiles all files located in the `practices` folder into `practices/build`.
