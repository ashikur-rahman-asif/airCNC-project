import React, { useContext, useState } from "react";
import AddRoomFrom from "./AddRoomFrom";
import { AuthContext } from "../../providers/AuthProvider";
// import { imageupload } from "../../api/utils";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// secret imgbb token
const img_hosting_token = import.meta.env.VITE_IMGBB_KEY;
const AddRoom = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      })
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("hello from from");
        setLoading(true);
        const location = event.target.location.value;
        const title = event.target.title.value;
        const from = dates.startDate;
        const to = dates.endDate;
        const price = event.target.price.value;
        const guests = event.target.total_guest.value;
        const bedrooms = event.target.bedrooms.value;
        const bathrooms = event.target.bathrooms.value;
        const description = event.target.description.value;
        const category = event.target.category.value;
        const image = event.target.image.files[0];
        setUploadButtonText('Uploading...')
        //   upload image
        const formData = new FormData
        formData.append('image', image)
        const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                const roomData = {
                    location,
                    title,
                    from,
                    to,
                    price: parseFloat(price),
                    guests,
                    bedrooms,
                    bathrooms,
                    description,
                    image: data.data.display_url,
                    host: {
                        name: user?.displayName,
                        image: user?.photoURL,
                        email: user?.email,
                    },
                   
                    category,
                }
                console.log(roomData)
                setLoading(false)
                
            })
    }
  const handleImageChange = (image) => {
    console.log(image);
    setUploadButtonText(image.name);
  };

  const handleDates = (ranges) => {
    setDates(ranges.selection);
  };
  return (
    <div>
      <AddRoomFrom
        handleSubmit={handleSubmit}
        loading={loading}
        handleImageChange={handleImageChange}
        uploadButtonText={uploadButtonText}
        dates={dates}
        handleDates={handleDates}
      />
    </div>
  );
};

export default AddRoom;
