# ---------- Dependencies ----------
FROM node:20-alpine AS deps

WORKDIR /app

RUN corepack enable
RUN corepack prepare pnpm@10.29.3 --activate

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

# ---------- Builder ----------
FROM node:20-alpine AS builder

WORKDIR /app

RUN corepack enable
RUN corepack prepare pnpm@10.29.3 --activate

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN pnpm build

# ---------- Runner ----------
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3100

# Create a non-root user
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

# Copy only the standalone build
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

USER nextjs

EXPOSE 3100

CMD ["node", "server.js"]