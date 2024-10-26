'use client'

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function ProductPage() {

  const handleCheckout = async ( name, description, price, img ) => {
    try {
      // Send a request to create the session
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: [
            {
              name: name,
              description: description,
              price: price, // Make sure price is correct
              image: img, 
              quantity: 1,
            },
          ],
        }),
      })

      const data = await res.json()
      console.log('Stripe session response:', data)  // Log response for debugging
      
      if (data.sessionId) {
        const stripe = await stripePromise
        await stripe.redirectToCheckout({ sessionId: data.sessionId })
      } else {
        throw new Error('Session ID is missing in the response')
      }
    } catch (error) {
      console.error('Error during Stripe checkout:', error)
    } finally {
      setLoading(false)
    }
  }

  const list = [
    {
      title: "Orange",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsa3K1PkfEgVzc6JeayE-uGwejpsBDBbVBUw&s",
      description: "Orange is a citrus fruit known for its vibrant color, tangy-sweet flavor, and rich source of vitamin C. Popular for its refreshing juice and easy-to-peel skin, oranges are enjoyed both fresh and in various culinary dishes. They are also packed with antioxidants and essential nutrients, making them a healthy snack.",
      priceText: "$5.13",
      price: 5.13
    },
    {
      title: "Avocado",
      img: "https://i5.walmartimages.com/seo/Fresh-Hass-Avocados-Each_af510d27-f416-4691-99fa-0943d730f8d2.8607ec56ce71993860620dc4c8ca9cd6.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      description: "Avocado is a nutrient-rich fruit known for its creamy texture and mild flavor. It is packed with healthy fats, particularly monounsaturated fats, which are beneficial for heart health. Avocados are also a good source of fiber, vitamins (such as vitamin K, E, and B), and minerals like potassium. Popular in dishes like guacamole, salads, and smoothies, avocados are versatile and can be enjoyed in both sweet and savory recipes.",
      priceText: "$15.70",
      price: 15.70
    },
  ];

  return (
    <div className='w-full h-screen flex justify-center items-center flex-col gap-12'>

      <p className='text-[34px] font-semibold'><span className='text-purple-600'>Stripe</span> with Next.Js</p>

      <div className="gap-2 grid grid-cols-1 sm:grid-cols-2">
        {list.map((item, index) => (
          <Card shadow="sm" key={index} isPressable onPress={()=>handleCheckout(item.title, item.description, item.price, item.img)}>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.priceText}</p>
            </CardFooter>
          </Card>
        ))}
      </div>

    </div>
  );
}