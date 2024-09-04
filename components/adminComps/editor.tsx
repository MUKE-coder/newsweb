import { Editor } from "novel";

export default function EditorComp() {
  return (
    <Editor
      defaultValue={{
        type: "doc",
        content: [],
        // content: content as JSONContent[] | undefined,
      }}
      disableLocalStorage={true}
    />
  );
}
