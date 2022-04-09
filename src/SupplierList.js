import React from 'react';

const SupplierList = ({ suppliers }) => {
    return (
        <div className="blog-list">
            {suppliers.map(supplier => (
                <div className="blog-preview" key={supplier.id} >

                    <h2>{supplier.name}</h2>
                    <p>{supplier.phone}</p>
                    <p>{supplier.address}</p>
                </div>
            ))}
        </div>
    );
};

export default SupplierList;
