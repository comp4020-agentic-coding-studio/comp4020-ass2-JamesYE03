# Process overview

## What I built

SLOP8171: Chain of Custody — Content Forensics for the Synthetic Age. A
twelve-week graduate course that teaches students to check whether text,
images, video and audio are AI-generated or real, using actual methods:
SIFT, image and watermark forensics, content provenance (C2PA), and
workplace "workslop." Four assignments get harder each time, ending with an
investigation students pick themselves.

## How I got here

I wanted a course about detecting AI-generated content, because it's a
real, current problem and not something any real university teaches yet.
Before committing to it, I had Claude check two things: that no real
university already runs a course like this, and that there was enough real
material to build twelve weeks on, not made up. That's where the Calling
Bullshit / AI Snake Oil connection came from — both authors independently
borrow from the same 2005 philosophy essay, which gave the course an actual
thread to follow instead of a random idea bolted onto a template.

I set the parts that mattered to me before any file was written:
postgraduate level, six staff (two convenors, four tutors), four
assignments weighted 10/20/30/40 and getting harder each time, and an
interactive widget somewhere on the site. I read through the whole plan —
every week, every assignment brief, the staff list — before Claude touched
the repo.

The first build is
[`326769a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-JamesYE03/commit/326769a)
through
[`0ef66ba`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-JamesYE03/compare/326769a...0ef66ba):
the course record, twelve weeks of content, six people, four assignments,
and the first four decks, then the homepage, policies page, the Spot the
Slop widget, original artwork, and spec tests.

I read through the whole site properly after that first build, every page,
not a sample. That's when I found the real gaps: only four of twelve
lectures had slides, and the extra reading material was buried inside a
slide's QR code instead of being a normal link on the lecture page itself.
I told Claude to fix both — every lecture gets its own deck now, and every
lecture has a "Further reading" section with a real link and a sentence
saying what it is, not just a code you have to scan. I also had it clean up
the "Open the slides" link so it looks like an actual button instead of a
bare line of text. That round is
[`498d5a8`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-JamesYE03/commit/498d5a8)
and
[`ca1e4d0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-JamesYE03/commit/ca1e4d0),
plus the button styling in
[`2c1d590`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-JamesYE03/commit/2c1d590).

After that I went back over the curriculum itself, not just the pages, and
asked what a real course would still be missing. Two things: Assignment 4
gives students no fixed topic at all, which is exactly the kind of freedom
that wastes a week if the topic turns out to be bad, so I added an ungraded
pitch checkpoint two weeks before it's due. And two of the technical weeks
(image forensics, watermarking) were leaning on general survey material
instead of one real, named event, so I had Claude verify and add two: the
2023 "Balenciaga Pope" image and the real, Google-acknowledged SynthID
watermark attack. That's
[`15f6477`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-JamesYE03/commit/15f6477).

For checking the work, I read the whole site closely the first time, then
only checked what actually changed after each later round instead of
starting over. `pnpm check` and `pnpm check:evidence` had to pass before
anything got pushed, but the real check was reading the pages myself and
following up on the specific gaps I found, not just trusting a green
terminal.
