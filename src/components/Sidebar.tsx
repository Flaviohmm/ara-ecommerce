import React from "react";

const Sidebar: React.FC = () => {
    const categories = [
        "Livros",
        "Moda",
        "Criar Alteração",
        "Cafés",
        "Pirotace",
        "Ajuda",
        "Políticas",
        "Comprar Temas",
    ];

    return (
        <div className="sidebar w-64 border-r border-gray-200 shadow-lg p-6 bg-white">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Categorias</h2>
            <ul className="space-y-3">
                {categories.map((category) => (
                    <li 
                        key={category} 
                        className="hover:bg-blue-100 hover:text-blue-600 transition-colors p-2 rounded-md cursor-pointer"
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;