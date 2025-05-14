import React from "react";

function Card({username = 'LS', post='not assigned', image='https://images.unsplash.com/photo-1542038784456-1ea8e935640e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D'}) {
    //console.log(props);
    return (
    <div>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
            className="w-24 h-24 rounded-full mx-auto"
            src={image}
            alt=""
        width="384"
        height="512"
        />
        <div className="pt-6 md:p-8 text-center space-y-4">
            <blockquote>
            <p className="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
            </p>
            </blockquote>
            <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{username}</div>
            <div className="text-slate-700 dark:text-slate-500">
                {post}
            </div>
            </figcaption>
        </div>
        </figure>
    </div>
    );
}

export default Card;
