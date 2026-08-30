import React, { useRef, useState } from 'react'
import { FaImages } from "react-icons/fa";

function uploadImg(props) {
    const fileInputRef = useRef(null);


    const handleBoxClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        if (props.setImg) {
            props.setImg(files);
        }

        const previewUrls = files.map(file => URL.createObjectURL(file));
        props.setpre(previewUrls);
    };


    return (
        <div
            className="border-2 border-dashed border-slate-600 rounded-xl !p-8 hover:border-orange-500/50 transition-all duration-300 bg-slate-800/30 backdrop-blur-sm cursor-pointer"
            onClick={handleBoxClick}
        >
            <div className="flex flex-col items-center justify-center gap-4">
                <FaImages className="text-4xl text-orange-500" />
                <h4 className="text-lg font-semibold text-white">Image Upload</h4>
                <p className="text-sm text-gray-400">Click to select files</p>
                <input
                    ref={fileInputRef}
                    type="file"
                    multiple={props.multiple !== undefined ? props.multiple : false}
                    className="hidden"
                    onChange={handleFileChange}
                    accept={props.accept}

                />
                <div className="text-sm text-gray-500">
                    {props.img ? (
                        <span>{props.img.length} file(s) selected</span>
                    ) : (
                        <span>No files selected</span>
                    )}
                </div>
            </div>
            {console.log(props.previews)};
            {props.preview && props.preview.length > 0 && (
                <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                    {props.preview.map((src, index) => (
                        <div key={index} className="relative">
                            <img
                                src={src}
                                alt={`preview-${index}`}
                                className="w-full h-40 object-cover rounded-lg shadow-md border border-gray-600"
                            />
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}

export default uploadImg