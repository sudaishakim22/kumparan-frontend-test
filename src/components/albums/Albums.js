import React, { useEffect, useState } from "react";
import "./albums.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useHistory } from "react-router-dom";

import { ImgPlaceholder } from "../../assets";
import { albumsServices } from "../../redux/services/albumsService";

const Albums = () => {
  const [albums, setAlbums] = useState(null);
  const [loading, setLoading] = useState(true);
  let history = useHistory();

  useEffect(() => {
    const fetchAlbums = async () => {
      const res = await albumsServices.getAlbums();
      setAlbums(res.data);
      setLoading(false);
    };
    fetchAlbums();
  }, []);

  const handleOnclickShowMore = (id) => {
    history.push(`/my-albums/${id}`);
  };

  return (
    <div className="albums">
      <div className="albumsWrapper">
        <h3>My Albums</h3>
        <div className="albumsCardWrapper">
          {loading ? (
            <p>loading...</p>
          ) : (
            albums.map((album) => {
              return (
                <Card key={album.id} sx={{ maxWidth: 345, margin: "20px" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={ImgPlaceholder}
                    alt="albums"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {album.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Blanditiis cumque non ipsa aspernatur dolore itaque iusto
                      sint ut praesentium quisquam.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => handleOnclickShowMore(album.id)}
                    >
                      Show More
                    </Button>
                  </CardActions>
                </Card>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Albums;
