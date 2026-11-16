---
title: 'Hello from Adapdev'
category: 'Product'
date: 2026-10-09
readTime: '2 min'
excerpt: 'The first post on the Adapdev blog — what we build, how, and what we have planned.'
featured: false
cover: '/assets/blog/backlog-is-a-queue-problem.webp'
coverAlt: 'Abstract soft folded surface'
author:
  name: 'Richard'
  role: 'Developer, Adapdev'
  avatar: '/assets/blog/avatar-jonas-meyer.webp'
  avatarAlt: 'Richard'
---

Welcome to the Adapdev blog. This is where product release notes, short
technical write-ups, and the occasional note on Australian small-business
software land first.

## What Adapdev is

Adapdev is a Brisbane software partnership. We build full-fit custom
software for Australian small business — the kind of work that doesn't
fit a per-seat SaaS, and shouldn't have to. Two products sit alongside
the bespoke practice:

- **ADMS — Adapdev Document Management System.** Client-, matter- and
  job-centric document management for sole traders, small businesses and
  small/medium law firms. On-premises, integrated with Office, and in
  daily use today. See `/adms` for the product site.
- **Home Dialysis Tracker.** In development for 2027. A small, careful
  logbook for people doing their own haemodialysis at home — pre/post
  session vitals, machine readings, fluid balance, and a report their
  nephrology team can read. Local-first and patient-owned, in the same
  way ADMS is.
- **Bespoke engagements.** When neither product fits, we still build.
  Fixed-price per scope, local-first by default, written runbook on the
  way out.

## What's here

- **Product release notes** for ADMS — and, in time, for the Home
  Dialysis Tracker.
- **Short essays** on building on-premises software in 2026 for a
  market that isn't well-served by subscription-only SaaS.
- **Practical pieces** — how to migrate a shoebox of client files into
  something searchable; how to think about backup when the data is
  yours; what the Privacy Act actually requires of a small firm.

If any of that is useful, the RSS feed is at [/blog/rss.xml](/blog/rss.xml).

## About the stack

ADMS is a .NET 9 application. The server-side is a REST API with a SQLite
or SQL Server back end; the client is a WPF desktop app built on the
Prism framework. It integrates with Microsoft Office so documents can be
saved to the right client, matter or job from inside Word, Outlook, Excel
and PowerPoint.

The Home Dialysis Tracker will share that same spine: local data,
occasional sync to the renal unit when the patient asks for it, a stack
we can live with for a decade of maintenance.

More to come.
