import React, { Component, Fragment } from 'react';

// Importing components


// Material UI
import { Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

// React player
import ReactPlayer from 'react-player';


const styles = {
    videoDetailStyle: {
        marginTop: '3rem'
    },
    embedStyle: {
        width: 'auto',
        height: 'auto'
    }
}


class VideoDetail extends Component {
    render() {
        const { title, desc, src } = this.props.videoToplay;
        const screenSizeChoices = {
          sm: 480,
          md: 720,
          lg: 768,
          xs: 360
        };
        const breakPoint= this.props.width;
        console.log(breakPoint);
        const finalSize = screenSizeChoices[breakPoint];
        console.log(finalSize);
        
        return(
        	<Grid container item xs={12} style={styles.videoDetailStyle}>
                <Grid container item xs={false} sm={1} md={2}></Grid>
                    <Grid container item xs alignItems='flex-start' direction='column' spacing={16}>
                        <Grid item>
                            <Card style={styles.embedStyle}>
                                <CardMedia
                                title={title}
                                src={desc}
                                style={styles.embedStyle}
                                >
                                    <ReactPlayer url={src} playing controls width={finalSize} />
                                </CardMedia>
                            </Card>
                        </Grid>
                        <Grid item nowrap="true">
                            <Typography gutterBottom variant="caption" component="h3">
                                {desc}
                            </Typography>
                        </Grid>
                    </Grid>
                <Grid container item xs={false} sm={1} md={2}></Grid>
            </Grid>
        );
    }
}

export default withWidth()(VideoDetail);