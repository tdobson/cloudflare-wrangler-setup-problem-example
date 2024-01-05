// ./components/SitePage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const SitePage = () => {
    const { siteId } = useParams();

    // You would typically fetch or determine the site details based on siteId
    const siteDetails = {
        proposal: "Details about what's proposed for this site...",
        objections: "Potential objections and concerns...",
        participation: "How to have your say..."
    };

    return (
        <div>
            <h1>Site {siteId}</h1>
            <section>
                <h2>What's Proposed</h2>
                <p>{siteDetails.proposal}</p>
            </section>
            <section>
                <h2>Potential Objections</h2>
                <p>{siteDetails.objections}</p>
            </section>
            <section>
                <h2>Have Your Say</h2>
                <p>{siteDetails.participation}</p>
            </section>
        </div>
    );
};

export default SitePage;
