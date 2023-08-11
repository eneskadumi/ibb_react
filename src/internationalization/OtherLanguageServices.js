// Language

import axios from "axios";

class OtherLanguageServices {

    // Language Flag Button
    headerAccessLanguageServices(LanguageButtonTrigger) {

        axios.defaults.headers["accept-language"] = LanguageButtonTrigger

    }

}

export default new OtherLanguageServices();