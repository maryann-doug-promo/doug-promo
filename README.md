# vva
VVA (Voters Voice Ammendment) webpage

## Code Stack
- Next.js 14.2.2+
<!-- - Sass 1.75.0+ -->
- Postgres
- Prisma 5.12.1+
- Vercel host
- Github https://github.com/maryann-doug-promo/doug-promo.git

## Database
- Database: mary_ann_doug
- NOTE: The database for mary and doug are linked
- SOOOOOOO
- There will be no migrations here ... they are all in mary-promo

```
  Log on to postgres on the command line
    psql postgres
  List databases
    \l
  Choose database 'mary_ann_doug'
    \c mary_ann_doug
  List tables
    \dt
  List columns in table 'NAME'
    \d NAME
```

```
Creating dumps of the database - RUN ON COMMAND LINE!!!

NEEDS TO BE CHANGED TO THE CORRECT VERCEL WHEN READY!!!



https://nesin.io/blog/backup-restore-vercel-postgres-database
  Dump so that it can be fully restored as is - use custom format - the below is for vercel
    pg_dump16 -d 'postgres://default:FtumRq5VTk0N@ep-spring-night-a42es172-pooler.us-east-1.aws.neon.tech/verceldb?sslmode=require' -Fc -f "mary_ann_doug_{DATE}.dmp"

  I DON"T KNOW HOW THIS WORKS YET!!!
  Restore the database from a custom formatted dump - for VERCEL. this should work but you would need to double check
  Also you need to completely clean up the vercel database before doing this
    FIGURE OUT AGAIN ON CHATGPT

```

```
TO CREATE THE DB LOCALLY AND CHECK IT
  -createdb -h localhost -p 5432 -U your_username new_database_name
  -pg_restore -h localhost -p 5432 -U your_username -d new_database_name --verbose /path/to/your/dumpfile.dump
```

## Using Prisma as your ORM

```
  PRISMA in shared location
    npx prisma generate --schema=./shared/prisma/schema.prisma


  I THINK YOU ARE GOING TO NEED
      --schema=./shared/prisma/schema.prisma
  EVERYWHER!!!!!!

  npx prisma init // First creates the prisma things you need to attach to database
  npx prisma db pull // pull an already made database back into a schema in prisma
  npx prisma studio --schema=./shared/prisma/schema.prisma // shows the database in a webpage so you can pick it apart
  npx prisma generate --schema=./shared/prisma/schema.prisma // MUST DO EVERY TIME YOU CHANGE THE DB

  To update the database with Prisma
  --update the schema manually
  npx prisma format  // Formats the schema or something
  IF IN DEV
  npx prisma migrate dev --name {MIGRATION NAME YOU CHOOSE}    // to push schema to DEV
  Review it --chat gpt said we should
  IF IN PRODUCTION
  npx prisma migrate dev --create-only
  npx prisma migrate deploy

  UPDATE THE CLIENT!
  npx prisma generate
  
  push the schema to the DB
  npx prisma db push



  To initialize and use Prisma if you already have the schema but no interactions
  npx prisma generate
  -create a lib folder
  -make a prisma.ts file
    -Look at the prisma.ts file here as a guide


    login db stuff on vercel
  psql "postgres://default:FtumRq5VTk0N@ep-spring-night-a42es172-pooler.us-east-1.aws.neon.tech/verceldb?sslmode=require"

```

## Connect vercel and get .env

```
vercel logout
vercel login
  continue with github --- YOU MUST BE SIGNED IN TO THE GITHUB FOR votersvoiceamendment ON YOUR BROWSER!
vercel link
  do yes, yes, yes to link
vercel env pull .env.local
  Add this stuff to the .env file
  
```

## Prerequisites
- bun 1.0.25+

## Install and use bun 1.0.25

```
curl -fsSL https://bun.sh/install | bash -s "bun-v1.0.25"

-Follow the commands the terminal prints out
```

## Initialize Bun for the project
```
bun init
```

## Install Dependencies

```
bun install
```

## Run Dev Server

```
bun run dev
```

## Build Project

```
bun run build
```

## Start built project

```
bun start
```

## Getting Started

```
bun dev
```

## Build a secret variable using the terminal
```
openssl rand -hex 32
```
