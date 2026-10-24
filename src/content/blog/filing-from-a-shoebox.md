---
title: 'Filing from a shoebox'
category: 'Operations'
date: 2026-08-11
readTime: '4 min'
excerpt: 'How to think about moving a decade of client paperwork into ADMS without losing a thing \u2014 and why the first pass does not need to be perfect.'
featured: false
cover: '/assets/blog/what-we-will-not-automate.webp'
coverAlt: 'Soft folded surface in low light'
author:
  name: 'Richard'
  role: 'Developer, Adapdev'
  avatar: '/assets/blog/avatar-jonas-meyer.webp'
  avatarAlt: 'Richard'
---

Nobody who has been in business for ten years has tidy filing. The useful
documents are scattered across:

- A **Documents\\Clients\\** folder tree with inconsistent naming.
- A **Downloads** folder with the three most recent drafts of everything.
- An **email inbox** holding the signed PDFs as attachments.
- A **physical shoebox** (sometimes literal) of receipts, invoices and
  signed originals.
- The **accountant's filing**, in whatever format the accountant uses.

The first instinct \u2014 "we'll clean this up before we load it into ADMS"
\u2014 is the thing that keeps the shoebox a shoebox for another five years.

## The first pass does not need to be perfect

ADMS imports folders. Point the desktop client at
`C:\\Users\\you\\Documents\\Clients`, and in five minutes it has read every
file, derived a client from the top-level folder name, and filed everything
with a searchable index.

Is the client-name derivation always right? No. Will some files land under
the wrong client? Yes. Does any of that matter?

Not really \u2014 because you now have **a searchable index** of ten years of
paperwork, and the misfiled ones get moved as you encounter them. This is
the opposite of the SaaS onboarding model, which tends to insist you fix
everything up front; the on-premises model is "import now, tidy as you go,
and you are already in a better position than yesterday."

## A migration checklist

1. **Snapshot the current filesystem first** (a copy of
   `C:\\Users\\you\\Documents\\Clients`). ADMS doesn't delete the source,
   but you'll want a known-good baseline.
2. **Import the whole folder at once.** Don't try to pre-sort.
3. **Spot-check ten clients.** Open their matter folders in ADMS and
   look for misfilings.
4. **Fix the misfilings with drag-and-drop** inside ADMS; the audit log
   records every move.
5. **Add the email attachments next.** The Outlook add-in lets you save
   straight to a matter from an open email.
6. **Keep the shoebox for the receipts you need to scan.** Scan them in
   batches as you have time; the import flow treats a batch of PDFs
   exactly the same as a batch of Word documents.

A week in, the shoebox is empty. Six months in, you have forgotten you
ever had one.
