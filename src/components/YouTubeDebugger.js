// Code YouTubeDebugger Component Here
import React, { Component } from 'react';


export default class YouTubeDebugger extends Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        } 
    }

    changeBitrate = () => {
        this.setState({
            ...this.state,
            settings: {
                ...this.state.settings,
                bitrate: 12,
            },
        })
    }

    render(){
        return (
            <div>
                <button className="bitrate" onClick={this.changeBitrate}>{this.state.settings.bitrate}</button>
            </div>
        )
    }
}