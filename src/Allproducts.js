 const data = [
    {
        id : "1" ,
        img : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81JoZeM2V2L._AC_SL1500_.jpg" ,
        title : "Sony OLED 55 inch BRAVIA XR A80K Series 4K Ultra HD TV: Smart Google TV with Dolby Vision HDR and Exclusive Features for The Playstation® 5 XR55A80K- 2022 Model",
        rating : 4.5 , 
        raters : "2,500",
        categories : [2],
        details : [
            {title : "Screen Size" , info : "55 Inches"},  {title : "Brand" , info : "Sony"},  {title : "Display Technology" , info : "OLED"},
            {title : "Resolution" , info : "4K"},  {title : "Refresh Rate" , info : "120 Hz"} , {title :"Model Name	" , info :"XR55A80K"}, {title : "Connectivity Technology" , info : "Bluetooth, Wi-Fi, USB, Ethernet, HDMI            "}
        ]

    }
    ,
    {
        id : "2" ,
        img : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81PBYPDRP9L._AC_SL1500_.jpg",
        title : "Sony 65 Inch 4K Ultra HD TV X85K Series: LED Smart Google TV with Dolby Vision HDR and Native 120HZ Refresh Rate KD65X85K- 2022 Model",
        rating : 4.5 ,  
        raters : "4,500",
        categories : [2],
        details : [
            { title : "Screen Size" , info : "65 Inches "} , {title : "Brand" , info : "Sony"} , {title : "Display Technology" , info : "LCD"} , 
            {title : "Resolution" , info : "4K"} , {title : "Refresh Rate" , info : "120 Hz"} , {title : "Model Name" , info : "KD65X85K"} , 
            {title : "Connectivity Technology" , info : "Bluetooth, Wi-Fi, USB, HDMI" }
        
        
        ]
    }
    ,
    {
        id : "3" ,
        img : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71LJJrKbezL._AC_SL1500_.jpg",
        title : "SAMSUNG 85-Inch Class Crystal 4K UHD AU8000 Series HDR, 3 HDMI Ports, Motion Xcelerator, Tap View, PC on TV, Q Symphony, Smart TV with Alexa Built-In (UN85AU8000FXZA, 2021 Model)",
        rating : 4.6 ,  
        raters : "5,500",
        categories : [2],
        details : [
            { title : "Screen Size" , info : "85 Inches "} , {title : "Brand" , info : "SAMSUNG"} , {title : "Display Technology" , info : "LED"} , 
            {title : "Resolution" , info : "4K"} , {title : "Refresh Rate" , info : "60 Hz"} , {title : "Model Name" , info : "LED UHD 8 Series"} , 
            {title : "Connectivity Technology" , info : "Wi-Fi, HDMI" }
        
        
        ]

    }
    ,
    {
        id : "4" ,
        img : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71mTUwgs9hL._AC_SL1500_.jpg",
        title : "TCL 32-inch Class 3-Series HD LED Smart Android TV - 32S334, 2021 Model",
        rating : 3 , 
        raters : "1,500", 
        details : [
            { title : "Screen Size" , info : "32 Inches "} , {title : "Brand" , info : "TCL"} , {title : "Display Technology" , info : "LED"} , 
            {title : "Resolution" , info : "720p"} , {title : "Refresh Rate" , info : "60 Hz"} , {title : "Model Name" , info : "LED UHD 8 Series"} , 
            {title : "Connectivity Technology" , info : "Bluetooth, Wi-Fi, USB, Ethernet, HDMI" }
        
        
        ]

    }
    ,
    {
        id : "5" ,
        img : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71waplSVO7L._AC_UY218_.jpg",
        fullImg : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71waplSVO7L._AC_SX466_.jpg",
        title : "Razer BlackShark V2 X Gaming Headset",
        fullName : "Razer BlackShark V2 X Gaming Headset: 7.1 Surround Sound - 50mm Drivers - Memory Foam Cushion - for PC, PS4, PS5, Switch, Xbox One, Xbox Series X|S, Mobile - 3.5mm Audio Jack - Black",
        price : 48.99 ,
        sale : 3 , 
        available : true ,
        left : 3 ,
        categories : [0 , 5 , 9],
        rating : 4 , 
        raters : "12,500", 
        details : [
            { title : "Brand" , info : "Razer"} , {title : "Model Name" , info : "BlackShark V2 X "} , {title : "Color" , info : "Classic Black"} , 
            {title : "Connectivity Technology" , info : "Wired"}  ]

    },
    {
        id : "6" ,
        img : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61VghmSX6UL._AC_UY218_.jpg",
        fullImg : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61VghmSX6UL._SX385_.jpg",
        title : "Turtle Beach Stealth 600 Gen 2",
        fullName : "Turtle Beach Stealth 600 Gen 2 Wireless Gaming Headset for PS5, PS4, PS4 Pro, PlayStation, & Nintendo Switch with 50mm Speakers, 15-Hour Battery life, Flip-to-Mute Mic, and Spatial Audio - Black",
        price : 99.95 ,
        sale : 35.45 , 
        available : true ,
        left : 5 ,
        categories : [0 , 5 , 9 ],
        rating : 5 , 
        raters : "16,200", 
        details : [
            { title : "Brand" , info : "Turtle Beach "} , {title : "Model Name" , info : "Stealth 600"} , {title : "Color" , info : "Black"} , 
            {title : "Connectivity Technology" , info : "Wireless"}  ]

    },
    {
        id : "7" ,
        img : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71At06eEMZL._AC_UY218_.jpg",
        fullImg : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71At06eEMZL._AC_SX466_.jpg",
        title : "ASUS ROG Strix Go 2.4",
        fullName : "ASUS ROG Strix Go 2.4 Wireless Gaming Headset with USB-C 2.4 GHz Adapter | Ai Powered Noise-Cancelling Microphone | Over-ear Headphones for PC, Mac, Nintendo Switch, and PS5/4",
        price : 146.99 ,
        sale : 53.00  , 
        available : true ,
        left : 4 ,
        categories : [0 , 5 , 9],
        rating : 5 , 
        raters : "350", 
        details : [
            { title : "Brand" , info : "ASUS"} , {title : "Model Name" , info : "ROG STRIX GO 2.4"} , {title : "Color" , info : "Mate Black"} , 
            {title : "Connectivity Technology" , info : "Bluetooth, RF, Wired"}  ]

    },
    {
        id : "8" ,
        img : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71tDhEbyPRL._AC_UY218_.jpg",
        fullImg : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71tDhEbyPRL._AC_SX466_.jpg",
        title : "Razer Ornata Chroma Gaming Keyboard",
        fullName : "Razer Ornata Chroma Gaming Keyboard: Hybrid Mechanical Key Switches - Customizable Chroma RGB Lighting - Individually Backlit Keys - Detachable Plush Wrist Rest - Programmable Macro Functionality",
        price : 99.99 ,
        sale : 49.99  , 
        available : true ,
        left : 4 ,
        categories : [1 , 5 , 9],
        rating : 4 , 
        raters : "1,150", 
        details : [
            { title : "Brand" , info : "Razer"} , {title : "Compatible Devices" , info : "PC"} ,{title : "Connectivity Technology" , info : "Wired - Attached"}  ]

    },
    {
        id : "9" ,
        img : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/811-0kItnvL._AC_UY218_.jpg",
        fullImg : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/811-0kItnvL._AC_SX679_.jpg",
        title : "SteelSeries Apex Pro",
        fullName : "SteelSeries Apex Pro TKL Mechanical Gaming Keyboard – World’s Fastest Mechanical Switches – OLED Smart Display – Compact Form Factor – RGB Backlit",
        price : 147.05 ,
        sale : 32.94  , 
        available : true ,
        left : 2 ,
        categories : [1 , 5 , 9],
        rating : 4 , 
        raters : "2,350", 
        details : [
            { title : "Brand" , info : "SteelSeries"} , {title : "Compatible Devices" , info : "Windows, Mac OS X, Xbox, and PlayStation"} , {title : "Color" , info : "RGB Backlit"} 
            ,  {title : "Special Feature	" , info : "Lighting"} ,   {title : "Connectivity Technology" , info : "USB"}   ]

    },
    {
        id : "10" ,
        img : "https://m.media-amazon.com/images/I/71mzcD2N9iL._AC_UY218_.jpg",
        fullImg : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71mzcD2N9iL._AC_SX679_.jpg",
        title : "Fiodio Mechanical Gaming Keyboard",
        fullName : "Fiodio Mechanical Gaming Keyboard, Fantastic LED Rainbow Backlit Wired Keyboard, Full Anti-Ghosting Keys, with Quick-Response Blue Switches and Multimedia Control for PC and Desktop Computer",
        price : 127.15 ,
        sale : 32.94  , 
        available : false ,
        left : 0 ,
        categories : [1 , 5 , 9],
        rating : 3.2 , 
        raters : "300", 
        details : [
            { title : "Brand" , info : "Fiodio"} , {title : "Compatible Devices" , info : "Laptop, PC"} , {title : "Color" , info : "Mechanical-Rainbow Light"} 
            ,  {title : "Special Feature" , info : "Lighting"} ,   {title : "Connectivity Technology" , info : "Wired-Rainow "}   ]

    },
    {
        id : "11" ,
        img : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/8189uwDnMkL._AC_UY218_.jpg",
        fullImg : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/8189uwDnMkL._AC_SX679_.jpg",
        title : "Razer DeathAdder Essential Gaming Mouse",
        fullName : "Razer DeathAdder Essential Gaming Mouse: 6400 DPI Optical Sensor - 5 Programmable Buttons - Mechanical Switches - Rubber Side Grips - Classic Black",
        price : 29.99 ,
        sale : 11.50   , 
        available : true ,
        left : 10 ,
        categories : [3 , 5 , 9],
        rating : 4 , 
        raters : "1,300", 
        details : [
            { title : "Brand" , info : "Razer"} , {title : "Compatible Devices" , info : "Laptop, PC"} , {title : "Color" , info : "Mechanical-Rainbow Light"} 
            ,  {title : "Special Feature" , info : "Lightweight"} ,   {title : "Connectivity Technology" , info : "USB"} , {title : "Movement Detection Technology" , info : "Optical"}    ]

    },
    {
        id : "12" ,
        img : "https://m.media-amazon.com/images/I/71jZuFKq3pL._AC_UY218_.jpg",
        fullImg : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71jZuFKq3pL._AC_SX679_.jpg",
        title : "ROCCAT Kone XP PC Gaming Mouse",
        fullName : "ROCCAT Kone XP PC Gaming Mouse with 3D AIMO RGB Lighting, 19K DPI Optical Sensor, 4D Krystal Scroll Wheel, Multi-Button Design, Wired Computer Mouse - White",
        price : 39.99 ,
        sale : 10.50   , 
        available : false ,
        left : 0 ,
        categories : [3 , 5 , 9],
        rating : 4 , 
        raters : "650", 
        details : [
            { title : "Brand" , info : "ROCCAT"} , {title : "Compatible Devices" , info : "Laptop, PC"} , {title : "Color" , info : "White"} 
            ,  {title : "Special Feature" , info : "Lightweight"} ,   {title : "Connectivity Technology" , info : "USB"} , {title : "Movement Detection Technology" , info : "Optical"}    ]

    },
    {
        id : "13" ,
        img : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81ZgG6eJeCL._AC_UY218_.jpg",
        fullImg : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81ZgG6eJeCL._AC_SX679_.jpg",
        title : "MSI Clutch GM20 Elite Gaming Mouse",
        fullName : "MSI Clutch GM20 Elite Gaming Mouse, 6400 DPI, 20M+ Clicks OMRON Switch, Optical Sensor, Adjustable Weights, Ergonomic Right Hand Design, RGB Mystic Light",
        price : 39.99 ,
        sale : 5.00    , 
        available : true ,
        left : 7 ,
        categories : [3 , 5 , 9],
        rating : 4.7 , 
        raters : "2,057", 
        details : [
            { title : "Brand" , info : "MSI"} , {title : "Compatible Devices" , info : "Laptop, PC"} , {title : "Color" , info : "Black"} 
            ,  {title : "Special Feature" , info : "Ergonomic Design"} ,   {title : "Connectivity Technology" , info : "USB"} , {title : "Movement Detection Technology" , info : "Optical"}    ]

    },
    {
        id : "14" ,
        img : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61q4U4RRkCL._AC_UL320_.jpg",
        fullImg : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61q4U4RRkCL._AC_SX679_.jpg",
        title : "Gaming Office Chair",
        fullName : "Gaming Office Chair - Ergonomic Executive Swivel Computer Desk Chair, High Back Adjustable Task Chair with Flip-up Armrests and Lumbar Support for Working, Studying, Gaming",
        price : 120.99 ,
        sale : 30.00    , 
        available : true ,
        left : 13 ,
        categories : [4 , 5 , 9],
        rating : 4.3 , 
        raters : "210", 
        details : [
            { title : "Brand" , info : "OLIXIS"} ,  {title : "Color" , info : "Black"} 
            ,  {title : "Special Feature" , info : "adjustable"} ,   {title : "Product Dimensions" , info : '19"D x 22"W x 46"H'}    ]

    },
    {
        id : "15" ,
        img : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51dpnoMTEKL._AC_UL320_.jpg",
        fullImg : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51dpnoMTEKL._AC_SX679_.jpg",
        title : "RESPAWN RSP-900",
        fullName : "RESPAWN RSP-900 Racing Style, Reclining Gaming Chair",
        price : 100.99 ,
        sale : 10.00    , 
        available : false ,
        left : 0 ,
        categories : [4 , 5 , 9],
        rating : 2 , 
        raters : "110", 
        details : [
            { title : "Brand" , info : "RESPAWN"} ,  {title : "Color" , info : "Red"} 
            ,  {title : "Special Feature" , info : "Arm Rest, Cup Holders, Foot Rest "} ,   {title : "Product Dimensions" , info : ' 35.04"D x 30.71"W x 44.88"H '}    ]

    },
    {
        id : "16" ,
        img : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71JTS2ofRFL._AC_UL320_.jpg",
        fullImg : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71JTS2ofRFL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        title : "Comfty RGB LED Reclining",
        fullName : "Comfty RGB LED Reclining Diamond Quilted Black Leather Racing Gaming Pillows & Remote Control Chairs, Multicolor",
        price : 150.99 ,
        sale : 40.00    , 
        available : true ,
        left : 7 ,
        categories : [4 , 5 , 9],
        rating : 5 , 
        raters : "1,110", 
        details : [
            { title : "Brand" , info : "Comfty"} ,  {title : "Color" , info : "Multi Color"} 
            ,  {title : "Special Feature" , info : "adjustable"} ,   {title : "Product Dimensions" , info : ' 26.77"D x 22.05"W x 49.21"H '}    ]

    },
    {
        id : "17" ,
        img : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51f9Neqx+NL._AC_UY218_.jpg",
        fullImg : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51f9Neqx+NL._AC_SX679_.jpg",
        title : "Kenmore DU5092 bagless",
        fullName : "Kenmore DU5092 bagless Upright Vacuum Carpet Cleaner 2-Motor Power Suction with Hair Eliminator brushroll, pet Handi-Mate, Wine W/Lift-up Design",
        price : 130.99 ,
        sale : 12.00    , 
        available : true ,
        left : 1 ,
        categories : [6 , 9 , 8 ],
        rating : 4.1 , 
        raters : "870", 
        details : [
            { title : "Brand" , info : "Kenmore"} ,  {title : "Color" , info : "Wine W/ Lift-up Design"} 
            ,  {title : "Special Feature" , info : "Bagless,lightweight upright vacuum with lift-up technology & Hair Eliminator brushroll"} ,   {title : "Form Factor" , info : "Bagless,lightweight upright vacuum with lift-up technology & Hair Eliminator brushroll"}    ]

    },
    {
        id : "18" ,
        img : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/617+GZRV+jL._AC_UY218_.jpg",
        fullImg : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/617+GZRV+jL._AC_SY879_.jpg",
        title : "Miele Classic C1",
        fullName : "Miele Classic C1 Pure Suction Bagged Canister Vacuum, Graphite Grey - Portable, Household",
        price : 90.99 ,
        sale : 3.00    , 
        available : true ,
        left : 6 ,
        categories : [6 , 9 , 8 ],
        rating : 4.4 , 
        raters : "17,500", 
        details : [
            { title : "Brand" , info : "Miele"} ,  {title : "Color" , info : "Graphite Grey"} 
            ,  {title : "Special Feature" , info : "Portable, Bag, Compact"} ,   {title : "Form Factor" , info : "Cannister"}    ]

    },
    {
        id : "19" ,
        img : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/719pUQCxnmL._AC_UL320_.jpg",
        fullImg : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/719pUQCxnmL._SX466_.jpg",
        title : "Waterpik Aquarius Water Flosser",
        fullName : "Waterpik Aquarius Water Flosser Professional For Teeth, Gums, Braces, Dental Care, Electric Power With 10 Settings, 7 Tips For Multiple Users And Needs, ADA Accepted, White WP-660",
        price : 99.99 ,
        sale : 20.00   , 
        available : true ,
        left : 14 ,
        categories : [  9 , 8],
        rating : 5 , 
        raters : "30,500", 
        details : [
            { title : "Brand" , info : "Waterpik"} ,  {title : "Color" , info : "White"} 
            ,  {title : "Special Feature" , info : "10 Pressure Settings, 7 Water Flossing Tips, 90 Seconds of Water Capacity"} ,   {title : "Power Source" , info : "Corded Electric "}    ]

    },
    {
        id : "20" ,
        img : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71s0eqZ0i7L._AC_UL320_.jpg",
        fullImg : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71s0eqZ0i7L._SX466_.jpg",
        title : "Oral-B Pro 5000 ",
        fullName : "Oral-B Pro 5000 Smartseries Power Rechargeable Electric Toothbrush with Bluetooth Connectivity, White Edition",
        price : 99.99 ,
        sale : 0   , 
        available : true ,
        left : 11 ,
        categories : [7 , 9 , 8 ],
        rating : 3.9 , 
        raters : "1,500", 
        details : [
            { title : "Brand" , info : "Oral-B"} ,  {title : "Color" , info : "White"} 
            ,  {title : "Special Feature" , info : "Bluetooth, Deep Clean, Whitening, Sensitive, Travel Case"} ,   {title : "Power Source" , info : "Battery Powered"}    ]

    },
    {
        id : "21" ,
        img : "https://m.media-amazon.com/images/I/71yk2a3pXZL._AC_UL320_.jpg",
        fullImg : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71yk2a3pXZL._SX466_.jpg",
        title : "Braun Hair Clippers",
        fullName : "Braun Hair Clippers for Men, 9-in-1 Beard, Ear & Nose Trimmer, Body Grooming Kit, Cordless & Rechargeable with Gillette ProGlide Razor, Black/Blue, 9 Piece Set",
        price : 40.99 ,
        sale : 5.00   , 
        available : true ,
        left : 17 ,
        categories : [7 , 9 , 8 ],
        rating : 4.1 , 
        raters : "840", 
        details : [
            { title : "Brand" , info : "Braun"} ,  {title : "Color" , info : "Black/Blue"} 
            ,  {title : "Special Feature" , info : "Not-Applicable"} ,   {title : "Power Source" , info : "Battery Powered"}    ]

    },
    {
        id : "22" ,
        imgs_list : ["https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/17019/original/PaveDiamondSlimSignet_ring_yg_hero.jpg?1605794402","https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/13168/original/Pave_ring_gold_onfig1.jpg?1593469726","https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/13169/original/Pave_ring_gold_onfig2.jpg?1593469753","https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/13170/original/Pave_ring_gold_onfig3.jpg?1593469783"],
        img_second : "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/13168/original/Pave_ring_gold_onfig1.jpg?1593469726",
        img : "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/17019/original/PaveDiamondSlimSignet_ring_yg_hero.jpg?1605794402",
        fullImg : "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/17019/original/PaveDiamondSlimSignet_ring_yg_hero.jpg?1605794402",
        title : "Pavé Diamond Slim Signet",
        fullName : "Pavé Diamond Slim Signet",
        description_title: "You remember the Slim Signet, right? Meet the diamond version. A low commitment sparkler with major—and we mean major—payoff." ,
        description_info : ["Made in 14k solid gold, the alloy gives our pieces its beautiful, subtle hue.","Set with round single cut diamonds of sizes 0.7, 0.75, 0.8 & 0.9mm of Total Carat Weight 0.165 cts.","Band width 1.2 mm - 3.7 mm, thickness 1.2 mm."],
        price : 400 ,
        sizing_Available : [3,4,5,6,7,8,9,10],
        available : true ,
        categories : [50 ,51],
        rating : 4.9 , 
        raters : "840", 
        material : [
            { title : "14k Solid Gold" , info : "Our 14k solid gold pieces are made to last forever. 14k gold will not oxidize or discolor, so you can wear your jewelry every day."} ,
              {title : "Recycled Gold " , info : "We work with recycled gold to reduce our environmental impact, and conduct due diligence to ensure that the gold is certified recycled content from scrap or post-consumer sources."} 
            ,  {title : "Diamonds" , info : "Our diamonds are responsibly sourced from suppliers who follow conflict-free and socially responsible practices."} 
                ]
    },
    {
        id : "23" ,
        imgs_list : ["https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/22448/original/0_CroissantDome_Ring_V_Hero.jpg?1635201354","https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/22449/original/1_CroissantDomeRing_YG_Fair_HERO_0188.jpg?1635201366","https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/22450/original/2_CroissantDomeRing_V_Rich_Stack_0615.jpg?1635201377","https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/22451/original/3_CroissantDome_Ring_V_Front.jpg?1635201398"],
        img_second : "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/22449/original/1_CroissantDomeRing_YG_Fair_HERO_0188.jpg?1635201366",
        img :"https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/22448/original/0_CroissantDome_Ring_V_Hero.jpg?1635201354",
        fullImg : "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/22448/original/0_CroissantDome_Ring_V_Hero.jpg?1635201354",
        title : "Croissant Dôme Ring",
        fullName : "Croissant Dôme Ring",
        description_title: "Looking like a French girl isn’t as difficile as it seems. Handcrafted in vermeil, a thick 18k gold layer on sterling silver. Consider this croissant-inspired ring to make all your Parisian dreams come true." ,
        description_info : ["Made in gold vermeil: a thick 18k gold layer on sterling silver.","Band width: 3.0 - 9.15mm."],
        sizing_Available : [3,4,5,6,7,9,10],
        price : 78 ,
        available : false ,
        categories : [50 , 51],
        rating : 4.6 , 
        raters : "720", 
        material : [
            { title : "Gold Vermeil " , info : "Not to be confused with regular gold plating, our vermeil is a thick layer of 18k solid gold on sterling silver meaning it will last longer. You get the look & feel of gold jewelry at a fraction of the price."} 
                ]
    },
    {
        id : "24" ,
        imgs_list :["https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/18383/original/0_CroissantDomeHoops_earring_v_hero_comp.jpg?1635171067","https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/8618/original/2_CroissantDomeHoops_V_Fair_Stack_0065.jpg?1635171101","https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/16783/original/CroissantDomeHoops_earrings_v_hero2.jpg?1605793948","https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/8617/original/1_CroissantDomeHoops_V_Rich_HERO_0891.jpg?1635171086"],
        img_second : "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/8618/original/2_CroissantDomeHoops_V_Fair_Stack_0065.jpg?1635171101",
        img : "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/18383/original/0_CroissantDomeHoops_earring_v_hero_comp.jpg?1635171067",
        fullImg : "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/18383/original/0_CroissantDomeHoops_earring_v_hero_comp.jpg?1635171067",
        title : "Croissant Dôme Hoops",
        fullName : "Croissant Dôme Hoops",
        description_title: "Looking like a French girl isn’t as difficile as it seems. Handcrafted in vermeil, a thick 18k gold layer on sterling silver. Consider this croissant-inspired hoops to make all your Parisian dreams come true." ,
        description_info : ["Made in gold vermeil: a thick 18k gold layer on sterling silver.","Diameter: 17.15 mm.","Width: 3.8 - 6.0 mm."],
        price : 78 ,
        available : true ,
        categories : [50 , 53],
        rating : 4.7 , 
        raters : "220", 
        material : [
            { title : "Gold Vermeil " , info : "Not to be confused with regular gold plating, our vermeil is a thick layer of 18k solid gold on sterling silver meaning it will last longer. You get the look & feel of gold jewelry at a fraction of the price."} 
                ]
    },
    {
        id : "25" ,
        imgs_list : ["https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/17243/original/mens_ring_onyxsquaresignet_yg_front.jpg?1605822719","https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/15105/original/Mens_BlackOnyx_2.jpg?1601478419","https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/15106/original/Mens_BlackOnyx_3.jpg?1601478452","https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/20183/original/Mens_ring_onyxsquaresignet_yg_angle.jpg?1622658644","https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/15108/original/Mens_BlackOnyx_6.jpg?1601478563"],
        img_second:"https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/15106/original/Mens_BlackOnyx_3.jpg?1601478452",
        img :"https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/17243/original/mens_ring_onyxsquaresignet_yg_front.jpg?1605822719",
        fullImg : "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/17243/original/mens_ring_onyxsquaresignet_yg_front.jpg?1605822719",
        title : "Black Onyx Square Signet Ring",
        fullName : "Black Onyx Square Signet Ring",
        description_title: "Black and gold—a natural fit. Handcrafted in 14k solid yellow gold and black onyx, featuring our signature Men’s Edition black enamel line. Plays well with the Black Onyx Pendant Necklace." ,
        description_info : ["Made in 14k solid gold, the alloy gives our pieces its beautiful, subtle hue.","Set with AAA quality black onyx stone.","Stone size: 7.5 mm x7.5 mm."],
        sizing_Available : [6,7,8,9,10],
        price : 600 ,
        available : true ,
        categories : [50 , 51],
        rating : 4.9 , 
        raters : "330", 
        material : [
            { title : "14k Solid Gold" , info : "Our 14k solid gold pieces are made to last forever. 14k gold will not oxidize or discolor, so you can wear your jewelry every day."} ,
              {title : "Recycled Gold " , info : "We work with recycled gold to reduce our environmental impact, and conduct due diligence to ensure that the gold is certified recycled content from scrap or post-consumer sources."} 
               ]
    },
    {
        id : "26" ,
        imgs_list : ["https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/16912/original/Heirloom_ring_Garnet_yg_hero.jpg?1605794195","https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/22885/original/1_HeirloomRing_Garnet_solo_fair.jpg?1637319738","https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/22886/original/2_HeirloomRing_Garnet_stacked_medium.jpg?1637319752","https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/22887/original/3_HeirloomRing_Garnet_front.jpg?1637319767"],
        img_second : "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/22885/original/1_HeirloomRing_Garnet_solo_fair.jpg?1637319738",
        img : "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/16912/original/Heirloom_ring_Garnet_yg_hero.jpg?1605794195",
        fullImg : "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/16912/original/Heirloom_ring_Garnet_yg_hero.jpg?1605794195",
        title : "Heirloom Ring",
        fullName : "Heirloom Ring",
        description_title: "Not just any ring, but the ring. You know, the one that’s taking center stage in your jewelry box for years to come. Destined for heirloom status. Inciting envy and admiration in friends and enemies alike. That ring." ,
        description_info : ["Made in 14k solid gold, set with genuine garnet stone.","Top width: 7.8-8.0 mm.","Band width: 2.50 mm." , "Thickness: 1.30 mm." , "Stone size: 10 mm x 8 mm."],
        sizing_Available : [3,4,7,8,9,10],
        price : 550 ,
        available : true ,
        categories : [50 , 51],
        rating : 4.9 , 
        raters : "33", 
        material : [
            { title : "14k Solid Gold" , info : "Our 14k solid gold pieces are made to last forever. 14k gold will not oxidize or discolor, so you can wear your jewelry every day."} ,
              {title : "Gemstones " , info : "All of our gemstones are genuine mineral stones that are highly valued for their beauty, longevity and rarity. We use an array of high quality, natural gemstones."} 
               ]
    },
    {
        id : "27" ,
        imgs_list : ["https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/18454/original/SapphireChoker_Necklace_v_hero-0142.jpg?1606401742","https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/7150/original/Wynn_-_03.14.19_-_030.jpg?1553200710","https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/7148/original/Jaeda_-_03.18.19_-_040.jpg?1553200662","https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/17713/original/SapphireChoker_Necklace_v_alt1-0282.jpg?1605828541"],
        img_second : "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/7148/original/Jaeda_-_03.18.19_-_040.jpg?1553200662",
        img :"https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/18454/original/SapphireChoker_Necklace_v_hero-0142.jpg?1606401742",
        fullImg : "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/18454/original/SapphireChoker_Necklace_v_hero-0142.jpg?1606401742",
        title : "Sapphire Choker",
        fullName : "Sapphire Choker",
        description_title: "A crowd pleaser. This choker is perfect for layering." ,
        description_info : ["Set with AAA quality white sapphire.","Made in gold vermeil: a thick 18k gold layer on sterling silver."," Length: 14 to 16 inches." , "Size of sapphire: 2.5 mm."],
        sizing_Available : [3,4,5,6,7,10],
        price : 68 ,
        available : true ,
        categories : [50 , 52],
        rating : 4.5 , 
        raters : "93", 
        material : [
            { title : "Gold Vermeil " , info : "Not to be confused with regular gold plating, our vermeil is a thick layer of 18k solid gold on sterling silver meaning it will last longer. You get the look & feel of gold jewelry at a fraction of the price."} ,
            {title : "Gemstones " , info : "All of our gemstones are genuine mineral stones that are highly valued for their beauty, longevity and rarity. We use an array of high quality, natural gemstones."} 
               ]
    }
 
]




//9 Electronics
// 0 Headphones  , 1 Keyboards , 2 screens ,  3 Mouse , 4 Chairs , 5 Gaming
// 6 Vaccums , 7 HealthCare items , 8 Household Items , 
export default data