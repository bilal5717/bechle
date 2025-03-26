import React from 'react';
import mobiles from './CategoryImages/mobile_phone.svg';
import cars from './CategoryImages/Vehicle_Car.svg';
import bikes from './CategoryImages/Vehicle_Bike.svg';
import house_sale from './CategoryImages/house_for_sale.svg';
import house_rent from './CategoryImages/House_for_rent.svg';
import appartment from './CategoryImages/apartment.svg';
import jobs from './CategoryImages/jobs.svg';
import animals from './CategoryImages/animals.svg';
import more from './CategoryImages/more.svg';
const categories = [
    { id: 1, title: 'Mobiles', image: mobiles },
    { id: 2, title: 'Cars', image: cars },
    { id: 3, title: 'Bikes', image: bikes },
    { id: 4, title: 'House For Sale', image: house_sale },
    { id: 5, title: 'House For Rent', image: house_rent},
    { id: 6, title: 'Appartment', image: appartment },
    { id: 7, title: 'Jobs', image: jobs },
    { id: 8, title: 'Animals', image: animals },
    { id: 9, title: 'more', image: more },
];

const CategoriesBox = () => {
    return (
        <div className="container-fluid mt-5">
            <h1 className="main-heading">Sell Up - Pakistan's Largest Marketplace for New & Used Items</h1>
            <p className="text-muted cat-para">Buy & Sell in Pakistan – Cars, Bikes, Property, Mobile Phones, Electronics, Jobs & More on Pakistan's #1 Marketplace.</p>
            <div className="d-flex justify-content-center flex-wrap  cat-cards">
                {categories.map((category) => (
                    <div key={category.id} className="card text-center border-none  cat-card" style={{ width: '8rem', cursor: 'pointer' }}>
                        <div className="card-body cat-card-body">
                            <img 
                                src={category.image.src} 
                                alt={category.title} 
                                className="img-fluid mb-2" 
                                style={{ width: '80px', height: '80px', objectFit: 'cover' }} 
                            />
                            <h5 className="card-title ">{category.title}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriesBox;