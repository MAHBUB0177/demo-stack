import { Box, Card, CardActionArea, Typography } from "@material-ui/core";
import React from "react";
import { Link,  } from "react-router-dom";

const SingleBrandName = ({ item }) => {
  
  return (
    <Link to={`/brand-${item?.title}-${item?.id}`} style={{textDecoration:'none'}}>
    <CardActionArea >
      <Card
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "#6275A3",
          backgroundImage: `url(${item?.logo})`,
          backgroundSize: "100% 100%",
          padding: "5px",
          color: "white",
          position: "relative",
        }}
      >
        <Box
          style={{
            alignItems: "center",
            textAlign: "center",
            display: "flex",
            display: "grid",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <Typography variant="h4"></Typography>
        </Box>
      </Card>
    </CardActionArea>
    </Link>
  );
};

export default SingleBrandName;