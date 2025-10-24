import "@testing-library/jest-dom";

// Minimal IntersectionObserver mock for framer-motion and in-view features
class MockIntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

// @ts-expect-error
(global as any).IntersectionObserver =
  MockIntersectionObserver as unknown as typeof IntersectionObserver;
