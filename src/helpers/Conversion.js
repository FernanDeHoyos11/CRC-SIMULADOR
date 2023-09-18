export const convertToSuperscript = (polynomial = 'x3 +1') => {
    // Separa los términos del polinomio
    const terms = polynomial.split('+').map(term => term.trim());
  
    // Función para convertir un número en formato de superíndice
    const toSuperscript = (number) => {
      const superscriptDigits = {
        '0': '⁰',
        '1': '¹',
        '2': '²',
        '3': '³',
        '4': '⁴',
        '5': '⁵',
        '6': '⁶',
        '7': '⁷',
        '8': '⁸',
        '9': '⁹',
      };
  
      return String(number).split('').map(digit => superscriptDigits[digit]).join('');
    };
  
    // Aplica superíndices a los términos
    const formattedTerms = terms.map(term => {
      const parts = term.split('x');
      if (parts.length === 2) {
        const coefficient = parts[0].trim();
        const exponent = parts[1].trim();
        return coefficient + 'x' + toSuperscript(exponent);
      }
      return term;
    });
  
    // Une los términos en el formato deseado
    const formattedPolynomial = formattedTerms.join(' + ');
  
    return formattedPolynomial;
  };

  export const convertFromSuperscript = (polynomial) => {
    // Función para convertir un superíndice en número
    const fromSuperscript = (superscript) => {
      const superscriptDigits = {
        '⁰': '0',
        '¹': '1',
        '²': '2',
        '³': '3',
        '⁴': '4',
        '⁵': '5',
        '⁶': '6',
        '⁷': '7',
        '⁸': '8',
        '⁹': '9',
      };
  
      return superscript.split('').map(char => superscriptDigits[char]).join('');
    };
  
    // Reemplaza los superíndices con exponentes numéricos
    const formattedPolynomial = polynomial.replace(/x(⁰|¹|²|³|⁴|⁵|⁶|⁷|⁸|⁹)/g, (match, superscript) => {
      const exponent = fromSuperscript(superscript);
      return `x${exponent}`;
    });
  
    return formattedPolynomial;
  };
  
  
  
 
  