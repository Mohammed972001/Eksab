"use client";
import { useRouter } from "next/navigation";
import PageHeader from "@/components/SharedComponents/PageHeader";
import SubmitButton from "@/components/SharedComponents/SubmitButton";


const Page: React.FC = () => {
  

  const router = useRouter();
    return (
        <div className="w-full h-full pb-20">
            <PageHeader
                mainTitle="شراء فرصة جديدة"
                breadcrumbTitle="محفظة الفرص"
                badgeText="شراء فرصة جديدة"
            />


<div className="flex items-center justify-center mt-20 p-8">
  <div className="flex flex-col items-center text-center max-w-md">
    <div className="flex justify-center items-center w-[56px] h-[56px] bg-white border rounded-lg shadow-sm">
      <svg
        width="26"
        height="24"
        viewBox="0 0 26 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.0832 18L16.3333 11M9.66658 11L1.91663 18M1.33325 5.16667L10.859 11.8347C11.6304 12.3746 12.016 12.6446 12.4356 12.7492C12.8061 12.8416 13.1937 12.8416 13.5643 12.7492C13.9838 12.6446 14.3695 12.3746 15.1408 11.8347L24.6666 5.16667M6.93325 20.3333H19.0666C21.0268 20.3333 22.0069 20.3333 22.7556 19.9519C23.4141 19.6163 23.9496 19.0809 24.2851 18.4223C24.6666 17.6736 24.6666 16.6935 24.6666 14.7333V7.26667C24.6666 5.30648 24.6666 4.32639 24.2851 3.5777C23.9496 2.91913 23.4141 2.3837 22.7556 2.04815C22.0069 1.66667 21.0268 1.66667 19.0666 1.66667H6.93325C4.97307 1.66667 3.99298 1.66667 3.24429 2.04815C2.58572 2.3837 2.05029 2.91913 1.71473 3.5777C1.33325 4.32639 1.33325 5.30648 1.33325 7.26667V14.7333C1.33325 16.6935 1.33325 17.6736 1.71473 18.4223C2.05029 19.0809 2.58572 19.6163 3.24429 19.9519C3.99298 20.3333 4.97307 20.3333 6.93325 20.3333Z"
          stroke="#344054"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <h2 className="text-3xl font-semibold mb-2 mt-4">طلبك قيد المراجعة!</h2>
    <p className="text-gray-600 text-lg ">سوف يتم التحقق من كافة البيانات و الملفات المرفقة و اشعارك في اقرب فرصة بقبول او مراجعة المدخلات التي قمت بشراء فرصة من خلالها.
    </p>
    <SubmitButton
                        buttonText=" العودة الي الصفحة الرئيسية  "
                        fullWidth={false}
                        onClick={()=>{ router.push("/")}}
                        classContainer="px-20"
                    />
  </div>
</div>




        </div>
    );
};

export default Page;
