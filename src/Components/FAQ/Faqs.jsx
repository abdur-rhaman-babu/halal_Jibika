import Faq from "./Faq";
import './Faq.css'
const faqData =[
    {
        Td:1,
        Title:"What is your Name",
        Des:'My name is Sagor lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores earum sunt hic quia, maiores '
    },
    {
        id:2,
        Title:"What do you want to me",
        Des:'I wanna mobile to youMy name is Sagor lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores earum '
    },
    {
        id:3,
        Title:"Which mobile do you want",
        Des:'I wanna the blue color mobileMy name is Sagor lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores earum '
    },
    {
        id:4,
        Title:"Do you want anything else",
        Des:'Yes, I want a headphone named sumsung brandMy name is Sagor lorem Lorem ipsum '
    },
    {
        id:5,
        Title:"Do you want to take immedietly",
        Des:'Yes, I wantMy name is Sagor lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores earum sunt hic '
    }

]

const Faqs = () => {

    return (
        <div className="container">
            <div className="faq-design">
            {
                faqData.map((data)=> <Faq key={data.id}  {...data}/>)
            }
            </div>
            
        </div>
    );
};

export default Faqs;