---
title: "Document Your Sh*t"
description: "I don't even know why this is a thing we're even debating."
date: "2026-09-18"
tags: ["engineering", "leadership"]
---

👆🏼

I don't really think I should have to say any more on the subject, but here we go...

**Document you shit; it's not for you.** You wrote the feature, made the update, or fixed a bug, and you know exactly what got
built and why. The documentation is for the next dev, to help with onboarding new devs, and to generally keep track
of features, fixes, and work in progress.

In my experience, documentation largely falls at the end of the engineering process. Even for companies/devs that run
most of their coding workflow through AI[^don't] skip the documentation process because it takes more time (or tokens).

Documentation comes in many forms. Most of the time we think about markdown files in a repo, or something like [Storybook](https://storybook.js.org/)
to aid in feature construction, but it's also about [docBlocks](https://gomakethings.com/guides/docblock/), inline comments,
TODO notes, and proper commit messaging. And this is why code standards can be helpful and why leveraging something like
TypeScript to be more explicit about a function's behavior.

If you've gotten this far expecting me to tell you how to document, well, you're out of luck. It's up to you to figure out
what you team needs, how your devs work, and what will help reduce technical debt going forward.

So talk to your team and go forth and document.

[^don't]: Maybe think about reducing your AI load in favor of a Pro-social AI approach.