# WhenIsF1.at

WhenIsF1.at a small project to help you check the F1 schedule without being accidentally spoiled.

It uses data from the Motor Racing Developer API at [Ergast.com](https://ergast.com/mrd/)

It is built using [Astro](https://astro.build).

The project is rebuilt every monday morning, fetching new information from the API, using a deploy hook from Vercel and a cronjob at [cron-job.org](https://cron-job.org/)

## 🧞 Commands

| Command       | Action                                      |
| :------------ | :------------------------------------------ |
| `npm install` | Installs dependencies                       |
| `npm run dev` | Starts local dev server at `localhost:3000` |
