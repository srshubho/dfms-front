
const CowList = ({ cows }) => {
    return (
        <div className="blog-list">
            {cows.map(cow => (
                <div className="blog-preview" key={cow.id} >

                    <h2>{cow.gender ? "Female" : "Male"}</h2>
                    <p>Written by {cow.name}</p>
                </div>
            ))}
        </div>
    );
}

export default CowList;