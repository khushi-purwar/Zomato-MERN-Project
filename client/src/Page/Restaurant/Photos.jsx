import React, {useState} from 'react'
import PhotoCollection from '../../Components/Restaurant/PhotosCollection';
import ImageViewer from 'react-simple-image-viewer';

const Photos = () => {

    const [photos, setPhotos] = useState([
        "https://b.zmtcdn.com/data/pictures/7/3400297/1c1ead2e6b7cce3c0f4c3e9a2714f561.jpg",
        "https://b.zmtcdn.com/data/pictures/7/3400297/b2fa40f6096b5346a2a1aa25b28aaa3f.jpeg",
        "https://b.zmtcdn.com/data/pictures/7/3400297/bc86f884e3343b86ccdc083c42bbe5d3.jpg",
        "https://b.zmtcdn.com/data/reviews_photos/57b/99da983426f906ae5337d2b2fd1b457b_1547649504.jpg"
    ]);
    const [isMenuOpen , setIsMenuOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
  
    const closeViewer = ()=> setIsMenuOpen(false);
    const openViewer = ()=> setIsMenuOpen(true);
    return (
        <>
         {isMenuOpen && (
        <ImageViewer
          src={ photos}
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeViewer }
        
        />
      )}

            <div className="flex flex-wrap gap-2">
            {
                photos.map( (photo) => 
                <PhotoCollection image={photo} openViewer={openViewer} />
             )
            }
            </div>
        </>
    )
}

export default Photos;
