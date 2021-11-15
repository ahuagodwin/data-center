import React from 'react'

function Avatar({url}) {
    return <img loading="lazy" className="h-10" src={url} alt="profile" />;
}

export default Avatar;
