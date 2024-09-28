import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {ReactComponent as UploadIcon} from '../assets/upload-icon.svg'

export const TryOn = ({tryOnDress}) => {
  const [file,setFile]=useState(null)  
  const onDrop = useCallback((acceptedFiles) => {
    setFile(URL.createObjectURL(acceptedFiles[0]));
    fetch('https://shopgpt.s3.ap-south-1.amazonaws.com/output.png', {method: 'DELETE'});
    fetch('https://shopgpt.s3.ap-south-1.amazonaws.com/input.png', {method: 'PUT', body: acceptedFiles[0]});
    fetch(tryOnDress)
      .then(response => response.blob())
      .then(blob => {
      const file = new File([blob], 'theyyam-tshirt.jpg', { type: 'image/jpeg' });
      return fetch('https://shopgpt.s3.ap-south-1.amazonaws.com/dress.png', { method: 'PUT', body: file });
      });
      const pollImage = () => {
        fetch('https://shopgpt.s3.ap-south-1.amazonaws.com/output.png')
          .then(response => {
        if (response.ok) {
          return response.blob();
        } else {
          throw new Error('Image not found');
        }
          })
          .then(blob => {
        const url = URL.createObjectURL(blob);
        setFile(url);
          })
          .catch(error => {
        console.error('Error fetching the image:', error);
        setTimeout(pollImage, 5000); // Retry after 5 seconds
          });
      };

      setTimeout(pollImage, 35000);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className='bg-[#F9F6FB] p-20 rounded-xl flex items-center w-full'>
      <img src={tryOnDress} alt=""/>
      
      <div
        {...getRootProps()}
        className={`w-full h-[436px] border-dashed border border-[#5548C7] rounded-3xl flex justify-center items-center cursor-pointer ${
          isDragActive ? 'bg-[#E0E0FF]' : ''
        }`}
      >
        {file ? <img className='object-contain w-full h-full' src={file} />:<>
        <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the image here ...</p>
          ) : (<div className='flex items-center justify-center flex-col gap-10'>
          <UploadIcon/>
            <p className='text-[20px] text-[rgba(126,116,212,1)] font-bold'>Drop an image here, or click to select one</p>
            </div>
        )}
      </>}
      </div>
    </div>
  );
};
