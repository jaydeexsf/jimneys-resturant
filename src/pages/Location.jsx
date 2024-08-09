import React from 'react';

const Location = () => {
  return (
    <div className="flex flex-col items-center py-[30px] min-h-screen bg-gray-950 p-6">
      <h1 className="text-4xl font-bold text-gray-100 mb-6">Find Us</h1>
      <p className="text-lg text-gray-400 mb-6">
        Visit us at our location for the best fish and chips in town. Below is our precise location on Google Maps.
      </p>
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <iframe
          title="Jimney's Fish & Chips Location"
          className="w-full h-96 border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4353.509317017637!2d28.614453360734192!3d-23.429771440164448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eb879a9a061e137%3A0x729d7163ef91ef8d!2sJimney%27s%20Fish%20%26%20Chips!5e0!3m2!1sen!2sza!4v1721128741678!5m2!1sen!2sza"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
