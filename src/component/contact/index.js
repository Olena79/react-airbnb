import Heading from "../heading";
import "./index.css";
import selfy from "./selfy.svg"

export default function Contact({ name, rate, time, info, phone }) {
    return (
        <div className="contact__main">
            <div className="contact">
            
                <img src={selfy} />
                
                <div className="contact__block">
                    <Heading>Господар – {name}</Heading>
                    <div className="contact__story">
                        <span className="contact__story--value">{phone}</span>
                        <span className="contact__story--value">{time}</span>
                        <span className="contact__story--value">{rate}% відсотків швидкості відгуку</span>
                    </div>
                </div>
            </div>

            <div className="contact__info">{info}</div>
        </div>
    );
}