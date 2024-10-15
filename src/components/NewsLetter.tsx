import React from 'react'
import NewsletterForm from './NewsletterForm'

const NewsLetter = () => {
    return (  

        // CONTAINER
        <div className='bg-gray-100 flex flex-col justify-center items-center p-10'>
            <h1 className='text-zinc- font-medium text-5xl'>Receba ofertas exclusivas no seu e-mail.</h1>
            <div>
            </div>
            <NewsletterForm />          
        </div>
    )
}

export default NewsLetter
