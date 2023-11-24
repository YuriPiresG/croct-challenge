import { useContent } from "@croct/plug-react";

type ContentType = {
  title: string;
  subtitle: string;
  cta: {
    label: string;
    link: string;
  };
};

export function App() {
  const content = useContent("homepage-hero", {
    initial: null,
    fallback: {
      title: "Your static title",
      subtitle: "Your static subtitle",
      cta: "Your static CTA",
    },
  }) as ContentType | null;

  if (content === null) {
    return <div>🪄 Personalizing...</div>;
  }
  console.log(content);
  return (
    <div id="hero-banner">
      <h1>{content.title}</h1>
      <p className="subtitle">{content.subtitle}</p>
      <a className="cta" href={content.cta.link}>
        {content.cta.label}
      </a>
    </div>
  );
}
