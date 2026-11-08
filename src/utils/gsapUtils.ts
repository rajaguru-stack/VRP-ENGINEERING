import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function killScrollTriggers(triggers: ScrollTrigger[]): void {
  triggers.forEach((t) => t.kill());
}

export function refreshScrollTrigger(): void {
  ScrollTrigger.refresh();
}

export function createScrollTrigger(
  config: ScrollTrigger.StaticVars
): ScrollTrigger {
  return ScrollTrigger.create(config);
}

export { gsap, ScrollTrigger };
