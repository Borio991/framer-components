import Paragraph from '@/app/components/Paragraph';
import ParagraphByCharacter from '@/app/components/ParagraphByCharacter';
import ParagraphByWord from '@/app/components/ParagraphByWord';
export default function Home() {
  const value =
    'Creating beautiful websites and web applications requires attention to detail, creativity, technical skills, effective communication, and a user-centered design approach';
  return (
    <main>
      <div className="h-screen"></div>
      <Paragraph value={value} />
      <div className="h-screen"></div>
      <ParagraphByWord value={value} />
      <div className="h-screen"></div>
      <ParagraphByCharacter value={value} />
      <div className="h-screen"></div>
    </main>
  );
}
