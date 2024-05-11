import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { FaAmazon } from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";
import { HiComputerDesktop } from "react-icons/hi2";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export interface ProjectDataStruct {
  title: string;
  description: string;
  tags: Array<string>;
  imageUrl: string;
}
export const experiencesData = [
  {
    title: "Senior Software Engineer",
    location: "Amazon, Bangalore",
    description:
      "\nAmazon Physical Stores\n" +
      "● Optimized inbound of Transshipments and Purchase Orders by designing auto stocking and stowing increasing the UPH up to 35%. Developed pallet-level tracking of shipments by designing workflows, databases and APIs, enabling pallet-level receiving.\n" +
      "● Developed scalable backend microservices to enable store associates to efficiently inbound shipments in stores. Created HLDs and LLDs for distributed systems and conducted design reviews.\n" +
      "● Migrated multiple legacy backend services and UI tools to AWS and ReactJS, slashing the resource cost by 30%, reducing on-call load by increasing availability and more verbose debugging.\n" +
      "● Built a highly scalable service from ground up to track checkout transactions for billing third-party stores for Just Walk Out tech.\n" +
      "● Conducted over 50 coding and system design interviews.\n" +
      "\nAmazon Prime\n" +
      "● Developed Plan Override Tool portal, reducing Prime Plans testing SLA by 80% and enabled unlimited test customers compared to existing 40-customer limit.\n" +
      "● Built Plan Override Tool Client for automated Prime Plan testing. Integrated with a RoR server reducing on-call workload by 20%.",
    icon: React.createElement(FaAmazon),
    date: "January 2020 - Present",
  },
  {
    title: "Software Engineer",
    location: "GetActive, Bangalore",
    description:
      "● Built health check up booking feature incorporating time slot selection, payment gateway, and real-time status.\n" +
      "● Developed a service for image compression. Leveraged Kafka for API performance, achieving a throughput of up to 20 TPS.\n" +
      "● Sole Android Engineer at the company. Built features like user feed and virtual run utilizing MVVM architecture and Firestore.",
    icon: React.createElement(HiComputerDesktop),
    date: "June 2019 - December 2020",
  },
  {
    title: "Graduated with Bachelor of Technology Degree",
    location: "Indian Institute of Technology (BHU), Varanasi",
    description:
      "● Enrolled for Bachelor of Technology at IIT-BHU, laying the foundation for technical skills.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2019",
  },
  {
    title: "Software Engineer Intern",
    location: "GetActive, Bangalore",
    description:
      "● Created a customer query chatbot using Dialogflow and integrated it by developing a Dropwizard backend. Built the Admin dashboard using ReactJS for community management for GetActive App.\n" +
      "● Implemented fraud detection algorithm for monitoring user foot steps within the GetActive android app.",
    icon: React.createElement(HiComputerDesktop),
    date: "May 2018 - June 2018",
  },
  {
    title: "Software Engineer Intern",
    location: "Invento Makerspaces, Bangalore",
    description:
      "● Added camera-based human detection and distance measurement for improved conversations and collision prevention.\n" +
      "● Developed a flask service for facial recognition, integrating Hyperverge, Microsoft, and AWS APIs.",
    icon: React.createElement(HiComputerDesktop),
    date: "December 2017",
  },
  {
    title: "Started my engineering journey",
    location: "Indian Institute of Technology (BHU), Varanasi",
    description:
      "● Enrolled for Bachelor of Technology at IIT-BHU, laying the foundation for technical skills.",
    icon: React.createElement(GiWhiteBook),
    date: "July 2015",
  },
] as const;

export const projectsData: Array<ProjectDataStruct> = [
  {
    title: "Celebratd",
    description:
      "● Co-Founded and led a small team to build a B2B2C event marketplace for hassle-free celebrations in India.\n" +
        "● Built an Android app using flutter for vendors to list events.\n" +
        "● Built an admin dashboard with ReactJs and AWS for verifying and launching listings on the platform.",
    tags: ["React", "Next.js", "Tailwind", "Flutter", "Android Application Development"],
    imageUrl: "",
  },
  {
    title: "Fonexpert.in",
    description:
      "● Built a phone repair booking portal for a mobile store in ReactJs and AWS.\n" +
        "● Improved the website's SEO and got it to the 2nd position in search results for \"Mobile repairing in Agra\"",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: "",
  },
  {
    title: "Modern Dictionary",
    description:
      "● Built an offline English to English and Hindi dictionary Android App featuring flashcards, bookmarks, history, text to speech.\n" +
        "● Implemented in Java with SQLite for local storage, I also wrote a Python script for data normalization using the NLTK library",
    tags: ["Java", "SQLite", "Android development", "Python", "NLTK"],
    imageUrl: "",
  },
  {
    title: "Productive Social Network",
    description:
        "● Developed an Android app that unifies Facebook, Instagram, and Twitter feeds and filters out irrelevant posts and features a voice assistant for hands-free updates during activities like gym.\n" +
        "● The app was written in Kotlin with Python Flask backend, utilizing Microsoft Azure APIs for AI tasks such as Image descriptor, OCR, and Text summarizer for App’s voice assistant.",
    tags: ["Android Development: Kotlin", "Backend Development: Python, Flask", "Cloud Computing: Microsoft Azure", "Artificial Intelligence: Microsoft Azure APIs"],
    imageUrl: "",
  },
  {
    title: "The Compiler",
    description:
        "● Developed a two-tier compiler using Java to compile a High-Level Language.\n" +
        "● Implemented a two-stage compilation process: conversion of High-Level code into VM code (intermediate language) and then conversion of VM code to Assembly code.",
    tags: ["Java", "Assembly"],
    imageUrl: "",
  },
  {
    title: "Modern Computer",
    description:
        "● Built computer chips such as Register, RAM, ALU, CPU using HDL to simulate a functional working computer system.\n" +
        "● Used Nand Gate as a basic fundamental chip for building combinational processor chip and D-flip flop for the sequential circuit for memory.\n" +
        "● Created a basic Assembler in Java to translate assembly language code into binary machine code.",
    tags: ["Computer Architecture", "HDL", "D-flip flop"],
    imageUrl: "",
  },
  {
    title: "Harry Potter Dialogs Generator",
    description:
        "● Build a dialog completer using basic LSTM cell in tensorflow python. \n" +
        "● The model was trained for 50,000 iterations with Adadelta Optimizer. The data was taken from Harry Potter books.",
    tags: ["AI & ML", "TensorFlow", "Python", "LSTM"],
    imageUrl: "",
  },
  {
    title: "Automated Underwater Vehicle",
    description:
        "● Conducted a case study focusing on the preparation of colored glasses through the introduction of colouring ions and inclusions during crystallization.\n" +
        "● Investigated light scattering phenomena resulting from various phases within the glasses.\n" +
        "● Explored the impact of oxidation states of transition metals on glass coloration.\n" +
        "● Examined dichroic glasses and their unique optical properties.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "",
  },
  {
    title: "Gender Detection using Deep Learning",
    description:
        "● Developed real-time gender classifier using Logistic Regression in Matlab\n" +
        "● Trained the classifier in Matlab and performed basic image processing using OpenCV in Python\n" +
        "● Reimplemented classifier with Convolutional Neural Network using TensorFlow in Python\n" +
        "● Incorporated Google's Inception v3 architecture through fine-tuning and hyperparameter adjustments for two classes\n" +
        "● Utilized Keras, TensorFlow, and Python for implementation",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "",
  },
  {
    title: "Central Control Unit for Infrared Devices",
    description:
        "● Developed a secure network linking household appliances and smartphones using Raspberry Pi under Design and Innovation Hub, IIT (BHU).\n" +
        "● Implemented communication between smartphones and Raspberry Pi via the internet and between Raspberry Pi and household devices through standard infrared technology.\n" +
        "● Enabled remote control of household devices from anywhere in the world using a smartphone.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "",
  },
];

export const skillsData = [
  "Java", "Python", "Typescript", "JavaScript", "Kotlin", "C", "C#", "Spring", "AWS", "ReactJS", "Tailwind", "Firebase", "NextJS",
  "Native Android Development", "Flutter", "JMeter", "OpenCV", "SciKitLearn", "Tensorflow", "Keras", "Numpy", "Pandas", "SQL"
] as const;
