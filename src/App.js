import React from "react";
import SearchForm from "./components/SearchForm";
import axios from 'axios';
import './App.css';
import ImagesList from "./components/ImagesList";

class App extends React.Component {

    state = {
        data : {},
    }

    onSearchFormSubmit = async (value) => {
        let result = await axios.get("https://api.unsplash.com/search/photos", {
            headers : {
                Authorization : "Client-ID efr_gmP255NQfMnxPv6lUdMd0roUhab6THjmzvHm5Ro"
            },
            params : {
                query : value,
                per_page : 25,
            }
        });
        this.setState({
            data : result.data,
        });
    }


    render() {
        return (
            <div className="App">
                <SearchForm onSearchFormSubmit={this.onSearchFormSubmit}/>
                <ImagesList data={this.state.data}/>
            </div>
        );
    }

}

export default App;