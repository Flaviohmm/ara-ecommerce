import React from "react";

const Header: React.FC = () => {
    return (
        <header className="bg-white p-4 shadow-md flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Familia Legis</h1>
            <nav>
                <ul className="flex space-x-4 mt-2">
                    <li className="text-gray-600 hover:text-gray-900 cursor-pointer">Livros</li>
                    <li className="text-gray-600 hover:text-gray-900 cursor-pointer">Novidade</li>
                    <li className="text-gray-600 hover:text-gray-900 cursor-pointer">Contato</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;