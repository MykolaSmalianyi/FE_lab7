import React from "react";

const randomColor = () => "#" + Math.floor(Math.random() * 255 ** 3).toString(16);

function Header() {
    return (
        <header>
            <h1>Смаляний Микола Антонович</h1>
            <p>Дата народження: 26 травня 2005 року</p>
        </header>
    );
}

class Content extends React.Component {
    handleElementClick = (event) => {
        event.target.style.backgroundColor = randomColor();
        event.target.style.color = randomColor();
    };

    render() {
        return (
            <div>
                <p>Місце народження: Черкаси, Україна</p>
                <p>Освіта: Черкаська загальноосвітня школа І-ІІІ ступенів № 30</p>
                <h3 onClick={this.handleElementClick}>Хоббі</h3>
                <ul>
                    <li onClick={this.handleElementClick}>Читання</li>
                    <li>Подорожі</li>
                    <li>Програмування</li>
                </ul>
                <h3>Улюблені фільми</h3>
                <ol>
                    <li>"Матриця", 1999</li>
                    <li>"Я — легенда", 2007</li>
                    <li>"Дедпул", 2016</li>
                </ol>
            </div>
        );
    }
}

function Image() {
    const [isVisible, setIsVisible] = React.useState(true);
    const [size, setSize] = React.useState(100);

    const handleAdd = () => setIsVisible(true);
    const handleDelete = () => setIsVisible(false);
    const handleZoomIn = () => setSize((prevSize) => prevSize * 1.1);
    const handleZoomOut = () => setSize((prevSize) => prevSize / 1.1);

    return (
        <div>
            <h3>Моє улюблене місто</h3>
            <p>Моє улюблене місто - Київ. Це надзвичайне місце з багатою історією та культурою.</p>
            {isVisible && (
                <a href="https://www.kyivcity.gov.ua">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/17-07-02-Maidan_Nezalezhnosti_RR74377-PANORAMA.jpg/1024px-17-07-02-Maidan_Nezalezhnosti_RR74377-PANORAMA.jpg"
                        alt="Фото міста Київ"
                        style={{width: `${size}%`, transition: "width 0.3s"}}
                    />
                </a>
            )}
            <div>
                <button onClick={handleAdd}>Додати</button>
                <button onClick={handleZoomIn}>Збільшити</button>
                <button onClick={handleZoomOut}>Зменшити</button>
                <button onClick={handleDelete}>Видалити</button>
            </div>
        </div>
    );
}

export default function Task1() {
    return (
        <div>
            <Header />
            <Content />
            <Image />
        </div>
    );
}