import Image from 'next/image'
import React from 'react'

export default function Ourpartners() {
    return (
        <main className='px-20 py-10 bg-gridMdBackground bg-center bg-cover bg-no-repeat'>
            <article className=" space-y-5  flex flex-col items-start">
                <p className="flex items-center justify-end gap-2 text-2xl font-semibold text-[#3454B4]">
                    <span className="inline-block w-3 h-3 rounded-full bg-yellow-400" />
                    التحميل والتجربة
                </p>


                <h1 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
                    ابدأ الآن وانضم لعالم التحدي
                </h1>


                <p className="pt-4 text-gray-700 leading-relaxed text-xl">
                على مر السنين، نفخر بالشراكة مع المنظمات الرائدة في صناعاتها، بما في ذلك التمويل والرعاية الصحية والتجارة الإلكترونية والتكنولوجيا.
                </p>

            </article>

            <figure className="grid grid-cols-4 gap-5 pt-20 px-40">

            <div className="flex flex-col items-center justify-center w-[200px] h[140px] ">
                <Image
                    src={"/landingPage/Ourpartners/Group 6902.svg"}
                    alt="شركة الوتر للتجارة والتنمية"
                    width={166}
                    height={144}
                />
                </div>
                <div className="flex flex-col items-center justify-center w-[200px] h[140px] ">
                <Image
                    src={"/landingPage/Ourpartners/Frame 116.svg"}
                    alt=" قطرات  التنمية"
                    width={144}
                    height={72}
                />
                </div>
                <div className="flex flex-col items-center justify-center w-[200px] h[140px] ">
                <Image
                    src={"/landingPage/Ourpartners/Frame 102.svg"}
                    alt="مؤسسة  التنمية الصحية"
                    width={153}
                    height={106}
                />
                </div>
                <div className="flex flex-col items-center justify-center w-[200px] h[140px] ">
                <Image
                    src={"/landingPage/Ourpartners/Frame 114.svg"}
                    alt="مؤسسة نهد التنمية"
                    width={155}
                    height={121}
                />
                </div>
                <div className="flex flex-col items-center justify-center w-[200px] h[140px] ">
                <Image
                    src={"/landingPage/Ourpartners/Frame 108.svg"}
                    alt="مؤسسة أساس التنمية"
                    width={179}
                    height={138}
                />
                </div>

                <div className="flex flex-col items-center justify-center w-[200px] h[140px] ">
                <Image
                    src={"/landingPage/Ourpartners/مؤسسة أمان التنمية معدل-01-01.svg"}
                    alt="مؤسسة أمان التنمية"
                    width={166}
                    height={127}
                />
                </div>
                <div className="flex flex-col items-center justify-center w-[200px] h[140px] ">
                <Image
                    src={"/landingPage/Ourpartners/شعار المعهد 1.svg"}
                    alt="  معهد العمرات"
                    width={82}
                    height={127}
                />
                </div>
                <div className="flex flex-col items-center justify-center w-[200px] h[140px] ">
                <Image
                    src={"/landingPage/Ourpartners/شعار الجامعة الجديد 1.svg"}
                    alt="جامعة  حضرموت "
                    width={106}
                    height={106}
                />
                </div>






            </figure>

        </main>
    )
}
