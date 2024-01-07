import "./index.css";
import Heading from '../heading';
import Box from "../box";
import ListItem from "../list-item";

export default function AddProp ({ house_rules, cancellation_policy, local_transportation, host_languages, special_offers, checkin_instructions }) {
    return (
        <Box shadow className="prop-details">
            <Heading border>Додаткові властивості</Heading>

            <ListItem title="Правила дому">{house_rules}</ListItem>
            <ListItem title="Політика скасування">{cancellation_policy}</ListItem>
            <ListItem title="Місцевий транспорт">{local_transportation}</ListItem>
            <ListItem title="Мови хоста">
            {host_languages && (
                    <ul className="language">
                        {host_languages.map((language, index) => (
                            <li key={index} className="language__item">{language}</li>
                        ))}
                    </ul>
                )}
            </ListItem>
            <ListItem title="Спеціальні пропозиції">{special_offers}</ListItem>
            <ListItem title="Інструкції щодо реєстрації">{checkin_instructions}</ListItem>
        </Box>
    );
}