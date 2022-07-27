import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
const FormTag = () => {
  const [selected, setSelected] = useState(["Apple"]);

  return (
    <div>
      <TagsInput
        value={selected}
        onChange={setSelected}
        name="tags"
        placeHolder="Tags/favourite"
      />
      <em>press enter to add new tag</em>
      <style jsx>
        {`
         em {
              font-size: .8rem
            }
          }
        `}
      </style>
    </div>
  );
};

export default FormTag;
