'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Switch from 'react-switch';
import interior from '@/public/images/interior.svg';
import exterior from '@/public/images/exterior.svg';
import AddDamageModal from '../modal/addDamageModal/AddDamageModal';
import { toast } from 'react-toastify';

export default function Damages({ addDamageData, damages }) {
  const [checked, setChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSwitchChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <>
      <div className="md:w-[40%] sm:w-full flex items-center mb-10 justify-center">
        <p className={`${checked ? 'text-gray-500' : 'font-bold text-gray-600'}`}>Exterior</p>
        <Switch
          onChange={handleSwitchChange}
          checked={checked}
          offColor="#888"
          onColor="#3464eb"
          height={20}
          width={40}
          className="mx-2"
          uncheckedIcon={false}
          checkedIcon={false}
        />
        <p className={`${!checked ? 'text-gray-500' : 'font-bold text-gray-600'}`}>Interior</p>
      </div>
      <hr className="text-gray-500" />
      <div className="w-full flex flex-col md:flex-row items-center">
        <div className="w-full md:w-[40%] text-center mb-4 md:mb-0">
          <Image
            src={checked ? interior : exterior}
            alt="Damage Part"
            className="mx-auto cursor-pointer"
            title="Select Damage part"
            onClick={() => setShowModal(true)}
          />
        </div>
        <div className="w-full md:w-[60%] sm:h-[40vh] md:h-[80vh] mt-4 md:mt-0 flex justify-center items-center">
          <p className="font-bold text-gray-600 text-center">Tap on the vehicle&apos;s part to add damage</p>
        </div>
      </div>
      {showModal && (
        <AddDamageModal
          setShowModal={setShowModal}
          addDamageData={addDamageData}
        />
      )}
      {/* Optional: Display list of added damages */}
      {damages.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Damages Added:</h2>
          <ul className="list-disc list-inside">
            {damages.map((damage, index) => (
              <li key={index}>
                <strong>Type:</strong> {damage.damage_type},{" "}
                <strong>Degree:</strong> {damage.damage_degree}
                {damage.damage_description && (
                  <>
                    , <strong>Description:</strong> {damage.damage_description}
                  </>
                )}
                {damage.image && <>, <strong>Image:</strong> Attached</>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
