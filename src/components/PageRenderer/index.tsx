import dynamic from "next/dynamic";

// Editor.js renderer must be dynamic (no SSR)
const Output = dynamic(() => import("editorjs-react-renderer"), { ssr: false });

interface Props {
  data: any;
}

const PageRenderer = ({ data }: Props) => {
  if (!data || !data.blocks) return null;

  return <Output data={data} />;
};

export default PageRenderer;
