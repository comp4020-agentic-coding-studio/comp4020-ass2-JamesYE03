import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: { code: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

describe("assignment 2 spec: SLOPxxxx code keeps the assigned three digits", () => {
  it("matches the SLOP code pattern and keeps 171", () => {
    expect(api.course.code).toMatch(/^SLOP[1-8]\d{3}$/);
    expect(api.course.code.slice(-3)).toBe("171");
  });
});

describe("assignment 2 spec: twelve dated teaching weeks", () => {
  const sessions = api.nodes.filter((node) => node.type === "sessions");
  const lectures = api.nodes.filter((node) => node.type === "lectures");

  it("runs exactly twelve sessions and twelve lectures", () => {
    expect(sessions).toHaveLength(12);
    expect(lectures).toHaveLength(12);
  });

  it("covers every week from 1 to 12 exactly once, in each collection", () => {
    for (const collection of [sessions, lectures]) {
      const weeks = collection.map((node) => node.meta?.week).sort((a, b) => Number(a) - Number(b));
      expect(weeks).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    }
  });
});

describe("assignment 2 spec: at least one lecture carries a real deck", () => {
  const lecturesWithSlides = api.nodes.filter(
    (node) => node.type === "lectures" && typeof node.meta?.slides === "string",
  );

  it("has at least one lecture linking to a deck", () => {
    expect(lecturesWithSlides.length).toBeGreaterThanOrEqual(1);
  });

  it("builds a real page at every linked deck path", () => {
    for (const lecture of lecturesWithSlides) {
      const slidesPath = String(lecture.meta?.slides).replace(/^\/|\/$/g, "");
      const builtPage = resolve("dist", slidesPath, "index.html");
      expect(existsSync(builtPage), `${lecture.id} links to ${lecture.meta?.slides}, but ${builtPage} was not built`).toBe(true);
    }
  });
});

describe("assignment 2 spec: assessment weights add up to 100%", () => {
  const assessments = api.nodes.filter((node) => node.type === "assessments");

  it("declares at least one assessment", () => {
    expect(assessments.length).toBeGreaterThan(0);
  });

  it("sums every assessment's weight to exactly 100", () => {
    const total = assessments.reduce((sum, node) => sum + Number(node.meta?.weight ?? 0), 0);
    expect(total).toBe(100);
  });
});
