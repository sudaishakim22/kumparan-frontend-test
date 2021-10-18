import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./photo.css";
import { useParams } from "react-router-dom";
import { photoServices } from "../../redux/services/photosService";

const Photos = () => {
  const [photos, setPhotos] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchPhoto = async () => {
      const res = await photoServices.getPhotoById(params.id);
      setPhotos(res.data.slice(0, 8));
      setLoading(false);
    };
    fetchPhoto();
  }, []);

  return (
    <div className="photos">
      <h3>Photos</h3>
      <div className="photosWapper">
        {loading ? (
          <p>loading...</p>
        ) : (
          photos.map((photo) => {
            return (
              <Card key={photo.id} sx={{ maxWidth: 345, margin: "20px" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={photo.url}
                  alt="albums"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {photo.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Blanditiis cumque non ipsa aspernatur dolore itaque iusto
                    sint ut praesentium quisquam.
                  </Typography>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Photos;
