---
title: Invisible ink
description:
  Watermarking synthetic media, and how quickly a robust-sounding signal turns
  out not to be
week: 6
date: 2027-03-29
teachers:
  - ravi-chandrasekaran
slides: /decks/week-06/
related:
  - sessions/case-06-watermark-hunting
links:
  - label: "SynthID — Google DeepMind's official watermarking page"
    url: https://deepmind.google/models/synthid/
---

Unlike a stylistic tell, a watermark is deliberate: a generator embeds a
signal at creation time, precisely so that someone downstream can recover it.
Google's SynthID nudges the statistics of an image or a token sequence in a
way that's invisible to a viewer and detectable by the matching tool. It is,
on paper, a much better answer than looking for accidental artefacts.

On paper. In practice, watermarks have to survive being screenshotted,
recompressed, cropped, and re-uploaded through three platforms before anyone
sees them again — and research through 2025 kept finding that a watermark
surviving all of that is a much harder property to guarantee than a watermark
existing in the first place. We will implement a toy watermarking scheme,
then spend the second half of the session trying to break each other's.

## Outline

- how invisible watermarking actually works, at a level you could implement
- the durability problem: what ordinary handling does to a signal
- watermarking versus detection versus provenance — three different claims,
  often confused for one
