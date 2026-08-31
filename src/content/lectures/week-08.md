---
title: The arms race
description:
  Why detectors keep failing, and what it means that an entire industry now
  exists to defeat them
week: 8
date: 2027-04-12
teachers:
  - tomas-vidergar
slides: /decks/week-08/
related:
  - sessions/case-08-breaking-a-detector
links:
  - label: "A detector vendor's own accuracy benchmark — read it critically"
    url: https://gptzero.me/news/ai-accuracy-benchmarking/
---

One detector vendor's own benchmark reports 99.3% accuracy across 3,000
samples, with a false-positive rate of 0.24%. Independent reviewers testing
the same class of tool put real-world accuracy closer to 80–92%, falling
further — to around 96.5% for that same vendor — the moment the text has
been paraphrased or mixed with human editing rather than generated cleanly.
Neither number is wrong, exactly; they're measuring different things, and
the gap between a vendor's self-reported figure and an independent test is
itself the first thing a forensic reviewer should learn to distrust. That is
not a story about bad engineering. It is a story about
Goodhart's Law: the moment a detection signal becomes a target — an "AI
content" flag that costs a creator a grade, a payment, a job — someone builds
a product whose only job is to remove that signal.

This lecture is the theoretical spine of the course: every method we've
covered is a proxy for the thing we actually care about (was this made
honestly, and does it deserve trust), and every proxy becomes gameable exactly
in proportion to how much weight gets put on it. That doesn't make forensic
work pointless. It means the discipline is knowing how much weight any one
signal can bear, and never resting a serious accusation on a single one.

## Outline

- Goodhart's Law, applied to content detection instead of economic indicators
- the evasion-tools economy, and why it is structurally guaranteed to exist
- multi-signal review as the only defensible practice, and why it's still not
  a guarantee
