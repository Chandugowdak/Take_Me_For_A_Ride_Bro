const express = require('express');

const Accessories_Data = 
{
  "accessories": [
    {
      "id": 1,
      "Name": "Full Face Helmet",
      "Image": "https://arihanthelmets.com/wp-content/uploads/2025/08/LS2_Pioneer_2_Crazy_Gloss_Black_Red_Helmet_2-Photoroom.jpg",
      "Description": "High safety full face helmet with ventilation.\nProvides maximum head protection during rides.",
      "Type_Of_Vehical_We_Use": ["Bike", "Scooter"],
      "Price": 2500,
      "Discount%": 10
    },
    {
      "id": 2,
      "Name": "Riding Gloves",
      "Image": "https://www.customelements.in/wp-content/uploads/2022/03/Tarmac-Rapid-Black-White-Fluorescent-Full-Gauntlet-Riding-Gloves.jpg",
      "Description": "Anti-slip riding gloves with knuckle protection.\nImproves grip and protects hands from injuries.",
      "Type_Of_Vehical_We_Use": ["Bike", "Scooter"],
      "Price": 1200,
      "Discount%": 15
    },
    {
      "id": 3,
      "Name": "Knee & Elbow Guards",
      "Image": "https://theriderhub.com/wp-content/uploads/2022/05/BSDDP-KG-04-1.jpg",
      "Description": "Strong knee and elbow guards for safety.\nReduces injury risk during accidents or falls.",
      "Type_Of_Vehical_We_Use": ["Bike"],
      "Price": 1800,
      "Discount%": 20
    },
    {
      "id": 4,
      "Name": "Riding Jacket",
      "Image": "https://www.customelements.in/wp-content/uploads/2023/02/DSG-Race-Pro-V2-Orange-Fluo-Black-Riding-Jacket-350x350.webp",
      "Description": "Windproof and padded riding jacket.\nProvides comfort and safety for long rides.",
      "Type_Of_Vehical_We_Use": ["Bike"],
      "Price": 4500,
      "Discount%": 12
    },
    {
      "id": 5,
      "Name": "Mobile Holder",
      "Image": "https://images-eu.ssl-images-amazon.com/images/I/71yPqw8eBJL._AC_UL495_SR435,495_.jpg",
      "Description": "Secure mobile holder for navigation use.\nEasy installation and strong grip.",
      "Type_Of_Vehical_We_Use": ["Bike", "Scooter", "Car"],
      "Price": 900,
      "Discount%": 8
    },
    {
      "id": 6,
      "Name": "Riding Boots",
      "Image": "https://d2raye211e9z2r.cloudfront.net/wysiwyg/bbg_racing_boots-black.jpg",
      "Description": "Durable riding boots with ankle support.\nProtects feet during long and rough rides.",
      "Type_Of_Vehical_We_Use": ["Bike"],
      "Price": 3800,
      "Discount%": 18
    },
    {
  "id": 7,
  "Name": "Riding Rain Cover",
  "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcX5geiQ9OV0B1IYS64ohOjG-2jlm3Jcc7ig&s",
  "Description": "Waterproof rain cover for riders.\nKeeps you dry and comfortable during rainy rides.",
  "Type_Of_Vehical_We_Use": ["Bike", "Scooter"],
  "Price": 1600,
  "Discount%": 14
},
{
  "id": 8,
  "Name": "Bike Saddle Bags",
  "Image": "https://m.media-amazon.com/images/I/81WCIyLQfIL.jpg",
  "Description": "Spacious saddle bags for storing essentials.\nIdeal for long rides and travel purposes.",
  "Type_Of_Vehical_We_Use": ["Bike"],
  "Price": 3200,
  "Discount%": 16
}

  ]
}


const Top_City = [
  { name: "Bengaluru", image: "https://sukuto.com/_next/image/?url=https%3A%2F%2Fsukuto.com%2Fimages%2Fcity_bangalore.png&w=256&q=75" },
  { name: "Chennai", image: "https://sukuto.com/_next/image/?url=https%3A%2F%2Fsukuto.com%2Fimages%2Fcity_chennai.png&w=256&q=75" },
  { name: "Hyderabad", image: "https://sukuto.com/_next/image/?url=https%3A%2F%2Fsukuto.com%2Fimages%2Fcity_hyderabad.png&w=256&q=75" },
  { name: "Mumbai", image: "https://sukuto.com/_next/image/?url=https%3A%2F%2Fsukuto.com%2Fimages%2Fcity_mumbai.png&w=256&q=75" },
  { name: "Gokarna", image: "https://sukuto.com/_next/image/?url=https%3A%2F%2Fsukuto.com%2Fimages%2Fcity_gokarna.png&w=256&q=75" },
  { name: "Goa", image: "https://sukuto.com/_next/image/?url=https%3A%2F%2Fsukuto.com%2Fimages%2Fcity_goa.png&w=256&q=75" },
  { name: "Pondicherry", image: "https://sukuto.com/_next/image/?url=https%3A%2F%2Fsukuto.com%2Fimages%2Fcity_pondicherry.png&w=256&q=75" },
  { name: "Pune", image: "https://sukuto.com/_next/image/?url=https%3A%2F%2Fsukuto.com%2Fimages%2Fcity_pune.png&w=256&q=75" },
  { name: "Delhi", image: "https://sukuto.com/_next/image/?url=https%3A%2F%2Fsukuto.com%2Fimages%2Fcity_delhi.png&w=256&q=75" },
  { name: "Manali", image: "https://sukuto.com/_next/image/?url=https%3A%2F%2Fsukuto.com%2Fimages%2Fcity_manali.png&w=256&q=75" },
  { name: "Guwahati", image: "https://sukuto.com/_next/image/?url=https%3A%2F%2Fsukuto.com%2Fimages%2Fcity_guwahati.png&w=256&q=75" },
  { name: "Coimbatore", image: "https://sukuto.com/_next/image/?url=https%3A%2F%2Fsukuto.com%2Fimages%2Fcity_coimbatore.png&w=256&q=75" },
  { name: "Vizag", image: "https://sukuto.com/_next/image/?url=https%3A%2F%2Fsukuto.com%2Fimages%2Fcity_vizag.png&w=256&q=75" },
  { name: "Dehradun", image: "https://sukuto.com/_next/image/?url=https%3A%2F%2Fsukuto.com%2Fimages%2Fcity_dehradun.png&w=256&q=75" },
  { name: "Mangalore", image: "https://sukuto.com/_next/image/?url=https%3A%2F%2Fsukuto.com%2Fimages%2Fcity_mangalore.png&w=256&q=75" },
  { name: "Raipur", image: "https://sukuto.com/_next/image/?url=https%3A%2F%2Fsukuto.com%2Fimages%2Fcity_raipur.png&w=256&q=75" },
  { name: "Leh", image: "https://sukuto.com/_next/image/?url=https%3A%2F%2Fsukuto.com%2Fimages%2Fcity_leh.png&w=256&q=75" },
  { name: "Bhubaneswar", image: "https://sukuto.com/_next/image/?url=https%3A%2F%2Fsukuto.com%2Fimages%2Fcity_bhubneshwer.png&w=256&q=75" }
];


const Get_Accesseries = (req,res)=>{
    try{
        res.status(200).json({message:"Accessories Data Fetched Successfully",data:Accessories_Data});
    }
    catch(err){
        res.status(500).json({message:"Server Error",error:err.message});
    }
}


const Get_Top_City = (req,res)=>{
try{
    res.status(200).json({message:"Top Cities Data Fetched Successfully",data:Top_City});
}
catch(err){
    res.status(500).json({message:"Server Error",error:err.message});
}
}

module.exports = {Get_Accesseries , Get_Top_City};

