import { useState } from "react";

export default function RegistrationForm() {
  // State to manage form data
  const [formData, setFormData] = useState({
    association: "",
    secondDropdown: "",
    name: "",
    dob: "",
    role: "",
  });

  // Mapping of associations to their respective second dropdown options
  const associationOptions = {
    "limbe-north": ["Option A", "Option B", "Option C"],
    "limbe-south": ["Option D", "Option E", "Option F"],
    tiko: ["Option X", "Option Y", "Option Z"],
    "buea": ["Option 1", "Option 2", "Option 3"], // New association
  };

  // Function to handle changes in the form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Reset the second dropdown when the association changes
    if (name === "association") {
      setFormData((prevData) => ({ ...prevData, secondDropdown: "" }));
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log the form data to the console
  };

  // Get the second dropdown options based on the selected association
  const secondDropdownOptions = formData.association
    ? associationOptions[formData.association]
    : [];

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-lg rounded-xl border border-gray-200 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Association Dropdown */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">Select Association</label>
          <select
            name="association"
            value={formData.association}
            onChange={handleChange}
            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Choose an association</option>
            <option value="limbe-north">Limbe North Association</option>
            <option value="limbe-south">Limbe South Association</option>
            <option value="tiko">Tiko Association</option>
            <option value="buea">Buea Association</option> {/* New association */}
          </select>
        </div>

        {/* Second Dropdown (Dynamic Options) */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">Second Dropdown</label>
          <select
            name="secondDropdown"
            value={formData.secondDropdown}
            onChange={handleChange}
            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            disabled={!formData.association} // Disable if no association is selected
          >
            <option value="">Choose an option</option>
            {secondDropdownOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Name Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your name"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Position/Role */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">Position/Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your position"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
}