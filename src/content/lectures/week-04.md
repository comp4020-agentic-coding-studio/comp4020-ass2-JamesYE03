---
title: "Pixels don't lie (usually)"
description: An introduction to image forensics, from reverse search to GAN
  fingerprints
week: 4
date: 2027-03-15
teachers:
  - ravi-chandrasekaran
slides: /decks/week-04/
related:
  - sessions/case-04-the-image-workup
links:
  - label: "Deepfake Media Forensics: Status and Future Challenges (2025)"
    url: https://www.mdpi.com/2313-433X/11/3/73
---

Image forensics has two long histories that recently collided. One is old:
photographs have been retouched, staged and misattributed since the
daguerreotype, and reverse image search, EXIF inspection and shadow-and-light
consistency checks were built for that world. The other is new: diffusion
models don't retouch a photograph, they hallucinate one from nothing, and they
leave a different kind of trace — statistical regularities in frequency space,
inconsistent reflections, hands that almost work.

The old tools still catch a shocking amount, because most fabricated images
aren't generated from scratch — they're a real photo, misdated and
recirculated with a new caption. The new tools catch a different, harder
category, and they are locked in a race they are currently losing. You will
run both kinds this week, on the same image, and see where they disagree.

## Outline

- reverse image search and metadata as the first, cheapest checks
- what a diffusion model leaves behind: artefacts, frequency signatures,
  anatomical tells
- why "the hands look wrong" was never a durable method
