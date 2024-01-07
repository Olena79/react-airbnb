import "./index.css";

export default function ListItem ({ children, imageSrc, title, link }) {
    return (
        <li className="list-item">
            {imageSrc && <img height={24} width={24} src={imageSrc} alt="Icon" />}
            <div className="list-item__block">
                {title && <strong className="list-item__title">{title}</strong>}
                {link ? <a href={link} className="list-item__content--link">{children}</a> : <div className="list-item__content">{children}</div>}
            </div>
        </li>
    );
}