# MyApp

## Start

```
npm init -y

npm i @prisma/client
npm i prisma -D
npm i @faker-js/faker -D

npx prisma init --datasource-provider mysql
npx prisma migrate dev --name init

npx prisma db seed  
```
