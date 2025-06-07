import { PointerHighlight } from "../ui/Pointer";

export function PointerHighlightDemo() {
  return (
<div className="max-w-lg py-20 text-2xl font-bold tracking-tight md:text-4xl ml-[calc(50%-10rem)]">
  <div className="text-left">
    <div>You’re one follow away from what’s really</div>
    <PointerHighlight>
      <span className="block pl-0 md:pl-[0.125em]">happening… Follow on IG</span>
    </PointerHighlight>
  </div>
</div>

  );
}
