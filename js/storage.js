/* =========================================
   UnitFlow
   Local Storage Manager
========================================= */


/* =========================================
   STORAGE CONFIGURATION
========================================= */

const STORAGE_KEYS = {

    HISTORY: "unitflow_conversion_history",

    THEME: "unitflow_theme"

};


const MAX_HISTORY_ITEMS = 20;


/* =========================================
   GET HISTORY
========================================= */

/**
 * Get saved conversion history.
 *
 * @returns {Array}
 */
function getHistory() {

    try {

        const stored =
            localStorage.getItem(
                STORAGE_KEYS.HISTORY
            );


        if (!stored) {
            return [];
        }


        const history =
            JSON.parse(stored);


        if (!Array.isArray(history)) {
            return [];
        }


        return history;

    } catch (error) {

        console.error(
            "Unable to load conversion history:",
            error
        );

        return [];
    }
}


/* =========================================
   SAVE HISTORY
========================================= */

/**
 * Save conversion history.
 *
 * @param {Array} history
 */
function saveHistory(history) {

    try {

        localStorage.setItem(
            STORAGE_KEYS.HISTORY,
            JSON.stringify(history)
        );

    } catch (error) {

        console.error(
            "Unable to save conversion history:",
            error
        );
    }
}


/* =========================================
   ADD HISTORY ITEM
========================================= */

/**
 * Add a conversion to history.
 *
 * @param {Object} item
 */
function addHistory(item) {

    if (!item || typeof item !== "object") {
        return;
    }


    let history =
        getHistory();


    /*
       Prevent duplicate consecutive
       conversions.
    */

    const latest =
        history[0];


    if (
        latest &&
        latest.category === item.category &&
        latest.from === item.from &&
        latest.to === item.to &&
        String(latest.value) ===
            String(item.value)
    ) {

        return;
    }


    const historyItem = {

        id:
            Date.now(),

        category:
            item.category,

        from:
            item.from,

        to:
            item.to,

        value:
            item.value,

        result:
            item.result,

        timestamp:
            new Date().toISOString()

    };


    /*
       Newest conversion goes first.
    */

    history.unshift(
        historyItem
    );


    /*
       Keep only the latest
       MAX_HISTORY_ITEMS.
    */

    history =
        history.slice(
            0,
            MAX_HISTORY_ITEMS
        );


    saveHistory(history);
}


/* =========================================
   CLEAR HISTORY
========================================= */

/**
 * Remove all conversion history.
 */
function clearHistory() {

    try {

        localStorage.removeItem(
            STORAGE_KEYS.HISTORY
        );

    } catch (error) {

        console.error(
            "Unable to clear history:",
            error
        );
    }
}


/* =========================================
   DELETE SINGLE HISTORY ITEM
========================================= */

/**
 * Delete one history item.
 *
 * @param {number|string} id
 */
function deleteHistoryItem(id) {

    let history =
        getHistory();


    history =
        history.filter(
            item =>
                String(item.id) !==
                String(id)
        );


    saveHistory(history);
}


/* =========================================
   THEME STORAGE
========================================= */

/**
 * Save selected theme.
 *
 * @param {string} theme
 */
function saveTheme(theme) {

    if (
        theme !== "light" &&
        theme !== "dark"
    ) {

        return;
    }


    try {

        localStorage.setItem(
            STORAGE_KEYS.THEME,
            theme
        );

    } catch (error) {

        console.error(
            "Unable to save theme:",
            error
        );
    }
}


/* =========================================
   GET SAVED THEME
========================================= */

/**
 * Get saved theme.
 *
 * @returns {string|null}
 */
function getSavedTheme() {

    try {

        const theme =
            localStorage.getItem(
                STORAGE_KEYS.THEME
            );


        if (
            theme === "light" ||
            theme === "dark"
        ) {

            return theme;
        }


        return null;

    } catch (error) {

        console.error(
            "Unable to load theme:",
            error
        );

        return null;
    }
}