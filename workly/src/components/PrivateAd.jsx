import React from 'react';
import { connect } from 'react-redux';
import adStyle from '../scss/privateAd.scss';


class PrivateAd extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={adStyle.card + " card"}>
                <div className="row">
                    <div className="col-md-12">
                        <img src="/assets/Ad.png" align="middle" className={adStyle.mainImage} />
                        <p className={adStyle.adTitle}>Ad Title</p>
                        <p className={adStyle.body}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,</p>
                    </div>
                </div>
            </div>
        );
    }

}


function mapState(state) {
    return state;
}

const actionCreators = {
};

const connectedPrivateAd = connect(mapState, actionCreators)(PrivateAd);
export { connectedPrivateAd as PrivateAd };