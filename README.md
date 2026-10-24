# @x12i/memorixassembler usage example

Assembles clean, data-only graph input from Memorix content types: merges 1:1 types (core, snapshots) and collects 1:n types as named arrays, all keyed by record identity.

This consuming application demonstrates **resolve an identity query with the historical assembler package** using the published npm package, pinned to `1.1.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Assemble graph input for a consumer pinned to this older package name.
- Merge one-to-one content types and retain one-to-many arrays.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/memorixassembler)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Validation scope

This example uses synthetic records and local callbacks or in-memory state. It checks the demonstrated consumer behavior of the pinned npm release. It does not connect to MongoDB, Catalox, a device, an AI provider, or a deployed pipeline service.
