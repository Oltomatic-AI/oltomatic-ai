import { redirect } from "next/navigation";

// OLTO Reach is temporarily withdrawn while we rebuild the enrichment layer.
// This route redirects to the homepage so old links and bookmarks still resolve.
// To relaunch: restore the full page from git history (last live version commit
// 7cd3e11~) and re-add Reach to Nav, Footer, homepage, pricing, contact/support
// dropdowns, email templates and SEO meta. The /reach backend plumbing is untouched.
export default function ReachPage() {
  redirect("/");
}
