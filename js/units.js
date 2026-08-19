/* =========================================
   UnitFlow
   Unit Definitions
========================================= */


const UNIT_DATA = {


    /* =========================================
       LENGTH
    ========================================== */

    length: {

        name: "Length",

        icon: "📏",

        description:
            "Convert distances and measurements of length.",

        base: "meter",

        units: {

            meter: {
                name: "Meter",
                symbol: "m",
                factor: 1
            },

            kilometer: {
                name: "Kilometer",
                symbol: "km",
                factor: 1000
            },

            centimeter: {
                name: "Centimeter",
                symbol: "cm",
                factor: 0.01
            },

            millimeter: {
                name: "Millimeter",
                symbol: "mm",
                factor: 0.001
            },

            micrometer: {
                name: "Micrometer",
                symbol: "μm",
                factor: 0.000001
            },

            nanometer: {
                name: "Nanometer",
                symbol: "nm",
                factor: 0.000000001
            },

            mile: {
                name: "Mile",
                symbol: "mi",
                factor: 1609.344
            },

            yard: {
                name: "Yard",
                symbol: "yd",
                factor: 0.9144
            },

            foot: {
                name: "Foot",
                symbol: "ft",
                factor: 0.3048
            },

            inch: {
                name: "Inch",
                symbol: "in",
                factor: 0.0254
            },

            nauticalMile: {
                name: "Nautical Mile",
                symbol: "nmi",
                factor: 1852
            }

        }

    },


    /* =========================================
       MASS
    ========================================== */

    mass: {

        name: "Mass",

        icon: "⚖️",

        description:
            "Convert weights and mass measurements.",

        base: "kilogram",

        units: {

            kilogram: {
                name: "Kilogram",
                symbol: "kg",
                factor: 1
            },

            gram: {
                name: "Gram",
                symbol: "g",
                factor: 0.001
            },

            milligram: {
                name: "Milligram",
                symbol: "mg",
                factor: 0.000001
            },

            microgram: {
                name: "Microgram",
                symbol: "μg",
                factor: 0.000000001
            },

            metricTon: {
                name: "Metric Ton",
                symbol: "t",
                factor: 1000
            },

            pound: {
                name: "Pound",
                symbol: "lb",
                factor: 0.45359237
            },

            ounce: {
                name: "Ounce",
                symbol: "oz",
                factor: 0.028349523125
            },

            stone: {
                name: "Stone",
                symbol: "st",
                factor: 6.35029318
            }

        }

    },


    /* =========================================
       TEMPERATURE
    ========================================== */

    temperature: {

        name: "Temperature",

        icon: "🌡️",

        description:
            "Convert Celsius, Fahrenheit and Kelvin.",

        base: "celsius",

        units: {

            celsius: {
                name: "Celsius",
                symbol: "°C"
            },

            fahrenheit: {
                name: "Fahrenheit",
                symbol: "°F"
            },

            kelvin: {
                name: "Kelvin",
                symbol: "K"
            }

        }

    },


    /* =========================================
       TIME
    ========================================== */

    time: {

        name: "Time",

        icon: "⏱️",

        description:
            "Convert seconds, minutes, hours and larger time units.",

        base: "second",

        units: {

            millisecond: {
                name: "Millisecond",
                symbol: "ms",
                factor: 0.001
            },

            second: {
                name: "Second",
                symbol: "s",
                factor: 1
            },

            minute: {
                name: "Minute",
                symbol: "min",
                factor: 60
            },

            hour: {
                name: "Hour",
                symbol: "hr",
                factor: 3600
            },

            day: {
                name: "Day",
                symbol: "day",
                factor: 86400
            },

            week: {
                name: "Week",
                symbol: "week",
                factor: 604800
            },

            month: {
                name: "Month",
                symbol: "month",
                factor: 2629800
            },

            year: {
                name: "Year",
                symbol: "year",
                factor: 31557600
            }

        }

    },


    /* =========================================
       AREA
    ========================================== */

    area: {

        name: "Area",

        icon: "📐",

        description:
            "Convert land, surface and geometric areas.",

        base: "squareMeter",

        units: {

            squareMeter: {
                name: "Square Meter",
                symbol: "m²",
                factor: 1
            },

            squareKilometer: {
                name: "Square Kilometer",
                symbol: "km²",
                factor: 1000000
            },

            squareCentimeter: {
                name: "Square Centimeter",
                symbol: "cm²",
                factor: 0.0001
            },

            squareMillimeter: {
                name: "Square Millimeter",
                symbol: "mm²",
                factor: 0.000001
            },

            squareMile: {
                name: "Square Mile",
                symbol: "mi²",
                factor: 2589988.110336
            },

            squareYard: {
                name: "Square Yard",
                symbol: "yd²",
                factor: 0.83612736
            },

            squareFoot: {
                name: "Square Foot",
                symbol: "ft²",
                factor: 0.09290304
            },

            squareInch: {
                name: "Square Inch",
                symbol: "in²",
                factor: 0.00064516
            },

            acre: {
                name: "Acre",
                symbol: "acre",
                factor: 4046.8564224
            },

            hectare: {
                name: "Hectare",
                symbol: "ha",
                factor: 10000
            }

        }

    },


    /* =========================================
       VOLUME
    ========================================== */

    volume: {

        name: "Volume",

        icon: "🧪",

        description:
            "Convert liquid and three-dimensional volume measurements.",

        base: "liter",

        units: {

            liter: {
                name: "Liter",
                symbol: "L",
                factor: 1
            },

            milliliter: {
                name: "Milliliter",
                symbol: "mL",
                factor: 0.001
            },

            cubicMeter: {
                name: "Cubic Meter",
                symbol: "m³",
                factor: 1000
            },

            cubicCentimeter: {
                name: "Cubic Centimeter",
                symbol: "cm³",
                factor: 0.001
            },

            cubicInch: {
                name: "Cubic Inch",
                symbol: "in³",
                factor: 0.016387064
            },

            cubicFoot: {
                name: "Cubic Foot",
                symbol: "ft³",
                factor: 28.316846592
            },

            gallon: {
                name: "Gallon",
                symbol: "gal",
                factor: 3.785411784
            },

            quart: {
                name: "Quart",
                symbol: "qt",
                factor: 0.946352946
            },

            pint: {
                name: "Pint",
                symbol: "pt",
                factor: 0.473176473
            },

            cup: {
                name: "Cup",
                symbol: "cup",
                factor: 0.2365882365
            }

        }

    },


    /* =========================================
       SPEED
    ========================================== */

    speed: {

        name: "Speed",

        icon: "🚀",

        description:
            "Convert speed and velocity measurements.",

        base: "meterPerSecond",

        units: {

            meterPerSecond: {
                name: "Meter / Second",
                symbol: "m/s",
                factor: 1
            },

            kilometerPerHour: {
                name: "Kilometer / Hour",
                symbol: "km/h",
                factor: 0.2777777778
            },

            milePerHour: {
                name: "Mile / Hour",
                symbol: "mph",
                factor: 0.44704
            },

            footPerSecond: {
                name: "Foot / Second",
                symbol: "ft/s",
                factor: 0.3048
            },

            knot: {
                name: "Knot",
                symbol: "kn",
                factor: 0.5144444444
            },

            mach: {
                name: "Mach",
                symbol: "Mach",
                factor: 343
            }

        }

    },


    /* =========================================
       DIGITAL DATA
    ========================================== */

    data: {

        name: "Digital Data",

        icon: "💾",

        description:
            "Convert digital storage and data sizes.",

        base: "bit",

        units: {

            bit: {
                name: "Bit",
                symbol: "bit",
                factor: 1
            },

            byte: {
                name: "Byte",
                symbol: "B",
                factor: 8
            },

            kilobit: {
                name: "Kilobit",
                symbol: "Kbit",
                factor: 8 * 1024
            },

            kilobyte: {
                name: "Kilobyte",
                symbol: "KB",
                factor: 8 * 1024
            },

            megabit: {
                name: "Megabit",
                symbol: "Mbit",
                factor: 8 * 1024 ** 2
            },

            megabyte: {
                name: "Megabyte",
                symbol: "MB",
                factor: 8 * 1024 ** 2
            },

            gigabit: {
                name: "Gigabit",
                symbol: "Gbit",
                factor: 8 * 1024 ** 3
            },

            gigabyte: {
                name: "Gigabyte",
                symbol: "GB",
                factor: 8 * 1024 ** 3
            },

            terabit: {
                name: "Terabit",
                symbol: "Tbit",
                factor: 8 * 1024 ** 4
            },

            terabyte: {
                name: "Terabyte",
                symbol: "TB",
                factor: 8 * 1024 ** 4
            }

        }

    }

};