This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run using Docker

```bash
docker build -t first-steps-next .

docker container run -p 3000:3000 first-steps-next

```

Open [https://nextjs.org/docs/pages/building-your-application/deploying#docker-image](Docker Image) docker setup/config recommendations