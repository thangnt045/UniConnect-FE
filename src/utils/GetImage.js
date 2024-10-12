export function GetImage({ image, size }) {
  return (
    <div>
      <img
        src={getImageFile({image})}
        alt= "image"
        width={size.width}
        height={size.height}
        hspace={10}
        vspace={10}
      />
    </div>
  );
}

function getImageFile(fileName) {
  let imagePath = `/assets/images/${fileName}.png`;
  return imagePath;
}
