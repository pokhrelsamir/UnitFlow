/* =========================================
   UnitFlow
   Main Application
========================================= */


/* =========================================
   DOM ELEMENTS
========================================= */

const categoryDropdown =
    document.getElementById("categoryDropdown");

const categoryTrigger =
    document.getElementById("categoryTrigger");

const categoryMenu =
    document.getElementById("categoryMenu");

const categorySelected =
    document.getElementById("categorySelected");

const fromUnit =
    document.getElementById("fromUnit");

const toUnit =
    document.getElementById("toUnit");

const inputValue =
    document.getElementById("inputValue");

const result =
    document.getElementById("result");

const swapBtn =
    document.getElementById("swapBtn");

const copyBtn =
    document.getElementById("copyBtn");

const conversionText =
    document.getElementById("conversionText");

const precision =
    document.getElementById("precision");

const historyList =
    document.getElementById("historyList");

const clearHistoryBtn =
    document.getElementById("clearHistory");

const themeBtn =
    document.getElementById("themeBtn");

const popularCards =
    document.querySelectorAll(".popular-card");


/* =========================================
   APPLICATION STATE
========================================= */

let currentCategory = "length";


/* =========================================
   INITIALIZE APPLICATION
========================================= */

function init() {

    renderCategories();

    setCategory(
        currentCategory,
        false
    );

    setupEvents();

    loadTheme();

    renderHistory();

    updateConversion();
}


/* =========================================
   CATEGORY DROPDOWN
========================================= */

/**
 * Render all conversion categories.
 */
function renderCategories() {

    if (!categoryMenu) {
        return;
    }


    categoryMenu.innerHTML = "";


    Object.entries(UNIT_DATA)
        .forEach(
            ([key, category]) => {

                const option =
                    document.createElement("button");


                option.type = "button";

                option.className =
                    "category-option";


                option.dataset.category =
                    key;


                option.innerHTML = `
                    <span>${category.icon}</span>
                    <span>${category.name}</span>
                `;


                option.addEventListener(
                    "click",
                    () => {

                        setCategory(
                            key,
                            true
                        );

                        closeCategoryDropdown();

                    }
                );


                categoryMenu.appendChild(
                    option
                );
            }
        );
}


/**
 * Set active category.
 *
 * @param {string} categoryKey
 * @param {boolean} save
 */
function setCategory(
    categoryKey,
    save = true
) {

    const category =
        UNIT_DATA[categoryKey];


    if (!category) {
        return;
    }


    currentCategory =
        categoryKey;


    /* Update selected category */

    categorySelected.innerHTML = `
        ${category.icon}
        <span>${category.name}</span>
    `;


    /* Update active option */

    document
        .querySelectorAll(
            ".category-option"
        )
        .forEach(option => {

            option.classList.toggle(
                "active",
                option.dataset.category ===
                    categoryKey
            );

        });


    /* Populate units */

    populateUnitSelects(
        categoryKey
    );


    /*
       Save selected category in
       application state only.
    */

    if (save) {

        updateConversion();

    }
}


/**
 * Open category dropdown.
 */
function openCategoryDropdown() {

    if (!categoryDropdown) {
        return;
    }


    categoryDropdown.classList.add(
        "open"
    );


    categoryTrigger.setAttribute(
        "aria-expanded",
        "true"
    );
}


/**
 * Close category dropdown.
 */
function closeCategoryDropdown() {

    if (!categoryDropdown) {
        return;
    }


    categoryDropdown.classList.remove(
        "open"
    );


    categoryTrigger.setAttribute(
        "aria-expanded",
        "false"
    );
}


/**
 * Toggle category dropdown.
 */
function toggleCategoryDropdown() {

    if (
        categoryDropdown.classList.contains(
            "open"
        )
    ) {

        closeCategoryDropdown();

    } else {

        openCategoryDropdown();

    }
}


/* =========================================
   UNIT SELECTS
========================================= */

/**
 * Populate From and To unit selects.
 *
 * @param {string} categoryKey
 */
function populateUnitSelects(
    categoryKey
) {

    const category =
        UNIT_DATA[categoryKey];


    if (!category) {
        return;
    }


    fromUnit.innerHTML = "";

    toUnit.innerHTML = "";


    Object.entries(
        category.units
    ).forEach(
        ([key, unit]) => {

            const fromOption =
                document.createElement("option");


            fromOption.value =
                key;

            fromOption.textContent =
                `${unit.name} (${unit.symbol})`;


            fromUnit.appendChild(
                fromOption
            );


            const toOption =
                document.createElement("option");


            toOption.value =
                key;

            toOption.textContent =
                `${unit.name} (${unit.symbol})`;


            toUnit.appendChild(
                toOption
            );

        }
    );


    /*
       Use the category base unit as
       the default From unit.
    */

    const baseUnit =
        category.base;


    if (
        baseUnit &&
        category.units[baseUnit]
    ) {

        fromUnit.value =
            baseUnit;

    }


    /*
       Select the second unit as the
       default target where possible.
    */

    const unitKeys =
        Object.keys(
            category.units
        );


    if (unitKeys.length > 1) {

        const secondUnit =
            unitKeys.find(
                key =>
                    key !== baseUnit
            );


        if (secondUnit) {

            toUnit.value =
                secondUnit;

        }

    }


    updateConversion();
}


/* =========================================
   CONVERSION
========================================= */

/**
 * Perform the current conversion.
 */
function updateConversion() {

    if (
        !fromUnit ||
        !toUnit ||
        !inputValue
    ) {

        return;
    }


    const value =
        Number(
            inputValue.value
        );


    const from =
        fromUnit.value;


    const to =
        toUnit.value;


    const precisionValue =
        Number(
            precision.value
        ) || 6;


    /*
       Empty input.
    */

    if (
        inputValue.value.trim() === ""
    ) {

        result.textContent =
            "—";

        conversionText.textContent =
            "Enter a value to convert.";

        return;
    }


    /*
       Invalid number.
    */

    if (
        !Number.isFinite(value)
    ) {

        result.textContent =
            "—";

        conversionText.textContent =
            "Enter a valid number.";

        return;
    }


    try {

        const converted =
            convertUnit(
                value,
                currentCategory,
                from,
                to
            );


        result.textContent =
            formatNumber(
                converted,
                precisionValue
            );


        conversionText.textContent =
            createConversionText(
                value,
                currentCategory,
                from,
                to,
                precisionValue
            );


    } catch (error) {

        console.error(
            "Conversion error:",
            error
        );


        result.textContent =
            "—";

        conversionText.textContent =
            "Unable to perform conversion.";
    }
}


/* =========================================
   SWAP UNITS
========================================= */

function swapUnits() {

    const oldFrom =
        fromUnit.value;


    const oldTo =
        toUnit.value;


    fromUnit.value =
        oldTo;


    toUnit.value =
        oldFrom;


    updateConversion();
}


/* =========================================
   COPY RESULT
========================================= */

async function copyResult() {

    const resultText =
        result.textContent.trim();


    if (
        !resultText ||
        resultText === "—"
    ) {

        return;
    }


    try {

        await navigator.clipboard.writeText(
            resultText
        );


        const originalText =
            copyBtn.textContent;


        copyBtn.textContent =
            "✓";


        setTimeout(
            () => {

                copyBtn.textContent =
                    originalText;

            },
            1200
        );


    } catch (error) {

        /*
           Fallback for browsers where
           Clipboard API is unavailable.
        */

        const textarea =
            document.createElement(
                "textarea"
            );


        textarea.value =
            resultText;


        textarea.style.position =
            "fixed";

        textarea.style.opacity =
            "0";


        document.body.appendChild(
            textarea
        );


        textarea.select();


        try {

            document.execCommand(
                "copy"
            );


            copyBtn.textContent =
                "✓";


            setTimeout(
                () => {

                    copyBtn.textContent =
                        "📋";

                },
                1200
            );

        } catch (fallbackError) {

            console.error(
                "Copy failed:",
                fallbackError
            );

        }


        document.body.removeChild(
            textarea
        );
    }
}


/* =========================================
   SAVE CURRENT CONVERSION
========================================= */

function saveCurrentConversion() {

    const value =
        Number(
            inputValue.value
        );


    if (
        inputValue.value.trim() === "" ||
        !Number.isFinite(value)
    ) {

        return;
    }


    const converted =
        convertUnit(
            value,
            currentCategory,
            fromUnit.value,
            toUnit.value
        );


    if (
        !Number.isFinite(converted)
    ) {

        return;
    }


    addHistory({

        category:
            currentCategory,

        from:
            fromUnit.value,

        to:
            toUnit.value,

        value:
            value,

        result:
            converted

    });


    renderHistory();
}


/* =========================================
   HISTORY
========================================= */

function renderHistory() {

    if (!historyList) {
        return;
    }


    const history =
        getHistory();


    if (!history.length) {

        historyList.innerHTML = `
            <div class="empty-history">
                No conversions yet.
            </div>
        `;

        return;
    }


    historyList.innerHTML =
        history
            .map(item => {

                const category =
                    UNIT_DATA[
                        item.category
                    ];


                const fromUnitData =
                    category?.units[
                        item.from
                    ];


                const toUnitData =
                    category?.units[
                        item.to
                    ];


                const fromName =
                    fromUnitData?.name ||
                    item.from;


                const toName =
                    toUnitData?.name ||
                    item.to;


                const fromSymbol =
                    fromUnitData?.symbol ||
                    item.from;


                const toSymbol =
                    toUnitData?.symbol ||
                    item.to;


                const categoryName =
                    category?.name ||
                    item.category;


                const time =
                    new Date(
                        item.timestamp
                    ).toLocaleString();


                return `
                    <div
                        class="history-item"
                        data-history-id="${item.id}"
                    >

                        <div>

                            <div class="history-main">
                                ${formatNumber(
                                    item.value
                                )}
                                ${fromSymbol}
                                →
                                ${formatNumber(
                                    item.result
                                )}
                                ${toSymbol}
                            </div>

                            <div class="history-time">
                                ${fromName}
                                →
                                ${toName}
                                •
                                ${categoryName}
                                •
                                ${time}
                            </div>

                        </div>

                    </div>
                `;

            })
            .join("");
}


/* =========================================
   CLEAR HISTORY
========================================= */

function handleClearHistory() {

    const history =
        getHistory();


    if (!history.length) {
        return;
    }


    const confirmed =
        confirm(
            "Clear all conversion history?"
        );


    if (!confirmed) {
        return;
    }


    clearHistory();

    renderHistory();
}


/* =========================================
   THEME
========================================= */

function loadTheme() {

    const savedTheme =
        getSavedTheme();


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark"
        );

        themeBtn.textContent =
            "☀️";

        return;
    }


    document.body.classList.remove(
        "dark"
    );

    themeBtn.textContent =
        "🌙";
}


/**
 * Toggle light/dark theme.
 */
function toggleTheme() {

    const isDark =
        document.body.classList.toggle(
            "dark"
        );


    if (isDark) {

        saveTheme("dark");

        themeBtn.textContent =
            "☀️";

    } else {

        saveTheme("light");

        themeBtn.textContent =
            "🌙";
    }
}


/* =========================================
   POPULAR CONVERSIONS
========================================= */

function handlePopularConversion(
    card
) {

    const category =
        card.dataset.category;


    const from =
        card.dataset.from;


    const to =
        card.dataset.to;


    if (
        !UNIT_DATA[category]
    ) {

        return;
    }


    if (
        !UNIT_DATA[category]
            .units[from]
    ) {

        return;
    }


    if (
        !UNIT_DATA[category]
            .units[to]
    ) {

        return;
    }


    setCategory(
        category,
        false
    );


    fromUnit.value =
        from;


    toUnit.value =
        to;


    inputValue.value =
        "1";


    updateConversion();


    /*
       Scroll back to converter
       for a smooth experience.
    */

    document
        .querySelector(
            ".converter-card"
        )
        ?.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
}


/* =========================================
   EVENT LISTENERS
========================================= */

function setupEvents() {


    /* -----------------------------------------
       Category dropdown
    ----------------------------------------- */

    categoryTrigger.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            toggleCategoryDropdown();

        }
    );


    /*
       Prevent clicks inside the menu from
       bubbling to document.
    */

    categoryMenu.addEventListener(
        "click",
        event => {

            event.stopPropagation();

        }
    );


    /*
       Close dropdown when clicking outside.
    */

    document.addEventListener(
        "click",
        event => {

            if (
                !categoryDropdown.contains(
                    event.target
                )
            ) {

                closeCategoryDropdown();

            }

        }
    );


    /*
       Close dropdown with Escape.
    */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeCategoryDropdown();

            }

        }
    );


    /* -----------------------------------------
       Unit selectors
    ----------------------------------------- */

    fromUnit.addEventListener(
        "change",
        () => {

            updateConversion();

            saveCurrentConversion();

        }
    );


    toUnit.addEventListener(
        "change",
        () => {

            updateConversion();

            saveCurrentConversion();

        }
    );


    /* -----------------------------------------
       Input
    ----------------------------------------- */

    inputValue.addEventListener(
        "input",
        () => {

            updateConversion();

        }
    );


    /*
       Save conversion when user finishes
       entering a value.
    */

    inputValue.addEventListener(
        "change",
        () => {

            saveCurrentConversion();

        }
    );


    inputValue.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                saveCurrentConversion();

            }

        }
    );


    /* -----------------------------------------
       Precision
    ----------------------------------------- */

    precision.addEventListener(
        "change",
        () => {

            updateConversion();

        }
    );


    /* -----------------------------------------
       Swap
    ----------------------------------------- */

    swapBtn.addEventListener(
        "click",
        () => {

            swapUnits();

            saveCurrentConversion();

        }
    );


    /* -----------------------------------------
       Copy
    ----------------------------------------- */

    copyBtn.addEventListener(
        "click",
        copyResult
    );


    /* -----------------------------------------
       Clear history
    ----------------------------------------- */

    clearHistoryBtn.addEventListener(
        "click",
        handleClearHistory
    );


    /* -----------------------------------------
       Theme
    ----------------------------------------- */

    themeBtn.addEventListener(
        "click",
        toggleTheme
    );


    /* -----------------------------------------
       Popular cards
    ----------------------------------------- */

    popularCards.forEach(
        card => {

            card.addEventListener(
                "click",
                () => {

                    handlePopularConversion(
                        card
                    );

                }
            );

        }
    );
}


/* =========================================
   START APPLICATION
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    init
);