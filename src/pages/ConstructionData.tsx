
import heroTimber from "@/assets/scraped/hero-timber.jpg";
import heroConstruction from "@/assets/new images/Construction Industry.png";

// Helper to get images from assets
const scrapedImages = import.meta.glob('@/assets/scraped_new/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const rootAssets = import.meta.glob('@/assets/*.{png,jpg,jpeg,svg,webp}', { eager: true });

const getImg = (filename: string) => {
  // Check scraped_new
  for (const path in scrapedImages) {
    if (path.includes(filename)) {
      return (scrapedImages[path] as any).default;
    }
  }
  
  // Check root assets
  for (const path in rootAssets) {
    if (path.includes(filename)) {
      return (rootAssets[path] as any).default;
    }
  }

  return "";
};

export const constructionData = {
  overview: {
    id: "overview",
    label: "Overview",
    title: "Construction Excellence",
    subtitle: "Building Tomorrow's Infrastructure Today",
    description: "PSG delivers comprehensive construction solutions with cutting-edge MEP systems, HVAC technologies, and sustainable building practices. Our expertise spans residential, commercial, and industrial projects across the UAE and Saudi Arabia.",
    features: [
      "Advanced MEP Systems Integration",
      "Energy-Efficient HVAC Solutions",
      "Comprehensive Fire Safety Systems",
      "Sustainable Building Technologies",
      "Smart Building Integration",
      "Quality Assurance & Compliance"
    ],
    image: heroTimber,
    cta: "Explore Our Solutions"
  },
  timber: {
    id: "timber",
    label: "Timber",
    title: "Timber Solutions",
    subtitle: "Premium Wood for Interiors & Construction",
    description: "PSG offers a wide range of sawn timber species sourced from across the globe, perfect for both interior decoration and construction needs.",
    image: heroTimber,
    cta: "Explore Timber",
    sections: [
      {
        title: "Timber for Interiors",
        description: "Wood is an incredibly popular product that is often used by architects and designers to decorate the interiors of our buildings. This is because wood is durable, economical, easy to work with, long-lasting, and combines effortlessly with other textures to create a striking, inspiring aesthetic. As the most sustainable building material available, wood also brings with it additional benefits such as noise absorption and rapid heating and cooling.<br><br>The use of solid wood in interiors has increased significantly in recent years ranging from wooden doors, door frames to interior designing and wooden flooring. From hardwood from east to medium and soft woods till west, PSG offers wide range of sawn timber species across the globe.",
        products: [
          { name: "Teak Wood", image: "https://via.placeholder.com/150/8B4513/FFFFFF?text=Teak", category: "Interior" },
          { name: "Meranti", image: "https://via.placeholder.com/150/CD853F/FFFFFF?text=Meranti", category: "Interior" },
          { name: "Iroko", image: "https://via.placeholder.com/150/A0522D/FFFFFF?text=Iroko", category: "Interior" },
          { name: "Mahogany", image: "https://via.placeholder.com/150/B8860B/FFFFFF?text=Mahogany", category: "Interior" },
          { name: "Dabema", image: "https://via.placeholder.com/150/D2691E/FFFFFF?text=Dabema", category: "Interior" },
          { name: "Oak", image: "https://via.placeholder.com/150/8B7355/FFFFFF?text=Oak", category: "Interior" },
          { name: "Okume", image: "https://via.placeholder.com/150/BC8F8F/FFFFFF?text=Okume", category: "Interior" },
          { name: "Merbau", image: "https://via.placeholder.com/150/A0522D/FFFFFF?text=Merbau", category: "Interior" },
          { name: "Balau", image: "https://via.placeholder.com/150/8B4513/FFFFFF?text=Balau", category: "Interior" },
        ]
      },
      {
        title: "Timber for Construction",
        description: "Wood as shuttering is very common engineering tool for many reasons. For example, wood is light in weight as compared to metallic shuttering and easy to handle. Wood is less costly if compared with other shuttering material like steel and plastic etc. Wood can be cut and modified as per required sizes and shapes.<br><br>For this reason, the drawbacks of wood are neglected. Moreover, in areas where labour is not cheap, the depreciation cost of wood is preferred to that of labour. Wood is used in shuttering in many forms, like wooden logs (bally), wooden panels, wooden boards and wooden girders etc.<br><br>Pine wood, Spruce, SYP etc. are some of the species PSG offers for the construction field sourcing from European and American countries",
        products: [
          { name: "Pine", image: "https://via.placeholder.com/150/DEB887/000000?text=Pine", category: "Construction" },
          { name: "Spruce", image: "https://via.placeholder.com/150/F5DEB3/000000?text=Spruce", category: "Construction" },
          { name: "SYP Timber", image: "https://via.placeholder.com/150/D2B48C/000000?text=SYP", category: "Construction" },
        ]
      }
    ]
  },
  plywood: {
    id: "plywood",
    label: "Plywood",
    title: "Plywood Solutions",
    subtitle: "Versatile & Durable Plywood",
    description: "From interior furniture to construction shuttering, our plywood range covers all your needs with high-quality sourcing.",
    image: heroTimber, // Reusing heroTimber for now
    cta: "View Plywood",
    sections: [
      {
        title: "Plywood for Interior",
        description: "An extremely versatile product, plywood is used for a wide range of interior applications such as Paneling, Cabinets, Furniture, walls, Ceilings and Interior decorations and timber furnishings.<br><br>PSG offers wide range for plywood products ranging from MR grade to Marine BWP grade extensively used in the Interior sector being sourced across Asian countries",
        products: [
          { name: "BWP", image: "https://via.placeholder.com/150/8B7355/FFFFFF?text=BWP", category: "Interior" },
          { name: "MR Grade", image: "https://via.placeholder.com/150/A0826D/FFFFFF?text=MR+Grade", category: "Interior" },
        ]
      },
      {
        title: "Plywood for Construction",
        description: "Shuttering plywood is highly dense hardwood covered with a smooth coating of film on either side. It is primarily used in construction applications such as cement formworks and exterior applications.<br><br>They might be used up to 15-20 times before needing to be replaced. Brown and black are the two surface color options available for film-faced plywood. India, Indonesia, Malaysia and Vietnam are major countries from where PSG sources plywood used for construction",
        products: [
          { name: "Film Face Shutter", image: "https://via.placeholder.com/150/4A4A4A/FFFFFF?text=Film+Face", category: "Construction" },
        ]
      }
    ]
  },
  mdf: {
    id: "mdf",
    label: "MDF & Chipboard",
    title: "MDF & Chipboard",
    subtitle: "Engineered Wood Products",
    description: "High-quality MDF and Chipboard for furniture, cabinetry, and interior applications.",
    image: heroTimber,
    cta: "View Boards",
    sections: [
      {
        title: "MDF",
        description: "An extremely versatile product, MDF is used for a wide range of interior applications such as Paneling, Cabinets, Furniture, walls, Ceilings and Interior decorations and furnishings.<br><br>PSG offers wide range for MDF products ranging from MR grade to Marine BWP grade extensively used in the Interior sector being sourced across Asian countries",
        products: [
          { name: "MR Grade", image: "https://via.placeholder.com/150/8B7355/FFFFFF?text=MR+Grade", category: "MDF" },
          { name: "HMR MDF", image: "https://via.placeholder.com/150/A0826D/FFFFFF?text=HMR+MDF", category: "MDF" },
          { name: "Laminated MDF", image: "https://via.placeholder.com/150/CD853F/FFFFFF?text=Laminated", category: "MDF" },
        ]
      },
      {
        title: "Chipboard",
        description: "Chipboard or Particle Board are made by mixing small wood particles with epoxy resin, which are pressed together under intense heat and pressure to produce a rigid board, typically with a smooth surface.<br><br>Chipboards are used for making furnitures, interior home accents, kitchen cabinets, Sound proofing, Building and flooring insulation, Packaging etc.<br><br>Based on the dense forming and resin used, chipboard varies in densities and finishes. PSG sources MDF and chipboard from Indonesia, Thailand, Vietnam, India and Malaysia.",
        products: [
          { name: "Laminated", image: "https://via.placeholder.com/150/DEB887/000000?text=Laminated", category: "Chipboard" },
          { name: "Plain", image: "https://via.placeholder.com/150/F5DEB3/000000?text=Plain", category: "Chipboard" },
        ]
      }
    ]
  },
  hardwares: {
    id: "hardwares",
    label: "Hardwares",
    title: "Hardware Solutions",
    subtitle: "Essential Fittings & Accessories",
    description: "Complete range of hardware for doors, furniture, and glass fittings.",
    image: heroConstruction,
    cta: "View Hardwares",
    sections: [
      {
        title: "Door Hardware",
        description: "Hardware (door) is a broad term used to group all items that are fitted or related to doors and includes hinges, pull handles, locks and latches, cylinder and keys, door controls, panic exit devices, bolts, hold-open devices, any part of an automatic closing device that is attached to the doorset, and all (door) furniture",
        products: [
          { name: "Handle", image: "https://via.placeholder.com/150/696969/FFFFFF?text=Handle", category: "Door" },
          { name: "Pull Handles", image: "https://via.placeholder.com/150/808080/FFFFFF?text=Pull+Handle", category: "Door" },
          { name: "Locks", image: "https://via.placeholder.com/150/2F4F4F/FFFFFF?text=Locks", category: "Door" },
          { name: "Cylinders and Key", image: "https://via.placeholder.com/150/A9A9A9/FFFFFF?text=Cylinders", category: "Door" },
          { name: "Hinges", image: "https://via.placeholder.com/150/696969/FFFFFF?text=Hinges", category: "Door" },
          { name: "Panic Hardware", image: "https://via.placeholder.com/150/708090/FFFFFF?text=Panic", category: "Door" },
          { name: "Accessories", image: "https://via.placeholder.com/150/A9A9A9/FFFFFF?text=Access", category: "Door" },
        ]
      },
      {
        title: "Furniture Fittings",
        description: "Furniture fittings are the individual pieces needed to create a working, durable piece of furniture or cabinet.<br><br>Cabinet hinges, drawer runners, cabinet handles, cabinet knobs and accessories are some of the hardwares where PSG are expertise",
        products: [
          { name: "Hinges", image: "https://via.placeholder.com/150/696969/FFFFFF?text=Hinges", category: "Furniture" },
          { name: "Runners", image: "https://via.placeholder.com/150/808080/FFFFFF?text=Runners", category: "Furniture" },
          { name: "Handles", image: "https://via.placeholder.com/150/A9A9A9/FFFFFF?text=Handles", category: "Furniture" },
          { name: "Cabinet Accessories", image: "https://via.placeholder.com/150/778899/FFFFFF?text=Cabinet", category: "Furniture" },
          { name: "Cabinet Knobs", image: "https://via.placeholder.com/150/708090/FFFFFF?text=Knobs", category: "Furniture" },
        ]
      },
      {
        title: "Glass Fittings",
        description: "Glass fittings are essential components for glass doors and partitions. These include hinges, pivots, posts, handles, sliding door systems, shower fittings and so on.<br><br>In association with Hardware experts LOCKRON (UK), PSG offers wide range of complete hardwares related to Door, Furniture and Glass",
        products: [
          { name: "Spring", image: "https://via.placeholder.com/150/696969/FFFFFF?text=Spring", category: "Glass" },
          { name: "Patch Fittings", image: "https://via.placeholder.com/150/808080/FFFFFF?text=Patch", category: "Glass" },
          { name: "Pull Handles", image: "https://via.placeholder.com/150/A9A9A9/FFFFFF?text=Pull", category: "Glass" },
          { name: "Glass Door Locks", image: "https://via.placeholder.com/150/2F4F4F/FFFFFF?text=Locks", category: "Glass" },
          { name: "Hinges", image: "https://via.placeholder.com/150/778899/FFFFFF?text=Hinges", category: "Glass" },
          { name: "Shower Fittings", image: "https://via.placeholder.com/150/708090/FFFFFF?text=Shower", category: "Glass" },
        ]
      }
    ]
  },
  mep: {
    id: "mep",
    label: "MEP Solutions",
    title: "MEP Solutions",
    subtitle: "Mechanical, Electrical & Plumbing Excellence",
    description: "PSG is a leading provider of a wide range of products and comprehensive solutions for diverse projects. Renowned as one of the most trusted suppliers of engineering and industrial goods in the Middle East and GCC region, PSG delivers exceptional quality and reliability to meet the unique needs of its clients.<br><br>HVAC, which stands for Heating, Ventilating, and Air Conditioning, encompasses a range of systems designed to maintain optimal indoor conditions, from residential air conditioners to large-scale systems used in industrial complexes and high-rise buildings. A well-designed HVAC system aims to provide thermal comfort and regulate indoor environments by applying the principles of thermodynamics, fluid mechanics, and heat transfer.<br><br>We offer a wide range of HVAC products tailored to meet the needs of residential, commercial, and industrial sectors, including hotels, shopping malls, schools, office buildings, and more.",
    image: getImg("Frame-29.png"),
    cta: "View MEP Catalog",
    sections: [
      {
        title: "Gate Valves",
        description: "Gate valves are bi-directional, multi-purpose valves, available in a variety of materials such as brass, lead-free brass, bronze, and cast iron, with options for either rising or non-rising stems. These valves are widely used in residential and commercial buildings for a range of services, including hot and cold water, HVAC systems, steam, compressed air, gas, and other general utility applications.",
        products: [
          { name: "Non Rising Stem - Lead Free Brass", image: getImg("Non-rising-stem-Lead-free-gate-valve-150x150.png"), category: "Gate Valves" },
          { name: "Non Rising Stem - Brass", image: getImg("BRASS-GATE-VALVE-150x150.png"), category: "Gate Valves" },
          { name: "Lockshield - Brass", image: getImg("LOCK-SHIELD-GATE-VALVE-150x150.png"), category: "Gate Valves" },
          { name: "Rising Stem - Cast Iron", image: getImg("RISING-STEM-GATE-VALVE-150x150.png"), category: "Gate Valves" },
          { name: "Non Rising Stem - Cast Iron", image: getImg("NON-RISING-DI-GATE-VALVE-150x150.png"), category: "Gate Valves" },
        ]
      },
      {
        title: "Butterfly Valves",
        description: "Butterfly valves are bi-directional, quick shut-off valves available in lug, wafer, or double-flanged types, suitable for residential and commercial applications. They operate with a quarter-turn motion, allowing for easy and fast flow control.",
        products: [
          { name: "Lug Type", image: getImg("LUG-TYPE-BF-VALVE-150x150.png"), category: "Butterfly Valves" },
          { name: "Wafer Type", image: getImg("WAFER-TYPE-BF-VALVE-150x150.png"), category: "Butterfly Valves" },
          { name: "Flanged Type", image: getImg("FLANGED-TYPE-GEAR-OPERATED-BF-VALVE-150x150.png"), category: "Butterfly Valves" },
          { name: "Centric", image: getImg("CENTRIC-BF-VALVE-150x150.png"), category: "Butterfly Valves" },
          { name: "Double Eccentric", image: getImg("DOUBLE-ECCENTRIC-BF-VALVE-150x150.png"), category: "Butterfly Valves" },
        ]
      },
      {
        title: "Ball Valves",
        description: "Ball valves are quarter-turn shut-off valves made from materials like brass, bronze, lead-free brass, cast iron, and stainless steel. They control the flow of liquids or gases by rotating a ball with a bore 90 degrees to either allow or block flow.",
        products: [
          { name: "Bronze Ball Valve", image: getImg("BRONZE-BALL-VALVES-150x150.png"), category: "Ball Valves" },
          { name: "Brass Ball Valve", image: getImg("BRASS-BALL-VALVE-150x150.png"), category: "Ball Valves" },
          { name: "DZR Brass Ball Valve", image: getImg("DZR-BALL-VALVE-150x150.png"), category: "Ball Valves" },
          { name: "Cast Iron Ball Valve", image: getImg("CAST-IRON-BALL-VALVE-150x150.png"), category: "Ball Valves" },
          { name: "Ductile Iron Ball Valve", image: getImg("DUCTILE-IRON-BALL-VALVE-150x150.png"), category: "Ball Valves" },
        ]
      },
      {
        title: "Check Valves",
        description: "A check valve, or non-return valve, allows fluid to flow in only one direction, preventing backflow. Made from materials like bronze, brass, cast iron, and ductile iron, check valves open with fluid pressure and close automatically when flow reverses.",
        products: [
          { name: "Swing Check Valve - Lead Free Brass", image: getImg("BRASS-SWING-CHECK-VALVE-150x150.png"), category: "Check Valves" },
          { name: "Lift Check Valve - Brass", image: getImg("LIFT-CHECK-VALVE-BRASS-150x150.png"), category: "Check Valves" },
          { name: "Swing Check Valve - Brass", image: getImg("BRASS-CHECK-VALVE-150x150.png"), category: "Check Valves" },
          { name: "Dual Plate Check Valve - Cast Iron", image: getImg("DUAL-PLATE-CHECK-VALVE-CAST-IRON-150x150.png"), category: "Check Valves" },
          { name: "Dual Plate Check Valve", image: getImg("DUAL-PLATE-CHECK-VALVES-DUCTILE-IRON-150x150.png"), category: "Check Valves" },
        ]
      },
      {
        title: "Strainers",
        description: "Strainers are key components used to protect valves, pumps, and other equipment by filtering unwanted particles from fluids. Common types include Y-type and Basket-type strainers.",
        products: [
          { name: "Y Type Strainers - Brass", image: getImg("BRASS-TYPE-Y-STRAINERS-150x150.png"), category: "Strainers" },
          { name: "Y Type - DSR Bronze", image: getImg("DZR-BRONZ-Y-STRAINER-150x150.png"), category: "Strainers" },
          { name: "Y Type Strainers - Bronze", image: getImg("BRONZE-TYPE-Y-STRAINER-150x150.png"), category: "Strainers" },
          { name: "Y Type Strainers - Cast Iron", image: getImg("CAST-IRON-Y-STRAINERS-150x150.png"), category: "Strainers" },
          { name: "Basket Type Strainers - Cast Iron", image: getImg("BASKET-TYPE-Y-STRAINER-150x150.png"), category: "Strainers" },
        ]
      },
      {
        title: "Flexible Joints",
        description: "Flexible connectors are vital for piping systems, offering flexibility to absorb noise, vibration, and thermal expansion while allowing movement.",
        products: [
          { name: "Flexible Connection", image: getImg("FLEXIBLE-CONNECTORS-150x150.png"), category: "Connectors" },
          { name: "Rubber Expansion Joints", image: "https://via.placeholder.com/150/2F4F4F/FFFFFF?text=Rubber", category: "Connectors" },
          { name: "Tied Flanged", image: "https://via.placeholder.com/150/696969/FFFFFF?text=Tied", category: "Connectors" },
        ]
      },
      {
        title: "Double Regulating Valves",
        description: "A double regulating valve, also known as a balancing valve, is primarily used to control and balance the water flow in chilled water air conditioning systems.",
        products: [
          { name: "Fixed Orifice - DZR Brass", image: getImg("FIZED-ORIFICE-DOUBLE-REGULATING-VALVE-150x150.png"), category: "Balancing Valves" },
          { name: "Variable Orifice - DZR Brass", image: getImg("DOUBLE-REGULATING-VALVES-BRASS-150x150.png"), category: "Balancing Valves" },
          { name: "Double Regulating Valve - Cast Iron", image: getImg("DOUBLE-REGLATING-VALVE-CAST-IRON-150x150.png"), category: "Balancing Valves" },
        ]
      },
      {
        title: "PICV",
        description: "The Pressure Independent Control Valve (PICV) is a combined flow limiter and temperature control valve, designed for both variable and constant temperature systems.",
        products: [
          { name: "Linear Characteristic PICV", image: getImg("LINEAR-CHARACTERISTIC-PICV-VALVE-150x150.png"), category: "PICV" },
          { name: "Equal Percentage PICV", image: getImg("EQUAL-PERCENTACE-PICV-VALVE-150x150.png"), category: "PICV" },
          { name: "Ductile Iron PICV", image: getImg("DUCTILE-IRON-PICV-VALVE-150x150.png"), category: "PICV" },
        ]
      },
      {
        title: "Solenoid Valves",
        description: "A solenoid valve is an electromechanical device that uses an electric current to generate a magnetic field, which operates a mechanism to regulate the opening and closing of fluid flow.",
        products: [
          { name: "Servo - Activated", image: "https://via.placeholder.com/150/FF6347/FFFFFF?text=Servo", category: "Solenoid" },
        ]
      },
      {
        title: "Intelligent Control Valves",
        description: "Intelligent Control Valves are designed to maintain optimal flow and pressure conditions at all times, ensuring consistent flow, pressure, or levels despite fluctuations in the supply network. These valves help reduce water loss and contribute to efficient water distribution. Integrated with the ACMO PMD communication device, which functions as a local controller, they provide precise control with auto-adaptive PID for various hydraulic conditions. The ACMO PMD offers pre-configurable hydraulic functions, data logging, and real-time communication with flow meters to adjust pressure according to flow, regardless of time.<br><br>These intelligent control valves have been proven to reduce leakage and burst frequency, providing cost-effective and reliable pressure control. They are essential for smart networks and are widely used in applications such as central air conditioning, water treatment, and heating systems. Integrated with sensor technology, intelligent actuators, and control valves, they offer several benefits for smart network management:<br><br>• Optimized, stable network pressures<br>• Pressure and valve position feedback<br>• Reaction to system failures<br>• Verification of Zones/Pressure Management Areas (PMAs)<br>• Adjustment of reservoir flows<br>• Reduced leakage<br>• Integration with pumps and meters<br>• Feedback on water temperature and quality<br>• Remote control of storage levels<br>• Extended asset life by optimizing maintenance periods",
        products: [
          { name: "Watts Intelligent Control Valves", image: "https://via.placeholder.com/150/4169E1/FFFFFF?text=Intelligent", category: "Control Valves" },
        ]
      },
      {
        title: "Relief Valves",
        description: "A relief valve is a safety device that protects pressurized vessels or systems from overpressure by venting fluid when pressure exceeds the design limits.",
        products: [
          { name: "Pressure Relief Valve", image: "https://via.placeholder.com/150/FF6347/FFFFFF?text=PRV", category: "Valves" },
        ]
      },
      {
        title: "Pumps",
        description: "Pumps are essential components in commercial building systems, serving a range of critical functions such as environmental comfort, potable water supply, and wastewater removal.",
        products: [
          { name: "HVAC Pumps", image: "https://via.placeholder.com/150/4682B4/FFFFFF?text=Pump", category: "Pumps" },
        ]
      }
    ]
  },
  hvac: {
    id: "hvac",
    label: "HVAC Systems",
    title: "HVAC Systems",
    subtitle: "Climate Control Excellence",
    description: "Advanced HVAC solutions for optimal indoor air quality and energy efficiency. We offer a wide range of HVAC products tailored to meet the needs of residential, commercial, and industrial sectors, including hotels, shopping malls, schools, office buildings, and more.",
    image: heroConstruction,
    cta: "HVAC Solutions",
    sections: [
      {
        title: "Differential Pressure Control Valve",
        description: "These valves maintain a constant differential pressure across hydronic systems with variable flow, ensuring the optimal functioning of system components.",
        products: [
          { name: "DSR Brass", image: getImg("DPC-VALVE-BRASS-150x150.png"), category: "HVAC" },
          { name: "Cast Iron", image: "https://via.placeholder.com/150/696969/FFFFFF?text=Cast", category: "HVAC" },
        ]
      },
      {
        title: "FCU Valve Packages",
        description: "The flushing bypass kit, featuring a pressure-independent control valve and a Filter ball shut-off valve with an integrated strainer, is designed to maintain design flow rates.",
        products: [
          { name: "FCU Valve Package", image: getImg("FCU-VALVE-PACKAGE-150x150.png"), category: "HVAC" },
        ]
      },
      {
        title: "Exhaust and Fresh Air Fans",
        description: "A fan is a gas flow-producing device equipped with two or more blades or vanes attached to a rotating shaft.",
        products: [
          { name: "Axial Type Exhaust Fans", image: getImg("AXIAL-TYPE-EXHAUST-FANS-150x150.png"), category: "Fans" },
          { name: "Centrifugal Type Exhaust Fans", image: getImg("CENTRIFUGAL-TYPE-EXHAUST-FANS-150x150.png"), category: "Fans" },
          { name: "Inline Fresh Air Fans", image: "https://via.placeholder.com/150/696969/FFFFFF?text=Inline", category: "Fans" },
          { name: "Single Inlet Exhaust Fans", image: "https://via.placeholder.com/150/808080/FFFFFF?text=Single", category: "Fans" },
        ]
      },
      {
        title: "Fire Dampers",
        description: "We provide a comprehensive range of mechanical, electromechanical, and actuator-driven fire dampers, designed to operate as standalone units or in conjunction with other dampers.",
        products: [
          { name: "Fusible Fire Dampers", image: "https://via.placeholder.com/150/DC143C/FFFFFF?text=Fusible", category: "Dampers" },
          { name: "Motorised Fire Dampers", image: "https://via.placeholder.com/150/B22222/FFFFFF?text=Motorised", category: "Dampers" },
        ]
      },
      {
        title: "Air Distribution Products",
        description: "GRILLS WITH COLLAR DAMPERS | DIFFUSERS | VOLUME CONTROL DAMPERS | MOTORISED VOLUME CONTROL DAMPERS",
        products: [
          { name: "Manual VCD", image: "https://via.placeholder.com/150/A9A9A9/FFFFFF?text=Manual", category: "Air Distribution" },
          { name: "Motorised VCD", image: "https://via.placeholder.com/150/778899/FFFFFF?text=Motorised", category: "Air Distribution" },
          { name: "VAV", image: "https://via.placeholder.com/150/696969/FFFFFF?text=VAV", category: "Air Distribution" },
          { name: "Diffusers and Grills", image: "https://via.placeholder.com/150/C0C0C0/000000?text=Diffuser", category: "Air Distribution" },
        ]
      },
      {
        title: "HVAC Sensors",
        description: "<strong>Pressure Sensors for HVAC and Air Handling Systems:</strong> Pressure sensors are essential in HVAC systems to monitor pressure drops and ensure system performance. They provide accurate measurements to maintain system efficiency. The common unit of measurement is the Pascal (Pa), with typical pressure measurements including differential, high, and low pressures.<br><br>• Differential Pressure Transducers: These sensors compare the pressure between two areas.<br>• High Pressure Transducers: These sensors measure the highest-pressure level in a designated area.<br>• The EE600 is a highly accurate differential air pressure sensor designed for HVAC systems, featuring an IP65 enclosure for durability and reliability.<br><br><strong>Temperature Sensors for HVAC and Air Handling Systems:</strong> Temperature sensors monitor environmental temperature in HVAC systems, providing inputs to control systems that adjust heating or cooling outputs to maintain desired conditions. The EE431 temperature sensor is ideal for HVAC systems, offering active outputs with optional probes for passive recording.<br><br><strong>Humidity Sensors for HVAC and Air Handling Systems:</strong> Humidity sensors regulate pressure and temperature by managing moisture levels within an environment. They ensure optimal humidity to protect infrastructure and maintain controlled environments. The EE150 humidity and temperature transmitter is specifically designed for HVAC applications, offering exceptional performance and value for money.<br><br><strong>Indoor Air Quality Sensors for HVAC and Air Handling Systems:</strong> Indoor air quality sensors are vital for ensuring healthy and well-ventilated environments. These sensors provide data on ventilation efficiency and air filtration effectiveness. The EE800 accurately measures CO2, temperature, relative humidity, and dewpoint, making it an ideal solution for HVAC applications.<br><br><strong>Room Sensors for HVAC and Air Handling Systems:</strong> Room sensors monitor variations in temperature and humidity, ensuring that indoor spaces remain comfortable. These sensors are integral to maintaining optimal conditions in rooms and buildings.",
        products: [
          { name: "Water Flow Switch", image: getImg("FLOW-SWITCH-1-150x150.png"), category: "Sensors" },
          { name: "Indoor Air Quality Sensor", image: "https://via.placeholder.com/150/5F9EA0/FFFFFF?text=Air", category: "Sensors" },
          { name: "Pressure Sensor", image: "https://via.placeholder.com/150/6495ED/FFFFFF?text=Pressure", category: "Sensors" },
          { name: "Humidistat", image: "https://via.placeholder.com/150/1E90FF/FFFFFF?text=Humidity", category: "Sensors" },
          { name: "Temperature Sensor", image: "https://via.placeholder.com/150/4682B4/FFFFFF?text=Temp", category: "Sensors" },
          { name: "Differential Pressure Switch", image: getImg("DIFFERENTIAL-PRESSURE-SWITCH-150x150.png"), category: "Sensors" },
          { name: "Temperature & Humidity Sensor", image: "https://via.placeholder.com/150/00CED1/FFFFFF?text=Temp+Hum", category: "Sensors" },
          { name: "Clean Room Monitor Sensor", image: getImg("CLEAN-ROOM-MONITOR-SENSOR-150x150.png"), category: "Sensors" },
        ]
      },
      {
        title: "Thermostat",
        description: "A thermostat is a regulating device component which senses the temperature of a physical system and performs actions so that the system's temperature is maintained near a desired setpoint.",
        products: [
          { name: "Thermostat", image: "https://via.placeholder.com/150/FF6347/FFFFFF?text=Thermostat", category: "Controls" },
        ]
      },
      {
        title: "Air Vents",
        description: "Air Vents and Vacuum Valves are designed to expel large volumes of air during system start-up and allow air to re-enter the line during system shutdown or failure.",
        products: [
          { name: "Air Vent", image: getImg("AIR-VENTS-150x150.png"), category: "Vents" },
        ]
      },
      {
        title: "BTU Meter",
        description: "BTU meters are precision instruments used to measure the thermal energy consumption of chilled water in British Thermal Units (BTU).",
        products: [
          { name: "BTU Meter", image: getImg("BTU-METER-150x150.png"), category: "Meters" },
        ]
      },
      {
        title: "Hydronic Meters",
        description: "A hydrometer is a tool used to measure the density or specific gravity of a liquid when compared to water.",
        products: [
          { name: "Hydronic Flow Meter", image: "https://via.placeholder.com/150/4682B4/FFFFFF?text=Meter", category: "Meters" },
        ]
      },
      {
        title: "Water Leak Detection System",
        description: "Water leak monitoring is a critical aspect of building management, particularly in areas with sensitive electrical and electronic equipment.",
        products: [
          { name: "Water Leak Detection System", image: "https://via.placeholder.com/150/1E90FF/FFFFFF?text=WLD", category: "Safety" },
        ]
      },
      {
        title: "Thermal and Acoustic Insulation",
        description: "Thermal and acoustic insulation in HVAC and industrial applications plays a critical role in enhancing the efficiency and performance of the structure.",
        products: [
          { name: "Thermal Insulation", image: "https://via.placeholder.com/150/F5DEB3/000000?text=Thermal", category: "Insulation" },
          { name: "Acoustic Insulation", image: getImg("ACOUSTIC-INSULATION-150x150.png"), category: "Insulation" },
        ]
      },
      {
        title: "Insulation Adhesive",
        description: "Thermal Insulation Adhesives are used to seal joints of synthetic rubber insulation foam or major plastic polymers.",
        products: [
          { name: "DUC Insulation", image: getImg("DUC-INSULATION-150x150.png"), category: "Insulation" },
        ]
      },
      {
        title: "VFD",
        description: "SINAMICS variable frequency drives offer the ultimate solution for all drive applications, from low voltage to direct current (DC). Designed for enhanced efficiency and versatility, our drives empower your applications to evolve towards a more digital and sustainable future, meeting the demands of modern industries.",
        products: [
          { name: "Variable Frequency Drive", image: "https://via.placeholder.com/150/FF8C00/FFFFFF?text=VFD", category: "Drives" },
        ]
      },
      {
        title: "UPS System",
        description: "An uninterruptible power supply (UPS) is a continuous power system designed to provide automatic backup electricity to a load when the primary power source fails.",
        products: [
          { name: "UPS System", image: "https://via.placeholder.com/150/32CD32/FFFFFF?text=UPS", category: "Power" },
        ]
      }
    ]
  },
  fire: {
    id: "fire",
    label: "Fire Fighting",
    title: "Fire Fighting Systems",
    subtitle: "Safety First Approach",
    description: "Firefighting equipment is essential for effective fire response and mitigation, offering a range of critical tools including fire hoses, portable fire pumps, fire hose reels, fire monitors, nozzles, and more. PSG is a prominent supplier of firefighting products across the Middle East and GCC regions.",
    image: heroConstruction,
    cta: "Fire Safety Solutions",
    sections: [
      {
        title: "Fire Fighting Valves",
        description: "A hose or hydrant valve is essential for controlling water flow during fire emergencies or in industrial settings. Our fire protection valves are designed for municipal, rural, and forestry hose applications.",
        products: [
          { name: "Gate Valves", image: getImg("BRASS-GATE-VALVE-150x150.png"), category: "Fire Valves" },
          { name: "Butterfly Valve", image: getImg("BUTTERFLY-VALVE-150x150.png"), category: "Fire Valves" },
          { name: "Check Valves", image: getImg("BRASS-CHECK-VALVE-150x150.png"), category: "Fire Valves" },
        ]
      },
      {
        title: "Fire Hydrant System",
        description: "Fire hydrants are fixed pipe systems connected to a reliable water supply for fire protection. We offer two types: Dry Barrel and Wet Barrel types.",
        products: [
          { name: "Fire Hydrant System", image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Hydrant", category: "Hydrant" },
        ]
      },
      {
        title: "Pipes and Fittings",
        description: "Fire sprinkler pipes and related fittings, typically made from carbon steel or ductile iron, are essential for transporting water to firefighting equipment. Ductile iron is designed to last for at least 100 years.",
        products: [
          { name: "Ductile Iron Pipes", image: "https://via.placeholder.com/150/696969/FFFFFF?text=Ductile", category: "Pipes" },
        ]
      },
      {
        title: "Fire Cables",
        description: "Mineral insulated (MI) cables are designed for high-temperature and harsh environments, offering excellent fire resistance. Composed of copper conductors and magnesium oxide insulation, these cables maintain performance even at temperatures exceeding 1000°C.",
        products: []
      },
      {
        title: "Fire Alarm System",
        description: "Fire Detection and Alarm System is meticulously designed to offer comprehensive fire safety solutions across diverse environments.",
        products: [
          { name: "Digital Voice Command", image: getImg("DIGITAL-VOICE-COMMAND-150x150.png"), category: "Alarm" },
          { name: "Alarm Cable", image: getImg("FIRE-ALARM-CABLES-150x150.png"), category: "Alarm" },
          { name: "Alarm Module", image: getImg("FIRE-ALARM-MODULES-150x150.png"), category: "Alarm" },
          { name: "Alarm Panel", image: getImg("FIRE-ALARM-PANEL-150x150.png"), category: "Alarm" },
          { name: "Fire Detector", image: getImg("FIRE-DETECTORS-150x141.png"), category: "Alarm" },
          { name: "Hooter", image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Hooter", category: "Alarm" },
          { name: "Manual Call Point", image: "https://via.placeholder.com/150/CD5C5C/FFFFFF?text=Manual", category: "Alarm" },
        ]
      },
      {
        title: "VESDA System",
        description: "The Xtralis Fire Detection and Alarm System, part of Honeywell's suite of safety solutions, offers advanced technologies for early fire detection and comprehensive alarm management.",
        products: [
          { name: "VESDA System", image: "https://via.placeholder.com/150/FF6347/FFFFFF?text=VESDA", category: "System" },
        ]
      },
      {
        title: "Pre Action System",
        description: "Pre-action fire sprinkler systems utilize the dry pipe concept, designed for water-sensitive environments.",
        products: [
          { name: "Inter Lock", image: "https://via.placeholder.com/150/DC143C/FFFFFF?text=Interlock", category: "Pre Action" },
          { name: "Double Inter Lock", image: "https://via.placeholder.com/150/B22222/FFFFFF?text=Double", category: "Pre Action" },
          { name: "Potter Release", image: "https://via.placeholder.com/150/8B0000/FFFFFF?text=Potter", category: "Pre Action" },
          { name: "Pre Action System", image: "https://via.placeholder.com/150/A52A2A/FFFFFF?text=System", category: "Pre Action" },
          { name: "Interlock - Dry Pilot", image: "https://via.placeholder.com/150/CD5C5C/FFFFFF?text=Dry", category: "Pre Action" },
          { name: "Double Interlock Electric", image: getImg("DOUBLE-INTERLOCK-PREACTION-WITH-ELECTRIC-RELEASE-150x150.png"), category: "Pre Action" },
          { name: "Interlock - Wet Pilot", image: "https://via.placeholder.com/150/FF4500/FFFFFF?text=Wet", category: "Pre Action" },
        ]
      },
      {
        title: "Fire Sprinkler System",
        description: "Fire sprinklers are compact, thermosensitive devices featuring glass bulbs that activate when exposed to heat. Constructed from brass with various finishes.",
        products: [
          { name: "Pressure Gauge", image: "https://via.placeholder.com/150/4682B4/FFFFFF?text=Gauge", category: "Sprinkler" },
          { name: "Recessed Sprinkler", image: "https://via.placeholder.com/150/FF6347/FFFFFF?text=Recessed", category: "Sprinkler" },
          { name: "Side Wall Sprinkler", image: "https://via.placeholder.com/150/DC143C/FFFFFF?text=Side", category: "Sprinkler" },
          { name: "Sprinkler Guard", image: "https://via.placeholder.com/150/B22222/FFFFFF?text=Guard", category: "Sprinkler" },
          { name: "Swing Check", image: "https://via.placeholder.com/150/8B0000/FFFFFF?text=Swing", category: "Sprinkler" },
          { name: "Test and Drain", image: "https://via.placeholder.com/150/A52A2A/FFFFFF?text=Test", category: "Sprinkler" },
          { name: "Upright Sprinkler", image: "https://via.placeholder.com/150/CD5C5C/FFFFFF?text=Upright", category: "Sprinkler" },
          { name: "Vertical Side Wall", image: "https://via.placeholder.com/150/FF4500/FFFFFF?text=Vertical", category: "Sprinkler" },
          { name: "Water Motor Gong", image: "https://via.placeholder.com/150/FF6347/FFFFFF?text=Gong", category: "Sprinkler" },
          { name: "Y Strainer", image: "https://via.placeholder.com/150/B8860B/FFFFFF?text=Y", category: "Sprinkler" },
          { name: "Zone Controlled Manifold", image: "https://via.placeholder.com/150/DC143C/FFFFFF?text=Zone", category: "Sprinkler" },
          { name: "Butterfly Valve", image: "https://via.placeholder.com/150/4682B4/FFFFFF?text=Butterfly", category: "Sprinkler" },
          { name: "Concealed Sprinkler", image: getImg("CONCEALED-SPRINKLER-150x150.png"), category: "Sprinkler" },
          { name: "Conventional Sprinkler", image: getImg("CONVENTIONAL-SPRINKLER-150x150.png"), category: "Sprinkler" },
          { name: "Flow Switch", image: "https://via.placeholder.com/150/1E90FF/FFFFFF?text=Flow", category: "Sprinkler" },
          { name: "Gate Valve", image: "https://via.placeholder.com/150/696969/FFFFFF?text=Gate", category: "Sprinkler" },
          { name: "Pendant Sprinkler", image: "https://via.placeholder.com/150/FF6347/FFFFFF?text=Pendant", category: "Sprinkler" },
        ]
      },
      {
        title: "CO2 Fire Suppression System",
        description: "Our CO2 fire suppression systems are meticulously engineered to protect critical assets such as electrical cabinets, electronic equipment, machinery, and storage areas.",
        products: [
          { name: "CO2 Gas Suppression System", image: getImg("CO2-GAS-SUPPRESSION-SYSTEM-150x150.png"), category: "Suppression" },
        ]
      },
      {
        title: "Novec System",
        description: "Novec 1230 is a cutting-edge, gas-based chemical extinguishing system that offers rapid, reliable fire suppression with minimal environmental impact.",
        products: [
          { name: "Novec System", image: "https://via.placeholder.com/150/00CED1/FFFFFF?text=Novec", category: "Suppression" },
        ]
      },
      {
        title: "Fire Fighting Pumps",
        description: "We offer comprehensive solutions for firefighting systems, including fire pumps, diesel pumps, jockey pumps, and various types of fire pumps.",
        products: [
          { name: "Fire Fighting Pumps", image: getImg("FIRE-FIGHTING-PUMPS-1-150x150.png"), category: "Pumps" },
        ]
      }
    ]
  },
  plumbing: {
    id: "plumbing",
    label: "Plumbing",
    title: "Plumbing Systems",
    subtitle: "Water Management Solutions",
    description: "Complete plumbing solutions including pipes, fittings, and fixtures for water supply and drainage systems.",
    image: heroConstruction,
    cta: "Plumbing Solutions",
    sections: [
      {
        title: "PVC Pipes and Fittings",
        description: "The system is an ideal solution for the distribution of water in irrigation, agriculture, tube wells, chemicals, aquaculture, as well as the distribution of compressed air and liquids. It provides an easy, economical, and technically advanced alternative, offering significant advantages over traditional G.I. piping systems.",
        products: [
          { name: "PVC Pipes and Fittings", image: "https://via.placeholder.com/150/708090/FFFFFF?text=PVC", category: "Pipes" },
        ]
      },
      {
        title: "CPVC Pipes and Fittings",
        description: "The CPVC plumbing system is a durable and cost-effective solution for both hot and cold water applications. Made from chlorinated polyvinyl chloride, the pipes and fittings are available in a complete range of sizes from ½\" to 2\".",
        products: [
          { name: "CPVC Pipes and Fittings", image: "https://via.placeholder.com/150/D2691E/FFFFFF?text=CPVC", category: "Pipes" },
        ]
      },
      {
        title: "UPVC Pipes and Fittings",
        description: "UPVC White Pipe Fittings Systems are the result of advanced polymer chemistry research, designed to withstand harsh weather conditions and demanding usage.",
        products: [
          { name: "UPVC Pipes and Fittings", image: "https://via.placeholder.com/150/F5F5F5/000000?text=UPVC", category: "Pipes" },
        ]
      },
      {
        title: "PPR Pipes and Fittings",
        description: "Indo Green PPR pipes are the latest and most advanced solution for a wide range of plumbing applications. These pipes and their corresponding fittings are designed to handle both hot and cold water, making them versatile for various uses beyond traditional plumbing.",
        products: [
          { name: "PPR Pipes and Fittings", image: "https://via.placeholder.com/150/228B22/FFFFFF?text=PPR", category: "Pipes" },
        ]
      }
    ]
  },
  electrical: {
    id: "electrical",
    label: "Electrical",
    title: "Electrical Systems",
    subtitle: "Power Distribution Excellence",
    description: "PSG offers comprehensive electrical solutions including cables, circuit breakers, and electrical distribution systems for residential, commercial, and industrial applications.",
    image: heroConstruction,
    cta: "Electrical Solutions",
    sections: [
      {
        title: "Electrical Cables",
        description: "We provide a wide range of electrical cables including:<br><br>• Electric Panel Cables - Flexible cables for wiring electrical cabinets<br>• Power Cables - Energy cables for industrial and public installations<br>• Armoured Cables - Cables with aluminum or steel reinforcement<br>• Rubber Cables - Flexible rubber cables for fixed and mobile services<br>• Halogen-Free Cables - Low smoke, LSZH cables for enhanced safety<br>• Fire-Resistant Cables - Maintain functionality during fire exposure<br>• Control Cables - For machine interconnections and control systems<br>• Instrumentation Cables - Shielded cables for industrial environments<br>• Solar Cables - For photovoltaic panel connections<br>• Aluminium Cables - For power transmission",
        products: []
      },
      {
        title: "Circuit Breakers",
        description: "",
        products: [
          { name: "MCBs", image: "https://via.placeholder.com/150/FF6347/FFFFFF?text=MCB", category: "Breakers" },
          { name: "MCCB", image: "https://via.placeholder.com/150/DC143C/FFFFFF?text=MCCB", category: "Breakers" },
          { name: "ACB", image: getImg("ACB-150x150.png"), category: "Breakers" },
          { name: "Insulated Case Circuit Breakers", image: "https://via.placeholder.com/150/8B0000/FFFFFF?text=ICCB", category: "Breakers" },
        ]
      }
    ]
  }
};
