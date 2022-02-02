import { useEffect, useState } from 'react';

const Video = (props) => {
    // let valoraciones = 0;
    const [valoraciones, setValoraciones] = useState(0); //HOOKs

    const increment = () => {
        // valoraciones += 1;
        setValoraciones(valoraciones+1);
    }

    //componentDidMount
    useEffect(() => {
        console.log('componentDidMount')
    }, []);

    //componentDidUpdate
    useEffect(() => {
        console.log('componentDidUpdate')
    },[valoraciones]);

    return (
        <div className="video-container">
            <div className="video-image">
              <img src={props.thumbnail} alt={props.title} />
            </div>
            <div className="video-info">
              <h3>{props.title}</h3>
              <p>{valoraciones} estrellas</p>
              <button onClick={increment}>Valorar</button>
              <p>Upload date: {props.dateAdded}</p>
              <h4>Channel's Title: {props.channel}</h4>
              <p>{props.description}</p>
            </div>
        </div>
        );
}

export default Video;