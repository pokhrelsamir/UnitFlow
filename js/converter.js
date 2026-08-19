/* =========================================
   UnitFlow
   Conversion Engine
========================================= */


/* =========================================
   TEMPERATURE CONVERSION
========================================= */

/**
 * Convert a temperature value to Celsius.
 *
 * @param {number} value
 * @param {string} from
 * @returns {number}
 */
function toCelsius(value, from) {

    switch (from) {

        case "celsius":
            return value;

        case "fahrenheit":
            return (value - 32) * 5 / 9;

        case "kelvin":
            return value - 273.15;

        default:
            throw new Error(
                `Unsupported temperature unit: ${from}`
            );
    }
}


/**
 * Convert a Celsius value to the target temperature unit.
 *
 * @param {number} celsius
 * @param {string} to
 * @returns {number}
 */
function fromCelsius(celsius, to) {

    switch (to) {

        case "celsius":
            return celsius;

        case "fahrenheit":
            return (celsius * 9 / 5) + 32;

        case "kelvin":
            return celsius + 273.15;

        default:
            throw new Error(
                `Unsupported temperature unit: ${to}`
            );
    }
}


/**
 * Convert between temperature units.
 *
 * @param {number} value
 * @param {string} from
 * @param {string} to
 * @returns {number}
 */
function convertTemperature(value, from, to) {

    if (!Number.isFinite(value)) {
        return NaN;
    }

    const celsius =
        toCelsius(value, from);

    return fromCelsius(celsius, to);
}


/* =========================================
   GENERIC UNIT CONVERSION
========================================= */

/**
 * Convert a normal factor-based unit.
 *
 * Formula:
 *
 * value × source factor
 * ---------------------
 *       target factor
 *
 * @param {number} value
 * @param {object} categoryData
 * @param {string} from
 * @param {string} to
 * @returns {number}
 */
function convertFactorUnit(
    value,
    categoryData,
    from,
    to
) {

    const fromUnit =
        categoryData.units[from];

    const toUnit =
        categoryData.units[to];


    if (!fromUnit || !toUnit) {

        throw new Error(
            "Invalid conversion unit"
        );
    }


    const fromFactor =
        Number(fromUnit.factor);

    const toFactor =
        Number(toUnit.factor);


    if (
        !Number.isFinite(fromFactor) ||
        !Number.isFinite(toFactor) ||
        fromFactor <= 0 ||
        toFactor <= 0
    ) {

        throw new Error(
            "Invalid conversion factor"
        );
    }


    // Convert source → base unit

    const baseValue =
        value * fromFactor;


    // Convert base unit → target

    return baseValue / toFactor;
}


/* =========================================
   MAIN CONVERSION FUNCTION
========================================= */

/**
 * Convert a value between units.
 *
 * @param {number|string} value
 * @param {string} category
 * @param {string} from
 * @param {string} to
 * @returns {number}
 */
function convertUnit(
    value,
    category,
    from,
    to
) {

    const numericValue =
        Number(value);


    // Validate input

    if (!Number.isFinite(numericValue)) {
        return NaN;
    }


    // Validate category

    const categoryData =
        UNIT_DATA[category];


    if (!categoryData) {

        throw new Error(
            `Invalid category: ${category}`
        );
    }


    // Validate source unit

    if (!categoryData.units[from]) {

        throw new Error(
            `Invalid source unit: ${from}`
        );
    }


    // Validate target unit

    if (!categoryData.units[to]) {

        throw new Error(
            `Invalid target unit: ${to}`
        );
    }


    // Same unit

    if (from === to) {
        return numericValue;
    }


    // Temperature requires formulas

    if (category === "temperature") {

        return convertTemperature(
            numericValue,
            from,
            to
        );
    }


    // All other categories use factors

    return convertFactorUnit(
        numericValue,
        categoryData,
        from,
        to
    );
}


/* =========================================
   NUMBER FORMATTING
========================================= */

/**
 * Format a converted number.
 *
 * @param {number} value
 * @param {number} precision
 * @returns {string}
 */
function formatNumber(
    value,
    precision = 6
) {

    if (!Number.isFinite(value)) {
        return "—";
    }


    // Keep precision within a safe range

    const safePrecision =
        Math.min(
            Math.max(
                Number(precision) || 6,
                0
            ),
            12
        );


    // Remove negative zero

    if (
        Math.abs(value) <
        Math.pow(10, -(safePrecision + 1))
    ) {

        value = 0;
    }


    /*
       Round first so values such as:

       1.9999999999999998

       become:

       2
    */

    const rounded =
        Number(
            value.toFixed(safePrecision)
        );


    /*
       Use exponential notation for
       extremely large/small values.
    */

    if (
        Math.abs(rounded) >= 1e15 ||
        (
            Math.abs(rounded) > 0 &&
            Math.abs(rounded) < 1e-6
        )
    ) {

        return rounded
            .toExponential(
                Math.min(
                    safePrecision,
                    10
                )
            )
            .replace(
                /(\.\d*?[1-9])0+e/,
                "$1e"
            );
    }


    return rounded.toLocaleString(
        "en-US",
        {
            minimumFractionDigits: 0,

            maximumFractionDigits:
                safePrecision
        }
    );
}


/* =========================================
   CONVERSION DESCRIPTION
========================================= */

/**
 * Create a readable conversion description.
 *
 * Example:
 *
 * 1 m = 3.28084 ft
 *
 * @param {number} value
 * @param {string} category
 * @param {string} from
 * @param {string} to
 * @param {number} precision
 * @returns {string}
 */
function createConversionText(
    value,
    category,
    from,
    to,
    precision = 6
) {

    const categoryData =
        UNIT_DATA[category];


    if (!categoryData) {
        return "—";
    }


    const fromUnit =
        categoryData.units[from];

    const toUnit =
        categoryData.units[to];


    if (!fromUnit || !toUnit) {
        return "—";
    }


    const result =
        convertUnit(
            value,
            category,
            from,
            to
        );


    if (!Number.isFinite(result)) {
        return "—";
    }


    return `${formatNumber(
        value,
        precision
    )} ${fromUnit.symbol} = ${formatNumber(
        result,
        precision
    )} ${toUnit.symbol}`;
}