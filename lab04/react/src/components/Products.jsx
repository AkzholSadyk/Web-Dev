import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaShareAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const products = [
    {
        id: 1,
        name: 'iPhone 13 Pro Max',
        description: 'Apple iPhone 13 Pro Max with 256GB storage',
        rating: 4.9,
        images: [
            'https://images.unsplash.com/photo-1',
            'https://images.unsplash.com/photo-2',
            'https://images.unsplash.com/photo-3'
        ],
        link: 'https://kaspi.kz/product/iphone-13-pro-max'
    },
    // Add 9 more products in similar structure
];

const Products = () => {
    const shareProduct = (link) => {
        const encodedLink = encodeURIComponent(link);
        const whatsappUrl = `https://wa.me/?text=${encodedLink}`;
        const telegramUrl = `https://t.me/share/url?url=${encodedLink}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {products.map((product) => (
                <motion.div key={product.id} whileHover={{ scale: 1.05 }}>
                    <Card className="rounded-2xl shadow-lg p-2">
                        <Carousel showThumbs={false} infiniteLoop autoPlay>
                            {product.images.map((img, idx) => (
                                <img key={idx} src={img} alt={`${product.name} ${idx + 1}`} className="rounded-2xl" />
                            ))}
                        </Carousel>
                        <CardContent className="p-4">
                            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                            <p className="text-sm mb-2">{product.description}</p>
                            <p className="text-yellow-500 mb-4">Rating: {product.rating} / 5</p>
                            <a href={product.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View on Kaspi.kz</a>
                            <Button onClick={() => shareProduct(product.link)} className="mt-4 flex items-center gap-2">
                                <FaShareAlt /> Share
                            </Button>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
};

export default Products;
