import React, { useState } from "react";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import TextInput from "@/components/SharedComponents/TextInput";
import CancelButton from "@/components/SharedComponents/CancelButton";
import Image from "next/image";
import DatePickerInput from "@/components/SharedComponents/DatePickerInput";

type Withdrawal = {
  id: string;
  branch: string;
  quantity: string;
  prize: string; // Add prize for display
  date: string; // Add the date for display
};

const branchOptions = ["Branch 1", "Branch 2", "Branch 3"];
const prizeOptions = ["Prize 1", "Prize 2", "Prize 3"];
const ordinalArabic = [
  "الأول",
  "الثاني",
  "الثالث",
  "الرابع",
  "الخامس",
  "السادس",
  "السابع",
  "الثامن",
  "التاسع",
  "العاشر",
];

// Common Modal Form for Adding or Editing Withdrawals
const WithdrawalForm = ({
  withdrawalBranch,
  quantity,
  prizeName,
  withDrawalDate,
  setWithdrawalBranch,
  setQuantity,
  setPrizeName,
  setWithdrawalDate,
  handleSubmit,
  editMode,
  handleCancel,
}: {
  withdrawalBranch: string;
  quantity: string;
  prizeName: string;
  withDrawalDate: Date | null;
  setWithdrawalBranch: React.Dispatch<React.SetStateAction<string>>;
  setQuantity: React.Dispatch<React.SetStateAction<string>>;
  setPrizeName: React.Dispatch<React.SetStateAction<string>>;
  setWithdrawalDate: React.Dispatch<React.SetStateAction<Date | null>>;
  handleSubmit: () => void;
  editMode: boolean;
  handleCancel: () => void;
}) => (
  <div className="flex flex-col gap-4">
    <p className="text-sm text-shadeGray">
      الحوار هو نوع من النوافذ المنبثقة التي تظهر أمام محتوى التطبيق لتوفير
      معلومات مهمة أو المطالبة باتخاذ قرار.
    </p>
    <div className="flex items-center gap-4 w-full">
      <div className="w-full">
        <TextInput
          label="اختر الفرع"
          value={withdrawalBranch}
          onChange={(e) => setWithdrawalBranch(e.target.value)}
          type="text"
          options={branchOptions}
          required
        />
      </div>
    </div>
    <div className="w-full">
      <DatePickerInput
        selected={withDrawalDate}
        placeholderText="ادخل تاريخ السحب"
        onChange={(date) => setWithdrawalDate(date)}
      />
    </div>
    <div className="flex items-center gap-4 w-full">
      <div className="min-w-[365px]">
        <TextInput
          label="اختر الجائزة"
          value={prizeName}
          onChange={(e) => setPrizeName(e.target.value)}
          type="text"
          options={prizeOptions}
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
    <hr />
    <SubmitButton
      buttonText="أضافة جائزة إضافية"
      onClick={() => {}}
      rightIcon="/dashboard/competitions/blueAdd.svg"
      classContainer="mt-0 bg-white text-primary"
    />
    <hr />

    <div className="w-full flex items-center gap-4 justify-end">
      <CancelButton
        buttonText="إلغاء"
        onClick={handleCancel}
        fullWidth={false}
      />
      <SubmitButton
        buttonText={editMode ? "تعديل السحب" : "إضافة سحب"}
        onClick={handleSubmit}
        fullWidth={false}
        disabled={!withdrawalBranch || !quantity}
      />
    </div>
  </div>
);

const NewCompetitionWithdrawal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [withdrawalBranch, setWithdrawalBranch] = useState("");
  const [prizeName, setPrizeName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [withdrawals, setWithdrawals] = useState<Withdrawal[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [currentWithdrawalId, setCurrentWithdrawalId] = useState<string>("");
  const [withDrawalDate, setWithDrawalDate] = useState<Date | null>(null);

  const handleOpenModal = (withdrawal?: Withdrawal) => {
    if (withdrawal) {
      setWithdrawalBranch(withdrawal.branch);
      setQuantity(withdrawal.quantity);
      setPrizeName(withdrawal.prize);
      setCurrentWithdrawalId(withdrawal.id);
      setWithDrawalDate(new Date(withdrawal.date));
      setEditMode(true);
    } else {
      setWithdrawalBranch("");
      setQuantity("");
      setPrizeName("");
      setWithDrawalDate(null);
      setCurrentWithdrawalId("");
      setEditMode(false);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setWithdrawalBranch("");
    setQuantity("");
    setPrizeName("");
    setWithDrawalDate(null);
    setCurrentWithdrawalId("");
    setEditMode(false);
  };

  const handleAddOrUpdateWithdrawal = () => {
    if (editMode) {
      const updatedWithdrawals = withdrawals.map((withdrawal) =>
        withdrawal.id === currentWithdrawalId
          ? {
              ...withdrawal,
              branch: withdrawalBranch,
              quantity,
              prize: prizeName,
              date: withDrawalDate?.toISOString() || "",
            }
          : withdrawal
      );
      setWithdrawals(updatedWithdrawals);
    } else {
      const newWithdrawal: Withdrawal = {
        id: (withdrawals.length + 1).toString().padStart(2, "0"),
        branch: withdrawalBranch,
        quantity,
        prize: prizeName,
        date: withDrawalDate?.toISOString() || "",
      };
      setWithdrawals([...withdrawals, newWithdrawal]);
    }
    handleCloseModal();
  };

  const handleDeleteWithdrawal = (id: string) => {
    setWithdrawals(withdrawals.filter((withdrawal) => withdrawal.id !== id));
  };

  return (
    <div className="mt-4 flex flex-col justify-center items-start gap-8">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between w-full">
          <p className="text-[22px] text-shadeBlack font-semibold">
            قائمة السحوبات
          </p>
          <SubmitButton
            buttonText="اضافة سحب جديد"
            onClick={() => handleOpenModal()}
            rightIcon="/dashboard/competitions/add.svg"
            fullWidth={false}
            classContainer="mt-0"
          />
        </div>
        <hr />

        {/* Table Displaying Withdrawals */}
        <table className="w-full">
          <thead>
            <tr className="bg-[#E9E9EA]">
              <th className="px-6 py-3 text-[12px] text-shadeGray border-b border-[#C6C7CA]">
                .No
              </th>
              <th className="px-6 py-3 text-[12px] text-shadeGray text-right border-b border-[#C6C7CA]">
                السحب
              </th>
              <th className="px-6 py-3 text-[12px] text-shadeGray text-right border-b border-[#C6C7CA]">
                الجائزة
              </th>
              <th className="px-6 py-3 text-[12px] text-shadeGray border-b border-[#C6C7CA]">
                الكمية
              </th>
              <th className="px-6 py-3 text-[12px] text-shadeGray border-b border-[#C6C7CA]">
                الفرع
              </th>
              <th className="px-6 py-3 text-[12px] text-shadeGray border-b border-[#C6C7CA]">
                تاريخ السحب
              </th>
              <th className="px-4 py-3 text-[12px] text-shadeGray border-b border-[#C6C7CA] w-auto"></th>
              <th className="px-4 py-3 text-[12px] text-shadeGray border-b border-[#C6C7CA] w-auto"></th>
            </tr>
          </thead>
          <tbody>
            {withdrawals.map((withdrawal, index) => (
              <tr
                key={withdrawal.id}
                className={`text-center ${
                  index % 2 === 0 ? "bg-white" : "bg-[#F9F9FA]"
                } border-b border-[#C6C7CA]`}
              >
                <td className="px-6">{withdrawal.id}</td>
                <td className="px-6 text-right">
                  {/*Ordinal Arabic display*/}
                  {`السحب ${ordinalArabic[index]}`}
                </td>
                <td className="px-6 text-right">{withdrawal.prize}</td>
                <td>{withdrawal.quantity}</td>
                <td>{withdrawal.branch}</td>
                <td>{new Date(withdrawal.date).toLocaleDateString()}</td>
                <td className="w-auto">
                  <button
                    className="py-6"
                    onClick={() => handleOpenModal(withdrawal)}
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
                  <button onClick={() => handleDeleteWithdrawal(withdrawal.id)}>
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
                {editMode ? "تعديل السحب" : "إضافة سحب جديد"}
              </p>
            </div>
            <WithdrawalForm
              withdrawalBranch={withdrawalBranch}
              prizeName={prizeName}
              quantity={quantity}
              withDrawalDate={withDrawalDate}
              setWithdrawalBranch={setWithdrawalBranch}
              setPrizeName={setPrizeName}
              setQuantity={setQuantity}
              setWithdrawalDate={setWithDrawalDate}
              handleSubmit={handleAddOrUpdateWithdrawal}
              handleCancel={handleCloseModal}
              editMode={editMode}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewCompetitionWithdrawal;
