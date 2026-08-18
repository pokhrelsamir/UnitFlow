/* =========================================
   UnitFlow
   Conversion Engine
========================================= */


function convertTemperature(value, from, to) {

    let celsius;


    // Convert to Celsius

    switch (from) {

        case "celsius":
            celsius = value;
            break;

        case "fahrenheit":
            celsius = (value - 32) * 5 / 9;
            break;

        case "kelvin":
            celsius = value - 273.15;
            break;

        default:
            celsius = value;

    }


    // Convert Celsius to target

    switch (to) {

        case "celsius":
            return celsius;

        case "fahrenheit":
            return (celsius * 9 / 5) + 32;

        case "kelvin":
            return celsius + 273.15;

        default:
            return celsius;

    }

}


function convertUnit(value, category, from, to) {

    const categoryData = UNIT_DATA[category];

    if (!categoryData) {
        throw new Error("Invalid category");
    }


    if (
        !categoryData.units[from] ||
        !categoryData.units[to]
    ) {
        throw new Error("Invalid unit");
    }


    if (category === "temperature") {
        return convertTemperature(
            value,
            from,
            to
        );
    }


    const fromFactor =
        categoryData.units[from].factor;

    const toFactor =
        categoryData.units[to].factor;


    // Convert source to base unit

    const baseValue =
        value * fromFactor;


    // Convert base unit to target

    return baseValue / toFactor;

}


function formatNumber(value, precision = 6) {

    if (!Number.isFinite(value)) {
        return "—";
    }


    const rounded =
        Number(value.toFixed(precision));


    return rounded.toLocaleString(
        "en-US",
        {
            maximumFractionDigits: precision
        }
    );

}