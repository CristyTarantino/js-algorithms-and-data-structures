function convertHTML(str) {
  // return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
  
  // Use Object Lookup to declare as many HTML entities as needed.
  let htmlEntities = {
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    '\'':"&apos;"
  };
  
  return [...str].map(char => htmlEntities[char] || char).join('')
}

convertHTML("Dolce & Gabbana");

// TEST CASES
// convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
// convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
// convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
// convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
// convertHTML("Schindler's List") should return Schindler&​apos;s List.
// convertHTML("<>") should return &​lt;&​gt;.
// convertHTML("abc") should return abc.