'use client'
import useAddToForm from '@/utils/mutation/createForm';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

function ContactForm() {
  const { register, handleSubmit } = useForm();
  const {mutate , isLoading } = useAddToForm()
  const onSubmit = data => {
    console.log(data);
    mutate(data)
    if(isLoading){
      toast.loading('Waiting...');
    } 
    
  };
  

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="mx-auto max-w-7xl py-12 md:py-24">
        <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
          {/* contact form */}
          <div className="flex items-center justify-center">
            <div className="px-2 md:px-12">
              <p className="text-2xl font-bold text-gray-900 md:text-4xl">Get in touch</p>
              <p className="mt-4 text-lg text-gray-600">
                Our friendly team would love to hear from you.
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
                <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                  <div className="grid w-full items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700"
                      htmlFor="first_name"
                    >
                      First Name
                    </label>
                    <input
                      {...register('first_name', { required: 'First name is required' })}
                      className="flex h-10 w-full rounded-md border border-gray-300 text-black  px-3 py-2 text-sm  focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                      type="text"
                      id="first_name"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700"
                      htmlFor="last_name"
                    >
                      Last Name
                    </label>
                    <input
                      {...register('last_name', { required: 'Last name is required' })}
                      className="flex h-10 w-full rounded-md border border-gray-300  text-black px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                      type="text"
                      id="last_name"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: 'Invalid email address',
                      },
                    })}
                    className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm  text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                    type="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700"
                    htmlFor="phone_number"
                  >
                    Phone number
                  </label>
                  <input
                    {...register('number', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^\+?[1-9]\d{1,14}$/,
                        message: 'Invalid phone number',
                      },
                    })}
                    className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                    type="tel"
                    id="phone_number"
                    placeholder="Phone number"
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    className="flex h-20 w-full rounded-md border border-gray-300  px-3 py-2 text-sm  text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                    id="message"
                    placeholder="Leave us a message"
                    rows={3}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <img
            alt="Contact us"
            className="block w-full rounded-lg object-cover lg:hidden"
            src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          />
          <img
            alt="Contact us"
            className="hidden max-h-full w-full rounded-lg object-cover lg:block"
            src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          />
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default ContactForm;

