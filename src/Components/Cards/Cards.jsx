import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames'
import styles from './Cards.module.css';

const Cards = {data: {confirmed, recovered, deaths, lastUpdate}} =>{
    if(!confirmed){
        return 'Loading...'
    }

    return(
        <div>
            
        </div>

    )
}

export default Cards