---
title: The arms race
description:
  Why detectors keep failing, and what it means that an entire industry now
  exists to defeat them
week: 8
date: 2027-04-12
teachers:
  - tomas-vidergar
related:
  - sessions/case-08-breaking-a-detector
---

By 2025, independent testing of commercial AI-text detectors was finding
accuracy figures that swung wildly between products, and sometimes for the
same product between months — one evasion-focused tool tested at effectively
perfect detection accuracy in one review cycle and near-random a few months
later. That is not a story about bad engineering. It is a story about
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
