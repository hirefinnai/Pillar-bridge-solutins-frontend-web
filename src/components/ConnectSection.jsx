'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Dynamically import react-leaflet components
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const CircleMarker = dynamic(() => import('react-leaflet').then((mod) => mod.CircleMarker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });

function ConnectSection() {
  const [selectedCountry, setSelectedCountry] = useState('');

  const countries = [
    { name: 'United Kingdom', coordinates: [51.5074, -0.1278] },
    { name: 'France', coordinates: [46.2276, 2.2137] },
    { name: 'Germany', coordinates: [51.1657, 10.4515] },
    { name: 'Italy', coordinates: [41.8719, 12.5674] },
    { name: 'Norway', coordinates: [60.472, 8.4689] },
  ];

  return (
    <section
      className="text-white py-16 px-4"
      style={{ backgroundColor: '#3b4bf5' }}
    >
      <div className="text-center mb-8">
        <div className="inline-block bg-white text-black rounded-full px-4 py-1 text-xs mb-4">
          Connect with locals
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
          We've got you covered in<br className="hidden md:block" />over 4
          countries
        </h2>
        <p className="text-blue-300 text-sm sm:text-base lg:text-lg">
          Find all countries we cover →
        </p>
      </div>

      {/* Map Container */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] max-w-2xl mx-auto rounded-2xl overflow-hidden bg-blue-800/40 mb-8">
        {/* Dropdown on Top of the Map */}
        <div className="absolute top-4 left-4 z-[1000] w-3/4 max-w-xs mx-auto">
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full px-4 py-2 text-sm sm:text-base md:text-lg text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Pick a country
            </option>
            {countries.map((country) => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* Map */}
        <MapContainer
          center={[51.505, 10.09]}
          zoom={4}
          className="w-full h-full"
          zoomControl={false}
          style={{ background: '#0a2145' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          {countries.map((country) => (
            <CircleMarker
              key={country.name}
              center={country.coordinates}
              radius={selectedCountry === country.name ? 8 : 4}
              pathOptions={{
                fillColor: selectedCountry === country.name ? '#34D399' : '#3B82F6',
                color: selectedCountry === country.name ? '#34D399' : '#3B82F6',
                fillOpacity: 0.8,
                weight: 2,
              }}
            >
              <Popup>
                <div className="text-black text-sm font-medium">
                  {country.name}
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>

      {/* Additional Section */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-4">
          <span className="inline-block px-4 py-1 bg-white text-[#1a5ba4] text-xs rounded-full mb-4">
            INTEGRATE WITH EXISTING TOOLS
          </span>
        </div>
        <h2 className="text-xl sm:text-xl font-semibold mb-4">
          Combine. Connect. Contribute.
        </h2>
        <p className="text-gray-200 mb-8 text-xs sm:text-xs lg:text-lg">
          Sync the HR tools you already use to add your team members.<br />
          We'll separate them by region and help you set up contributions.
        </p>
        <button className="px-6 py-2 border border-white rounded-md hover:bg-white hover:text-[#1a5ba4] transition-colors text-xs">
          See all integrations
        </button>
      </div>

      <div className="relative max-w-4xl mx-auto mt-8">
        <img
          src="/images/connect1.png"
          alt="Connect"
          className="w-full h-auto object-contain mx-auto"
        />
      </div>
    </section>
  );
}

export default ConnectSection;
