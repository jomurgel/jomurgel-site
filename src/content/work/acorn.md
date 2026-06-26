---
title: "Acorn"
summary: "A classless CSS baseline so a site looks finished before anyone writes a single class — and the design system this whole site is built on."
client: "Project Acorn"
role: "Designer + engineer (solo)"
year: "2024 – present"
link: "https://jomurgel.github.io/acorn.css"
linkLabel: "Acorn docs"
stack: ["CSS", "esbuild", "npm"]
ink: "c"
span: 2
order: 1
---

## The problem

The idea showed up on the last leg of a production build, close to launch. The custom design looked great — and then we started migrating older content in and watched the standard HTML elements fall through the cracks. Headings, tables, forms, `<video>`, blockquotes: all of it unstyled or stuck on browser defaults, quietly undoing an otherwise nice-looking site. Every project hit the same wall, and every team patched it a little differently.

## The approach

I didn't want another utility framework or a pile of presentational classes. I wanted the opposite — a stylesheet you *start* with, where the bare HTML already looks intentional and you only reach for a class when you genuinely need one.

So Acorn styles the elements, not your markup: fluid type that scales with the viewport, an accessible color system with WCAG AA contrast baked in rather than bolted on, sensible defaults for every tag the browser forgets about, and a small set of `data-` attributes (modeled on the Block Editor's alignment model) for the few layout cases that actually warrant them.

For v3 I rebuilt the whole thing — dropped Sass and the build complexity for plain CSS on a tiny esbuild step, added footnotes, print styles, and task lists, and repositioned it from "framework" to what it really is: the stylesheet you start with.

## Where it is

Acorn 3.0 is published to npm and runs its own docs site on GitHub Pages. It's also the foundation under *this* site — the print-shop layer you're looking at sits on top of Acorn doing the element-level work. It's the clearest example of how I like to operate: find the problem everyone keeps re-solving, build the general tool once, and make the default state the good one.
