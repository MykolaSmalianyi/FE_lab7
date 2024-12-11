function GoodsCard({ name, price, image }) {
    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            margin: "8px",
            textAlign: "center",
            width: "200px"
        }}>
            <img
                src={image}
                alt={name}
                style={{ width: "100%", height: "150px", objectFit: "contain" }}
            />
            <h3>{name}</h3>
            <p style={{ color: "green", fontWeight: "bold" }}>{price} грн</p>
        </div>
    );
}

function Gallery() {
    // Массив товарів
    const goods = [
        { name: "Смартфон Samsung", price: 12000, image: "./img/samsung.jpg" },
        { name: "Ноутбук Acer", price: 25000, image: "./img/acer.jpg" },
        { name: "Навушники Sony", price: 3000, image: "./img/sony.jpg" },
        { name: "Планшет Lenovo", price: 15000, image: "./img/lenovo.jpg" },
        { name: "Годинник Apple", price: 18000, image: "./img/apple.jpg" },
        { name: "Мишка Logitech", price: 800, image: "./img/logitech.jpg" },
    ];

    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
        }}>
            {goods.map((item, index) => (
                <GoodsCard
                    key={index}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                />
            ))}
        </div>
    );
}

export default function Task2() {
    return (
        <div>
            <h1 style={{ textAlign: "center", margin: "20px 0" }}>Галерея товарів</h1>
            <Gallery />
        </div>
    );
}