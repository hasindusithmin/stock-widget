
document.getElementById('myInput').ondblclick = () => {
    document.getElementById('myInput').value = null
}
const markets = { 'Apple Inc': 'AAPL', 'Airbnb, Inc': 'ABNB', 'Adobe Inc': 'ADBE', 'Analog Devices, Inc': 'ADI', 'Automatic Data Processing, Inc': 'ADP', 'Autodesk, Inc': 'ADSK', 'American Electric Power Company, Inc': 'AEP', 'Align Technology, Inc': 'ALGN', 'Applied Materials, Inc': 'AMAT', 'Advanced Micro Devices, Inc': 'AMD', 'Amgen Inc': 'AMGN', 'Amazon': 'AMZN', 'ANSYS, Inc': 'ANSS', 'ASML Holding N': 'ASML', 'Activision Blizzard, Inc': 'ATVI', 'Broadcom Inc': 'AVGO', 'AstraZeneca PLC American Depositary Shares': 'AZN', 'Baidu, Inc': 'BIDU', 'Biogen Inc': 'BIIB', 'Booking Holdings Inc': 'BKNG', 'Cadence Design Systems, Inc': 'CDNS', 'Constellation Energy Corporation Common Stock': 'CEG', 'Charter Communications, Inc': 'CHTR', 'Comcast Corporation Class A Common Stock': 'CMCSA', 'Costco Wholesale Corporation Common Stock': 'COST', 'Copart, Inc': 'CPRT', 'CrowdStrike Holdings, Inc': 'CRWD', 'Cisco Systems, Inc': 'CSCO', 'CSX Corporation Common Stock': 'CSX', 'Cintas Corporation Common Stock': 'CTAS', 'Cognizant Technology Solutions Corporation Class A Common Stock': 'CTSH', 'Datadog, Inc': 'DDOG', 'Dollar Tree Inc': 'DLTR', 'DocuSign, Inc': 'DOCU', 'DexCom, Inc': 'DXCM', 'Electronic Arts Inc': 'EA', 'eBay Inc': 'EBAY', 'Exelon Corporation Common Stock': 'EXC', 'Fastenal Company Common Stock': 'FAST', 'Fiserv, Inc': 'FISV', 'Fortinet, Inc': 'FTNT', 'Gilead Sciences, Inc': 'GILD', 'Alphabet Inc': 'GOOGL', 'Honeywell International Inc': 'HON', 'IDEXX Laboratories, Inc': 'IDXX', 'Illumina, Inc': 'ILMN', 'Intel Corporation Common Stock': 'INTC', 'Intuit Inc': 'INTU', 'Intuitive Surgical, Inc': 'ISRG', 'JD': 'JD', 'Keurig Dr Pepper Inc': 'KDP', 'The Kraft Heinz Company Common Stock': 'KHC', 'KLA Corporation Common Stock': 'KLAC', 'Lucid Group, Inc': 'LCID', 'Lam Research Corporation Common Stock': 'LRCX', 'lululemon athletica inc': 'LULU', 'Marriott International Class A Common Stock': 'MAR', 'Microchip Technology Incorporated Common Stock': 'MCHP', 'Mondelez International, Inc': 'MDLZ', 'MercadoLibre, Inc': 'MELI', 'Meta Platforms, Inc': 'META', 'Monster Beverage Corporation': 'MNST', 'Moderna, Inc': 'MRNA', 'Marvell Technology, Inc': 'MRVL', 'Microsoft Corporation Common Stock': 'MSFT', 'Match Group, Inc': 'MTCH', 'Micron Technology, Inc': 'MU', 'Netflix, Inc': 'NFLX', 'NetEase, Inc': 'NTES', 'NVIDIA Corporation Common Stock': 'NVDA', 'NXP Semiconductors N': 'NXPI', 'Old Dominion Freight Line, Inc': 'ODFL', 'Okta, Inc': 'OKTA', "O'Reilly Automotive, Inc": 'ORLY', 'Palo Alto Networks, Inc': 'PANW', 'Paychex, Inc': 'PAYX', 'PACCAR Inc': 'PCAR', 'Pinduoduo Inc': 'PDD', 'PepsiCo, Inc': 'PEP', 'PayPal Holdings, Inc': 'PYPL', 'QUALCOMM Incorporated Common Stock': 'QCOM', 'Regeneron Pharmaceuticals, Inc': 'REGN', 'Ross Stores, Inc': 'ROST', 'Starbucks Corporation Common Stock': 'SBUX', 'Seagen Inc': 'SGEN', 'Sirius XM Holdings Inc': 'SIRI', 'Synopsys, Inc': 'SNPS', 'Splunk Inc': 'SPLK', 'Skyworks Solutions, Inc': 'SWKS', 'Atlassian Corporation Plc Class A Ordinary Shares': 'TEAM', 'T-Mobile US, Inc': 'TMUS', 'Tesla, Inc': 'TSLA', 'Texas Instruments Incorporated Common Stock': 'TXN', 'Verisk Analytics, Inc': 'VRSK', 'VeriSign, Inc': 'VRSN', 'Vertex Pharmaceuticals Incorporated Common Stock': 'VRTX', 'Walgreens Boots Alliance, Inc': 'WBA', 'Workday, Inc': 'WDAY', 'Xcel Energy Inc': 'XEL', 'Zoom Video Communications, Inc': 'ZM', 'Zscaler, Inc': 'ZS' }
document.querySelector('form').onsubmit = e => {
    e.preventDefault()
    if (document.getElementById('myscript')) document.getElementById('stock-widget').removeChild(document.getElementById('myscript'))
    const market = e.target.market.value;
    const symbol = markets[market]
    const script = document.createElement('script')
    script.async = true
    script.id = 'myscript'
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js'
    script.innerText = JSON.stringify({ "symbol": `NASDAQ:${symbol}`, "width": 480, "height": 650, "colorTheme": "light", "isTransparent": true, "locale": "in" })
    document.getElementById('stock-widget').appendChild(script)
}
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}
const symbols = ['Apple Inc', 'Airbnb, Inc', 'Adobe Inc', 'Analog Devices, Inc', 'Automatic Data Processing, Inc', 'Autodesk, Inc', 'American Electric Power Company, Inc', 'Align Technology, Inc', 'Applied Materials, Inc', 'Advanced Micro Devices, Inc', 'Amgen Inc', 'Amazon', 'ANSYS, Inc', 'ASML Holding N', 'Activision Blizzard, Inc', 'Broadcom Inc', 'AstraZeneca PLC American Depositary Shares', 'Baidu, Inc', 'Biogen Inc', 'Booking Holdings Inc', 'Cadence Design Systems, Inc', 'Constellation Energy Corporation Common Stock', 'Charter Communications, Inc', 'Comcast Corporation Class A Common Stock', 'Costco Wholesale Corporation Common Stock', 'Copart, Inc', 'CrowdStrike Holdings, Inc', 'Cisco Systems, Inc', 'CSX Corporation Common Stock', 'Cintas Corporation Common Stock', 'Cognizant Technology Solutions Corporation Class A Common Stock', 'Datadog, Inc', 'Dollar Tree Inc', 'DocuSign, Inc', 'DexCom, Inc', 'Electronic Arts Inc', 'eBay Inc', 'Exelon Corporation Common Stock', 'Fastenal Company Common Stock', 'Fiserv, Inc', 'Fortinet, Inc', 'Gilead Sciences, Inc', 'Alphabet Inc', 'Alphabet Inc', 'Honeywell International Inc', 'IDEXX Laboratories, Inc', 'Illumina, Inc', 'Intel Corporation Common Stock', 'Intuit Inc', 'Intuitive Surgical, Inc', 'JD', 'Keurig Dr Pepper Inc', 'The Kraft Heinz Company Common Stock', 'KLA Corporation Common Stock', 'Lucid Group, Inc', 'Lam Research Corporation Common Stock', 'lululemon athletica inc', 'Marriott International Class A Common Stock', 'Microchip Technology Incorporated Common Stock', 'Mondelez International, Inc', 'MercadoLibre, Inc', 'Meta Platforms, Inc', 'Monster Beverage Corporation', 'Moderna, Inc', 'Marvell Technology, Inc', 'Microsoft Corporation Common Stock', 'Match Group, Inc', 'Micron Technology, Inc', 'Netflix, Inc', 'NetEase, Inc', 'NVIDIA Corporation Common Stock', 'NXP Semiconductors N', 'Old Dominion Freight Line, Inc', 'Okta, Inc', "O'Reilly Automotive, Inc", 'Palo Alto Networks, Inc', 'Paychex, Inc', 'PACCAR Inc', 'Pinduoduo Inc', 'PepsiCo, Inc', 'PayPal Holdings, Inc', 'QUALCOMM Incorporated Common Stock', 'Regeneron Pharmaceuticals, Inc', 'Ross Stores, Inc', 'Starbucks Corporation Common Stock', 'Seagen Inc', 'Sirius XM Holdings Inc', 'Synopsys, Inc', 'Splunk Inc', 'Skyworks Solutions, Inc', 'Atlassian Corporation Plc Class A Ordinary Shares', 'T-Mobile US, Inc', 'Tesla, Inc', 'Texas Instruments Incorporated Common Stock', 'Verisk Analytics, Inc', 'VeriSign, Inc', 'Vertex Pharmaceuticals Incorporated Common Stock', 'Walgreens Boots Alliance, Inc', 'Workday, Inc', 'Xcel Energy Inc', 'Zoom Video Communications, Inc', 'Zscaler, Inc']
autocomplete(document.getElementById("myInput"), symbols);
