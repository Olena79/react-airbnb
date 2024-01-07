import "./index.css";
import Heading from '../heading';
import Box from "../box";
import ListItem from "../list-item";

import guest from "./guest.svg";
import bathroom from "./bathroom.svg";
import bed from "./bed.svg";
import bedroom from "./bedroom.svg";

export default function PropDetails ({ guests, bedrooms, beds, baths }) {
    return (
        <Box shadow className="prop-details">
            <Heading border>Деталі властивості:</Heading>

            <ListItem imageSrc={guest}>{guests} гості</ListItem>
            <ListItem imageSrc={bedroom}>{bedrooms} спальня</ListItem>
            <ListItem imageSrc={bed}>{beds} ліжко</ListItem>
            <ListItem imageSrc={bathroom}>{baths} ванна кімната</ListItem>
        </Box>
    );
}