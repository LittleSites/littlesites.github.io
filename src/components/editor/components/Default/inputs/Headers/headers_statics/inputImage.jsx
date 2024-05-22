import { useState } from "react";
import Image from "next/image";
import editIconWhite from "public/images/icons/templates/edit_white.svg";

function InputImage({ defaultIcon = editIconWhite }) {
  const [image, setimage] = useState(defaultIcon);

  const changeInput = (e) => {
    const file = e.currentTarget.files[0];

    let url = URL.createObjectURL(file);

    let newImage = {
      index: 0,
      name: file.name,
      url,
      file,
      src: url,
    };

    console.log(newImage);
    setimage(newImage.url);
  };

  return (
    <label className="btn btn-warning">
      <Image src={image} width={50} height={50} alt="logo" />
      <input
        name="logo"
        type="file"
        multiple
        onChange={changeInput}
        hidden
      ></input>
    </label>
  );
}

export default InputImage;
