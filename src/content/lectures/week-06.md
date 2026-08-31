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
  - label: "UnMarker — a disclosed, Google-acknowledged attack on SynthID"
    url: https://github.com/andrekassis/ai-watermark
---

Unlike a stylistic tell, a watermark is deliberate: a generator embeds a
signal at creation time, precisely so that someone downstream can recover it.
Google's SynthID nudges the statistics of an image or a token sequence in a
way that's invisible to a viewer and detectable by the matching tool. It is,
on paper, a much better answer than looking for accidental artefacts.

On paper. Researchers behind a disclosed attack called UnMarker reported
knocking SynthID's detection rate from roughly 100% down to about 21% — a
79% success rate at defeating the watermark — using nothing but a diffusion
"purification" pass that regenerates the image through a generative model.
They reported the result to Google under its Vulnerability Reward Program,
and Google acknowledged it. Watermarks have to survive being screenshotted,
recompressed, cropped, and re-uploaded through three platforms before anyone
sees them again — and a watermark surviving all of that turns out to be a
much harder property to guarantee than a watermark existing in the first
place. We will implement a toy watermarking scheme, then spend the second
half of the session trying to break each other's.

## Outline

- how invisible watermarking actually works, at a level you could implement
- the durability problem: what ordinary handling does to a signal
- watermarking versus detection versus provenance — three different claims,
  often confused for one

## Further reading

- [SynthID](https://deepmind.google/models/synthid/) is Google DeepMind's own
  page for the technology — worth reading for the specific durability claims
  it makes (survives trimming, compression, cropping) so you have something
  concrete to test in this week's casework, rather than a vague promise of
  "robustness."
- [UnMarker](https://github.com/andrekassis/ai-watermark) is the actual
  disclosed research this lecture's numbers come from — read the repository's
  own description of the attack before assuming "Google acknowledged it"
  means "the watermark is broken for everyone, always."
