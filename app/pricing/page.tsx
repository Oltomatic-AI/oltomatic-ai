import { redirect } from "next/navigation";

// The standalone /pricing page held stale pricing that contradicted /voice
// (a "Scale" £599 tier that doesn't exist on the live Voice page, whose third
// tier is "Enterprise — Let's talk"). Pricing now lives on /voice as the single
// source of truth. This route redirects there so old links and bookmarks resolve.
export default function PricingPage() {
  redirect("/voice");
}
