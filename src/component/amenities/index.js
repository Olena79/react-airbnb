import "./index.css";

import Heading from '../heading';
import Box from "../box";
import ListItem from "../list-item";

import animals from "./animals.svg";
import breakfast from "./breakfast.svg";
import child from "./child.svg";
import gym from "./gym.svg";
import parking from "./parking.svg";
import pool from "./pool.svg";
import roomService from "./room-service.svg";
import security from "./security.svg";
import transfer from "./transfer.svg";
import wifi from "./wifi.svg";

export default function Amenities ({ 
    hasPool,
    hasGym,
    hasFreeBreakfast,
    hasFreeWiFi,
    hasParking,
    hasPetsAllowed,
    hasAirportShuttle,
    hasConciergeService,
    hasRoomService,
    hasChildFriendly, 
}) {
    return (
        <Box shadow className="amenities">
            <Heading border>Зручності</Heading>

            {hasPool ? <ListItem imageSrc={pool}>Бассейн</ListItem> : ""}
            {hasGym ? <ListItem imageSrc={gym}>Спортивний зал</ListItem> : ""}
            {hasFreeBreakfast ? <ListItem imageSrc={breakfast}>Безкоштовний сніданок</ListItem> : ""}
            {hasFreeWiFi ? <ListItem imageSrc={wifi}>Безкоштовний Wi-Fi</ListItem> : ""}
            {hasParking ? <ListItem imageSrc={parking}>Безкоштовний вуличний паркінг</ListItem> : ""}
            {hasPetsAllowed ? <ListItem imageSrc={animals}>Дозволено розміщення з домашніми тваринами</ListItem> : ""}
            {hasAirportShuttle ? <ListItem imageSrc={transfer}>Трансфер до/з аеропорту</ListItem> : ""}
            {hasConciergeService ? <ListItem imageSrc={security}>Консьєрж-сервіс</ListItem> : ""}
            {hasRoomService ? <ListItem imageSrc={roomService}>Обслуговування номерів</ListItem> : ""}
            {hasChildFriendly ? <ListItem imageSrc={child}>Підходить для дітей</ListItem> : ""}
        </Box>
    );
}