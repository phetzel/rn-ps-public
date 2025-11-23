---
slug: cross-stack-parity
title: Chasing Web ↔ Mobile Parity
authors: [phetzel]
tags: [devlog, learnings]
---

I wanted Press Office’s mobile codebase to mirror my web stack (Next.js App Router + Tailwind + shadcn). Here’s what worked—and what did not.

<!-- truncate -->

## Expo Router parallels

- File-based routing made it easy to port mental models from Next.js, especially for nested layouts and modals.
- Deep linking + tabs required a bit more ceremony than the web, but route groups kept things organized.

## Nativewind + React Native Reusables

- Nativewind + `tailwind-merge` gave me utility-first styling with familiar class names.
- The `@rn-primitives` (shadcn-inspired) components mapped nicely to the design tokens I use on the web.
- Biggest gap: no “v0” style builder for mobile, so every component still needs hand-tuned spacing and accessibility work.

## v0 in Figma land?

I experimented with Vercel’s v0 designer to mock mobile screens, but it’s still rooted in web assumptions (pixel-perfect divs, no SafeArea, etc.). For now, I’m sticking to Figma + Storybook and manually porting patterns.

If you have tips for bridging the web/mobile component gap, I’d love to hear them—reach out via the README links.

