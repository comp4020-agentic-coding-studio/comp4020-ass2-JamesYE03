# Process overview

## What I built

`SLOP8171: Chain of Custody: Content Forensics for the Synthetic Age`, a
graduate methods course that treats every AI-slop claim as a case: twelve
weeks of casework running from textual tells through image, video and
watermark forensics to content-provenance standards, workplace "workslop",
platform policy and the ethics of accusation, marked by four
escalating-difficulty assignments and closed out with an independent
investigation students choose themselves.

## How I got here

I didn't start here. My first idea was a course about algorithms stealing
your attention, built around Johann Hari's *Stolen Focus*. Rather than take
my own instinct on faith, I had the agent check whether the brief's "niche
enough that no real university would run it" test actually held. It came
back with a real Princeton syllabus (HIS490, *Attention Economy*) and a real
course at the Institute for Christian Studies covering almost the same
reading list and even the same "digital fasting" exercise I'd been picturing.
That killed the idea before a single page was written, which is exactly the
failure the brief warns about and exactly why I asked for evidence instead of
trusting a hunch.

The replacement came from the same research pass, not from picking off a
list: Calling Bullshit's own theoretical grounding is Harry Frankfurt's *On
Bullshit*, and the author of *AI Snake Oil* independently reaches for the
same essay to describe a chatbot's confident nonsense. That gave the course
an actual throughline — bullshit to slop, one discipline aimed at a faster
adversary — rather than a topic bolted onto a template.

From there I fixed the constraints that mattered to me (postgraduate level,
two convenors and four tutors, four assignments weighted 10/20/30/40 in
rising difficulty, an interactive widget) and reviewed the full plan — every
week's topic, all four assignment briefs, the teaching team — before any file
was written, rather than approving vibes and correcting fifteen pages later.

The build itself is
[`326769a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-JamesYE03/commit/326769a)
through
[`0ef66ba`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-JamesYE03/compare/326769a...0ef66ba):
the course record, twelve weeks of sessions and lectures, six staff profiles,
four assignments and four slide decks in the first commit, then the
homepage, policies page, the Spot the Slop widget, original artwork and the
spec tests in the second. I told the agent up front that hunting stock
photos for a two-ink illustration style that doesn't exist commercially was
a waste of time, and to make original art instead if it could — it built flat
SVG illustrations in the theme's own brand tokens and rasterised them with a
dependency already in the project (`sharp`), which I checked against the
starter's exact image dimensions rather than taking on faith.

I verified completion the same way the course does: `pnpm check` (typecheck,
build, and `spec/course-spec.test.ts`, which I had written to assert the
SLOP code keeps its assigned digits, all twelve weeks exist, the deck
actually built, and the four assignment weights sum to 100) passed clean
before each push, and I read the rendered pages myself rather than trusting
a green terminal alone.

That read-through produced the next round,
[`498d5a8`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-JamesYE03/commit/498d5a8):
only four of twelve lectures had a deck, casework numbering was too small to
navigate by, and no page let a student see a whole week's requirements at a
glance. Before expanding the decks I set one rule — no new fact without a
source checked this session — which sent the agent back to verify specifics
I'd left vague the first time (naming Arup as the company in the week 5
case, citing SIFT's original post, pulling YouTube's actual disclosure
policy instead of gesturing at "a real platform policy"). That rule is now
in `CLAUDE.md` under "Sourcing."
