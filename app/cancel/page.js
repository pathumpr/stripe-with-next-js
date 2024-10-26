'use client'

import React from 'react'
import {Chip, Button} from "@nextui-org/react";
import { useRouter } from 'next/navigation';

const Page = () => {

    const router = useRouter()

  return (
    <div className='w-full h-screen flex justify-center items-center flex-col gap-4'>
        <Chip color="danger" size="lg">Cancelled</Chip>
        <Button color="primary" variant="light" onClick={()=> router.push('/')}>
            Go to Home
        </Button>  
    </div>
  )
}

export default Page
