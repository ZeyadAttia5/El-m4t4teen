import React from 'react';
import './HomePage.css';
import medicalDonationImage from '../assets/medical_donation.jpg';
import teachingMaterialImage from '../assets/teaching_material.jpg';
import foodDonationImage from '../assets/food_donation.jpg';
import clothesDonationImage from '../assets/clothes_donation.jpg';
import toyDonationImage from '../assets/toy_donation.jpg';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate();

  const handleMedicalDonationClick = () => {
    navigate('/MedDashboard');
  };

  const handleTeachingMaterialDonationClick = () => {
    navigate('/Teaching');
  };

  const handleFoodDonationClick = () => {
    navigate('/FoodDonation');
  };

  const handleClothesDonationClick = () => {
    navigate('/ClothesDonation');
  };

  const handleToyDonationClick = () => {
    navigate('/ToyDonation');
  };

  return (
    <div className="home-page">
      <h1>Welcome to Our Donation Platform</h1>

      <div className="donation-components">
        <div className="donation-row">
          
          <div className="donation-component medical-donation" onClick={handleMedicalDonationClick}>
            
            <h2>Medical Donation</h2>
            <img src={medicalDonationImage} alt="Medical Donation" />
            
            
          </div>
          <div className="donation-component teaching-material-donation" onClick={handleTeachingMaterialDonationClick}>
            <img src={teachingMaterialImage} alt="Teaching Material Donation" />
            
            <h2>Teaching Material Donation</h2>
          </div>
        </div>
        <div className="donation-row">
          <div className="donation-component food-donation" onClick={handleFoodDonationClick}>
            <img src={foodDonationImage} alt="Food Donation" />
            
            <h2>Food Donation</h2>
          </div>
          <div className="donation-component clothes-donation" onClick={handleClothesDonationClick}>
            <img src={clothesDonationImage} alt="Clothes Donation" />
            
            <h2>Clothes Donation</h2>
          </div>
        </div>
        <div className="donation-row">
          <div className="donation-component toy-donation" onClick={handleToyDonationClick}>
            <img src={toyDonationImage} alt="Toy Donation"  />
            
            <h2>Toy Donation</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
