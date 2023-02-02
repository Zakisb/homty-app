import { AiOutlinePlus } from 'react-icons/ai';
import cn from 'classnames';
import { useDropzone } from 'react-dropzone';
import { useCallback, useState, useEffect } from 'react';

export default function ImagePicker ({name, handleChange , images = []}) {
	const [myFiles, setMyFiles] = useState(images);

	const onDrop = useCallback(acceptedFiles => {
		setMyFiles([...myFiles, ...acceptedFiles.map(file => Object.assign(file, {
			preview: URL.createObjectURL(file)
		}))]);
	}, [myFiles]);

	const { getRootProps, getInputProps, isDragActive, acceptedFiles, open } = useDropzone({
		onDrop,
		noClick: true,
		noKeyboard: true,
		accept: {
			'image/jpeg': [],
			'image/png': []
		}
	});

	const removeFile = file => () => {
		const newFiles = [...myFiles]
		newFiles.splice(newFiles.indexOf(file), 1)
		setMyFiles(newFiles)
	}

	useEffect(() => {
		handleChange(myFiles)
	}, [myFiles])

	const files = myFiles.map((file, index) => (
		<div key={file.preview} className="relative overflow-hidden rounded-md">
			<img className="object-cover object-center h-56 w-full"
			     src={file.preview}/>
			<button className="absolute top-0 right-0 text-red-500 hover:text-red-800 cursor-pointer bg-red-500" onClick={removeFile(file)}>
				<svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
				</svg>
			</button>
		</div>
	));

	return (
		<section className="container">
			<div {...getRootProps({ className: 'dropzone border border-dashed border-gray-300 relative rounded-md  p-2 mt-5 multiple' })}>
				<input {...getInputProps()} />
				{files.length > 0 ? (
					<ul className="grid md:grid-cols-3 grid-cols-1 gap-2">
						{files}
						<li className={'border border-dashed rounded-md border-gray-300 flex h-56  justify-center cursor-pointer col-span-1'} onClick={open}>
							<input {...getInputProps()} multiple/>
							<div className={'self-center'}>
								<AiOutlinePlus className={cn('mx-auto h-10 w-10 text-indigo-500')}
								               aria-hidden="true"/>
								<span className={'self-center'}>Add more</span>
							</div>
						</li>
					</ul>) : <>
					<svg
						className="mx-auto h-12 w-12 text-gray-400"
						stroke="currentColor"
						fill="none"
						viewBox="0 0 48 48"
						aria-hidden="true"
					>
						<path
							d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
							strokeWidth={2}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<div className="flex justify-center content-center text-sm text-gray-600">
						<label
							htmlFor="file-upload"
							className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500 mb-2"
						>
							<span className={'cursor-pointer'} onClick={open}>Upload property images</span>
							<input {...getInputProps()} multiple/>
						</label>
						<span className="pl-1">or drag and drop</span>
					</div>
					<p className="text-xs text-center text-gray-500">PNG, JPG, GIF up to 10MB</p>
				</>}
			</div>
		</section>
	)
}