export const compute = (
  amount: number | undefined,
  endInYear: number | undefined,
  rate: number | undefined
) => {
  if (amount && endInYear && rate) {
    const months = endInYear * 12;
    const rateMonth = rate / 1200; // per month

    const monthlyRepayment =
      (amount * rateMonth) / (1 - Math.pow(1 + rateMonth, -months));

    const totalRepayment = monthlyRepayment * months;
    const totalInterestOnly = totalRepayment - amount;
    const interestOnly = totalInterestOnly / months;

    return {
      monthly: monthlyRepayment,
      total: totalRepayment,
      interestOnly: interestOnly,
      totalInterestOnly: totalInterestOnly,
    };
  } else {
    throw new Error(
      "Missing information. You somehow managed to bypass previous validation. "
    );
  }
};

export const readable = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const unReadable = (num: string | undefined) => {
  if (num) return num.replaceAll(",", "");
  return undefined;
};
