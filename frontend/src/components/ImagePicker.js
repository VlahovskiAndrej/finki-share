import React, { useState } from 'react';
import classes from './ImagePicker.module.css'; // Import CSS module

const ImagePicker = ({ setSelectedImage, imageUrls }) => {
    const [selectedImage, setSelectedImageLocal] = useState('');

    const handleImageChange = (imageUrl) => {
        setSelectedImageLocal(imageUrl);
        setSelectedImage(imageUrl); // Pass the selected image back to the parent component
    };

    return (
        <div className={classes.imagePicker}>
            {imageUrls.map((imageUrl, index) => (
                <div className={classes.circle} key={index}>
                    <input
                        type="radio"
                        id={`image${index + 1}`}
                        name="image"
                        value={imageUrl}
                        checked={selectedImage === imageUrl}
                        onChange={() => handleImageChange(imageUrl)}
                    />
                    <label htmlFor={`image${index + 1}`}>
                        <img src={imageUrl} alt={`Image ${index + 1}`} />
                    </label>
                </div>
            ))}
        </div>
    );
}

export default ImagePicker;




// <img src="https://cdn3d.iconscout.com/3d/premium/thumb/man-5692600-4743369.png" alt="Image 1" />
// <img src="https://cdn3d.iconscout.com/3d/premium/preview/boy-avatar-6299533-5187865.png?f=webp&h=700" alt="Image 2" />
// <img src="https://png.pngtree.com/png-clipart/20221207/ourmid/pngtree-fashion-boy-avatar-png-image_6514592.png" alt="Image 3" />

