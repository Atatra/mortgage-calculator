"use client";

import { KeyboardEvent, ChangeEvent, CSSProperties } from "react";
import { readable, unReadable } from "@/lib/compute";

interface Props {
	id: string;
	label: string;
	symbol?: string;
	left?: boolean; //left or right;
	styles?: CSSProperties;
	step?: string; // precision: 1, 0.1, 0.01
	error: string | null;
	exception?: boolean; // Yeah, really bad design.. applies only to input that needs 1000 -> 1,000
}
const Input = ({ id, label, symbol, left, styles, step = "1", error, exception = false }: Props) => {

	const makeReadable = (event: ChangeEvent<HTMLInputElement>) => {

		if (event.target.value) {
			event.target.value = readable(parseFloat(unReadable(event.target.value)!));
		}

		if (Number.isNaN(event.target.value)) {
			event.target.value = "0";
		};
	}

	const handleKeyPressed = (event: KeyboardEvent<HTMLInputElement>) => {
		const isCtrlOrMeta = event.ctrlKey || event.metaKey;
		const key = event.key;
		// Allow only numeric characters and control keys
		if (!/^[0-9]$/.test(key) && key !== '.' && !['Backspace', 'ArrowLeft', 'ArrowRight', 'Enter', 'Tab'].includes(key) && !(isCtrlOrMeta && key === 'a')) {
			event.preventDefault();
		}
	};

	return (
		<div className="flex flex-col w-full text-slate-700 text-[0.875rem]" style={{ ...styles }}>

			<label className="mb-2 text-slate-500" htmlFor={label}>{label}</label>
			<div className="relative">
				<input type={exception ? "text" : "number"} step={step} id={id} name={id} min={0} //required
					className={`border-[1px] rounded-[4px] w-full px-3 py-2 hover:border-slate-900
						text-slate-900 font-bold
						${left && "pl-9"} focus:outline-lime ${error ? "border-red" : "border-slate-500"}`}
					onWheel={event => event.currentTarget.blur()}
					onChange={event => exception && makeReadable(event)}
					onKeyDown={event => exception && handleKeyPressed(event)}
				/>
				<div className={` focus:bg-lime h-[96%] px-2 pt-2 absolute 
					${error ? "bg-red text-white" : "bg-slate-100 text-slate-900"}
					${left ? "rounded-l-[3px] left-[0.8px] top-[0.75px]" : "rounded-r-[3px] right-[0.7px] top-[0.7px]"}`} >
					{symbol}
				</div>
			</div>
			{error && <span className="mt-2 mb-2 text-red ">{error}</span>}
		</div>

	)
}

export default Input