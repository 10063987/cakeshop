import React from "react";
import { connect } from 'react-redux'
import cake from '../assets/img/cake.png'
import './CakeContainer.css'
import { buyCake } from '../redux'


const CakeContainer = ({numOfCakes, buyCake}) => {
    return (
        <div>
            <header className='App-header'>
                <h1>Cake Shop</h1>
                <img src={cake} className='App-logo' alt='logo' />
                <p>Number of cakes <span>{ numOfCakes }</span></p>
                <button onClick={buyCake}>Buy Cake</button>
            </header>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDisoatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}



export default connect(mapStateToProps, mapDisoatchToProps)(CakeContainer);
