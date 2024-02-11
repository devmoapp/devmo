# DEVMO

Motivational App for Jr Developers to track their time working on projects and promote continuing thir studies!

Current stage: **Early Development**

[Trello Board](https://trello.com/u/tabu60/boards)

[Github Repo](https://github.com/devmoapp/devmo)

To get started run:
```bash
npm run dev
```

## Current MVP (minimum viable product)
```
- Users can create projects
- Users can add "features" to projects
- Project & feature time is tracked
- Users can invite 1 to 2 members to collaborate on a project
- Projects list who is working on a feature and their time spent working
- Projects show daily goals with motivational feedback
- Time spend can show in different ways such as "10 hours on project or 5 toy batteries"
- Users can list & link that they are following a tutorial and show time spent

===============================================
- More advanced options (later implementation) with feature boards, real time messaging if on a team, and dead line goals per feature
```


## How to set up env.local
- Run `npx convex dev` select new project or if you already created a devmo project on convex.dev select that
- It will add the convex connection variables for you
- Next access clerk, create a new application. 
  - Fields needed: email, google, github
- Copy the fields into your .env.local