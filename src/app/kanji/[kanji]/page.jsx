import KanjiDetail from '@/app/zero-neko/views/KanjiDetail';

export const runtime = 'edge';

export const metadata = {
  title: 'Kanji'
}

export default function KanjiPage({ params }) {
  const kanji = params.kanji;
  const decodedKanji = decodeURIComponent(kanji);
  return <KanjiDetail kanji={decodedKanji} />;
}
