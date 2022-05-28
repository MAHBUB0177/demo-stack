import { Container, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AllProducts from "../common/AllProducts";
import { domain } from "../env";

const SingleCategoryProducts = () => {
  const [category, setCategory] = useState(null);
  const { id } = useParams();
  console.log(id)


  useEffect(() => {
    const getproducts = async () => {
      await axios({
        url: `${domain}/api/singlecategoris/${id}/`,
        method: "GET",
      }).then((response) => {
        console.log(response.data);
        setCategory(response.data[0]);
      });
    };
    getproducts();
  }, []);
  return (
    <Container style={{marginTop:'30px'}}>
      
      <Grid container direction="column" alignItems="center">
        <Typography variant="h3" style={{borderBottom:'3px solid green'}}>{category?.title}</Typography>
        {/* <Typography variant="p">{category?.details}</Typography>
        <img
          style={{ width: "200px", padding: "10px" }}
          alt={category?.title}
          src={category?.image}
        /> */}
        <AllProducts products={category?.products} showall={true} />
      </Grid>
    </Container>
  );
};

export default SingleCategoryProducts;