import React from "react";
import { Card } from "react-bootstrap";
import useSWR from "swr";

const ArtworkCardDetail = ({ objectID }) => {
    const { data } = useSWR(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
    );

    if (!data) {
        return null;
    }

    const {
        primaryImage,
        title,
        objectDate,
        classification,
        medium,
        artistDisplayName,
        creditLine,
        dimensions,
        artistWikidata_URL,
    } = data;

    const imageUrl = primaryImage
        ? primaryImage
        : "https://via.placeholder.com/375x375.png?text=[+Not+Available+]";

    return (
        <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title || "N/A"}</Card.Title>
                <Card.Text>
                    Object Date: {objectDate || "N/A"}
                    <br />
                    Classification: {classification || "N/A"}
                    <br />
                    Medium: {medium || "N/A"}
                    <br />
                    <br />
                    {artistDisplayName && (
                        <div>
                            Artist:{" "}
                            <a
                                href={artistWikidata_URL}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {artistDisplayName}
                            </a>
                        </div>
                    )}
                    <br />
                    Credit Line: {creditLine || "N/A"}
                    <br />
                    Dimensions: {dimensions || "N/A"}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ArtworkCardDetail;




// const ArtworkCardDetail = ({ objectID }) => {
//     const { data } = useSWR(
//         `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
//     );

//     if (!data) {
//         return null;
//     }

//     const {
//         primaryImage,
//         title,
//         objectDate,
//         classification,
//         medium,
//         artistDisplayName,
//         creditLine,
//         dimensions,
//         artistWikidata_URL,
//     } = data;

//     const imageUrl = primaryImage
//         ? primaryImage
//         : "https://via.placeholder.com/375x375.png?text=[+Not+Available+]";

//     return (
//         <Card style={{ width: "30rem" }}>
//             <Card.Img variant="top" src={imageUrl} />
//             <Card.Body>
//                 <Card.Title>{title || "N/A"}</Card.Title>
//                 <Card.Text>
//                     Object Date: {objectDate || "N/A"}
//                     <br />
//                     Classification: {classification || "N/A"}
//                     <br />
//                     Medium: {medium || "N/A"}
//                     <br />
//                     <br />
//                     {artistDisplayName && (
//                         <div>
//                             Artist:{" "}
//                             <a
//                                 href={artistWikidata_URL}
//                                 target="_blank"
//                                 rel="noreferrer"
//                             >
//                                 {artistDisplayName}
//                             </a>
//                         </div>
//                     )}
//                     Credit Line: {creditLine || "N/A"}
//                     <br />
//                     Dimensions: {dimensions || "N/A"}
//                 </Card.Text>
//             </Card.Body>
//         </Card>
//     );
// };

// export default ArtworkCardDetail;
