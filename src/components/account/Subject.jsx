import React from 'react';

const Subject = ({name, href, image, alt}) => {
    return (
        <li className="item">
            <a
                href={href}
                className="link"
                target="_blank"
            ><img
                className="img"
                src={`./images/subjects-img/${image}.jpg`}
                alt={alt}
            />
                <p className="text">{name}</p></a
            >
        </li>
    );
};

export default Subject;
