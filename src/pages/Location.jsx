import React from 'react';

function Location() {
  return (
    <div className="flex h-screen justify-center items-center bg-black">
      <figure className='rounded-md b-black'>
        <iframe
          className='rounded-xl'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4353.509317017637!2d28.614453360734192!3d-23.429771440164448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eb879a9a061e137%3A0x729d7163ef91ef8d!2sJimney&#39;s%20Fish%20%26%20Chips!5e0!3m2!1sen!2sza!4v1721128741678!5m2!1sen!2sza"
          width="600"
          height="450"
          style={{ border: 4 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          backgroundColor= 'black'
        ></iframe>
      </figure>
    </div>
  );
}

export default Location;
