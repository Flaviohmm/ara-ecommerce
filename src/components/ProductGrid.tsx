import React from "react";
import ProductCard from "./ProductCard";
import image1 from "../images/generated_image_1734464823530.jpg";
import image2 from "../images/generated_image_1734539717528.jpg";
import image3 from "../images/generated_image_1734540163278.jpg";
import image4 from "../images/generated_image_1734541953670.jpg";

const products = [
    { title: 'Livro 1', description: 'Descrição do Livro 1', image: image1, price: '$25' },
    { title: 'Produto 2', description: 'Descrição do Produto 2', image: image2, price: '$30' },
    { title: 'Produto 3', description: 'Descrição do Produto 3', image: image3, price: '$40'},
    { title: 'Produto 4', description: 'Descrição do Produto 4', image: image4, price: '$50'},
]

const ProductGrid: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <ProductCard 
                            key={product.title} 
                            title={product.title} 
                            image={product.image} 
                            description={product.description}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductGrid;