# Your harness

## The course

`SLOP8171: Chain of Custody: Content Forensics for the Synthetic Age` — a
graduate methods course in detecting, verifying and tracing AI-generated
text, image, video and audio. Twelve weeks, `sessions` relabelled to
**Casework** (`sessionLabels` in `src/site-config.ts`), four assignments
weighted 10/20/30/40 and due in weeks 3, 7, 11 and 12. The course record
lives in `src/course-config.ts` and is the single source of truth — don't
restate its facts (code, dates, description) elsewhere, reference it.

Six teaching staff, each with a fixed specialty: Priya (convenor, opens/closes
the course), Tomas (philosophy/epistemology), Naledi (verification method),
Ravi (image/video/watermark forensics), Elena (workslop, investigative
writing), Jonah (provenance standards, platform policy). When adding or
editing a week, assign its teacher by specialty, not at random — the
"coherent course" bar in the brief is partly about this staying legible.

## Voice

Sincere, not glib; witty, not silly. The course's whole subject is
machine-generated text that looks finished but isn't, so its own copy is held
to a higher bar than usual:

- no rule-of-three lists that would fit any topic ("engaging, informative,
  and thought-provoking")
- no unearned hedge phrases ("it's important to note", "in today's world")
- no summarising sentence that just restates the paragraph above it
- every claim about a technique, case or statistic should be traceable to
  something real (see Sourcing, below) — don't invent a specific-sounding
  fact to make a paragraph feel more concrete
- end on a specific detail or a genuine open question, not a tidy bow

If a paragraph could be dropped into a different course with a find-and-
replace, rewrite it.

## Sourcing

Never fabricate a URL, a statistic, or a quotation. Real sources used so far:
Frankfurt's *On Bullshit*, Bergstrom & West's *Calling Bullshit*, Narayanan &
Kapoor's *AI Snake Oil*, Caulfield & Wineburg's *Verified* (the SIFT method),
the C2PA Content Credentials standard, the 2024 Hong Kong deepfake fraud case,
and the 2025 Stanford/BetterUp "workslop" research. Extend the course with
material in the same league — real, checkable, dated — rather than a
plausible-sounding invention. When a real citation isn't in hand, say so and
leave the claim general rather than inventing a specific one.

## Frontmatter gotcha (cost real time this build)

A multi-line plain YAML scalar breaks if any continuation line contains
`: ` (colon-space) — js-yaml reads it as an implicit nested mapping key and
throws `a multiline key may not be an implicit key`. This bit two of the
`marking.description` fields in `src/content/assessments/`. Fix: rephrase
with an em dash instead of a colon inside any multi-line frontmatter string,
rather than reaching for an explicit block-scalar indicator.

## Images

The Slop brand is two flat inks (gold `#b97d1c` / near-black) on warm cream,
per `astro-theme-slop/slop.css`. Nothing on a stock photo site matches a
custom two-ink illustration style, and hunting for a near-miss just produces
a page that visibly disagrees with its own crest. Instead: hand-author
original flat-shape SVG art in the brand tokens, then rasterize it with
`sharp` (already a dependency) at the exact dimensions the starter shipped
(`hero-home.avif` 2560×1086, `card.png` 1200×630) so no component code needs
to change. `people` photos are dropped entirely rather than faked — the
platform explicitly treats an image-free person entry as a legitimate design
choice, and there's no honest way to generate six consistent stylised
portraits by hand.

## Testing

Mechanically-checkable spec lines from the published assignment brief live in
`spec/course-spec.test.ts`, read from `dist/api/index.json` after
`pnpm build` — same pattern as the shipped `spec/data-integrity.test.ts`.
Covered: the SLOP code keeps its assigned last three digits, all twelve weeks
are present in both `sessions` and `lectures`, at least one lecture's linked
deck actually built, and assessment weights sum to 100. Judgement calls
("does the curriculum hold together", "would I want to take it") aren't
testable and aren't faked as tests — they're left for the crit, per
`spec/README.md`.

## Process

Commit at each meaningful checkpoint, push after each one — the repo is
private until shipped, so there's no reason to batch. Run `pnpm check`
before every commit; a red check is a stop, not a note for later. Visual and
layout judgement (does a deck slide fit, does a page read well at the phone
viewport) is the user's call, not something to fake by standing up
screenshot tooling — report what changed in plain text and let them look.
