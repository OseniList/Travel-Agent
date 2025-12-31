import autoComplete from "@tarekraafat/autocomplete.js"; // autoComplete JS  
import countryList from './../helpers/countryList'; // Country List - Список стран

function autoCompleteFunc() {
    const autoCompleteJS = new autoComplete({
        selector: "#autoCompleteCountry",
        placeHolder: "e.g Bali, Indonesia",
        data: {
            src: countryList,
            cashe: true,
        },
        resultItem: {
            highlight: true,
        },
        events: {
            input: {
                selection: (event) => {
                    const selection = event.detail.selection.value;
                    autoCompleteJS.input.value = selection;
                }
            }
        }
    });
}

export default autoCompleteFunc;

