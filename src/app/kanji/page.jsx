import Kanji from '../zero-neko/views/Kanji';

export const metadata = {
  title: 'Kanji'
}

export default function KanjiPage() {
  return <Kanji title={metadata.title} />;
}
