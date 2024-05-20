import dynamic from 'next/dynamic'
// import FallingWords from "@/app/zero-neko/views/FallingWords"

const FallingWords = dynamic(
  () => import("@/app/zero-neko/views/FallingWords"),
  { ssr: false }
)

export const metadata = {
  title: 'Falling words'
}

export default function FallingWordsPage() {
  return <FallingWords />;
}
