import { useContent } from "@croct/plug-react";

type ContentType = {
  title: string;
  subtitle: string;
  cta: {
    label: string;
    link: string;
    banner: string;
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
  if (content) console.log(content);
  return (
    <div className="h-screen w-screen flex justify-center items-center ">
      <div className="flex flex-col p-5 border border-red-950 justify-center items-center rounded-md  text-center gap-12 bg-indigo-600 text-white w-[50rem]">
        <h1 className="text-3xl font-inter">{content.title}</h1>
        <p className="text-xl font-inter">{content.subtitle}</p>
        <div className="flex justify-center items-center gap-4">
          <img
            className="rounded-xl w-[10rem] h-[10rem] border"
            src={content.cta.banner}
            alt="Croct image"
          />
          <a
            className="border rounded-xl bg-black font-bold hover:bg-gray-700 w-32 font-inter"
            href={content.cta.link}
          >
            {content.cta.label}
          </a>
        </div>
      </div>
    </div>
  );
}
