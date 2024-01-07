import "./index.css";
import Heading from '../heading';

export default function Description ({ description, text }) {
    return (
        <div className="description">
            <Heading>{text}</Heading>
            <div className="description__text">{description}</div>
        </div>
    );
}