var moment = require('moment');

var today = moment("2017.07.16","YYYY.MM.DD");

today.add(1,"d");

console.log(today.format("YYYY-MM-DD"));

var Animal = {
  type: "Invertebrates", // Default value of properties
  displayType : function() {  // Method which will display type of Animal
    console.log(this.type);
  }
}

var x = Object.create(Animal);

console.log(x.type);



var rooms = {
    SU01: {
        enabled: true,
        pool: "luxus",
        ics_lnk : "https://www.lodgit.com/ics/N8EPR-39734-1WG3T-E4VVP-77V5L-NKPN4-JC/HL99M-94B2L-8QFYS-2CMX6-4DQBS-D60TD-4X.ics",
        ics_txt : "",
    },
    SU02: {
        enabled: true,
        pool: "luxus",
        ics_lnk : "https://www.lodgit.com/ics/N8EPR-39734-1WG3T-E4VVP-77V5L-NKPN4-JC/MWNJ5-175D7-S4CER-XA1T7-WHCTH-E7WK6-5X.ics",
        ics_txt : "",
    },
    SU03: {
        enabled: true,
        pool: "luxus",
        ics_lnk : "https://www.lodgit.com/ics/N8EPR-39734-1WG3T-E4VVP-77V5L-NKPN4-JC/JWMYC-PX3AZ-4VGDP-HAG8A-05F1G-6205G-3V.ics",
        ics_txt : "",
    },
    SU11: {
        enabled: true,
        pool: "comfort",
        ics_lnk : "https://www.lodgit.com/ics/N8EPR-39734-1WG3T-E4VVP-77V5L-NKPN4-JC/PU3J6-U785Z-0V8ZY-WEM6C-4JMU4-GGL1H-KD.ics",
        ics_txt : "",
    },
    SU12: {
        enabled: true,
        pool: "comfort",
        ics_lnk : "https://www.lodgit.com/ics/N8EPR-39734-1WG3T-E4VVP-77V5L-NKPN4-JC/F8F3X-2DUUN-AXNGD-JD4EB-RN8BM-BLM32-ZR.ics",
        ics_txt : "",
    },
    SU13: {
        enabled: true,
        pool: "luxus",
        ics_lnk : "https://www.lodgit.com/ics/N8EPR-39734-1WG3T-E4VVP-77V5L-NKPN4-JC/Z0K7W-SFV31-7E827-13LGS-AX0PH-Y3GC8-JB.ics",
        ics_txt : "",
    },
    SU14: {
        enabled: true,
        pool: "luxus",
        ics_lnk : "https://www.lodgit.com/ics/N8EPR-39734-1WG3T-E4VVP-77V5L-NKPN4-JC/P6619-0SG5L-860WG-G6SM0-GPSTY-WBGS2-G0.ics",
        ics_txt : "",
    },
    SU15: {
        enabled: false,
        pool: "",
        ics_lnk : "no ics link - no online module",
        ics_txt : "",
    },
    SU21: {
        enabled: true,
        pool: "luxus2sz",
        ics_lnk : "https://www.lodgit.com/ics/N8EPR-39734-1WG3T-E4VVP-77V5L-NKPN4-JC/D5GM7-366FW-LFWD3-BTBGT-70Z2Z-NXSH9-C6.ics",
        ics_txt : "",
    },
    SU22: {
        enabled: true,
        pool: "luxus2sz",
        ics_lnk : "https://www.lodgit.com/ics/N8EPR-39734-1WG3T-E4VVP-77V5L-NKPN4-JC/DKA8R-SRHE0-T6U25-U87VN-SFYQU-M2T02-E8.ics",
        ics_txt : "",
    },
    SU23: {
        enabled: true,
        pool: "luxus",
        ics_lnk : "https://www.lodgit.com/ics/N8EPR-39734-1WG3T-E4VVP-77V5L-NKPN4-JC/E8K42-3V44X-DB76T-B5VWA-XFCQ0-3VXMP-03.ics",
        ics_txt : "",
        12: 15,
        13.2: {},
    }
};

var toType = function(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

for (props in rooms){
    console.log(props);
    for (p in rooms[props]){
        var tmp = rooms[props];
        console.log("  " + p + " " + toType(rooms[props][p]));
    }
}

