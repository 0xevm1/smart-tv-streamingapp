import React, { FC } from 'react';
import { PosterProps } from "../types";

const Poster: FC<PosterProps> = (props) => {
    return <>
        <div id={props.id}>
            <h3>{props.name}</h3><br/>
            <img src={props.cover} alt={props.name}/>
        </div>
    </>;
};

export default Poster;