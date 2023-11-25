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
      "https://newsapi.org/v2/everything?q=tesla&from=2023-10-24&sortBy=publishedAt&apiKey=4df220c3e0fd4f3b88eaa3abae05faef"
    ).then(async (response) => {
      const data = await response.json();
      console.log(data.articles);
      const articles = data.articles;
      setNoticias(articles);
    });
  }, []);

  return noticias?.map((article) => (
    <Stack
      direction={{ xs: "row", sm: "row", md: "row" }}
      spacing={1}
      gap={1}
      columns={{ xs: 2, sm: 4, md: 5 }}
      textAlign={"center"}
      justifyContent={"center"}
      width={"100%"}
      display={"Flex"}
      alignContent={"center"}
      flexWrap={"wrap"}
    >
      <Card sx={{ maxWidth: 800 }}>
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
    </Stack>
  ));
};

export default Noticias;
