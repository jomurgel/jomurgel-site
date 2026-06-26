---
type: "writing"
title: "Building My Todo App: T◩DY"
description: "A two-day React Native build, made to prove a point more than to ship a product."
date: "2024-09-06"
tags: [
  "react",
  "react native"
]
---

I'm on the job market, and I've got the problem a lot of senior engineers have: almost everything I've built for the last six or seven years is proprietary. I can talk about it, but I can't show it. So I set out to put something public on the table — a couple of days of work to prove I can actually do React Native, not just say I can.

That something is T◩DY. On the surface it's a todo app. Underneath it's Expo, React Native, TypeScript, and Redux, with [Supabase](https://supabase.com) handling data in realtime, and I've started wiring up tests.

The idea isn't new to me — I've been running it on paper for a while. I keep the day's tasks in one of three states: to do, partially done, and done. Each morning I start a fresh list, the partially-done tasks float to the top, and I add whatever's new. Rinse, repeat. I couldn't find an app that worked that way, so I built one.

Here's where it landed. There's basic auth tying you to your phone and your lists, a signup flow, the ability to create lists and todos and toggle a task's state with a tap, a sign-out flow, and a theme switcher — that last one isn't a requirement, I just wanted to show off a little context-provider work.

<video controls loop style="max-width: 300px;" data-align="center">
  <source src="/hidden/tdy-video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

And here's what it isn't. The design needs work; I've got comps in progress. The login flows beyond basic auth — Google, Apple, the usual — aren't in yet. The bit that carries tasks from one day to the next works, but it's messy under the hood. And I'm not sold on the create-a-list flow: I'd rather you swipe between lists than tap into them, but I haven't proven that out.

Here's the honest part. I built this to demonstrate a skill, not to launch a company, and it did that. Whether I ever come back and finish it, I genuinely don't know — and I've made my peace with that. Sometimes the whole point of a thing is the building of it.

[GitHub repo](https://github.com/jomurgel/t.dy)
