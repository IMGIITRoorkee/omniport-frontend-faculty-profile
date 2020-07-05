import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Form } from "semantic-ui-react";

export default function TextField(props) {
  const { name, value, handleChange, required, label } = props;
  return (
    <Form.Field key={name} required={required}>
      <label>{label}</label>
      <Editor
        textareaName={name}
        value={value}
        init={{
          plugins:
            "contextmenu " +
            " lists link table image codesample emoticons code charmap " +
            " fullscreen " +
            " wordcount",
          contextmenu:
            "bold italic underline strikethrough | " +
            "superscript subscript | " +
            "link",
          toolbar1:
            "formatselect | " +
            "bold italic underline strikethrough blockquote removeformat | " +
            "alignleft aligncenter alignright alignjustify",
          toolbar2:
            "undo redo | " +
            "bullist numlist outdent indent | " +
            "link unlink | " +
            "table image codesample charmap | " +
            "fullscreen",
          toolbar3: "fontselect fontsizeselect | emoticons",
          relative_urls: false,
          theme: "modern",
          height: 300,
          width: "auto",
          menubar: true,
        }}
        onEditorChange={(content) => handleChange(name, content)}
      />
    </Form.Field>
  );
}
