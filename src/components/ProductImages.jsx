import { useState } from "react";

const ProductImages = ({ images = [{url:''}] }) => {
  const [image, setImage] = useState(images[0]);
  return (
    <section className="md:w-[50%] md:mx-auto lg:mx-0">
      <img
        src={image.url}
        alt='main'
        className="w-[94%] md:w-[30rem] md:h-[25rem] h-96 mx-3  md:mx-0 my-3 rounded-2xl"
      />
      <div className="flex flex-wrap gap-3 items-center ml-3 md:ml-0">
        {images.map((img,index) => {
          const { id, url, filename } = img;
          return (
            <div
              key={index}
              onClick={() => {
                setImage(img);
              }}
              className={`${
                img.id === image.id && "rounded-xl border-2 border-red-400"
              }`}
            >
              <img src={url} alt={filename} className="rounded-xl w-20 h-16 " />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default ProductImages;
