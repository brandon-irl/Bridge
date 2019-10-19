Bridge.merge(new System.Globalization.CultureInfo("quc", true), {
    englishName: "K'iche'",
    nativeName: "K'iche'",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NeuN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-Infinito",
        positiveInfinitySymbol: "Infinito",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "Q",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 1,
        currencyPositivePattern: 0,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["juq'","kaq'","oxq'","kajq'","joq'","waqq'","wuqq'"],
        abbreviatedMonthGenitiveNames: ["nab'e","ukab'","urox","ukaj","uro","uwaq","uwuq","uwajxaq","ub'elej","ulaj","ujulaj","ukab'laj",""],
        abbreviatedMonthNames: ["nab'e","ukab'","urox","ukaj","uro","uwaq","uwuq","uwajxaq","ub'elej","ulaj","ujulaj","ukab'laj",""],
        amDesignator: "a.m.",
        dateSeparator: "/",
        dayNames: ["juq'ij","kaq'ij","oxq'ij","kajq'ij","joq'ij","waqq'ij","wuqq'ij"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, dd' rech 'MMMM' rech 'yyyy h:mm:ss tt",
        longDatePattern: "dddd, dd' rech 'MMMM' rech 'yyyy",
        longTimePattern: "h:mm:ss tt",
        monthDayPattern: "d' rech 'MMMM",
        monthGenitiveNames: ["nab'e ik'","ukab' ik'","urox ik'","ukaj ik'","uro ik'","uwaq ik'","uwuq ik'","uwajxaq ik'","ub'elej ik'","ulaj ik'","ujulaj ik'","ukab'laj ik'",""],
        monthNames: ["nab'e ik'","ukab' ik'","urox ik'","ukaj ik'","uro ik'","uwaq ik'","uwuq ik'","uwajxaq ik'","ub'elej ik'","ulaj ik'","ujulaj ik'","ukab'laj ik'",""],
        pmDesignator: "p.m.",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["ju","ka","ox","kj","jo","wa","wu"],
        shortTimePattern: "h:mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM' rech 'yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    }),

    TextInfo: Bridge.merge(new System.Globalization.TextInfo(), {
        ANSICodePage: 1252,
        CultureName: "quc-Latn-GT",
        EBCDICCodePage: 20284,
        IsRightToLeft: false,
        LCID: 1158,
        listSeparator: ",",
        MacCodePage: 10000,
        OEMCodePage: 850,
        IsReadOnly: true
    })
});
