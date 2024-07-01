'use client'
import Image from "next/image";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import img8 from "@/public/job.jpg";
import { useForm } from "react-hook-form";

export default function FormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data:any) => {
    console.log(data);
  };

  return (
    <div className="bg-white text-black">
      <Navbar />

      <div className="min-h-screen flex items-center justify-center my-10">
        <div className="flex flex-wrap lg:flex-row items-center lg:items-start gap-20 justify-center">
          <Image
            src={img8}
            className="max-w-sm rounded-lg shadow-2xl h-[550px] object-cover"
            alt={"apply now"}
          />
          <div className="lg:ml-8 mt-8 lg:mt-0 w-4/5 sm:w-1/2">
            <h1 className="text-5xl font-bold">Apply Now</h1>
            <form className="my-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  className="block text-lg text-gray-700"
                  htmlFor="fullName"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full px-4 py-2 border rounded-lg"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <p className="text-red-500">Full Name is required.</p>
                )}
              </div>
              <div>
                <label className="block text-lg text-gray-700" htmlFor="email">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500">Email is required.</p>
                )}
              </div>
              <div>
                <label className="block text-lg text-gray-700" htmlFor="phone">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border rounded-lg"
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <p className="text-red-500">Phone is required.</p>
                )}
              </div>
              <div>
                <label
                  className="block text-lg text-gray-700"
                  htmlFor="coverLetter"
                >
                  Cover Letter *
                </label>
                <textarea
                  id="coverLetter"
                  className="w-full px-4 py-2 border rounded-lg"
                  {...register("coverLetter", { required: true })}
                ></textarea>
                {errors.coverLetter && (
                  <p className="text-red-500">Cover Letter is required.</p>
                )}
              </div>
              <div>
                <label className="block text-lg text-gray-700" htmlFor="resume">
                  Upload CV/Resume *
                </label>
                <input
                  type="file"
                  id="resume"
                  className="w-full px-4 py-2 border rounded-lg"
                  accept=".pdf, .doc, .docx"
                  {...register("resume", { required: true })}
                />
                {errors.resume && (
                  <p className="text-red-500">CV/Resume is required.</p>
                )}
                <p className="mt-1 text-sm text-gray-600">
                  Allowed Type(s): .pdf, .doc, .docx
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <input
                  type="checkbox"
                  id="agree"
                  className="h-6 w-6 text-blue-500"
                  {...register("agree", { required: true })}
                />
                <label htmlFor="agree" className="text-lg text-gray-700">
                  By using this form you agree with the storage and handling of
                  your data by this website. *
                </label>
              </div>
              {errors.agree && (
                <p className="text-red-500">
                  You must agree before submitting.
                </p>
              )}
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
