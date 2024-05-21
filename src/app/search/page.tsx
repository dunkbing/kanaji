import { Suspense } from "react";
import Search from "@/app/zero-neko/views/Search";
import FallbackLoading from "@/app/zero-neko/components/FallbackLoading";

export const runtime = "edge";

export const metadata = {
  title: "Search",
};

export default async function StudyHiraPage({ searchParams }) {
  const { words } = searchParams;
  const page = Number(searchParams.page || 1);
  return (
    <Suspense
      fallback={<FallbackLoading height="96" span="Loading for words" />}
    >
      <Search words={words} page={page} />
    </Suspense>
  );
}
