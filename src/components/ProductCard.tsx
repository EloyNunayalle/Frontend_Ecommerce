import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../interfaces/products/Product";
import { getCategoryImageById } from "../utils/CategoryImageMapper";

const ProductCard = ({ product }: { product: Product }) => {
    const navigate = useNavigate();
    const [imageUrl, setImageUrl] = useState("https://via.placeholder.com/400x200?text=Producto");

    useEffect(() => {
        const fetchImage = async () => {
            const img = await getCategoryImageById(product.category_id);
            setImageUrl(img);
        };
        fetchImage();
    }, [product.category_id]);

    return (
        <div
            className="card bg-base-200 shadow-md cursor-pointer hover:shadow-lg transition"
            onClick={() => navigate(`/producto/${product.id}`)}
        >
            <figure>
                <img
                    src={imageUrl}
                    alt={product.name}
                    className="w-full object-contain h-48"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p className="text-sm">Precio: ${product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
