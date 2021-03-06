import React from "react";

const List = ({ people }) => {
    return (
        <>
            {people.map((person) => {
              const {id, name, age, image} = person
                return (
                    <article key={id} className="person">
                        <img src={image} alt="pic" />
                        <div>
                            <h5>{name}</h5>
                            <p>{age}</p>
                        </div>
                    </article>
                );
            })}
        </>
    );
};

export default List;
