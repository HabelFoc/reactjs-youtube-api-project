import React, { Component } from 'react';

// Material UI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { white } from '@material-ui/core/colors';
import { TextField, Grid } from '@material-ui/core';
import { Search } from '@material-ui/icons';

let interValtime = null;

const styles = {
    searchIcon: {
        fontSize: '2em'
    }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ccc',
      main: '#222222',
      dark: '#333',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


class SearchBar extends Component {
    render() {
        return (
            <Grid container item xs={12}>
                <Grid item xs={1} md={3} sm={2}></Grid>
                <Grid
                container
                alignItems={'flex-end'}
                item
                xs={10}
                md={5}
                sm={5}
                >
                    <Grid item>
                        <Search style={styles.searchIcon}/>
                    </Grid>
                    <Grid item xs>
                        <TextField 
                        margin="normal"
                        placeholder="Search videos"
                        label="Search"
                        autoComplete="off"
                        fullWidth
                        id="search"
                        onChange={this.onInputChange.bind(this)}
                        />
                    </Grid>
                    
                </Grid>
                <Grid item xs={1} md={4} sm={5}></Grid>
            </Grid>
        );
    }

    onSearchPress(){
        console.log('search btn pressed')

        // start fetching youtube api
        this.props.startYTFetch(this.state.term);
    }

    onInputChange(event){
        let value = event.target.value.trim();
        if (interValtime != null){
            clearTimeout(interValtime)
        }
        // show input value after 1 secs
        interValtime = setTimeout(() => {
            if (value != "" && value.length > 1) {
                this.props.startYTFetch(value);    
            } else {
                return false;
            }

        }, 800)
    }
}


export default SearchBar;