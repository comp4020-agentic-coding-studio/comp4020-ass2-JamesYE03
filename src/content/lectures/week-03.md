---
title: "Textual tells"
description:
  How language models give themselves away, and why every reliable tell has a
  half-life
week: 3
date: 2027-03-08
teachers:
  - naledi-mokoena
slides: /decks/week-03/
related:
  - sessions/case-03-the-text-workup
  - assessments/first-forensics
links:
  - label: "AI Snake Oil — why a chatbot is \"a bullshit generator\""
    url: https://www.aisnakeoil.com/t/ai-hype
---

Early tells were almost embarrassingly easy to teach: a suspicious fondness
for the word "delve," paragraphs that arrive in threes, a habit of concluding
everything with "in conclusion." None of those survive contact with a model
released six months later, because every tell that gets written up gets
trained away. That instability is itself the first lesson: textual forensics
is not a checklist you memorise once, it's a practice of noticing what a
population of text does that an individual author wouldn't.

We will look at what has held up longer than surface style — token-level
probability and "burstiness," the flattening of a writer's idiosyncrasies
under editing pressure, and the specific way generated text tends to hedge.
We will also look hard at where these signals fail, because a forensic method
that doesn't know its own error rate is not a method.

## Outline

- lexical and stylistic tells, and why they decay
- perplexity and burstiness, in plain terms
- the false-positive problem: a distinctive human voice can look "generated"
  to a naive detector

## Reading

Narayanan & Kapoor, *AI Snake Oil* (Princeton University Press, 2024), the
chapters on generative AI's claims versus its failure modes.

## Further reading

[AI Snake Oil's newsletter](https://www.aisnakeoil.com/t/ai-hype) has the
original 2023 post where Narayanan calls ChatGPT "a bullshit generator" —
short, free, and the clearest version of the argument this week's lecture
borrows.

## Practice before the session

Try [Spot the Slop](/spot-the-slop/) — six short passages, one guess each.
It won't prepare you for Assignment 1 on its own, but it's a fast way to
notice your own instincts before this week's session interrogates them.
