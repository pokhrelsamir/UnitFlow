/* =========================================
   UnitFlow
   Unit Definitions
========================================= */

const UNIT_DATA = {

    length: {
        name: "Length",
        icon: "📏",

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
            }

        }
    },


    mass: {
        name: "Mass",
        icon: "⚖️",

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

            pound: {
                name: "Pound",
                symbol: "lb",
                factor: 0.45359237
            },

            ounce: {
                name: "Ounce",
                symbol: "oz",
                factor: 0.028349523125
            }

        }
    },


    temperature: {
        name: "Temperature",
        icon: "🌡️",

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


    time: {
        name: "Time",
        icon: "⏱️",

        units: {

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
            }

        }
    },


    area: {
        name: "Area",
        icon: "📐",

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


    volume: {
        name: "Volume",
        icon: "🧪",

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

            cubicMeter: {
                name: "Cubic Meter",
                symbol: "m³",
                factor: 1000
            }

        }
    },


    speed: {
        name: "Speed",
        icon: "🚀",

        units: {

            meterPerSecond: {
                name: "Meter / Second",
                symbol: "m/s",
                factor: 1
            },

            kilometerPerHour: {
                name: "Kilometer / Hour",
                symbol: "km/h",
                factor: 0.277777778
            },

            milePerHour: {
                name: "Mile / Hour",
                symbol: "mph",
                factor: 0.44704
            },

            knot: {
                name: "Knot",
                symbol: "kn",
                factor: 0.514444444
            }

        }
    },


    data: {
        name: "Digital Data",
        icon: "💾",

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

            kilobyte: {
                name: "Kilobyte",
                symbol: "KB",
                factor: 8 * 1024
            },

            megabyte: {
                name: "Megabyte",
                symbol: "MB",
                factor: 8 * 1024 ** 2
            },

            gigabyte: {
                name: "Gigabyte",
                symbol: "GB",
                factor: 8 * 1024 ** 3
            },

            terabyte: {
                name: "Terabyte",
                symbol: "TB",
                factor: 8 * 1024 ** 4
            }

        }
    }

};