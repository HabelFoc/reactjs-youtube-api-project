import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// For dev-server hot reloading
if (module.hot){
    module.hot.accept()
}

// Material UI
import { Grid } from '@material-ui/core'

// Importing Components
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

// Youtube API Key
const YTAPIKEY = 'AIzaSyC0oxTncku2e-mpk_TpoBKNmBIQ5tFgjLg';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            renderVideo: false, 
            videos: [],
            videoToplay: {
                title: 'The Title',
                desc: 'The description',
                src: 'https://www.youtube.com/embed/?youtube'
            }
        };
    }

    // start fetching youtube search
    startYTFetch(term) {
        // rendeVideo state change to 'false'
        this.setState({ renderVideo: false });
        
        YTSearch({ key: YTAPIKEY, term: term }, result => {
            this.setState({ videos: result })
        });
    }

    // retrieve selected video info
    startShowSelectedVid(title, desc, src){
        const forTitle = title;
        const forDesc = desc;
        const forSrc = src;
        this.setState({
            renderVideo: true,
            videoToplay: {
                title: forTitle,
                desc: forDesc,
                src: forSrc
            }
        })
    }

    // render selected video content
    renderVideoContent(){
        if (this.state.renderVideo) {
            return <VideoDetail videoToplay={this.state.videoToplay} />;
        } else {
            return false;
        }
    }

    // initial state
    componentWillMount(){
        YTSearch({ key: YTAPIKEY, term: 'daily dose of internet' }, result => {
            this.setState({ videos: result })
        });
    }

    render() {
        console.log('components render')
        return (
            <Grid
            container
            item
            spacing={8}
            xs={12}
            >
                <SearchBar startYTFetch={this.startYTFetch.bind(this)}/>
                {this.renderVideoContent()}
                <VideoList videos={this.state.videos} startShowSelectedVid={this.startShowSelectedVid.bind(this)}/>
            </Grid>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
