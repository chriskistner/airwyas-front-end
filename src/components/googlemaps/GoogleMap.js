import React, { Component } from 'react';
import {GoogleApiWrapper, Map, InfoWindow, Marker} from 'google-maps-react';
import { Container} from 'reactstrap';
// import google, from 'google-maps-react';
// import {bindActionCreators} from 'redux';
// import {withRouter} from 'react-router'
// import {connect} from 'react-redux';

class GoogleMap extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            // <Container style={{height: 500}}>
                <Map
                style={{width: '100%', height: '100%', position: 'relative'}} 
                google={this.props.google} 
                zoom={15}
                initialCenter={{
                    lat: this.props.homeLat,
                    lng: this.props.homeLong
                  }}
                center={{
                    lat: this.props.homeLat,
                    lng: this.props.homeLong
                }}
                >
                      <Marker
                        title={'Your Default Zip Code Based on Your Profile'}
                        name={'Home'}
                        position={{lat: this.props.homeLat, lng: this.props.homeLong}}/>
            
                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                        <h1>Test Map</h1>
                        </div>
                    </InfoWindow>
                </Map>
            // </Container>

        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCEmeR8XRZW98UfLU6Uu8SOlB6xYeIirFY'
})(GoogleMap)