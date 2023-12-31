import { useLoaderData } from "react-router-dom";
const JobDetails = () => {
    const {title,companyName,description}= useLoaderData()
    return (
        <div>
            <h1>CompanyName: {companyName}</h1>
            <h3>Title: {title}</h3>
            <p>Website: {description}</p>
        </div>
    );
};

export default JobDetails;