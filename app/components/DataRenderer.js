export default function DataRendererObj({ data }) {
    if (typeof data === "string" && data.includes("/video")) {
        return <video controls autoPlay width={200}>
            <source src={data} type="audio/mp4" />
        </video>
    } else if (typeof data === "string" && data.includes("/audio")) {
        return <audio controls autoPlay>
            <source src={data} type="audio/mp3" />
        </audio>
    } else if (typeof data === "string" && data.includes("/image")) {
        return <img src={data} alt="image" />
    } else if (typeof data === "string") {
        return <span>{'"'}{data}{'"'}</span>
    } else if (typeof data === "object" && data && Object.entries(data).length) {
        return (
            <div>
                <div>
                    <span>{"{"}</span>
                </div>
                <div className="ms-4">
                    {Object.entries(data).map(([key, value], index, arr) => (
                        <span className="d-block" key={key}>
                            <span className="text-warning">"{key}"</span>:{" "}
                            {typeof value === "string" ? (
                                <span className="text-light">"{value}"</span>
                            ) : typeof value === "number" ? (
                                <span className="text-info">{value}</span>
                            ) : typeof value === "boolean" ? (
                                <span className="text-primary">{String(value)}</span>
                            ) : value === null ? (
                                <span className="text-muted">null</span>
                            ) : (
                                <span>{JSON.stringify(value)}</span>
                            )}
                            {index < arr.length - 1 ? "," : ""}
                        </span>
                    ))}
                </div>
                <div>
                    <span>{"}"}</span>
                </div>
            </div>
        );
    } else {
        return <span>{"{}"}</span>;
    }
}


// {
// "id": 1,
// "title": "Buy groceries",
// "completed": false
// }