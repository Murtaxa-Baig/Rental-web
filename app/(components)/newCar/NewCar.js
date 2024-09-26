import React, { useState } from "react";
import VehicleInformation from "../vehicleInformation/VehicleInformation";
import AddVehicleImages from "../addVehicleImages/AddVehicleImages";
import Damages from "../damages/Damages";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewCar() {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL; // Ensure this is defined

    const [activeTab, setActiveTab] = useState("Vehicle information");
    const [loader, setLoader] = useState(false);
    const [vehicleId, setVehicleId] = useState(null); // New state for vehicle ID
    const [damages, setDamages] = useState([]); // New state for damages

    const [formData, setFormData] = useState({
        vehicle_type: "",
        brand: "",
        model: "",
        categories: "",
        year_of_issue: null,
        plate_number: "",
        base_location: "",
        odometer: null,
        passengers: null,
        transmission: "",
        fuel_type: "",
        base_kilometers_per_day: null,
        unlimited_km: false,
        color: "",
        max_speed: null,
        basic_daily_price: null,
        km_extra_price: null,
        deposit: null,
        excess: null,
        excess_percentage: null,
        excess_theft: null,
        excess_damage: null,
        excess_kasco: null,
        tariff_name: "",
        daily_price: null,
        km_extra_price_tariff: null,
        from_days: null,
        to_days: null,
        unlimited_kilometers: false,
        ownership: "own",
        company: 1,
        uploaded_images: [], // Initialize as an empty array
        exclude_from_offers: null,
        deactivated: null,
        hide_from_booking: null,
    });

    // Function to handle form changes
    const handleChange = (e) => {
        const { name, type, checked, files } = e.target;

        if (type === "checkbox") {
            setFormData((prevData) => ({
                ...prevData,
                [name]: checked,
            }));
        } else if (type === "file") {
            const fileArray = Array.from(files); // Convert FileList to an array
            setFormData((prevData) => ({
                ...prevData,
                uploaded_images: fileArray, // Update uploaded_images
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: e.target.value,
            }));
        }
    };

    // Function to handle adding damage data from the modal
    const addDamageData = (damage) => {
        setDamages((prevDamages) => [...prevDamages, damage]); // Append new damage
        toast.success("Damage added successfully!");
    };



    const validateForm = () => {
        const requiredFields = [
            { key: 'vehicle_type', message: 'Vehicle type is required.' },
            { key: 'brand', message: 'Please select brand' },
            { key: 'model', message: 'Model is required' },
            { key: 'categories', message: 'Please select category' },
            { key: 'plate_number', message: 'Plate number is required' },
            { key: 'year_of_issue', message: 'Year of issue is required' },
            { key: 'base_location', message: 'Base location is required' },
            { key: 'base_kilometers_per_day', message: 'Please add base kilometers per day.' },
            { key: 'basic_daily_price', message: 'Please add basic daily price.' },
            { key: 'daily_price', message: 'Please add daily price.' },
            { key: 'deposit', message: 'Deposit is required.' },
            { key: 'color', message: 'Color is required.' },
            { key: 'excess', message: 'Excess is required.' },
            { key: 'excess_damage', message: 'Excess damage is required.' },
            { key: 'excess_kasco', message: 'Excess kasco is required.' },
            { key: 'excess_percentage', message: 'Excess percentage is required.' },
            { key: 'excess_theft', message: 'Excess theft is required.' },
            { key: 'from_days', message: 'From days is required.' },
            { key: 'fuel_type', message: 'Fuel type is required.' },
            { key: 'km_extra_price', message: 'Please add km extra price' },
            { key: 'km_extra_price_tariff', message: 'Please add km extra price tariff' },
            { key: 'max_speed', message: 'Max speed is required' },
            { key: 'odometer', message: 'Odometer is required' },
            { key: 'ownership', message: 'Ownership is required' },
            { key: 'passengers', message: 'Passengers is required' },
            { key: 'to_days', message: 'To days is required' },
            { key: 'transmission', message: 'Transmission is required' },
            { key: 'unlimited_kilometers', message: 'Unlimited kilometers must be specified' },
        ];

        for (let field of requiredFields) {
            if (!formData[field.key] || formData[field.key].trim() === "") {
                toast.error(field.message);
                return false;
            }
        }
        return true;
    };

    // Function to handle vehicle submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setLoader(false);
            return;
        }
        setLoader(true);

        const formDataToSubmit = new FormData();
        Object.keys(formData).forEach((key) => {
            if (key === "uploaded_images") {
                formData[key].forEach((file) => {
                    formDataToSubmit.append("uploaded_images", file); // Notice no brackets here
                });
            } else {
                formDataToSubmit.append(key, formData[key]);
            }
        });

        console.log("Form Data Before Submit:", Array.from(formDataToSubmit));

        try {
            // Submit vehicle data
            const response = await fetch(`${backendUrl}owner/vehicles/`, {
                method: "POST",
                body: formDataToSubmit,
            });

            if (!response.ok) {
                throw new Error("Failed to submit vehicle");
            }

            const vehicleData = await response.json();
            console.log("Vehicle Submitted:", vehicleData);
            setVehicleId(vehicleData.id); // Store the vehicle ID
            toast.success("Vehicle added successfully!");

            // Now submit each damage
            if (damages.length > 0) {
                for (const damage of damages) {
                    const damageData = new FormData();
                    damageData.append("damage_type", damage.damage_type);
                    damageData.append("damage_degree", damage.damage_degree);
                    damageData.append("damage_description", damage.damage_description);
                    damageData.append("vehicle", vehicleData.id); // Associate with vehicle ID
                    if (damage.image) {
                        damageData.append("image", damage.image);
                    }

                    const damageResponse = await fetch(`${backendUrl}owner/vehicle-damage/`, {
                        method: "POST",
                        body: damageData,
                    });

                    if (!damageResponse.ok) {
                        throw new Error("Failed to submit damage");
                    }

                    const damageResult = await damageResponse.json();
                    console.log("Damage Submitted:", damageResult);
                }
                toast.success("All damages added successfully!");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error(error.message || "An error occurred");
        } finally {
            setLoader(false);
        }
    };

    // Function to render content based on active tab
    const renderContent = () => {
        switch (activeTab) {
            case "Vehicle information":
                return <VehicleInformation handleChange={handleChange} formData={formData} />;
            case "Add Images":
                return <AddVehicleImages handleChange={handleChange} formData={formData} />;
            case "Damages":
                return (
                    <Damages
                        addDamageData={addDamageData}
                        damages={damages}
                    />
                );
            default:
                return null;
        }
    };


    const handleCancel = () => {
        setFormData({
            vehicle_type: "",
            brand: "",
            model: "",
            categories: "",
            year_of_issue: null,
            plate_number: "",
            base_location: "",
            odometer: null,
            passengers: null,
            transmission: "",
            fuel_type: "",
            base_kilometers_per_day: null,
            unlimited_km: false,
            color: "",
            max_speed: null,
            basic_daily_price: null,
            km_extra_price: null,
            deposit: null,
            excess: null,
            excess_percentage: null,
            excess_theft: null,
            excess_damage: null,
            excess_kasco: null,
            tariff_name: "",
            daily_price: null,
            km_extra_price_tariff: null,
            from_days: null,
            to_days: null,
            unlimited_kilometers: false,
            ownership: "own",
            company: 1,
            uploaded_images: [], // Initialize as an empty array
            exclude_from_offers: null,
            deactivated: null,
            hide_from_booking: null,
        }

        )
    }




    return (
        <>
            <ToastContainer />
            <div className="flex">
                <main className="flex-grow w-full md:w-17/20 lg:w-[75%]">
                    <div className="p-6 bg-white rounded-lg mr-3">
                        <div className="w-full">
                            <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                                <ul className="flex">
                                    {["Vehicle information", "Add Images", "Damages"].map((tab) => (
                                        <li
                                            key={tab}
                                            className={`w-[33%] ${activeTab === tab ? "text-blue-600 border-blue-600" : "border-transparent"
                                                } me-2`}
                                        >
                                            <button
                                                className={`inline-block p-4 border-2 w-full rounded-md font-bold ${activeTab === tab
                                                    ? "text-blue-600 border-blue-600 bg-blue-100 dark:text-blue-500 dark:border-blue-500"
                                                    : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                                    }`}
                                                onClick={() => setActiveTab(tab)}
                                            >
                                                {tab}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <hr className="text-gray-500 my-4" />
                            <div className="mt-4">
                                {renderContent()}
                                <div className="flex items-center justify-start gap-4 mt-8 flex-col sm:flex-row">
                                    <button
                                        className="flex items-center justify-center border-[1px] w-full sm:w-[20%] border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2"
                                        onClick={() => {
                                            handleCancel
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleSubmit}
                                        className="flex items-center justify-center text-white w-full sm:w-[20%] bg-blue-500 rounded-md font-bold cursor-pointer p-2 mt-2 sm:mt-0"
                                        disabled={loader}
                                    >
                                        {loader ? "Adding vehicle..." : "Add vehicle"}
                                    </button>
                                </div>
                            </div>
                            {/* Optional: Display added damages */}
                            {vehicleId && damages.length > 0 && (
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
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
