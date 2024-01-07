import "./index.css";
import Heading from '../heading';
import Box from "../box";
import ListItem from "../list-item";
import { Fragment } from "react";

export default function Nearby ({ list }) {
    return (
        <Box shadow className="prop-details">
            <Heading border>Пам'ятки поблизу</Heading>

            <div className="list">
                {list.map(({ id, ...rest}) => (
                    <Fragment key={id}>
                        <Item {...rest} />
                    </Fragment>
                ))}
            </div>
        </Box>
    );
}

function Item ({ name, link }) {
    return (
        <div>
            <ListItem link={link}>{name}</ListItem>
            
        </div>
    );
}