import { Card, CardHeader,Avatar } from '@material-ui/core';
import React from 'react';

const SingleReview = ({item}) => {
    console.log(item)
 return (
  <Card>
  <CardHeader
      avatar={
          <Avatar style={{ backgroundColor: 'blue' }}>
              {item?.customer?.username?.[0]}
          </Avatar>
      }
      title={item?.title}
      subheader={item?.customer?.username}
  />
</Card>
 );
};

export default SingleReview;