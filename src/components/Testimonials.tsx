import React from 'react'
import { Vector, Webflow } from '../assets'

type CardProps = {
  reviewContent: string
  customerName: string
  customerCompanyName: string
  location: string
  companyLogoPath: string
  amountOfStars: number
}
export const TestimonialCard: React.FC<CardProps> = ({
  amountOfStars,
  companyLogoPath,
  customerCompanyName,
  customerName,
  location,
  reviewContent,
}) => {
  return (
    <div className="flex flex-col justify-between items-start gap-5 mb-20 mx-10">
      <div className="stars flex">
        {Array.from({ length: amountOfStars }, (_, index) => (
          <img src={Vector} key={index} alt={`star-${index + 1}`} />
        ))}
      </div>
      <div className="review font-semibold text-lg">"{reviewContent}"</div>
      <div className="customerInfo flex">
        <div className="customer-detail flex">
          <p>{customerName}</p>

          <p>, {location}</p>
          <div
            className="divider"
            style={{
              height: '25px',
              width: '2px',
              margin: '5px',
              backgroundColor: 'gray',
            }}
          ></div>
          <p> {customerCompanyName}</p>
        </div>

        <div className="companyLogo hidden">
          <img src={companyLogoPath} alt="company-logo" />
        </div>
      </div>
    </div>
  )
}

type Props = {
  breakpoint: 'desktop' | 'mobile'
}
const Testimonials: React.FC<Props> = () => {
  return (
    <div className="testimonial-container mx-10 mt-10">
      <h2>Customer testimonials</h2>
      <p className="mt-5 mb-0">
        Hear what others have to say about us
      </p>
      <div className=" mt-10 flex">
        <TestimonialCard
          amountOfStars={5}
          companyLogoPath={Webflow}
          customerCompanyName="Julias"
          customerName="Julia"
          location="Sweden"
          reviewContent="Jag är mycket nöjd med den service jag har fått från StellarWeb Solutions när de hjälpte mig att skapa en ny och attraktiv hemsida för min konsultbyrå. Innan vi anlitade StellarWeb Solutions hade vi en ganska grundläggande och inte särskilt tilltalande WordPress-sida. Med deras professionella hjälp har vi nu fått en hemsida som inte bara ser fantastisk ut utan också har lockat till sig många nya kunder."
        />
        <TestimonialCard
          amountOfStars={5}
          companyLogoPath={Webflow}
          customerCompanyName="Din Konsultbyrå"
          customerName="Robin"
          location="Sweden"
          reviewContent="StellarWeb Solutions gick långt utöver förväntningarna för att förstå våra behov och önskemål. De var inte bara kunniga inom webbutveckling, utan gav också värdefulla insikter för att förbättra användarupplevelsen och marknadsföringen på webbplatsen. Den nya designen är modern, användarvänlig och har verkligen satt vår konsultbyrå på kartan."
        />
      </div>
    </div>
  )
}

export default Testimonials
