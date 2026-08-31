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
  - label: "TIME — How to Spot an AI-Generated Image Like the 'Balenciaga Pope'"
    url: https://time.com/6266606/how-to-spot-deepfake-pope/
---

Image forensics has two long histories that recently collided. One is old:
photographs have been retouched, staged and misattributed since the
daguerreotype, and reverse image search, EXIF inspection and shadow-and-light
consistency checks were built for that world. The other is new: diffusion
models don't retouch a photograph, they hallucinate one from nothing, and they
leave a different kind of trace — statistical regularities in frequency space,
inconsistent reflections, hands that almost work.

March 2023 gave the new history its landmark case: an image of Pope Francis
in a white puffer jacket, generated on Midjourney by a Chicago construction
worker as a joke, convinced a large share of the internet — including,
Poynter's media literacy team admitted, its own staff. Nearly half of
240,000 people polled by a science communicator believed it was real. What
gave it away, once people looked closely, was exactly what this week
teaches: a smudged ear, glasses melting into a shadow, and a coffee cup
warped in a hand that doesn't quite hold together.

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

## Further reading

- [TIME — How to Spot an AI-Generated Image Like the "Balenciaga Pope"](https://time.com/6266606/how-to-spot-deepfake-pope/) —
  the case this lecture opens with, and a practical checklist written in
  its immediate aftermath.
- [Deepfake Media Forensics: Status and Future Challenges](https://www.mdpi.com/2313-433X/11/3/73)
  (2025) is a recent survey of the field, organised around the FF4ALL
  research project — useful for seeing how detection, attribution and
  authentication are treated as genuinely separate technical problems, not
  one undifferentiated "spot the fake" task.
