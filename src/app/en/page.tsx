import type { Metadata } from "next";
import Site from "@/components/tila/Site";
export const metadata: Metadata = {
  title: "Tila · Wholesale air plants from Puerto Vallarta",
  description: "Wholesale tillandsia air plants grown in Puerto Vallarta. 50-plant minimum, four sizes, per-plant prices.",
};
export default function Page() {
  return <div lang="en"><Site lang="en" /></div>;
}
