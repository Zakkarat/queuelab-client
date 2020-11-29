import React from 'react';
import Subject from "./Subject";

const SubjectList = ({subjects}) => {
    return (
        <section className="sectionMain">
            <button className="left">
                <svg className="svg-img" width="18.26px" height="30px">
                    <use href="./images/sprite.svg#l_arrow"/>
                </svg>
            </button>
        <ul className="list">
            {subjects.map(({name, href, image, alt}) => <Subject key={name} name={name} href={href} image={image} alt={alt} />)}
        </ul>
            <button disabled className="right">
                <svg className="svg-img" width="18.26px" height="30px">
                    <use href="./images/sprite.svg#r_arrow"/>
                </svg>
            </button>
        </section>
    );
};

export default SubjectList;
