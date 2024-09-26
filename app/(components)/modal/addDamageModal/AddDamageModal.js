import React, { useState } from 'react';
import img from '@/public/images/img.svg';
import Image from 'next/image';
import { toast } from 'react-toastify';

export default function AddDamageModal({ setShowModal, addDamageData }) {
  const [formData, setFormData] = useState({
    damage_type: 'Scratch',
    damage_degree: 'Low',
    damage_description: '',
    image: null,
    imagePreview: null,
  });

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
        imagePreview: URL.createObjectURL(file),
      });
    }
  };

  const removeImage = () => {
    setFormData({
      ...formData,
      image: null,
      imagePreview: null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.damage_description.trim()) {
      toast.error("Damage description is required.");
      return;
    }

    // Prepare damage data
    const damageData = {
      damage_type: formData.damage_type,
      damage_degree: formData.damage_degree,
      damage_description: formData.damage_description,
      image: formData.image, // This will be handled in NewCar
    };

    // Pass damage data to NewCar
    addDamageData(damageData);
    toast.success("Damage added successfully!");
    closeModal();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-[50%] p-2 flex flex-col justify-between h-[70vh] rounded-lg bg-white shadow-lg">
          <div className='h-14 w-full flex justify-between items-center px-3'>
            <p className='font-bold text-gray-400 text-[20px]'>Add Damage</p>
            <button onClick={closeModal} className='text-gray-500 p-2 text-[30px]'>✗</button>
          </div>

          <hr className='text-gray-500' />

          <div className="overflow-y-auto flex-grow">
            <form onSubmit={handleSubmit} className='mx-4'>
              <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                <div className="relative w-full md:w-[69%] mb-4 md:mb-0">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                    Damage type
                  </label>
                  <select
                    name="damage_type"
                    value={formData.damage_type}
                    onChange={handleChange}
                    className='w-full p-2 text-gray-500 rounded-md border-[1px] border-gray-400 outline-none'
                    required
                  >
                    {['Scratch', 'Dent', 'Clack', 'Clip'].map((item, index) => (
                      <option key={index} value={item}>{item}</option>
                    ))}
                  </select>
                </div>
                <div className="relative w-full md:w-[29%]">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                    Degree
                  </label>
                  <select
                    name="damage_degree"
                    value={formData.damage_degree}
                    onChange={handleChange}
                    className='w-full p-2 text-gray-500 rounded-md border-[1px] border-gray-400 outline-none'
                    required
                  >
                    {['Low', 'High'].map((item, index) => (
                      <option key={index} value={item}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="relative w-full mt-8">
                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                  Damage description
                </label>
                <textarea
                  name="damage_description"
                  value={formData.damage_description}
                  onChange={handleChange}
                  className='w-full border-[1px] border-gray-300 rounded-md outline-none p-2 text-gray-500 '
                  rows="4"
                  cols="50"
                  required
                />
              </div>

              <label htmlFor="addImages" className='flex items-center justify-center mt-2 w-full border-[1px] border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2'>
                <Image
                  src={img}
                  width={20}
                  height={20}
                  className='mr-2'
                  alt="Filter Icon"
                />
                Add images
              </label>
              <input type="file" accept="image/*" id='addImages' className='hidden' onChange={handleImageChange} />

              {formData.imagePreview && (
                <div className="mt-4 flex flex-col items-center">
                  <img src={formData.imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded-md" />
                  <button type="button" onClick={removeImage} className="text-red-500 mt-2 border-[1px] font-bold border-red-500 rounded-md p-2 hover:bg-red-500 hover:text-white">
                    Remove Image
                  </button>
                </div>
              )}

              <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-4">
                <div className="w-full md:w-[49%]">
                  <button type='submit' className='flex items-center justify-center text-white w-full bg-blue-500 rounded-md font-bold cursor-pointer p-2 mt-2 md:mt-0'>
                    Save
                  </button>
                </div>
                <div className="w-full md:w-[49%] mb-4 md:mb-0">
                  <button
                    type="button"
                    onClick={closeModal}
                    className='flex items-center justify-center border-[1px] w-full border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2'
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
