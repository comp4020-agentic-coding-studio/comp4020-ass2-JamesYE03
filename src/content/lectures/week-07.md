---
title: "Chain of custody"
description:
  Content provenance, the C2PA standard, and what it means to sign a file's
  history rather than guess at it
week: 7
date: 2027-04-05
teachers:
  - jonah-whitfield
slides: /decks/week-07/
related:
  - sessions/case-07-the-full-workup
  - assessments/the-full-workup
links:
  - label: "C2PA Content Credentials Explainer (official spec)"
    url: https://spec.c2pa.org/specifications/specifications/2.4/explainer/Explainer.html
  - label: "Content Credentials, explained (video)"
    url: https://www.youtube.com/watch?v=3a77u--YRQE
---

Everything up to this week has been guesswork with increasingly good
instruments: infer, from the artefact itself, whether it was likely made or
altered by a machine. The Coalition for Content Provenance and Authenticity
(C2PA) tries something different — record the truth at the moment of
creation, cryptographically, so nobody downstream has to guess. A signed
manifest travels with the file: who or what made it, what tools touched it,
what was edited and when. It is, deliberately, the same idea as a chain of
custody in a criminal investigation: not proof of innocence, but an
unbroken, tamper-evident record of who held the evidence and when.

The catch is coverage, not cryptography. A C2PA manifest is only as good as
the tools that bother to attach one, and its absence proves nothing — most
content in the world today was never signed at all. This week is the hinge of
the course: the previous six weeks taught you to interrogate content that
carries no record of itself; the rest of the course asks what changes once
some content starts to.

## Outline

- how a C2PA manifest is built, signed and read
- what a valid credential can and can't tell you
- provenance, watermarking and detection: why you eventually need all three,
  and why none of them is sufficient alone

## Reading

The C2PA Content Credentials explainer (spec.c2pa.org), read as a technical
document rather than a marketing one.

## Further reading

- [C2PA Content Credentials Explainer](https://spec.c2pa.org/specifications/specifications/2.4/explainer/Explainer.html) —
  the official specification body's own explainer, the primary source behind
  this lecture.
- [Content Credentials, explained](https://www.youtube.com/watch?v=3a77u--YRQE) —
  a short video walkthrough if you'd rather watch the mechanism than read it.
