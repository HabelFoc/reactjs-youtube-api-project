import React, { Component } from 'react';

// Material UI
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withWidth from '@material-ui/core/withWidth';
import {
	ListItem,
	Avatar,
	ImageIcon,
	ListItemText
} from '@material-ui/core';

// styling
const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
    borderRadius: 0,
    width: 160,
    height: 90
  },
  mousePointer: {
  	cursor: 'pointer'
  }
};

class VideoListItem extends Component {
	listItemClicked(){
		// Get video id & url
		const videoId = this.props.video.id.videoId;
		const src = `https://www.youtube.com/embed/${videoId}`;
		const title = this.props.video.snippet.title;
		const desc = this.props.video.snippet.description;


		// start showing selected video content
		this.props.startShowSelectedVid(title, desc, src);
	}

	render(){

		// Video thumbnail
		const imageUrl = this.props.video.snippet.thumbnails.default.url;
		// Video title
		const videoTitle = this.props.video.snippet.title;
		// video description
		const videoDesc = (this.props.width == 'xs') ? '':this.props.video.snippet.description;



		return(
			<ListItem key={this.props.video.etag} style={styles.mousePointer} divider onClick={this.listItemClicked.bind(this)} >
				<Avatar alt="video_thumbnails" src={imageUrl} style={styles.avatar}/>
				<ListItemText primary={videoTitle} secondary={videoDesc} />
			</ListItem>
		);
	}
}


export default withWidth()(VideoListItem);