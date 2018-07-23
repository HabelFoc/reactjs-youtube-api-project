import React, { Component } from 'react';

// Importing components
import VideoListItem from './video_list_item';

// Material UI
import {
	Grid, 
	List
} from '@material-ui/core';

class VideoList extends Component {
 	constructor(props){
 		super(props);
 	}

	// Returning each VideoListItem
	renderVideoItems(){
		const { videos, startShowSelectedVid } = this.props;
		return videos.map(video => {
			return <VideoListItem video={video} key={video.etag} startShowSelectedVid={startShowSelectedVid} />
		})
	}

	render(){
		return(
			<Grid
			container
			item
			xs={12}
			nowrap="true"
			>
				<Grid item container xs={false} md={1}></Grid>
				<Grid xs item container>
					<List>
						{this.renderVideoItems()}
					</List>
				</Grid>
				<Grid xs={false} md={1} item container></Grid>
			</Grid>
		);
	}
}


export default VideoList;