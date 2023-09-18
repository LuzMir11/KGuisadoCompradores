const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox
    image.src = url;
  });

async function getCroppedImg(imageSrc, pixelCrop) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const maxSize = Math.max(image.width, image.height);
  const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

  canvas.width = safeArea;
  canvas.height = safeArea;

  ctx.drawImage(
    image,
    safeArea / 2 - image.width * 0.5,
    safeArea / 2 - image.height * 0.5
  );
  const data = ctx.getImageData(0, 0, safeArea, safeArea);

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.putImageData(
    data,
    Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
    Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
  );
    return canvas;
  /*return new Promise(resolve => {
    canvas.toBlob(file => {
      resolve(URL.createObjectURL(file))
    }, 'image/jpeg')
  })*/
  //return canvas.toDataURL("image/jpeg");
}

export const cropImage = async (image, croppedAreaPixels, onError) => {
  try {
    const croppedImage = await getCroppedImg(image, croppedAreaPixels);
    console.log(croppedImage);
    return croppedImage;
  } catch (err) {
    onError(err);
  }
};

const generateDownload = async (imageSrc, crop) => {
	if (!crop || !imageSrc) {
		return;
	}

	const canvas = await getCroppedImg(imageSrc, crop);

	canvas.toBlob(
		(blob) => {
			const previewUrl = window.URL.createObjectURL(blob);

			const anchor = document.createElement("a");
			anchor.download = "image.jpeg";
			anchor.href = URL.createObjectURL(blob);
			anchor.click();

			window.URL.revokeObjectURL(previewUrl);
		},
		"image/jpeg",
		0.66
	);
};