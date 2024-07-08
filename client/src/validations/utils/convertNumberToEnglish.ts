const convertToEnglishNumbers = (input: string): string => {
  const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  return input.split('').map(char => {
    if (persianNumbers.includes(char)) {
      return englishNumbers[persianNumbers.indexOf(char)];
    }
    if (arabicNumbers.includes(char)) {
      return englishNumbers[arabicNumbers.indexOf(char)];
    }
    return char;
  }).join('');
};
  
export default convertToEnglishNumbers