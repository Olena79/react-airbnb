import "./index.css";
import Heading from '../heading';
import { Fragment } from "react";
import Box from "../box";

export default function Reviews ({ list }) {
    return (<div className="room__block">
        <Heading border>Відгуки клієнтів</Heading>

        <div className="room__list">
            {list.map(({ id, ...rest}) => (
                <Fragment key={id}>
                    <Item {...rest} />
                </Fragment>
            ))}
        </div>
    </div>);
}

function Item ({ guestName, rating, review }) {
    return (
        <Box className="room">
            <div className="room__part">
                <span className="room__title">{guestName}</span>
                <span className="room__rating">Рейтинг: {rating}</span>
            </div>
            <div className="room__part">
                <span className="room__review">{review}</span>
            </div>
            
        </Box>
    );
}