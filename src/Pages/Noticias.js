import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
const Noticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=4df220c3e0fd4f3b88eaa3abae05faef"
    ).then(async (response) => {
      const data = await response.json();
      console.log(data.articles);
      const articles = data.articles;
      setNoticias(articles);
    });
  }, []);

  return noticias?.map((article) => (
    <Box
      sx={{
        key: article.id,
        alignContent: "center",
        margin: 5,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Card sx={{ maxWidth: 920, width: 800 }}>
        <CardMedia sx={{ height: 140 }} image={article.urlToImage} title="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  ));
};

export default Noticias;
