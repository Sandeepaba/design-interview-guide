import "./ChapterCard.css";

interface Topic {
    title: string;
    children?: string[];
}

interface ChapterCardProps {
    chapter: string;
    title: string;
    description: string;
    image: string;
    background: string;
    topics: (string | Topic)[];
    dark?: boolean;
    imageClass?: string;
}


const ChapterCard = ({
    chapter,
    title,
    description,
    image,
    background,
    topics,
    dark = false,
    imageClass = "",
}: ChapterCardProps) => {
    return (
        <section className="chapter-card">

            {/* Top Section */}



            <div
                className={`chapter-top ${dark ? "dark" : ""}`}
                style={{ backgroundColor: background }}
            >
                <div className="chapter-container">

                    <div className="chapter-content">

                        <span className="chapter-number">{chapter}</span>

                        <h1>{title}</h1>

                        <p>{description}</p>

                    </div>

                    <div className={`chapter-image ${imageClass}`}>
                        <img src={image} alt={title} />
                    </div>

                </div>
            </div>



            {/* <div
                className={`chapter-top ${dark ? "dark" : ""}`}
                style={{ backgroundColor: background }}
            >
                <div className="chapter-container">

                    <div className="chapter-content">

                        <span className="chapter-number">
                            {chapter}
                        </span>

                        <h1>{title}</h1>

                        <p>{description}</p>

                    </div>

                    <div className={`chapter-image ${imageClass}`}>
                        <img src={image} alt={title} />
                    </div>

                </div>
            </div> */}

            {/* Bottom Section */}

            {/* <div className="chapter-bottom">
                <div className="chapter-bottom-content">
                    <h2>In this chapter</h2>

                    <ul>
                        {topics.map((item, index) => (
                            <li key={index}>
                                <a href="#">{item} →</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div> */}

            {/* <div className="chapter-bottom">

                <div className="chapter-container">

                    <h2>In this chapter</h2>

                    <ul>

                        {topics.map((item, index) => (

                            <li key={index}>
                                <a href="#">
                                    {item} →
                                </a>
                            </li>

                        ))}

                    </ul>

                </div>

            </div> */}


            <div className="chapter-bottom">

                <div className="chapter-container chapter-bottom-content">

                    <h2>In this chapter</h2>

                    <ul className="chapter-list">
                        {topics.map((item, index) => {
                            if (typeof item === "string") {
                                return (
                                    <li key={index}>
                                        <a href="#">{item} →</a>
                                    </li>
                                );
                            }

                            return (
                                <li key={index}>
                                    <a href="#">{item.title} →</a>

                                    {item.children && (
                                        <ul className="sub-topic-list">
                                            {item.children.map((child, childIndex) => (
                                                <li
                                                    key={childIndex}
                                                    className={child.includes("Whiteboarding") ? "long-topic" : ""}
                                                >
                                                    <a href="#">{child} →</a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                    </ul>

                </div>

            </div>

        </section>
    );
};

export default ChapterCard;