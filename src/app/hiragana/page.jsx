import Kana from '../zero-neko/views/Kana';

export const metadata = {
  title: 'Hiragana'
}

export default function HiraPage() {
  return <Kana title={metadata.title} />;
}
