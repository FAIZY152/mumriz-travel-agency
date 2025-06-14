import React from "react";

const MapSection = () => {
  return (
    <div className="w-full h-[450px] my-6">
      <iframe
        title="Mumriz & Brothers Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13261.55182302985!2d71.53967455396832!3d33.99935908514273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d915b7b705fc0b%3A0xe0c4e3099a27d46d!2sMumriz%20%26%20Brothers%20Overseas%20Employment%20Promoters!5e0!3m2!1sen!2s!4v1718342580812!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default MapSection;
