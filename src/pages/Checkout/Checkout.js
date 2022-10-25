import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div>
            <h2>Checkout Page for id: {course.id} name:{course.name}</h2>
        </div>
    );
};

export default Checkout;