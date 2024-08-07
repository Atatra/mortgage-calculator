"use client";

import Image from "next/image";
import Calculator from "@/components/Calculator";
import { useState } from "react";
import { readable } from "@/lib/compute";

interface ResultInfo {
  monthly: number | undefined;
  total: number | undefined;
}

export default function Home() {
  const [result, setResult] = useState<ResultInfo | undefined>();

  return (
    <main className="rm:flex rm:justify-center rm:items-center w-full min-h-screen bg-slate-100 font-plusJakartaSans">


      <div className="rm:bg-white rm:rounded-2xl rm:max-w-[1000px]">
        <div className="rm:grid flex-col rm:grid-cols-2 gap-0">

          <Calculator
            handleShowResult={(month, total) => { setResult({ monthly: month, total: total }) }}
            handleReset={() => setResult(undefined)}
          />

          {/** Results*/}

          <section className={`px-12 p-5 bg-slate-900 rm:rounded-bl-3xl
          rm:rounded-r-2xl flex flex-col ${!result && "justify-center"}`}>
            {!result ?
              <>
                <Image src={"/images/illustration-empty.svg"} alt="No results to show"
                  height={150} width={150} className="self-center" priority={true} />
                <section>
                  <h1 className="text-center text-white text-lg mt-2 mb-4">Results showns here</h1>
                  <p className="text-center text-slate-300 text-sm">
                    Complete the form and click "calculate repayments" to see
                    what your monthly repayment would be.
                  </p>

                </section>
              </>
              :
              <>
                <section>
                  <h1 className="font-bold text-xl text-white mt-2 mb-3">Your results</h1>
                  <p className="text-slate-300 text-sm">
                    Your results are shown below based on the information you provided.
                    To adjust the results, edit the form and click "calculate repayments" again.
                  </p>

                  <div className="border-t-4 border-lime rounded-md bg-slate-1100 mt-8">
                    <div className="py-4 px-4">

                      <h2 className="text-slate-300 text-sm mb-3">Your monthly payments</h2>
                      <span className="text-lime font-bold text-3xl">£{readable(result.monthly!)}</span>

                      <hr className="border-[#324855] my-5" />

                      <h2 className="text-slate-300 text-sm mb-2">Today you'll repay over the term</h2>
                      <span className="text-white font-bold text-lg">£{readable(result.total!)}</span>

                    </div>
                  </div>
                </section>
              </>
            }
          </section>
        </div>

      </div>


    </main >
  );
}
