# Test upload proxy

This repo is for testing nitro proxy request issue with FormData request.

https://github.com/unjs/nitro/issues/1137

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

```bash
NODE_OPTIONS='--no-experimental-fetch' pnpm run dev
```

## Start test server

```bash
node test-server.js
```


