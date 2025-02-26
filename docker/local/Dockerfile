FROM node:18-alpine

ENV PORT 3000

WORKDIR /var/services/app

COPY package.json package-lock.json ./
RUN npm install && npm install pm2 -g

# ecosystem.config.js 파일을 먼저 복사
COPY ecosystem.config.js ./

# 나머지 파일들 복사
COPY . .

# 빌드 실행
RUN npm run build

CMD ["pm2-runtime", "start", "./ecosystem.config.js"]