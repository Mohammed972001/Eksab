import React, { useState } from "react";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import TextInput from "@/components/SharedComponents/TextInput";
import CancelButton from "@/components/SharedComponents/CancelButton";
import Image from "next/image";

// Define the Prize type
type Prize = {
  id: string;
  name: string;
  description: string;
  quantity: string;
};

// Common Modal Form for Adding or Editing Prizes
const PrizeForm = ({
  prizeName,
  prizeDescription,
  quantity,
  setPrizeName,
  setPrizeDescription,
  setQuantity,
  handleSubmit,
  editMode,
  handleCancel,
}: {
  prizeName: string;
  prizeDescription: string;
  quantity: string;
  setPrizeName: React.Dispatch<React.SetStateAction<string>>;
  setPrizeDescription: React.Dispatch<React.SetStateAction<string>>;
  setQuantity: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
  editMode: boolean;
  handleCancel: () => void;
}) => (
  <div className="flex flex-col gap-4">
    <p className="text-sm text-shadeGray">قم بإنشاء أو تعديل جائزة.</p>
    <div className="flex items-center gap-4 w-full">
      <div className="min-w-[365px]">
        <TextInput
          label="اسم الجائزة"
          value={prizeName}
          onChange={(e) => setPrizeName(e.target.value)}
          type="text"
          required
        />
      </div>
      <div className="w-full">
        <TextInput
          label="الكمية"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          type="number"
          required
        />
      </div>
    </div>
    <div className="w-full">
      <TextInput
        label="وصف الجائزة"
        value={prizeDescription}
        onChange={(e) => setPrizeDescription(e.target.value)}
        type="text"
        multiline
        minRows={3}
        required
      />
    </div>
    <hr />
    <div className="w-full flex items-center gap-4 justify-end">
      <CancelButton
        buttonText="إلغاء"
        onClick={handleCancel} // Cancel button now calls handleCancel instead of handleSubmit
        fullWidth={false}
      />
      <SubmitButton
        buttonText={editMode ? "تعديل الجائزة" : "إضافة جائزة"}
        onClick={handleSubmit}
        fullWidth={false}
        disabled={!prizeName || !prizeDescription || !quantity}
      />
    </div>
  </div>
);

const NewCompetitionPrizes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prizeName, setPrizeName] = useState("");
  const [prizeDescription, setPrizeDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [prizes, setPrizes] = useState<Prize[]>([]); // Use Prize type for the state
  const [editMode, setEditMode] = useState(false); // State to track if in edit mode
  const [currentPrizeId, setCurrentPrizeId] = useState<string>("");

  const handleOpenModal = (prize?: Prize) => {
    if (prize) {
      setPrizeName(prize.name);
      setPrizeDescription(prize.description);
      setQuantity(prize.quantity);
      setCurrentPrizeId(prize.id);
      setEditMode(true);
    } else {
      setPrizeName("");
      setPrizeDescription("");
      setQuantity("");
      setCurrentPrizeId("");
      setEditMode(false);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPrizeName("");
    setPrizeDescription("");
    setQuantity("");
    setCurrentPrizeId("");
    setEditMode(false);
  };

  const handleAddOrUpdatePrize = () => {
    if (editMode) {
      // Update the prize
      const updatedPrizes = prizes.map((prize) =>
        prize.id === currentPrizeId
          ? {
              ...prize,
              name: prizeName,
              description: prizeDescription,
              quantity,
            }
          : prize
      );
      setPrizes(updatedPrizes);
    } else {
      // Add new prize
      const newPrize: Prize = {
        id: (prizes.length + 1).toString().padStart(2, "0"), // Create 2-digit ID
        name: prizeName,
        description: prizeDescription,
        quantity,
      };
      setPrizes([...prizes, newPrize]);
    }
    handleCloseModal();
  };

  const handleDeletePrize = (id: string) => {
    setPrizes(prizes.filter((prize) => prize.id !== id)); // Delete a prize by ID
  };

  return (
    <div className="mt-4 flex flex-col justify-center items-start gap-8">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between w-full">
          <p className="text-[22px] text-shadeBlack font-semibold">
            قائمة جوائز المسابقة
          </p>
          <SubmitButton
            buttonText="اضافة جائزة جديدة"
            onClick={() => handleOpenModal()} // Open modal for adding new prize
            rightIcon="/dashboard/competitions/add.svg"
            fullWidth={false}
            classContainer="mt-0"
          />
        </div>
        <hr />

        {/* Table Displaying Prizes */}
        <table className="w-full">
          <thead>
            <tr className="bg-[#E9E9EA]">
              <th className="px-6 py-3 text-[12px] text-shadeGray border-b border-[#C6C7CA]">
                .No
              </th>
              <th className="px-6 py-3 text-[12px] text-shadeGray text-right border-b border-[#C6C7CA]">
                اسم الجائزة
              </th>
              <th className="px-6 py-3 text-[12px] text-shadeGray text-right border-b border-[#C6C7CA]">
                وصف الجائزة
              </th>
              <th className="px-6 py-3 text-[12px] text-shadeGray border-b border-[#C6C7CA]">
                الكمية
              </th>
              <th className="px-4 py-3 text-[12px] text-shadeGray border-b border-[#C6C7CA] w-auto"></th>
              <th className="px-4 py-3 text-[12px] text-shadeGray border-b border-[#C6C7CA] w-auto"></th>
            </tr>
          </thead>
          <tbody>
            {prizes.map((prize, index) => (
              <tr
                key={prize.id}
                className={`text-center ${
                  index % 2 === 0 ? "bg-white" : "bg-[#F9F9FA]"
                } border-b border-[#C6C7CA]`}
              >
                <td className="px-6">{prize.id}</td>
                <td className="px-6 text-right">{prize.name}</td>
                <td className="px-6 text-right">{prize.description}</td>
                <td>{prize.quantity}</td>
                <td className="w-auto">
                  <button
                    className="py-6"
                    onClick={() => handleOpenModal(prize)} // Open modal for editing
                  >
                    <Image
                      src={"/dashboard/competitions/Edit.svg"}
                      alt="edit"
                      width={24}
                      height={24}
                    />
                  </button>
                </td>
                <td className="w-auto">
                  <button
                    onClick={() => handleDeletePrize(prize.id)} // Delete prize
                  >
                    <Image
                      src={"/dashboard/competitions/Delete.svg"}
                      alt="delete"
                      width={24}
                      height={24}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 min-w-[280px] max-w-[560px]">
            <div className="mb-4">
              <p className="text-2xl font-semibold text-shadeBlack">
                {editMode ? "تعديل الجائزة" : "إضافة جائزة جديدة"}
              </p>
            </div>
            <PrizeForm
              prizeName={prizeName}
              prizeDescription={prizeDescription}
              quantity={quantity}
              setPrizeName={setPrizeName}
              setPrizeDescription={setPrizeDescription}
              setQuantity={setQuantity}
              handleSubmit={handleAddOrUpdatePrize}
              handleCancel={handleCloseModal} // Pass the cancel handler
              editMode={editMode}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewCompetitionPrizes;
