export const fetchRemoteImages = (images, baseUrl) => {
	/*const imageName = url.split("/").pop();*/
	const promises = images.map(async (image) => await fetch(`${baseUrl}/${image}`)
		.then(res => {
			return res.blob()
		}).then(blobData => {
			const imageFile =  new File([blobData], Date.now() + image,  { type: 'image/jpeg' });
			Object.assign(imageFile, {
				preview : URL.createObjectURL(imageFile)
			});
			return Promise.resolve(imageFile)
		}));
	return Promise.all(promises);
};