"use client";

import { compute, unReadable } from "@/lib/compute";
import Input from "./Input";
import Image from "next/image";
import { createRef, useState } from "react";
import { mortgageInfoSchema } from "@/lib/validationSchema";
import { ZodError } from "zod";

interface Props {
	handleShowResult: (month: number, total: number) => void; // Generic
	handleReset: () => void;
}

interface ErrorMap {
	amount: string | null;
	endInYear: string | null;
	rate: string | null;
	mortgageType: string | null;
}

const Calculator = ({ handleShowResult, handleReset }: Props) => {
	const formRef = createRef<HTMLFormElement>();
	const [errorMap, setErrorMap] = useState<ErrorMap>({
		amount: null,
		endInYear: null,
		rate: null,
		mortgageType: null
	});

	const handleSubmit = async (formData: FormData) => { // Executed only client-side

		const amount = formData.get("amount");
		const endInYear = formData.get("term");
		const rate = formData.get("rate");
		const mortgageType = formData.get("mortgageType");

		/* Create a new one without copying to accurately
		reflects only the current validation errors */
		const newErrorMap: ErrorMap = {
			amount: null,
			endInYear: null,
			rate: null,
			mortgageType: null,
		};

		const FormData = {
			amount: parseFloat(unReadable(amount?.toString()) || ""),
			endInYear: parseFloat(endInYear?.toString() || ""),
			rate: parseFloat(rate?.toString() || ""),
			mortgageType: parseFloat(mortgageType?.toString() || ""),
		}

		try {
			mortgageInfoSchema.parse(FormData)
			setErrorMap(newErrorMap);
			try {

				const { monthly, total, interestOnly, totalInterestOnly } = compute(FormData.amount, FormData.endInYear, FormData.rate)

				if (mortgageType === "0") { // Repayment
					handleShowResult(parseFloat(monthly.toFixed(2)), parseFloat(total.toFixed(2)));
				}
				else if (mortgageType === "1") { // Interest Only 
					handleShowResult(parseFloat(interestOnly.toFixed(2)), parseFloat(totalInterestOnly.toFixed(2)));
				}
			} catch (error: unknown) {
				if (error instanceof Error) console.error(error.message);
			}


		} catch (error: unknown) {
			if (error instanceof ZodError) {

				// Update error map with current validation errors
				error.errors.forEach((err) => {
					const field = err.path[0] as keyof ErrorMap;
					newErrorMap[field] = err.message;
				});

				// Set the error map state
				setErrorMap(newErrorMap);
			} else {
				console.error("An unexpected error occurred:", error);
			}
		}

	}

	return (

		<section className="p-5 bg-white rm:rounded-l-2xl rm:mt-5 rm:mx-4 ">

			<span className="flex flex-col rm:flex-row items-start rm:justify-between mb-5">
				<h1 className="font-bold text-xl text-slate-900">Mortgage Calculator</h1>
				<button className="font-[500] text-sm text-slate-700 underline rm:self-end"
					onClick={() => { formRef.current?.reset(); handleReset() }}
				>
					Clear All
				</button>
			</span>

			<form action={handleSubmit} ref={formRef}>

				<Input step="0.01" id="amount" label="Mortgage Amount" error={errorMap.amount}
					left={true} symbol="£" exception={true} styles={{ marginBottom: "0.75rem" }} />

				<div className="grid grid-cols-1 rm:grid-cols-2 rm:gap-5">
					<div className="flex flex-col">
						<Input id="term" label="Mortgage Term" symbol="years"
							left={false} styles={{ alignSelf: "end" }} error={errorMap.endInYear} />
					</div>
					<div className="flex flex-col">
						<Input step="0.01" id="rate" label="Interest Rate" error={errorMap.rate}
							symbol="%" left={false} styles={{ alignSelf: "end" }} />
					</div>
				</div>

				<div className="flex flex-col mt-3">
					<label className="mb-2 text-slate-700 text-sm" >Mortgage Type</label>

					<span className="radio relative">
						<input type="radio" id="repayment" name="mortgageType" value={0}
							className="peer appearance-none w-[13px] h-[13px]
							self-center rounded-full border-2  checked:border-lime"
						//required
						/>
						<label htmlFor="repayment" className="text-slate-900 font-bold ml-4">Repayment</label>

						<div className="bg-white border-white absolute h-[7px] w-[7px]
						peer-checked:border-lime border-2 rounded-full top-[0.78rem]
						rm:top-3 left-[0.68rem] peer-checked:bg-lime" />
					</span>

					<span className="radio relative mt-2">
						<input type="radio" id="interest" name="mortgageType" value={1}
							className="peer appearance-none w-[13px] h-[13px]
							self-center rounded-full border-2  checked:border-lime"
						//required
						/>
						<label htmlFor="interest" className="text-slate-900 font-bold ml-4">Interest Only</label>

						<div className="bg-white border-white absolute h-[7px] w-[7px]
						peer-checked:border-lime border-2 rounded-full top-[0.78rem]
						left-[0.68rem] rm:top-3 peer-checked:bg-lime" />

					</span>

					{errorMap.mortgageType &&
						<span className="mt-2 text-[0.875rem] text-red">
							{errorMap.mortgageType}
						</span>}
				</div>

				<button type="submit" className="bg-lime hover:bg-lime-light mt-8 mb-4 rounded-full">
					<span className="flex flex-row p-2 px-6">
						<Image src={"/images/icon-calculator.svg"} alt="Icon calculator" height={20} width={20} />
						<span className="pl-4">Calculate Repayments</span>
					</span>
				</button>

			</form>
		</section>

	);
}

export default Calculator;