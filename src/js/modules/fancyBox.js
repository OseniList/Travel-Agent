import { Fancybox } from '@fancyapps/ui'; // Галерея и лайтбоксы от Fancybox
import '@fancyapps/ui/dist/fancybox/fancybox.css'; // Fancybox styles

function fancyboxFunc() {
    // Settings for Fancybox
    Fancybox.bind('[data-fancybox]', {
	    // Your custom options
    });
}

export default fancyboxFunc;