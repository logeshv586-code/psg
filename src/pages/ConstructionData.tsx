
import heroTimber from "@/assets/scraped/hero-timber.jpg";
import heroConstruction from "@/assets/new images/Construction Industry.png";
import mepInstallationSite from "@/assets/new images/MEP Installation Site.png";

// Helper to get images from assets
type ImgModule = { default: string };
const scrapedImages = import.meta.glob<ImgModule>('@/assets/scraped_new/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const rootAssets = import.meta.glob<ImgModule>('@/assets/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const plywoodAssets = import.meta.glob<ImgModule>('@/assets/construction-plywood/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const hardwareAssets = import.meta.glob<ImgModule>('@/assets/hardware_Solution/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const mdfAssets = import.meta.glob<ImgModule>('@/assets/MDF & Chipboard/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const timberAssets = import.meta.glob<ImgModule>('@/assets/timber/*.{png,jpg,jpeg,svg,webp}', { eager: true });

// New Asset Directories
const mepAssets = import.meta.glob<ImgModule>('@/assets/MEP Solutions/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const hvacAssets = import.meta.glob<ImgModule>('@/assets/Hvac_Systems/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const fireAssets = import.meta.glob<ImgModule>('@/assets/Fire_Fighting_Systems/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const electricalAssets = import.meta.glob<ImgModule>('@/assets/Electrical_Systems/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const plumbingAssets = import.meta.glob<ImgModule>('@/assets/plumbing/*.{png,jpg,jpeg,svg,webp}', { eager: true });

const getImg = (filename: string) => {
  // Check MEP Solutions
  for (const path in mepAssets) {
    if (path.includes(filename)) return mepAssets[path].default;
  }
  // Check HVAC Systems
  for (const path in hvacAssets) {
    if (path.includes(filename)) return hvacAssets[path].default;
  }
  // Check Fire Fighting Systems
  for (const path in fireAssets) {
    if (path.includes(filename)) return fireAssets[path].default;
  }
  // Check Electrical Systems
  for (const path in electricalAssets) {
    if (path.includes(filename)) return electricalAssets[path].default;
  }
  // Check Plumbing
  for (const path in plumbingAssets) {
    if (path.includes(filename)) return plumbingAssets[path].default;
  }

  // Check scraped_new
  for (const path in scrapedImages) {
    if (path.includes(filename)) {
      return scrapedImages[path].default;
    }
  }
  // Check plywood (construction-plywood)
  for (const path in plywoodAssets) {
    if (path.includes(filename)) {
      return plywoodAssets[path].default;
    }
  }
  // Check hardware solutions
  for (const path in hardwareAssets) {
    if (path.includes(filename)) {
      return hardwareAssets[path].default;
    }
  }
  // Check MDF & Chipboard
  for (const path in mdfAssets) {
    if (path.includes(filename)) {
      return mdfAssets[path].default;
    }
  }
  // Check timber
  for (const path in timberAssets) {
    if (path.includes(filename)) {
      return timberAssets[path].default;
    }
  }
  
  // Check root assets
  for (const path in rootAssets) {
    if (path.includes(filename)) {
      return rootAssets[path].default;
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
          { name: "Teak Wood", image: getImg("Teak Wood.png"), category: "Interior" },
          { name: "Meranti", image: getImg("Meranti Wood.png"), category: "Interior" },
          { name: "Iroko", image: getImg("Iroko Wood.png"), category: "Interior" },
          { name: "Mahogany", image: getImg("Mahogany Wood.png"), category: "Interior" },
          { name: "Dabema", image: getImg("Dabema Wood.png"), category: "Interior" },
          { name: "Oak", image: getImg("Oak Wood.png"), category: "Interior" },
          { name: "Okume", image: getImg("Okume Wood.png"), category: "Interior" },
          { name: "Merbau", image: getImg("Merbau Wood.png"), category: "Interior" },
          { name: "Balau", image: getImg("Balau Wood.png"), category: "Interior" },
        ]
      },
      {
        title: "Timber for Construction",
        description: "Wood as shuttering is very common engineering tool for many reasons. For example, wood is light in weight as compared to metallic shuttering and easy to handle. Wood is less costly if compared with other shuttering material like steel and plastic etc. Wood can be cut and modified as per required sizes and shapes.<br><br>For this reason, the drawbacks of wood are neglected. Moreover, in areas where labour is not cheap, the depreciation cost of wood is preferred to that of labour. Wood is used in shuttering in many forms, like wooden logs (bally), wooden panels, wooden boards and wooden girders etc.<br><br>Pine wood, Spruce, SYP etc. are some of the species PSG offers for the construction field sourcing from European and American countries",
        products: [
          { name: "Pine", image: getImg("Pine Wood.png"), category: "Construction" },
          { name: "Spruce", image: getImg("Spruce Wood.png"), category: "Construction" },
          { name: "SYP Timber", image: getImg("SYP Timber.png"), category: "Construction" },
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
          { name: "BWP", image: getImg("BWP Plywood.png"), category: "Interior" },
          { name: "MR Grade", image: getImg("MR Grade Plywood.png"), category: "Interior" },
        ]
      },
      {
        title: "Plywood for Construction",
        description: "Shuttering plywood is highly dense hardwood covered with a smooth coating of film on either side. It is primarily used in construction applications such as cement formworks and exterior applications.<br><br>They might be used up to 15-20 times before needing to be replaced. Brown and black are the two surface color options available for film-faced plywood. India, Indonesia, Malaysia and Vietnam are major countries from where PSG sources plywood used for construction",
        products: [
          { name: "Film Face Shutter", image: getImg("Film Face Shutter Plywood.png"), category: "Construction" },
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
          { name: "MR Grade", image: getImg("MR Grade MDF.png"), category: "MDF" },
          { name: "HMR MDF", image: getImg("HMR MDF.png"), category: "MDF" },
          { name: "Laminated MDF", image: getImg("Laminated MDF.png"), category: "MDF" },
        ]
      },
      {
        title: "Chipboard",
        description: "Chipboard or Particle Board are made by mixing small wood particles with epoxy resin, which are pressed together under intense heat and pressure to produce a rigid board, typically with a smooth surface.<br><br>Chipboards are used for making furnitures, interior home accents, kitchen cabinets, Sound proofing, Building and flooring insulation, Packaging etc.<br><br>Based on the dense forming and resin used, chipboard varies in densities and finishes. PSG sources MDF and chipboard from Indonesia, Thailand, Vietnam, India and Malaysia.",
        products: [
          { name: "Laminated", image: getImg("Laminated Chipboard.png"), category: "Chipboard" },
          { name: "Plain", image: getImg("Plain Chipboard.png"), category: "Chipboard" },
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
          { name: "Handle", image: getImg("Door Handle.png"), category: "Door" },
          { name: "Pull Handles", image: getImg("Pull Handles Door.png"), category: "Door" },
          { name: "Locks", image: getImg("Door Locks.png"), category: "Door" },
          { name: "Cylinders and Key", image: getImg("Cylinders and Key.png"), category: "Door" },
          { name: "Hinges", image: getImg("Door Hinges.png"), category: "Door" },
          { name: "Panic Hardware", image: getImg("Panic Hardware.png"), category: "Door" },
          { name: "Accessories", image: getImg("Door Accessories.png"), category: "Door" },
        ]
      },
      {
        title: "Furniture Fittings",
        description: "Furniture fittings are the individual pieces needed to create a working, durable piece of furniture or cabinet.<br><br>Cabinet hinges, drawer runners, cabinet handles, cabinet knobs and accessories are some of the hardwares where PSG are expertise",
        products: [
          { name: "Hinges", image: getImg("Furniture Hinges.png"), category: "Furniture" },
          { name: "Runners", image: getImg("Drawer Runners.png"), category: "Furniture" },
          { name: "Handles", image: getImg("Furniture Handles.png"), category: "Furniture" },
          { name: "Cabinet Accessories", image: getImg("Cabinet Accessories.png"), category: "Furniture" },
          { name: "Cabinet Knobs", image: getImg("Cabinet Knobs.png"), category: "Furniture" },
        ]
      },
      {
        title: "Glass Fittings",
        description: "Glass fittings are essential components for glass doors and partitions. These include hinges, pivots, posts, handles, sliding door systems, shower fittings and so on.<br><br>In association with Hardware experts LOCKRON (UK), PSG offers wide range of complete hardwares related to Door, Furniture and Glass",
        products: [
          { name: "Spring", image: getImg("Glass Spring.png"), category: "Glass" },
          { name: "Patch Fittings", image: getImg("Patch Fittings.png"), category: "Glass" },
          { name: "Pull Handles", image: getImg("Glass Pull Handles.png"), category: "Glass" },
          { name: "Glass Door Locks", image: getImg("Glass Door Locks.png"), category: "Glass" },
          { name: "Hinges", image: getImg("Glass Hinges.png"), category: "Glass" },
          { name: "Shower Fittings", image: getImg("Shower Fittings.png"), category: "Glass" },
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
    image: mepInstallationSite,
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
          { name: "Swing Check Valve - Lead Free Brass", image: getImg("Swing Check Valve Natural.png"), category: "Check Valves" },
          { name: "Lift Check Valve - Brass", image: getImg("LIFT-CHECK-VALVE-BRASS-150x150.png"), category: "Check Valves" },
          { name: "Swing Check Valve - Brass", image: getImg("Brass Swing Check Valve 1.png"), category: "Check Valves" },
          { name: "Dual Plate Check Valve - Cast Iron", image: getImg("Dual Plate Check Valve Cast Iron.png"), category: "Check Valves" },
          { name: "Dual Plate Check Valve", image: getImg("Dual Plate Check Valve.png"), category: "Check Valves" },
        ]
      },
      {
        title: "Strainers",
        description: "Strainers are key components used to protect valves, pumps, and other equipment by filtering unwanted particles from fluids. Common types include Y-type and Basket-type strainers.",
        products: [
          { name: "Y Type Strainers - Brass", image: getImg("Y Type Strainers Brass.png"), category: "Strainers" },
          { name: "Y Type - DSR Bronze", image: getImg("Y Type DSR Bronze.png"), category: "Strainers" },
          { name: "Y Type Strainers - Bronze", image: getImg("Y Type Strainers Bronze.png"), category: "Strainers" },
          { name: "Y Type Strainers - Cast Iron", image: getImg("Y Type Strainers Cast Iron.png"), category: "Strainers" },
          { name: "Basket Type Strainers - Cast Iron", image: getImg("Basket Type Strainers Cast Iron.png"), category: "Strainers" },
        ]
      },
      {
        title: "Flexible Joints",
        description: "Flexible connectors are vital for piping systems, offering flexibility to absorb noise, vibration, and thermal expansion while allowing movement.",
        products: [
          { name: "Flexible Connection", image: getImg("Flexible Connection.png"), category: "Connectors" },
          { name: "Rubber Expansion Joints", image: getImg("Rubber Expansion Joints.png"), category: "Connectors" },
          { name: "Tied Flanged", image: getImg("Tied Flanged.png"), category: "Connectors" },
        ]
      },
      {
        title: "Double Regulating Valves",
        description: "A double regulating valve, also known as a balancing valve, is primarily used to control and balance the water flow in chilled water air conditioning systems.",
        products: [
          { name: "Fixed Orifice - DZR Brass", image: getImg("Fixed Orifice DZR Brass.png"), category: "Balancing Valves" },
          { name: "Variable Orifice - DZR Brass", image: getImg("Variable Orifice DZR Brass.png"), category: "Balancing Valves" },
          { name: "Double Regulating Valve - Cast Iron", image: getImg("Double Regulating Valve Cast Iron.png"), category: "Balancing Valves" },
        ]
      },
      {
        title: "PICV",
        description: "The Pressure Independent Control Valve (PICV) is a combined flow limiter and temperature control valve, designed for both variable and constant temperature systems.",
        products: [
          { name: "Linear Characteristic PICV", image: getImg("Linear Characteristic PICV.png"), category: "PICV" },
          { name: "Equal Percentage PICV", image: getImg("Equal Percentage PICV.png"), category: "PICV" },
          { name: "Ductile Iron PICV", image: getImg("Ductile Iron PICV.png"), category: "PICV" },
        ]
      },
      {
        title: "Solenoid Valves",
        description: "A solenoid valve is an electromechanical device that uses an electric current to generate a magnetic field, which operates a mechanism to regulate the opening and closing of fluid flow.",
        products: [
          { name: "Servo - Activated", image: getImg("Servo Activated Solenoid.png"), category: "Solenoid" },
        ]
      },
      {
        title: "Intelligent Control Valves",
        description: "Intelligent Control Valves are designed to maintain optimal flow and pressure conditions at all times, ensuring consistent flow, pressure, or levels despite fluctuations in the supply network. These valves help reduce water loss and contribute to efficient water distribution. Integrated with the ACMO PMD communication device, which functions as a local controller, they provide precise control with auto-adaptive PID for various hydraulic conditions. The ACMO PMD offers pre-configurable hydraulic functions, data logging, and real-time communication with flow meters to adjust pressure according to flow, regardless of time.<br><br>These intelligent control valves have been proven to reduce leakage and burst frequency, providing cost-effective and reliable pressure control. They are essential for smart networks and are widely used in applications such as central air conditioning, water treatment, and heating systems. Integrated with sensor technology, intelligent actuators, and control valves, they offer several benefits for smart network management:<br><br>• Optimized, stable network pressures<br>• Pressure and valve position feedback<br>• Reaction to system failures<br>• Verification of Zones/Pressure Management Areas (PMAs)<br>• Adjustment of reservoir flows<br>• Reduced leakage<br>• Integration with pumps and meters<br>• Feedback on water temperature and quality<br>• Remote control of storage levels<br>• Extended asset life by optimizing maintenance periods",
        products: [
          { name: "Watts Intelligent Control Valves", image: getImg("Watts Intelligent Control Valves.png"), category: "Control Valves" },
        ]
      },
      {
        title: "Relief Valves",
        description: "A relief valve is a safety device that protects pressurized vessels or systems from overpressure by venting fluid when pressure exceeds the design limits.",
        products: [
          { name: "Pressure Relief Valve", image: getImg("Pressure Relief Valve.png"), category: "Valves" },
        ]
      },
      {
        title: "Pumps",
        description: "Pumps are essential components in commercial building systems, serving a range of critical functions such as environmental comfort, potable water supply, and wastewater removal.",
        products: [
          { name: "HVAC Pumps", image: getImg("HVAC Pumps.png"), category: "Pumps" },
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
          { name: "DSR Brass", image: getImg("DSR Brass Valve.png"), category: "HVAC" },
          { name: "Cast Iron", image: getImg("Cast Iron Valve.png"), category: "HVAC" },
        ]
      },
      {
        title: "FCU Valve Packages",
        description: "The flushing bypass kit, featuring a pressure-independent control valve and a Filter ball shut-off valve with an integrated strainer, is designed to maintain design flow rates.",
        products: [
          { name: "FCU Valve Package", image: getImg("FCU Valve Package.png"), category: "HVAC" },
        ]
      },
      {
        title: "Exhaust and Fresh Air Fans",
        description: "A fan is a gas flow-producing device equipped with two or more blades or vanes attached to a rotating shaft.",
        products: [
          { name: "Axial Type Exhaust Fans", image: getImg("Axial Exhaust Fan.png"), category: "Fans" },
          { name: "Centrifugal Type Exhaust Fans", image: getImg("Centrifugal Exhaust Fan.png"), category: "Fans" },
          { name: "Inline Fresh Air Fans", image: getImg("Inline Fresh Air Fan.png"), category: "Fans" },
          { name: "Single Inlet Exhaust Fans", image: getImg("Single Inlet Exhaust Fan.png"), category: "Fans" },
        ]
      },
      {
        title: "Fire Dampers",
        description: "We provide a comprehensive range of mechanical, electromechanical, and actuator-driven fire dampers, designed to operate as standalone units or in conjunction with other dampers.",
        products: [
          { name: "Fusible Fire Dampers", image: getImg("Fusible Fire Damper.png"), category: "Dampers" },
          { name: "Motorised Fire Dampers", image: getImg("Motorised Fire Damper.png"), category: "Dampers" },
        ]
      },
      {
        title: "Air Distribution Products",
        description: "GRILLS WITH COLLAR DAMPERS | DIFFUSERS | VOLUME CONTROL DAMPERS | MOTORISED VOLUME CONTROL DAMPERS",
        products: [
          { name: "Manual VCD", image: getImg("Manual VCD.png"), category: "Air Distribution" },
          { name: "Motorised VCD", image: getImg("Motorised VCD.png"), category: "Air Distribution" },
          { name: "VAV", image: getImg("VAV Box.png"), category: "Air Distribution" },
          { name: "Diffusers and Grills", image: getImg("Diffusers and Grills.png"), category: "Air Distribution" },
        ]
      },
      {
        title: "HVAC Sensors",
        description: "<strong>Pressure Sensors for HVAC and Air Handling Systems:</strong> Pressure sensors are essential in HVAC systems to monitor pressure drops and ensure system performance. They provide accurate measurements to maintain system efficiency. The common unit of measurement is the Pascal (Pa), with typical pressure measurements including differential, high, and low pressures.<br><br>• Differential Pressure Transducers: These sensors compare the pressure between two areas.<br>• High Pressure Transducers: These sensors measure the highest-pressure level in a designated area.<br>• The EE600 is a highly accurate differential air pressure sensor designed for HVAC systems, featuring an IP65 enclosure for durability and reliability.<br><br><strong>Temperature Sensors for HVAC and Air Handling Systems:</strong> Temperature sensors monitor environmental temperature in HVAC systems, providing inputs to control systems that adjust heating or cooling outputs to maintain desired conditions. The EE431 temperature sensor is ideal for HVAC systems, offering active outputs with optional probes for passive recording.<br><br><strong>Humidity Sensors for HVAC and Air Handling Systems:</strong> Humidity sensors regulate pressure and temperature by managing moisture levels within an environment. They ensure optimal humidity to protect infrastructure and maintain controlled environments. The EE150 humidity and temperature transmitter is specifically designed for HVAC applications, offering exceptional performance and value for money.<br><br><strong>Indoor Air Quality Sensors for HVAC and Air Handling Systems:</strong> Indoor air quality sensors are vital for ensuring healthy and well-ventilated environments. These sensors provide data on ventilation efficiency and air filtration effectiveness. The EE800 accurately measures CO2, temperature, relative humidity, and dewpoint, making it an ideal solution for HVAC applications.<br><br><strong>Room Sensors for HVAC and Air Handling Systems:</strong> Room sensors monitor variations in temperature and humidity, ensuring that indoor spaces remain comfortable. These sensors are integral to maintaining optimal conditions in rooms and buildings.",
        products: [
          { name: "Water Flow Switch", image: getImg("Water Flow Switch.png"), category: "Sensors" },
          { name: "Indoor Air Quality Sensor", image: getImg("Indoor Air Quality Sensor.png"), category: "Sensors" },
          { name: "Pressure Sensor", image: getImg("Pressure Sensor.png"), category: "Sensors" },
          { name: "Humidistat", image: getImg("Humidistat.png"), category: "Sensors" },
          { name: "Temperature Sensor", image: getImg("Temperature Sensor.png"), category: "Sensors" },
          { name: "Differential Pressure Switch", image: getImg("Differential Pressure Switch.png"), category: "Sensors" },
          { name: "Temperature & Humidity Sensor", image: getImg("Temperature _ Humidity Sensor.png"), category: "Sensors" },
          { name: "Clean Room Monitor Sensor", image: getImg("Clean Room Monitor.png"), category: "Sensors" },
        ]
      },
      {
        title: "Thermostat",
        description: "A thermostat is a regulating device component which senses the temperature of a physical system and performs actions so that the system's temperature is maintained near a desired setpoint.",
        products: [
          { name: "Thermostat", image: getImg("Thermostat.png"), category: "Controls" },
        ]
      },
      {
        title: "Air Vents",
        description: "Air Vents and Vacuum Valves are designed to expel large volumes of air during system start-up and allow air to re-enter the line during system shutdown or failure.",
        products: [
          { name: "Air Vent", image: getImg("Air Vent.png"), category: "Vents" },
        ]
      },
      {
        title: "BTU Meter",
        description: "BTU meters are precision instruments used to measure the thermal energy consumption of chilled water in British Thermal Units (BTU).",
        products: [
          { name: "BTU Meter", image: getImg("BTU Meter.png"), category: "Meters" },
        ]
      },
      {
        title: "Hydronic Meters",
        description: "A hydrometer is a tool used to measure the density or specific gravity of a liquid when compared to water.",
        products: [
          { name: "Hydronic Flow Meter", image: getImg("Hydronic Flow Meter.png"), category: "Meters" },
        ]
      },
      {
        title: "Water Leak Detection System",
        description: "Water leak monitoring is a critical aspect of building management, particularly in areas with sensitive electrical and electronic equipment.",
        products: [
          { name: "Water Leak Detection System", image: getImg("Water Leak Detection System.png"), category: "Safety" },
        ]
      },
      {
        title: "Thermal and Acoustic Insulation",
        description: "Thermal and acoustic insulation in HVAC and industrial applications plays a critical role in enhancing the efficiency and performance of the structure.",
        products: [
          { name: "Thermal Insulation", image: getImg("Thermal Insulation.png"), category: "Insulation" },
          { name: "Acoustic Insulation", image: getImg("Acoustic Insulation.png"), category: "Insulation" },
        ]
      },
      {
        title: "Insulation Adhesive",
        description: "Thermal Insulation Adhesives are used to seal joints of synthetic rubber insulation foam or major plastic polymers.",
        products: [
          { name: "DUC Insulation", image: getImg("DUC Insulation Adhesive.png"), category: "Insulation" },
        ]
      },
      {
        title: "VFD",
        description: "SINAMICS variable frequency drives offer the ultimate solution for all drive applications, from low voltage to direct current (DC). Designed for enhanced efficiency and versatility, our drives empower your applications to evolve towards a more digital and sustainable future, meeting the demands of modern industries.",
        products: [
          { name: "Variable Frequency Drive", image: getImg("Variable Frequency Drive.png"), category: "Drives" },
        ]
      },
      {
        title: "UPS System",
        description: "An uninterruptible power supply (UPS) is a continuous power system designed to provide automatic backup electricity to a load when the primary power source fails.",
        products: [
          { name: "UPS System", image: getImg("UPS System.png"), category: "Power" },
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
          { name: "Gate Valves", image: getImg("Gate Valves.png"), category: "Fire Valves" },
          { name: "Butterfly Valve", image: getImg("Butterfly Valve.png"), category: "Fire Valves" },
          { name: "Check Valves", image: getImg("Check Valves.png"), category: "Fire Valves" },
        ]
      },
      {
        title: "Fire Hydrant System",
        description: "Fire hydrants are fixed pipe systems connected to a reliable water supply for fire protection. We offer two types: Dry Barrel and Wet Barrel types.",
        products: [
          { name: "Fire Hydrant System", image: getImg("Fire Hydrant System.png"), category: "Hydrant" },
        ]
      },
      {
        title: "Pipes and Fittings",
        description: "Fire sprinkler pipes and related fittings, typically made from carbon steel or ductile iron, are essential for transporting water to firefighting equipment. Ductile iron is designed to last for at least 100 years.",
        products: [
          { name: "Ductile Iron Pipes", image: getImg("Ductile Iron Pipes.png"), category: "Pipes" },
        ]
      },
      {
        title: "Fire Cables",
        description: "Mineral insulated (MI) cables are designed for high-temperature and harsh environments, offering excellent fire resistance. Composed of copper conductors and magnesium oxide insulation, these cables maintain performance even at temperatures exceeding 1000°C.",
        products: [
          { name: "Fire Resistant Cables", image: getImg("Fire Cables.png"), category: "Cables" },
        ]
      },
      {
        title: "Fire Alarm System",
        description: "Fire Detection and Alarm System is meticulously designed to offer comprehensive fire safety solutions across diverse environments.",
        products: [
          { name: "Digital Voice Command", image: getImg("Digital Voice Command.png"), category: "Alarm" },
          { name: "Alarm Cable", image: getImg("Alarm Cable.png"), category: "Alarm" },
          { name: "Alarm Module", image: getImg("Alarm Module.png"), category: "Alarm" },
          { name: "Alarm Panel", image: getImg("Alarm Panel.png"), category: "Alarm" },
          { name: "Fire Detector", image: getImg("Fire Detector.png"), category: "Alarm" },
          { name: "Hooter", image: getImg("Hooter.png"), category: "Alarm" },
          { name: "Manual Call Point", image: getImg("Manual Call Point.png"), category: "Alarm" },
        ]
      },
      {
        title: "VESDA System",
        description: "The Xtralis Fire Detection and Alarm System, part of Honeywell's suite of safety solutions, offers advanced technologies for early fire detection and comprehensive alarm management.",
        products: [
          { name: "VESDA System", image: getImg("VESDA System.png"), category: "System" },
        ]
      },
      {
        title: "Pre Action System",
        description: "Pre-action fire sprinkler systems utilize the dry pipe concept, designed for water-sensitive environments.",
        products: [
          { name: "Inter Lock", image: getImg("Inter Lock.png"), category: "Pre Action" },
          { name: "Double Inter Lock", image: getImg("Double Inter Lock.png"), category: "Pre Action" },
          { name: "Potter Release", image: getImg("Potter Release.png"), category: "Pre Action" },
          { name: "Pre Action System", image: getImg("Pre Action System.png"), category: "Pre Action" },
          { name: "Interlock - Dry Pilot", image: getImg("Interlock Dry Pilot.png"), category: "Pre Action" },
          { name: "Double Interlock Electric", image: getImg("Double Interlock Electric.png"), category: "Pre Action" },
          { name: "Interlock - Wet Pilot", image: getImg("Interlock Wet Pilot.png"), category: "Pre Action" },
        ]
      },
      {
        title: "Fire Sprinkler System",
        description: "Fire sprinklers are compact, thermosensitive devices featuring glass bulbs that activate when exposed to heat. Constructed from brass with various finishes.",
        products: [
          { name: "Pressure Gauge", image: getImg("Pressure Gauge.png"), category: "Sprinkler" },
          { name: "Recessed Sprinkler", image: getImg("Recessed Sprinkler.png"), category: "Sprinkler" },
          { name: "Side Wall Sprinkler", image: getImg("Side Wall Sprinkler.png"), category: "Sprinkler" },
          { name: "Sprinkler Guard", image: getImg("Sprinkler Guard.png"), category: "Sprinkler" },
          { name: "Swing Check", image: getImg("Swing Check Sprinkler.png"), category: "Sprinkler" },
          { name: "Test and Drain", image: getImg("Test and Drain.png"), category: "Sprinkler" },
          { name: "Upright Sprinkler", image: getImg("Upright Sprinkler.png"), category: "Sprinkler" },
          { name: "Vertical Side Wall", image: getImg("Vertical Side Wall.png"), category: "Sprinkler" },
          { name: "Water Motor Gong", image: getImg("Water Motor Gong.png"), category: "Sprinkler" },
          { name: "Y Strainer", image: getImg("Y Strainer.png"), category: "Sprinkler" },
          { name: "Zone Controlled Manifold", image: getImg("Zone Controlled Manifold.png"), category: "Sprinkler" },
          { name: "Butterfly Valve", image: getImg("Butterfly Valve Sprinkler.png"), category: "Sprinkler" },
          { name: "Concealed Sprinkler", image: getImg("Concealed Sprinkler.png"), category: "Sprinkler" },
          { name: "Conventional Sprinkler", image: getImg("Conventional Sprinkler.png"), category: "Sprinkler" },
          { name: "Flow Switch", image: getImg("Flow Switch.png"), category: "Sprinkler" },
          { name: "Gate Valve", image: getImg("Gate Valve Sprinkler.png"), category: "Sprinkler" },
          { name: "Pendant Sprinkler", image: getImg("Pendant Sprinkler.png"), category: "Sprinkler" },
        ]
      },
      {
        title: "CO2 Fire Suppression System",
        description: "Our CO2 fire suppression systems are meticulously engineered to protect critical assets such as electrical cabinets, electronic equipment, machinery, and storage areas.",
        products: [
          { name: "CO2 Gas Suppression System", image: getImg("CO2 Gas Suppression System.png"), category: "Suppression" },
        ]
      },
      {
        title: "Novec System",
        description: "Novec 1230 is a cutting-edge, gas-based chemical extinguishing system that offers rapid, reliable fire suppression with minimal environmental impact.",
        products: [
          { name: "Novec System", image: getImg("Novec System.png"), category: "Suppression" },
        ]
      },
      {
        title: "Fire Fighting Pumps",
        description: "We offer comprehensive solutions for firefighting systems, including fire pumps, diesel pumps, jockey pumps, and various types of fire pumps.",
        products: [
          { name: "Fire Fighting Pumps", image: getImg("Fire Fighting Pumps.png"), category: "Pumps" },
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
          { name: "PVC Pipes and Fittings", image: getImg("PVC Pipes and Fittings.png"), category: "Pipes" },
        ]
      },
      {
        title: "CPVC Pipes and Fittings",
        description: "The CPVC plumbing system is a durable and cost-effective solution for both hot and cold water applications. Made from chlorinated polyvinyl chloride, the pipes and fittings are available in a complete range of sizes from ½\" to 2\".",
        products: [
          { name: "CPVC Pipes and Fittings", image: getImg("CPVC Pipes and Fittings.png"), category: "Pipes" },
        ]
      },
      {
        title: "UPVC Pipes and Fittings",
        description: "UPVC White Pipe Fittings Systems are the result of advanced polymer chemistry research, designed to withstand harsh weather conditions and demanding usage.",
        products: [
          { name: "UPVC Pipes and Fittings", image: getImg("UPVC Pipes and Fittings.png"), category: "Pipes" },
        ]
      },
      {
        title: "PPR Pipes and Fittings",
        description: "Indo Green PPR pipes are the latest and most advanced solution for a wide range of plumbing applications. These pipes and their corresponding fittings are designed to handle both hot and cold water, making them versatile for various uses beyond traditional plumbing.",
        products: [
          { name: "PPR Pipes and Fittings", image: getImg("PPR Pipes and Fittings.png"), category: "Pipes" },
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
        products: [
          { name: "Electric Panel Cables", image: getImg("Electric Panel Cables.png"), category: "Cables" },
          { name: "Power Cables", image: getImg("Power Cables.png"), category: "Cables" },
          { name: "Armoured Cables", image: getImg("Armoured Cables.png"), category: "Cables" },
          { name: "Rubber Cables", image: getImg("Rubber Cables.png"), category: "Cables" },
          { name: "Halogen-Free Cables", image: getImg("Halogen-Free Cables.png"), category: "Cables" },
          { name: "Fire-Resistant Cables", image: getImg("Fire-Resistant Cables.png"), category: "Cables" },
          { name: "Control Cables", image: getImg("Control Cables.png"), category: "Cables" },
          { name: "Instrumentation Cables", image: getImg("Instrumentation Cables.png"), category: "Cables" },
          { name: "Solar Cables", image: getImg("Solar Cables.png"), category: "Cables" },
          { name: "Aluminium Cables", image: getImg("Aluminium Cables.png"), category: "Cables" },
        ]
      },
      {
        title: "Circuit Breakers",
        description: "",
        products: [
          { name: "MCBs", image: getImg("MCBs.png"), category: "Breakers" },
          { name: "MCCB", image: getImg("MCCB.png"), category: "Breakers" },
          { name: "ACB", image: getImg("ACB.png"), category: "Breakers" },
          { name: "Insulated Case Circuit Breakers", image: getImg("Insulated Case Circuit Breakers.png"), category: "Breakers" },
        ]
      }
    ]
  }
};
