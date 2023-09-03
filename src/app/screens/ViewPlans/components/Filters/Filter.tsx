import React from "react";
import DesktopFilters from "./components/DesktopFilters";
import MobileFilters from "./components/MobileFilters";
import { LuFilter } from "react-icons/lu";
import Card from "./components/FilterCard";

const Filter = () => {
  const cardData = [
    {
      id: 1,
      imageUrl: "/assets/insurance-companies/niva.png",
      title: "Prime Advantage",
      sales: "1,324",
      description: "Since 2012 \n Last purchased 1 month ago",
      buttonText: "Button 1",
      buttonPrice: "1,799",
    },
    {
      id: 1,
      imageUrl: "/assets/insurance-companies/niva.png",
      title: "Prime Advantage",
      sales: "1,324",
      description: "Since 2012 \n Last purchased 1 month ago",
      buttonText: "Button 1",
      buttonPrice: "1,799",
    },
    {
      id: 1,
      imageUrl: "/assets/insurance-companies/niva.png",
      title: "Prime Advantage",
      sales: "1,324",
      description: "Since 2012 \n Last purchased 1 month ago",
      buttonText: "Button 1",
      buttonPrice: "1,799",
    },
    {
      id: 1,
      imageUrl: "/assets/insurance-companies/niva.png",
      title: "Prime Advantage",
      sales: "1,324",
      description: "Since 2012 \n Last purchased 1 month ago",
      buttonText: "Button 1",
      buttonPrice: "1,799",
    },
    {
      id: 1,
      imageUrl: "/assets/insurance-companies/niva.png",
      title: "Prime Advantage",
      sales: "1,324",
      description: "Since 2012 \n Last purchased 1 month ago",
      buttonText: "Button 1",
      buttonPrice: "1,799",
    },
    {
      id: 1,
      imageUrl: "/assets/insurance-companies/niva.png",
      title: "Prime Advantage",
      sales: "1,324",
      description: "Since 2012 \n Last purchased 1 month ago",
      buttonText: "Button 1",
      buttonPrice: "1,799",
    },
    {
      id: 1,
      imageUrl: "/assets/insurance-companies/niva.png",
      title: "Prime Advantage",
      sales: "1,324",
      description: "Since 2012 \n Last purchased 1 month ago",
      buttonText: "Button 1",
      buttonPrice: "1,799",
    },
    {
      id: 1,
      imageUrl: "/assets/insurance-companies/niva.png",
      title: "Prime Advantage",
      sales: "1,324",
      description: "Since 2012 \n Last purchased 1 month ago",
      buttonText: "Button 1",
      buttonPrice: "1,799",
    },
    {
      id: 1,
      imageUrl: "/assets/insurance-companies/niva.png",
      title: "Prime Advantage",
      sales: "1,324",
      description: "Since 2012 \n Last purchased 1 month ago",
      buttonText: "Button 1",
      buttonPrice: "1,799",
    },
 

    // Add more card data as needed
  ];
  

  const filters = [
    {
      title: "Sum Insured",
      relationId: 1,
      type: "popup",
      options: [
     
        {
          item: "Below ₹ 5 Lakh",
          relationId: 1,
        },
        {
          item: "₹ 5 - 10 Lakh",
          relationId: 2,
        },
        {
          item: "₹ 50 - 80 Lakh",
          relationId: 3,
        },
        {
          item: "₹ 1 Crore+",
          relationId: 4,
        },
      ],
    },
    {
      title: "Short By",
      relationId: 3,
      type: "popup",
      options: [
        {
          
          item: "Niva Bupa (formely known as Max Bupa)",
          relationId: 1,
        },
      ],
    },
    {
      title: "Insurer",
      relationId: 3,
      type: "popup",
      options: [
        {
          img: "/assets/insurance-companies/niva.png",
          item: "Niva Bupa (formely known as Max Bupa)",
          relationId: 1,
        },
        {
          img: "/assets/insurance-companies/niva.png",
          item: "Niva Bupa (formely known as Max Bupa)",
          relationId: 2,
        },
        {
          img: "/assets/insurance-companies/niva.png",
          item: "Niva Bupa (formely known as Max Bupa)",
          relationId: 3,
        },
      ],
    },
    {
      title: "Visa Type",
      relationId: 3,
      type: "popup",
      options: [
        {
          
          item: "Tourist/Visitor Visa",
          relationId: 1,
        },
        {
          
          item: "Short term work Visa",
          relationId: 2,
        },
        {
          
          item: "Permanent Resident Card  visa",
          relationId: 3,
        },
        {
          
          item: "Long term work Visaa",
          relationId: 4,
        },
        {
          
          item: "Dependent Visa",
          relationId: 5,
        },
        {
          
          item: "Diplomatic Visa",
          relationId: 6,
        },
        {
          
          item: "Expat  (No Visa Required)",
          relationId: 7,
        },
      ],
    },
    {
      title: "Coverages",
      relationId: 3,
      type: "popup",
      options: [
        {
          
          item: "Pre-existing disease covered",
          relationId: 1,
        },
        {
          
          item: "Adventure sports Covered",
          relationId: 2,
        },
        {
          
          item: "Pet Care",
          relationId: 3,
        },
        {
          
          item: "Coverage on Cruise",
          relationId: 4,
        },
        {
          
          item: "Home Burglary Covered",
          relationId: 5,
        },
        {
          
          item: "Card Fraud",
          relationId: 6,
        },
        {
          
          item: "No medical sublimit",
          relationId: 7,
        },
      ],
    },
    {
      title: "Purposes of Travel",
      relationId: 3,
      type: "popup",
      options: [
        {
          
          item: "Going home",
          relationId: 1,
        },
        {
          
          item: "Holiday/Tourism",
          relationId: 1,
        },
        {
          
          item: "Studies",
          relationId: 1,
        },
        {
          
          item: "Business /Work",
          relationId: 1,
        },
        {
          
          item: "Relocation",
          relationId: 1,
        },
        {
          
          item: "Medical Treatment",
          relationId: 1,
        },
      ],
    },
   
    {
      title: "All Filters",
      icon: <LuFilter />,
      type: "btn",
    },
  ];

  const handleButtonClick = () => {
    // Add your logic here for what should happen when the button is clicked
    console.log('Button Clicked');
  };
  return (
    <div>
      <DesktopFilters filters={filters} />
      <MobileFilters filters={filters} />
      {/* <div className="flex flex-wrap justify-center items-center px-8  py-20 gap-10">
      {cardData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          sales={card.sales}
          imageUrl={card.imageUrl}
          buttonPrice={card.buttonPrice}
          description={card.description}
          buttonText={card.buttonText}
          onButtonClick={() => handleButtonClick()}
        />
      ))}
    </div> */}
    </div>
  );
};

export default Filter;
