import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { ChevronRight } from "lucide-react";

import imgGeneric from "../../www.psgbiz.com/Frame-29.png";

// MEP - Valves & General
import imgBrassBallValve from "../../www.psgbiz.com/BRASS-BALL-VALVE-150x150.png";
import imgBronzeBallValve from "../../www.psgbiz.com/BRONZE-BALL-VALVES-150x150.png";
import imgDzrBallValve from "../../www.psgbiz.com/DZR-BALL-VALVE-150x150.png";
import imgCastIronBallValve from "../../www.psgbiz.com/CAST-IRON-BALL-VALVE-150x150.png";
import imgDuctileIronBallValve from "../../www.psgbiz.com/DUCTILE-IRON-BALL-VALVE-150x150.png";

import imgNonRisingLeadFree from "../../www.psgbiz.com/Non-rising-stem-Lead-free-gate-valve-150x150.png";
import imgNonRisingBrass from "../../www.psgbiz.com/GATE-VALVE-150x150.png";
import imgLockshield from "../../www.psgbiz.com/LOCK-SHIELD-GATE-VALVE-150x150.png";
import imgRisingCastIron from "../../www.psgbiz.com/RISING-STEM-GATE-VALVE-150x150.png";
import imgNonRisingCastIron from "../../www.psgbiz.com/NON-RISING-DI-GATE-VALVE-150x150.png";

import imgLugBf from "../../www.psgbiz.com/LUG-TYPE-BF-VALVE-150x150.png";
import imgWaferBf from "../../www.psgbiz.com/WAFER-TYPE-BF-VALVE-150x150.png";
import imgFlangedBf from "../../www.psgbiz.com/FLANGED-TYPE-GEAR-OPERATED-BF-VALVE-150x150.png";
import imgCentricBf from "../../www.psgbiz.com/CENTRIC-BF-VALVE-150x150.png";
import imgDoubleEccentricBf from "../../www.psgbiz.com/DOUBLE-ECCENTRIC-BF-VALVE-150x150.png";

import imgSwingCheckBrass from "../../www.psgbiz.com/BRASS-SWING-CHECK-VALVE-150x150.png";
import imgLiftCheckBrass from "../../www.psgbiz.com/LIFT-CHECK-VALVE-BRASS-150x150.png";
import imgSwingCheckBronze from "../../www.psgbiz.com/BRASS-CHECK-VALVE-150x150.png";
import imgSwingCheckCast from "../../www.psgbiz.com/SWING-CHECK-VALVE-150x150.png";
import imgDualPlateCheck from "../../www.psgbiz.com/DUAL-PLATE-CHECK-VALVE-CAST-IRON-150x150.png";
import imgSilentCheck from "../../www.psgbiz.com/SILENT-CHECK-VALVE-150x150.png";

import imgYStrainerBrass from "../../www.psgbiz.com/BRASS-TYPE-Y-STRAINERS-150x150.png";
import imgYStrainerBronze from "../../www.psgbiz.com/BRONZE-TYPE-Y-STRAINER-150x150.png";
import imgYStrainerCast from "../../www.psgbiz.com/CAST-IRON-Y-STRAINERS-150x150.png";
import imgBasketStrainer from "../../www.psgbiz.com/BASKET-TYPE-Y-STRAINER-150x150.png";

import imgFlexibleConnectors from "../../www.psgbiz.com/FLEXIBLE-CONNECTORS-150x150.png";
import imgRubberExpansion from "../../www.psgbiz.com/RUBBER-EXPANSION-JOINTS-150x150.png";
import imgTiedFlanged from "../../www.psgbiz.com/TIED-FLANGE-EXPANSION-BELLOWS-1-150x150.png";

import imgFixedOrifice from "../../www.psgbiz.com/FIZED-ORIFICE-DOUBLE-REGULATING-VALVE-150x150.png";
import imgVariableOrifice from "../../www.psgbiz.com/DOUBLE-REGULATING-VALVES-BRASS-150x150.png";
import imgDoubleRegCast from "../../www.psgbiz.com/DOUBLE-REGLATING-VALVE-CAST-IRON-150x150.png";

import imgPicvLinear from "../../www.psgbiz.com/LINEAR-CHARACTERISTIC-PICV-VALVE-150x150.png";
import imgPicvEqual from "../../www.psgbiz.com/EQUAL-PERCENTACE-PICV-VALVE-150x150.png";
import imgPicvDuctile from "../../www.psgbiz.com/DUCTILE-IRON-PICV-VALVE-150x150.png";

import imgDpcvBrass from "../../www.psgbiz.com/DPC-VALVE-BRASS-150x150.png";
import imgDpcvCast from "../../www.psgbiz.com/MODULATING-DPC-VALVE-CAST-IRON-150x150.png";

import imgFcu from "../../www.psgbiz.com/FCU-VALVE-PACKAGE-150x150.png";
import imgSolenoid from "../../www.psgbiz.com/SOLENOID-VALVES-150x150.png";
import imgIntelligent from "../../www.psgbiz.com/INTELLIGENT-CONTROL-VALVES-150x150.png";
import imgRelief from "../../www.psgbiz.com/PRESSURE-RELIEF-VALVE-150x150.png";
import imgAirVents from "../../www.psgbiz.com/AIR-VENTS-150x150.png";
import imgBTU from "../../www.psgbiz.com/BTU-METER-150x150.png";
import imgWLD from "../../www.psgbiz.com/WLD-SYSTEM-150x150.png";

import imgAxial from "../../www.psgbiz.com/AXIAL-TYPE-EXHAUST-FANS-150x150.png";
import imgCentrifugal from "../../www.psgbiz.com/CENTRIFUGAL-TYPE-EXHAUST-FANS-150x150.png";
import imgInline from "../../www.psgbiz.com/INLINE-FRESH-AIR-FANS-150x150.png";
import imgSingleInlet from "../../www.psgbiz.com/SINGLE-INLET-EXHAUST-FANS-150x150.png";

import imgPressureSensor from "../../www.psgbiz.com/PRESSURE-SENSOR-150x150.png";
import imgTempSensor from "../../www.psgbiz.com/TEMPERATURE-SENSOR-150x150.png";
import imgHumidistat from "../../www.psgbiz.com/HUMIDISTAT-150x150.png";
import imgIAQ from "../../www.psgbiz.com/INDOOR-AIR-QUALITY-SENSOR-150x150.png";
import imgThermostat from "../../www.psgbiz.com/THERMOSTAT-150x150.png";

import imgFusibleDamper from "../../www.psgbiz.com/FUSIBLE-FIRE-DAMPERS-150x150.png";
import imgManualVCD from "../../www.psgbiz.com/MANUAL-VCD-150x150.png";
import imgMotorisedVCD from "../../www.psgbiz.com/MOTORISED-VCD-150x150.png";
import imgVAV from "../../www.psgbiz.com/VAV-150x150.png";

import imgThermalIns from "../../www.psgbiz.com/THERMAL-INSUALTION--150x150.png";
import imgAcousticIns from "../../www.psgbiz.com/ACOUSTIC-INSULATION-150x150.png";
import imgDUC from "../../www.psgbiz.com/DUC-INSULATION-150x150.png";
import imgHydronic from "../../www.psgbiz.com/HYDRONIC-FLOW-METER--150x150.png";
import imgVFD from "../../www.psgbiz.com/VFD-150x150.png";
import imgUPS from "../../www.psgbiz.com/UPS-SYSTEM-150x150.png";
import imgMCB from "../../www.psgbiz.com/MCBS-150x150.png";
import imgMCCB from "../../www.psgbiz.com/MCCB-150x150.png";
import imgACB from "../../www.psgbiz.com/ACB-150x150.png";

import imgAlarmPanel from "../../www.psgbiz.com/FIRE-ALARM-PANEL-150x150.png";
import imgFireDetector from "../../www.psgbiz.com/FIRE-DETECTORS-150x141.png";
import imgManualCallPoint from "../../www.psgbiz.com/MANUAL-CALL-POINT-150x150.png";
import imgHooter from "../../www.psgbiz.com/HOOTER--r0pg55wd1cazam4c98gawtrsfixucgtv03nrda6pqk.png";
import imgPressureGauge from "../../www.psgbiz.com/PRESSURE-GAUGE-150x150.png";
import imgRecessedSprinkler from "../../www.psgbiz.com/RECESSED-SPRINKLER-150x150.png";
import imgSideWallSprinkler from "../../www.psgbiz.com/SIDE-WALL-SPRINKLER-150x150.png";
import imgSprinklerGuard from "../../www.psgbiz.com/SPRINKLER-GUARDS-150x150.png";
import imgSwingCheck from "../../www.psgbiz.com/SWING-CHECK-VALVE-150x150.png";
import imgTestAndDrain from "../../www.psgbiz.com/TEST-AND-DRAIN-VALVE-150x150.png";
import imgUprightSprinkler from "../../www.psgbiz.com/UPRIGHT-SPRINKLER-150x150.png";
import imgConcealedSprinkler from "../../www.psgbiz.com/CONCEALED-SPRINKLER-150x150.png";
import imgConventionalSprinkler from "../../www.psgbiz.com/CONVENTIONAL-SPRINKLER-150x150.png";
import imgFlowSwitch from "../../www.psgbiz.com/WATER-FLOW-SWITCH-150x150.png";
import imgPendantSprinkler from "../../www.psgbiz.com/PENDANT-SPRINKLER-150x150.png";
import imgVerticalSideWall from "../../www.psgbiz.com/VERTICAL-SIDE-WALL-SPRINKLER-150x150.png";
import imgWaterMotorGong from "../../www.psgbiz.com/WATER-MOTOR-GONG-BELL-150x150.png";
import imgZoneControl from "../../www.psgbiz.com/ZONE-CONTROLLED-MANIFOLD-ASSEMBLY-150x150.png";

import imgCo2 from "../../www.psgbiz.com/CO2-GAS-SUPPRESSION-SYSTEM-150x150.png";
import imgNovec from "../../www.psgbiz.com/NOVEC-SYSTEM-150x150.png";
import imgFirePumps from "../../www.psgbiz.com/FIRE-FIGHTING-PUMPS-1-150x150.png";
import imgFireHydrant from "../../www.psgbiz.com/FIRE-HYDRANT-SYSTEM-AND-ACCESSORIES-150x150.jpg.jpeg";
import imgDigitalVoice from "../../www.psgbiz.com/DIGITAL-VOICE-COMMAND-150x150.png";
import imgAlarmCable from "../../www.psgbiz.com/FIRE-ALARM-CABLES-150x150.png";
import imgAlarmModule from "../../www.psgbiz.com/FIRE-ALARM-MODULES-150x150.png";
import imgVesda from "../../www.psgbiz.com/VESDA-SYSTEM-150x150.png";
import imgPreAction from "../../www.psgbiz.com/PRE-ACTION-SYSTEM-150x150.png";
import imgDoubleInterlock from "../../www.psgbiz.com/DOUBLE-INTERLOCK-PREACTION-WITH-ELECTRIC-RELEASE-150x150.png";
import imgPotterRelease from "../../www.psgbiz.com/POTTER-RELEASE-PANEL--150x150.png";
import imgSingleInterlockDry from "../../www.psgbiz.com/SINGLE-INTERLOCK-PREACTION-WITH-DRY-PILOT-ACTUATOR-150x150.png";
import imgSingleInterlockElectric from "../../www.psgbiz.com/SINGLE-INTERLOCK-PREACTION-WITH-ELECTRIC-RELEASE-150x150.png";
import imgSingleInterlockWet from "../../www.psgbiz.com/SINGLE-INTERLOCK-PREACTION-WITH-WET-PILOT-ACTUATION-150x150.png";

type Product = { name: string; img: string; description?: string };
type Section = { title: string; description?: string; products?: Product[] };

const timberInterior: Section = {
  title: "TIMBER FOR INTERIORS",
  description:
    "Wood is an incredibly popular product that is often used by architects and designers to decorate the interiors of our buildings. This is because wood is durable, economical, easy to work with, long-lasting, and combines effortlessly with other textures to create a striking, inspiring aesthetic. As the most sustainable building material available, wood also brings with it additional benefits such as noise absorption and rapid heating and cooling.\n\nThe use of solid wood in interiors has increased significantly in recent years ranging from wooden doors, door frames to interior designing and wooden flooring. From hardwood from east to medium and soft woods till west, PSG offers wide range of sawn timber species across the globe.",
  products: [
    { name: "Teak Wood", img: imgGeneric },
    { name: "Meranti", img: imgGeneric },
    { name: "Iroko", img: imgGeneric },
    { name: "Mahogany", img: imgGeneric },
    { name: "Dabema", img: imgGeneric },
    { name: "Oak", img: imgGeneric },
    { name: "Okume", img: imgGeneric },
    { name: "Merbau", img: imgGeneric },
    { name: "Balau", img: imgGeneric },
  ],
};

const timberConstruction: Section = {
  title: "TIMBER FOR CONSTRUCTION",
  description:
    "Wood as shuttering is very common engineering tool for many reasons. For example, wood is light in weight as compared to metallic shuttering and easy to handle. Wood is less costly if compared with other shuttering material like steel and plastic etc. Wood can be cut and modified as per required sizes and shapes.\n\nFor this reason, the drawbacks of wood are neglected. Moreover, in areas where labour is not cheap, the depreciation cost of wood is preferred to that of labour. Wood is used in shuttering in many forms, like wooden logs (bally), wooden panels, wooden boards and wooden girders etc.\n\nPine wood, Spruce, SYP etc. are some of the species PSG offers for the construction field sourcing from European and American countries",
  products: [
    { name: "Pine", img: imgGeneric },
    { name: "Spruce", img: imgGeneric },
    { name: "SYP Timber", img: imgGeneric },
  ],
};

const plywoodInterior: Section = {
  title: "PLYWOOD FOR INTERIOR",
  description:
    "An extremely versatile product, plywood is used for a wide range of interior applications such as Paneling, Cabinets, Furniture, walls, Ceilings and Interior decorations and timber furnishings.\n\nPSG offers wide range for plywood products ranging from MR grade to Marine BWP grade extensively used in the Interior sector being sourced across Asian countries",
  products: [
    { name: "BWP Grade", img: imgGeneric },
    { name: "MR Grade", img: imgGeneric },
  ],
};

const plywoodConstruction: Section = {
  title: "PLYWOOD FOR CONSTRUCTION",
  description:
    "Shuttering plywood is highly dense hardwood covered with a smooth coating of film on either side. It is primarily used in construction applications such as cement formworks and exterior applications.\n\nThey might be used up to 15-20 times before needing to be replaced. Brown and black are the two surface color options available for film-faced plywood. India, Indonesia, Malaysia and Vietnam are major countries from where PSG sources plywood used for construction",
  products: [{ name: "Film Face Shutter", img: imgGeneric }],
};

const mdfSections: Section[] = [
  {
    title: "MDF (MEDIUM DENSITY FIBERBOARD)",
    description:
      "An extremely versatile product, plywood is used for a wide range of interior applications such as Paneling, Cabinets, Furniture, walls, Ceilings and Interior decorations and timber furnishings.\n\nPSG offers wide range for plywood products ranging from MR grade to Marine BWP grade extensively used in the Interior sector being sourced across Asian countries",
    products: [
      { name: "MR Grade", img: imgGeneric },
      { name: "HMR MDF", img: imgGeneric },
      { name: "Laminated MDF", img: imgGeneric },
    ],
  },
];

const chipboardSections: Section[] = [
    {
      title: "CHIPBOARD",
      description:
        "Chipboard or Particle Board are made by mixing small wood particles with epoxy resin, which are pressed together under intense heat and pressure to produce a rigid board, typically with a smooth surface.\n\nChipboards are used for making furnitures, interior home accents, kitchen cabinets, Sound proofing, Building and flooring insulation, Packaging etc.\n\nBased on the dense forming and resin used, chipboard varies in densities and finishes. PSG sources MDF and chipboard from Indonesia, Thailand, Vietnam, India and Malaysia.",
      products: [
        { name: "Laminated", img: imgGeneric },
        { name: "Plain", img: imgGeneric },
      ],
    },
  ];

const hardwareSections: Section[] = [
    {
        title: "DOOR HARDWARE",
        description: "Hardware (door) is a broad term used to group all items that are fitted or related to doors and includes hinges, pull handles, locks and latches, cylinder and keys, door controls, panic exit devices, bolts, hold-open devices, any part of an automatic closing device that is attached to the doorset, and all (door) furniture",
        products: [
            { name: "Handle", img: imgGeneric },
            { name: "Pull Handles", img: imgGeneric },
            { name: "Locks", img: imgGeneric },
            { name: "Cylinders and Key", img: imgGeneric },
            { name: "Hinges", img: imgGeneric },
            { name: "Handle", img: imgGeneric },
            { name: "Panic Hardware", img: imgGeneric },
            { name: "Accessories", img: imgGeneric },
        ]
    },
    {
        title: "FURNITURE FITTINGS",
        description: "Furniture fittings are the individual pieces needed to create a working, durable piece of furniture or cabinet.\n\nCabinet hinges, drawer runners, cabinet handles, cabinet knobs and accessories are some of the hardwares where PSG are expertise",
        products: [
            { name: "Hinges", img: imgGeneric },
            { name: "Runners", img: imgGeneric },
            { name: "Handles", img: imgGeneric },
            { name: "Cabinet Accessories", img: imgGeneric },
            { name: "Cabinet Knobs", img: imgGeneric },
        ]
    },
    {
        title: "GLASS FITTINGS",
        description: "Glass fittings are essential components for glass doors and partitions. These include hinges, pivots, posts, handles, sliding door systems, shower fittings and so on.\n\nIn association with Hardware experts LOCKRON (UK), PSG offers wide range of complete hardwares related to Door, Furniture and Glass",
        products: [
            { name: "Spring", img: imgGeneric },
            { name: "Patch Fittings", img: imgGeneric },
            { name: "Pull Handles", img: imgGeneric },
            { name: "Glass Door Locks", img: imgGeneric },
            { name: "Hinges", img: imgGeneric },
            { name: "Shower Fittings", img: imgGeneric },
        ]
    }
];

const mepHVAC: Section[] = [
  {
    title: "MECHANICAL - HVAC",
    description: "PSG is a leading provider of a wide range of products and comprehensive solutions for diverse projects. Renowned as one of the most trusted suppliers of engineering and industrial goods in the Middle East and GCC region, PSG delivers exceptional quality and reliability to meet the unique needs of its clients.\n\nHVAC, which stands for Heating, Ventilating, and Air Conditioning, encompasses a range of systems designed to maintain optimal indoor conditions, from residential air conditioners to large-scale systems used in industrial complexes and high-rise buildings. A well-designed HVAC system aims to provide thermal comfort and regulate indoor environments by applying the principles of thermodynamics, fluid mechanics, and heat transfer.",
    products: []
  },
  {
    title: "GATE VALVE",
    description: "Gate valves are bi-directional, multi-purpose valves, available in a variety of materials such as brass, lead-free brass, bronze, and cast iron, with options for either rising or non-rising stems. These valves are widely used in residential and commercial buildings for a range of services.",
    products: [
        { name: "Non rising Stem- lead free brass", img: imgNonRisingLeadFree },
        { name: "Non rising stem - brass", img: imgNonRisingBrass },
        { name: "Lockshield - brass", img: imgLockshield },
        { name: "Rising stem - cast iron", img: imgRisingCastIron },
        { name: "Non rising stem cast iron", img: imgNonRisingCastIron },
    ]
  },
  {
    title: "BUTTERFLY VALVES",
    description: "Butterfly valves are bi-directional, quick shut-off valves available in lug, wafer, or double-flanged types, suitable for residential and commercial applications. They operate with a quarter-turn motion, allowing for easy and fast flow control.",
    products: [
        { name: "Lug type", img: imgLugBf },
        { name: "Wafer type", img: imgWaferBf },
        { name: "Flanged type", img: imgFlangedBf },
        { name: "Centric - butterfly valves", img: imgCentricBf },
        { name: "Double eccentric", img: imgDoubleEccentricBf },
    ]
  },
  {
    title: "BALL VALVES",
    description: "Ball valves are quarter-turn shut-off valves made from materials like brass, bronze, lead-free brass, cast iron, and stainless steel. They control the flow of liquids or gases by rotating a ball with a bore 90 degrees.",
    products: [
        { name: "Bronze ball valve", img: imgBronzeBallValve },
        { name: "Brass ball valve", img: imgBrassBallValve },
        { name: "DZR brass ball valve", img: imgDzrBallValve },
        { name: "Cast iron ball valve", img: imgCastIronBallValve },
        { name: "Ductile iron ball valve", img: imgDuctileIronBallValve },
    ]
  },
  {
    title: "CHECK VALVES",
    description: "A check valve, or non-return valve, allows fluid to flow in only one direction, preventing backflow. Made from materials like bronze, brass, cast iron, and ductile iron.",
    products: [
        { name: "Swing check valve - lead free brass", img: imgSwingCheckBrass },
        { name: "Lift check valve - brass", img: imgLiftCheckBrass },
        { name: "Swing check valve - bronze", img: imgSwingCheckBronze },
        { name: "Swing check valve - cast iron", img: imgSwingCheckCast },
        { name: "Dual plate check valve - cast iron", img: imgDualPlateCheck },
        { name: "Silent check valve - cast iron", img: imgSilentCheck },
    ]
  },
  {
    title: "STRAINERS",
    description: "Strainers are key components used to protect valves, pumps, and other equipment by filtering unwanted particles from fluids.",
    products: [
        { name: "Y Type Strainers- brass", img: imgYStrainerBrass },
        { name: "Y Type - DSR Bronze", img: imgYStrainerBronze },
        { name: "Y Type Strainers - Cast Iron", img: imgYStrainerCast },
        { name: "Basket Type strainers - cast iron", img: imgBasketStrainer },
    ]
  },
  {
    title: "FLEXIBLE JOINTS",
    description: "Flexible connectors are vital for piping systems, offering flexibility to absorb noise, vibration, and thermal expansion while allowing movement. These connectors minimize stress and forces, ensuring reliable operation and isolating vibrations from mechanical equipment. Expansion joints, ideal for absorbing thermal expansion or movement where expansion loops are impractical, provide stress relief and compensate for lateral, torsional, and angular movements.",
    products: [
        { name: "Flexible Connection", img: imgFlexibleConnectors },
        { name: "Rubber Expansion Joints", img: imgRubberExpansion },
        { name: "Tied Flanged", img: imgTiedFlanged },
    ]
  },
  {
    title: "DOUBLE REGULATING VALVES",
    description: "A double regulating valve, also known as a balancing valve, is primarily used to control and balance the water flow in chilled water air conditioning systems. It is installed in the return line of the equipment, where the flow is adjusted to match the design specifications by manipulating the valve spindle. Modern advancements in flow measurement facilitate easier flow balancing by providing real-time readings during valve adjustment.",
    products: [
        { name: "Fixed Orifice - DZR Brass", img: imgFixedOrifice },
        { name: "Variable Orifice - DZR Brass", img: imgVariableOrifice },
        { name: "Double Regulating Value - Cast iron", img: imgDoubleRegCast },
    ]
  },
  {
    title: "PRESSURE INDEPENDENT CONTROL VALVES",
    description: "The Pressure Independent Control Valve (PICV) is a combined flow limiter and temperature control valve, designed for both variable and constant temperature systems. PICVs integrate an automatic temperature control valve with an automatic flow regulating valve, maintaining a constant flow of hot or chilled water regardless of pressure changes. These valves eliminate the need for system balancing during commissioning, ensuring consistent flow to coils as pressure fluctuates.",
    products: [
        { name: "Linear Characteristic PICV", img: imgPicvLinear },
        { name: "Equal Percentage Characteristic PICV", img: imgPicvEqual },
        { name: "Ductile Iron PICV", img: imgPicvDuctile },
    ]
  },
  {
    title: "DIFFERENTIAL PRESSURE CONTROL VALVE",
    description: "To address the increasing use of variable speed pumps in HVAC applications, we have introduced a range of Differential Pressure Control Valves (DPCV) designed to optimize system performance. The DPCV is set to a maximum differential pressure, ensuring that the flow does not exceed the desired rate, thereby reducing energy consumption, minimizing noise, and simplifying the commissioning process.",
    products: [
        { name: "DSR Brass", img: imgDpcvBrass },
        { name: "Cast Iron", img: imgDpcvCast },
    ]
  },
  {
    title: "FCU VALVE PACKAGES",
    description: "The flushing bypass kit, featuring a pressure-independent control valve and a Filter ball shut- off valve with an integrated strainer, is designed to maintain design flow rates and provide modulating temperature control. The kit includes isolation valves on both the flow and return lines for efficient system management. The flow valve typically combines an isolation valve and a strainer, while the return valve is integrated into the fixed bypass or a separate valve on the adjustable centre flushing bypass. A flushing bypass and blowdown valve are also included, allowing the valve set and connected terminal unit to be flushed out of the circuit and subsequently forward flushed.\n\nThis kit offers maximum flexibility, allowing for customization in various configurations. Components can be adjusted, and the centre-to-centre distance of the flushing bypass can be modified to suit specific system requirements.",
    products: [{ name: "FCU Valve Package", img: imgFcu }],
  },
  {
    title: "SOLENOID VALVES",
    description:
      "A solenoid valve is an electromechanical device that uses an electric current to generate a magnetic field, which operates a mechanism to regulate the opening and closing of fluid flow within a valve. These valves vary in terms of the electric current type, magnetic field strength, and fluid control mechanisms, such as linear-action plunger actuators, pivoted- armature actuators, or rocker actuators. Solenoid valves can have two-port designs to regulate flow or multi-port designs to switch flows between multiple ports. Multiple solenoid valves can be integrated into a manifold.\n\nSolenoid valves are widely used control elements in fluidic systems, responsible for functions such as shutting off, releasing, dosing, distributing, or mixing fluids. They are favoured for their fast and reliable switching, long service life, good compatibility with different fluids, low control power requirements, and compact design, making them suitable for various applications.",
    products: [{ name: "Servo - Activated", img: imgSolenoid }],
  },
  {
    title: "INTELLIGENT CONTROL VALVES",
    description:
      "Intelligent Control Valves are designed to maintain optimal flow and pressure conditions at all times, ensuring consistent flow, pressure, or levels despite fluctuations in the supply network. These valves help reduce water loss and contribute to efficient water distribution. Integrated with the ACMO PMD communication device, which functions as a local controller, they provide precise control with auto-adaptive PID for various hydraulic conditions. The ACMO PMD offers pre-configurable hydraulic functions, data logging, and real-time communication with flow meters to adjust pressure according to flow, regardless of time.\n\nThese intelligent control valves have been proven to reduce leakage and burst frequency, providing cost-effective and reliable pressure control. They are essential for smart networks and are widely used in applications such as central air conditioning, water treatment, and heating systems. Integrated with sensor technology, intelligent actuators, and control valves, they offer several benefits for smart network management:\n\n• Optimized, stable network pressures\n• Pressure and valve position feedback\n• Reaction to system failures\n• Verification of Zones/Pressure Management Areas (PMAs)\n• Adjustment of reservoir flows\n• Reduced leakage\n• Integration with pumps and meters\n• Feedback on water temperature and quality\n• Remote control of storage levels\n• Extended asset life by optimizing maintenance periods",
    products: [
      {
        name: "Watts intelligent control values",
        img: imgIntelligent,
      },
    ],
  },
  {
    title: "RELIEF VALVES",
    description:
      "A relief valve is a safety device that protects pressurized vessels or systems from overpressure by venting fluid when pressure exceeds the design limits. It ensures safety by preventing catastrophic failure during overpressure events. Unlike other system controls, the valve operates autonomously, using only the process fluid as power, ensuring functionality even during power failures.\n\nDesigned for reliability, relief valves open at a set pressure, regulate flow during overpressure, and close once normal pressure is restored. Made from materials compatible with various fluids, including corrosive ones, they are used in applications such as hot water heating and domestic boilers to safeguard against excessive pressure.",
    products: [{ name: "Relief Valve", img: imgRelief }],
  },
  {
    title: "AIR VENTS",
    description:
      "Air Vents and Vacuum Valves are designed to expel large volumes of air during system start- up and allow air to re-enter the line during system shutdown or failure. When water enters the valve, the float rises to close the discharge port, remaining closed until system pressure drops to near zero psi. The valve does not release air while the system is under pressure. Air Vents provide superior air release capacity compared to similar-sized vents, ensuring reliable operation and reducing water hammer incidents. Constructed from corrosion- resistant, UV-protected reinforced nylon, they feature no metal components to rust or corrode.",
    products: [{ name: "Air Vents", img: imgAirVents }],
  },
  {
    title: "BTU METER",
    description:
      "BTU meters are precision instruments used to measure the thermal energy consumption of chilled water in British Thermal Units (BTU), a standard measure of thermal energy for commercial and residential buildings. These meters are essential for billing energy usage in chilled water systems within commercial, industrial, and office buildings. Our BTU meters are designed for high accuracy and reliability.\n\nThe meters consist of a calibrated electromagnetic flowmeter, a pair of temperature sensors, and a flow transmitter with an integrated energy computing unit to calculate the net heat consumed. We offer BTU meters for various applications, including air handling units, chilled water systems, and HVAC systems, particularly in centralized air conditioning setups for both commercial and industrial buildings.",
    products: [{ name: "BTU Meter", img: imgBTU }],
  },
  {
    title: "WATER LEAK DETECTION SYSTEM",
    description:
      "Water leak monitoring is a critical aspect of building management, particularly in areas with sensitive electrical and electronic equipment or valuable assets. In server rooms, where cooling systems are crucial, our water leak detection systems provide reliable monitoring when the guidelines in the information security catalogue are followed. These systems are designed to monitor rooms, piping, and individual equipment, detecting water leaks with meter-level accuracy.\n\nAny leak is immediately reported to the buildings surveillance system, allowing for rapid identification of the leaks location and prompt implementation of countermeasures. Our systems offer flexibility, allowing sensor cables and point sensors to be combined as needed. The monitoring electronics are available with or without leak location identification, ensuring customized solutions for various building requirements.",
    products: [
      { name: "Water Leak Detection System", img: imgWLD },
    ],
  },
  {
    title: "EXHAUST AND FRESH AIR FANS",
    description: "A fan is a gas flow-producing device equipped with two or more blades or vanes attached to a rotating shaft. The fan, including its impellers, converts rotational mechanical energy applied to the shaft into an increase in total pressure of the moving gas. This process is achieved by altering the momentum of the fluid.",
    products: [
      { name: "Axial type exhaust fans", img: imgAxial },
      {
        name: "Cenrifugal type exhaust fans",
        img: imgCentrifugal,
      },
      { name: "Inline fresh air fans", img: imgInline },
      { name: "Single inlet exhaust fans", img: imgSingleInlet },
    ],
  },
  {
    title: "FIRE DAMPERS",
    description:
      "We provide a comprehensive range of mechanical, electromechanical, and actuator- driven fire dampers, designed to operate as standalone units or in conjunction with other dampers to establish safe zones in accordance with building specifications. Optional controllers and communication units are available to enable remote communication and facilitate maintenance testing of the products.",
    products: [
      { name: "Fusible fire dampers", img: imgFusibleDamper },
      { name: "Motorised Fire damers", img: imgMotorisedVCD },
    ],
  },
  {
    title: "AIR DISTRIBUTION PRODUCTS",
    description:
      "Comprehensive air distribution solutions including grills with collar dampers, diffusers, volume control dampers, and motorised volume control dampers for optimal air flow management.",
    products: [
      { name: "Manual vcd", img: imgManualVCD },
      { name: "Motorised vcd", img: imgMotorisedVCD },
      { name: "VAV", img: imgVAV },
      { name: "Diffusers and grills", img: imgGeneric },
    ],
  },
  {
    title: "THERMAL AND ACOUSTIC INSULATION",
    description:
      "Thermal and acoustic insulation in HVAC and industrial applications plays a critical role in enhancing the efficiency and performance of the structure while mitigating potential issues. Key concerns for HVAC systems include condensation control, energy loss through thermal bridging, maintenance of indoor air quality, and fire safety. Proper insulation helps address these challenges, ensuring optimal system performance, energy efficiency, and safety.",
    products: [
      { name: "Thermal Insulation", img: imgThermalIns },
      { name: "Acoustic Insulation", img: imgAcousticIns },
    ],
  },
  {
    title: "INSULATION ADHESIVE",
    description:
      "Thermal Insulation Adhesives are used to seal joints of synthetic rubber insulation foam or major plastic polymers.\n\nThese adhesives must resist high temperature. so that it could not evaporate on heating.",
    products: [{ name: "DUC Insulation", img: imgDUC }],
  },
  {
    title: "PUMPS",
    description:
      "Pumps are essential components in commercial building systems, serving a range of critical functions such as environmental comfort, potable water supply, wastewater removal, energy recovery, and re-use opportunities. In HVAC systems, pumps play a vital role in ensuring optimal performance and efficiency. By utilizing advanced pumping technologies, building operators can significantly reduce operational costs and enhance system reliability, contributing to improved energy efficiency and sustainability.",
    products: [
        { name: "HVAC Pumps", img: imgPressureGauge },
        { name: "Pipe insulation", img: imgThermalIns },
    ],
  },
  {
    title: "HVAC SENSORS",
    description:
      "Pressure Sensors for HVAC and Air Handling Systems Pressure sensors are essential in HVAC systems to monitor pressure drops and ensure system performance. They provide accurate measurements to maintain system efficiency. The common unit of measurement is the Pascal (Pa), with typical pressure measurements including differential, high, and low pressures.\n\n• Differential Pressure Transducers: These sensors compare the pressure between two areas.\n• High Pressure Transducers: These sensors measure the highest-pressure level in a designated area.\n\nThe EE600 is a highly accurate differential air pressure sensor designed for HVAC systems, featuring an IP65 enclosure for durability and reliability.\n\nTemperature Sensors for HVAC and Air Handling Systems Temperature sensors monitor environmental temperature in HVAC systems, providing inputs to control systems that adjust heating or cooling outputs to maintain desired conditions. The EE431 temperature sensor is ideal for HVAC systems, offering active outputs with optional probes for passive recording.\n\nHumidity Sensors for HVAC and Air Handling Systems Humidity sensors regulate pressure and temperature by managing moisture levels within an environment. They ensure optimal humidity to protect infrastructure and maintain controlled environments.\n\n• Humidity sensors measure relative, absolute, and specific humidity. The EE150 humidity and temperature transmitter is specifically designed for HVAC applications, offering exceptional performance and value for money.\n\nIndoor Air Quality Sensors for HVAC and Air Handling Systems Indoor air quality sensors are vital for ensuring healthy and well-ventilated environments. These sensors provide data on ventilation efficiency and air filtration effectiveness, often incorporating multiple sensors to measure various air quality parameters.\n\n• The EE800 accurately measures CO2, temperature, relative humidity, and dewpoint, making it an ideal solution for HVAC applications.\n\nRoom Sensors for HVAC and Air Handling Systems Room sensors monitor variations in temperature and humidity, ensuring that indoor spaces remain comfortable. These sensors are integral to maintaining optimal conditions in rooms and buildings.",
    products: [
      { name: "Pressure Sensor", img: imgPressureSensor },
      { name: "Temperature Sensor", img: imgTempSensor },
      { name: "Humidistat", img: imgHumidistat },
      {
        name: "Indoor Air Quality Sensor",
        img: imgIAQ,
      },
    ],
  },
  {
    title: "THERMOSTAT",
    description: "A thermostat is a regulating device component which senses the temperature of a physical system and performs actions so that the systems temperature is maintained near a desired setpoint.",
    products: [{ name: "Thermostat", img: imgThermostat }],
  },
  {
    title: "HYDRONIC METERS",
    description:
      "A hydrometer is a tool used to measure the density or specific gravity of a liquid when compared to water. A hydrometer is made with a calibrated glass tube. At the bottom, it has a bulb weighted at the bottom and filled with air to make it stand upright when placed in liquid.",
    products: [{ name: "Hydronic Flow Meter", img: imgHydronic }],
  },
];

const mepElectrical: Section[] = [
  {
    title: "ELECTRICAL SYSTEMS",
    products: []
  },
  {
    title: "VFD",
    description:
      "SINAMICS variable frequency drives offer the ultimate solution for all drive applications, from low voltage to direct current (DC). Designed for enhanced efficiency and versatility, our drives empower your applications to evolve towards a more digital and sustainable future, meeting the demands of modern industries.",
    products: [{ name: "VFD", img: imgVFD }],
  },
  {
    title: "UPS SYSTEM",
    description:
      "An uninterruptible power supply (UPS) is a continuous power system designed to provide automatic backup electricity to a load when the primary power source or mains supply fails, ensuring seamless operation and protecting sensitive equipment from power disruptions.",
    products: [{ name: "UPS System", img: imgUPS }],
  },
  {
    title: "ELECTRICAL CABLES",
    description:
      "Comprehensive range of electrical cables for various applications including power transmission, control systems, and special applications.",
    products: [
      { 
        name: "Electric Panel Cables", 
        img: imgAlarmCable,
        description: "Flexible cables designed for wiring electrical cabinets, ideal for domestic use, public spaces, and internal wiring of electrical cabinets, switch boxes, and small appliances."
      },
      { 
        name: "Power Cables", 
        img: imgAlarmCable,
        description: "Energy cables used in industrial and public installations for power transmission, low voltage connections, and variable frequency drive (VFD) applications."
      },
      { 
        name: "Armoured Cables", 
        img: imgAlarmCable,
        description: "Cables with aluminum or steel reinforcement, suitable for environments at risk of mechanical damage, rodents, or fire and explosion hazards (ATEX)."
      },
      { 
        name: "Rubber Cables", 
        img: imgAlarmCable,
        description: "Flexible rubber cables used in fixed industrial installations and mobile services, including welding cables capable of transmitting high currents between the generator and electrode."
      },
      { 
        name: "Halogen-Free Cables", 
        img: imgAlarmCable,
        description: "Low smoke, halogen-free (LSZH) cables designed for use in electrical panels, public spaces, emergency circuits, and mobile services, offering enhanced safety in case of fire."
      },
      { 
        name: "Fire-Resistant Cables", 
        img: imgAlarmCable,
        description: "Cables designed to maintain functionality during prolonged fire exposure, providing power to emergency equipment like alarms, water pumps, and smoke extractors in public areas."
      },
      { 
        name: "Control Cables", 
        img: imgAlarmCable,
        description: "Highly flexible cables for fixed or mobile installations, used in small appliances, machine interconnections, control systems, and signal transmission, ensuring minimal electromagnetic interference."
      },
      { 
        name: "Instrumentation Cables", 
        img: imgAlarmCable,
        description: "Flexible, shielded cables for signal transmission in industrial environments, ensuring optimal data transfer in areas with high electromagnetic interference."
      },
      { 
        name: "Solar Cables", 
        img: imgAlarmCable,
        description: "Cables designed for photovoltaic panel connections, resistant to solar radiation and extreme temperatures, ideal for outdoor installations."
      },
      { 
        name: "Special Cables", 
        img: imgAlarmCable,
        description: "A wide range of cables for unique applications, including temporary lighting for trade shows, overhead cranes, submerged pumps, and drinking water systems."
      },
      { 
        name: "Aluminium Cables", 
        img: imgAlarmCable,
        description: "Aluminum power transmission cables suitable for fixed installations both indoors, outdoors, and underground."
      },
    ],
  },
];

const mepPlumbing: Section[] = [
  {
    title: "PLUMBING SYSTEMS",
    products: []
  },
  {
    title: "PVC PIPES AND FITTINGS",
    description:
      "The system is an ideal solution for the distribution of water in irrigation, agriculture, tube wells, chemicals, aquaculture, as well as the distribution of compressed air and liquids. It provides an easy, economical, and technically advanced alternative, offering significant advantages over traditional G.I. piping systems. This system is not only cost-effective but also superior in terms of performance and efficiency.",
    products: [{ name: "PVC Pipes", img: imgPressureGauge }],
  },
  {
    title: "CPVC PIPES AND FITTINGS",
    description:
      "The CPVC plumbing system is a durable and cost-effective solution for both hot and cold water applications. It is ideal for plumbing and potable water systems. Made from chlorinated polyvinyl chloride, the pipes and fittings are available in a complete range of sizes from ½” to 2”, in accordance with copper tube sizes (CTS). This system offers long-lasting performance and reliability for various residential, commercial, and industrial plumbing needs.",
    products: [{ name: "CPVC Pipes", img: imgPressureGauge }],
  },
  {
    title: "UPVC PIPES AND FITTINGS",
    description:
      "UPVC White Pipe Fittings Systems are the result of advanced polymer chemistry research, designed to withstand harsh weather conditions and demanding usage. These systems offer exceptional durability and reliability, making them an ideal solution for a wide range of applications.",
    products: [{ name: "UPVC Pipes", img: imgPressureGauge }],
  },
  {
    title: "PPR PIPES AND FITTINGS",
    description:
      "Indo Green PPR pipes are the latest and most advanced solution for a wide range of plumbing applications. These pipes and their corresponding fittings are designed to handle both hot and cold water, making them versatile for various uses beyond traditional plumbing.\n\nWith their unique chemical composition, Indo Green PPR pipes offer exceptional long-term heat resistance and well-balanced mechanical properties. These features ensure the durability and reliability of the system. Additionally, the water transported through these pipes remains completely hygienic, as the material has no adverse biological effects.\n\nIndo Green PPR pipes are especially suitable for potable water applications, providing a safe and effective solution for clean water distribution. This technology has been globally accepted and in use for over 30 years across regions such as China, Russia, the Gulf, and Europe.",
    products: [{ name: "PPR Pipes", img: imgPressureGauge }],
  },
];

const fireFighting: Section[] = [
  {
    title: "FIRE FIGHTING PRODUCTS",
    description: "Firefighting equipment is essential for effective fire response and mitigation, offering a range of critical tools including fire hoses, portable fire pumps, fire hose reels, fire monitors, nozzles, and more. We prioritize the reliability and readiness of your firefighting equipment, ensuring it performs at a moment's notice during emergencies. Our products come from trusted industry-leading brands, designed with the latest advancements in technology and materials, and are certified to meet or exceed regulatory standards.\n\nPSG is a prominent supplier of firefighting products across the Middle East and GCC regions, with a strong presence in over 100 countries. We provide products that adhere to international standards, backed by relevant certifications. Our offerings are sourced from globally recognized brands, utilizing state-of-the-art technologies for superior performance and durability.",
    products: []
  },
  {
    title: "FIRE FIGHTING VALVES",
    description: "A hose or hydrant valve is essential for controlling water flow during fire emergencies or in industrial settings. Various applications require specific types of fire hose valves, such as deluge and dry riser valves. Our fire protection valves, and its features are designed for municipal, rural, and forestry hose applications, offering exceptional construction quality.\n\nOur forestry hose wye valves are crafted from lightweight alloys and feature a stainless-steel ball shutoff, while the fire hydrant wye valves come equipped with self-locking handles for added safety and ease of use. These valves are engineered for durability and reliability in demanding environments.",
    products: [
        { name: "Gate Valves", img: imgNonRisingBrass },
        { name: "Butterfly Valve", img: imgLugBf },
        { name: "Check Valves", img: imgSwingCheckBrass },
    ]
  },
  {
    title: "FIRE HYDRANT SYSTEM",
    description: "Fire hydrants are fixed pipe systems connected to a reliable water supply for fire protection, equipped with water spray nozzles designed for specific distribution over the area to be protected. Essentially, fire hydrants serve as above-ground pumps that draw water from the pipeline, providing crucial access to water for firefighting efforts in urban and residential areas. Firefighters connect their hoses to these hydrants to obtain water for extinguishing fires.\n\nWe offer two types of fire hydrants: Dry Barrel and Wet Barrel types, both of which come with the necessary local and international approvals and certifications.",
    products: [
        { name: "Dry Barrel Hydrant", img: imgFireHydrant },
        { name: "Wet Barrel Hydrant", img: imgFireHydrant },
    ]
  },
  {
    title: "PIPES AND FITTINGS",
    description: "Ductile iron is a low-maintenance material designed to last for at least 100 years. Comprising approximately 98% recycled content, it is fully recyclable. Its enhanced flow capacity leads to lower operational costs and significant energy savings throughout its service life. Known for its exceptional strength and durability, ductile iron can withstand extreme conditions, including high-pressure applications, heavy traffic loads, unstable soil, and earth stresses. Due to its robust performance, ductile iron is the preferred choice for withstanding surges and pressure fluctuations, ensuring long-term reliability. It also offers easy installation and on-site cutting and tapping, making it a safe choice for workers.\n\nFire sprinkler pipes and related fittings, typically made from carbon steel or ductile iron, are essential for transporting water or other liquids to firefighting equipment. These pipes, also known as fire protection pipes, must meet strict quality control standards, as they are often installed in static positions and subjected to high pressures, corrosion, and elevated temperatures. The materials used in these pipes must offer excellent pressure resistance, corrosion resistance, and high-temperature tolerance.\n\nDuctile iron and galvanized steel pipes and fittings, with their long history in water supply systems, are recognized for their longevity and resilience. Despite facing challenging site conditions, they provide reliable service when buried and can endure various environmental hazards such as overpressure, water hammer, ground movement and pipe destabilization.",
    products: [
        { name: "Ductile Iron Pipes", img: imgGeneric },
        { name: "Fire Sprinkler Pipes", img: imgGeneric },
        { name: "Fittings", img: imgGeneric },
    ]
  },
  {
    title: "FIRE CABLES",
    description: "Mineral insulated (MI) cables are designed for high-temperature and harsh environments, offering excellent fire resistance and low flammability. Composed of copper conductors and magnesium oxide (MgO) insulation, these cables maintain performance even at temperatures exceeding 1000°C. The copper sheath provides added protection, with the insulation resisting oxidation and ionizing radiation. MI cables are highly durable, versatile, and ideal for fire survival applications, ensuring reliable operation in extreme conditions. They are commonly used in industrial, safety, and fire protection systems.",
    products: [
        { name: "Mineral Insulated Cables", img: imgAlarmCable },
    ]
  },
  {
    title: "FIRE ALARM SYSTEM",
    description: "Fire Detection and Alarm System is meticulously designed to offer comprehensive fire safety solutions across diverse environments. Utilizing advanced technology, these systems are engineered to detect fire hazards at the earliest possible stage, enabling swift response actions to protect lives and property.",
    products: [
      { name: "Digital voice command", img: imgDigitalVoice },
      { name: "Alarm cable", img: imgAlarmCable },
      { name: "Alarm module", img: imgAlarmModule },
      { name: "Alarm panel", img: imgAlarmPanel },
      { name: "Fire detector", img: imgFireDetector },
      { name: "Hooter", img: imgHooter },
      { name: "Manual call point", img: imgManualCallPoint },
    ],
  },
  {
    title: "VESDA SYSTEM",
    description: "The Xtralis Fire Detection and Alarm System, part of Honeywells suite of safety solutions, offers advanced technologies for early fire detection and comprehensive alarm management. Designed for a variety of environments, Xtralis enhances safety and provides critical response capabilities to protect lives and property.",
    products: [
        { name: "VESDA System", img: imgVesda },
    ]
  },
  {
    title: "PRE ACTION SYSTEM",
    description: "Pre-action fire sprinkler systems utilize the dry pipe concept, where water is held back from the sprinkler piping by a pre-action valve. These systems, especially double interlock pre- action systems, require two separate fire detection signals for activation. Designed for water- sensitive environments, they provide protection against accidental water discharge while ensuring that released water is properly directed to minimize damage. The electrically operated valves in the system allow for precise control of water flow to the sprinkler heads.",
    products: [
        { name: "Interlock", img: imgPreAction },
        { name: "Double Interlock", img: imgDoubleInterlock },
        { name: "Potter release", img: imgPotterRelease },
        { name: "Pre action system", img: imgPreAction },
        { name: "Interlock protection with dry pilot", img: imgSingleInterlockDry },
        { name: "Interlock protection with electric release", img: imgSingleInterlockElectric },
        { name: "Interlock protection with wet pilot", img: imgSingleInterlockWet },
    ]
  },
  {
    title: "FIRE SPRINKLER SYSTEM",
    description:
      "Fire sprinklers are compact, thermosensitive devices featuring glass bulbs that activate when exposed to heat. Available in various models, finishes, and temperature ratings, these sprinklers are designed to meet specific system requirements. Constructed from brass, they come with options such as chrome, natural brass, or custom color finishes to suit diverse design preferences.",
    products: [
      { name: "Pressure Gauge", img: imgPressureGauge },
      { name: "Recessed Sprinkler", img: imgRecessedSprinkler },
      { name: "Side Wall Sprinkler", img: imgSideWallSprinkler },
      { name: "Sprinkler Guard", img: imgSprinklerGuard },
      { name: "Swing Check", img: imgSwingCheck },
      { name: "Test and Drain", img: imgTestAndDrain },
      { name: "Upright Sprinkler", img: imgUprightSprinkler },
      { name: "Vertical Side Wall", img: imgVerticalSideWall },
      { name: "Water Motor Gong", img: imgWaterMotorGong },
      { name: "Y Sprinkler", img: imgYStrainerBrass },
      { name: "Zone Controlled Manifold", img: imgZoneControl },
      { name: "Butterfly Valves", img: imgWaferBf },
      { name: "Concealed Sprinkler", img: imgConcealedSprinkler },
      { name: "Conventional Sprinkler", img: imgConventionalSprinkler },
      { name: "Flow Switch", img: imgFlowSwitch },
      { name: "Gate Valves", img: imgNonRisingBrass },
      { name: "Pendant Sprinkler", img: imgPendantSprinkler },
    ],
  },
  {
    title: "CO2 FIRE SUPPRESSION SYSTEM",
    description: "Our CO2 fire suppression systems are meticulously engineered to protect critical assets such as electrical cabinets, electronic equipment, machinery, and storage areas with combustible materials. Designed for maximum efficiency, these systems offer automatic operation, enabling rapid detection and immediate suppression to ensure reliable and effective fire protection.",
    products: [
        { name: "CO2 Gas Suppression System", img: imgCo2 }
    ]
  },
  {
    title: "NOVEC SYSTEM",
    description: "Novec 1230 is a cutting-edge, gas-based chemical extinguishing system that offers a range of unique advantages. Built on sustainable technology, Novec 1230 provides one of the highest safety margins and delivers rapid, reliable fire suppression with minimal environmental impact, particularly in terms of global warming. It operates through total flooding, extinguishing fires in seconds and is suitable for Class A, B, and C hazards.\n\nThe system is pressurized with dry nitrogen, offering variable pressures tailored to the specific requirements of the hazard. With its 42-bar technology, Novec 1230 is space- efficient and ensures maximum design flexibility.",
    products: [
        { name: "Novec System", img: imgNovec }
    ]
  },
  {
    title: "FIRE FIGHTING PUMPS",
    description: "We offer comprehensive solutions for firefighting and chilled water systems, including a wide range of pumps such as fire pumps, chilled water pumps, diesel pumps, primary and secondary chilled water pumps, jockey pumps, and various types of fire pumps, including electrical and split-case pumps. Our solutions are designed to meet diverse system requirements, ensuring optimal performance and reliability across all applications.",
    products: [
        { name: "Fire Fighting Pumps", img: imgFirePumps }
    ]
  }
];

const Construction = () => {
  const [activeCategory, setActiveCategory] = useState("timber");
  const [activeSubTab, setActiveSubTab] = useState("timber-interior");

  const categoryList = [
    { id: "timber", label: "Timber" },
    { id: "plywood", label: "Plywood" },
    { id: "mdf-chipboard", label: "MDF & Chip board" },
    { id: "hardwares", label: "Hardwares" },
    { id: "mep", label: "MEP" },
  ];

  const renderSection = (section: Section) => (
    <div className="mb-16">
      <h3 className="font-heading text-[26px] font-bold mb-4 text-[#2C2C2C]">{section.title}</h3>
      {section.description && (
        <div className="mb-6 max-w-[900px]">
          {section.description.split('\n').map((line, index) => {
            if (line.trim().startsWith('•')) {
              return (
                <div key={index} className="flex items-start gap-2 mb-2 ml-2">
                  <ChevronRight className="w-5 h-5 text-[#FF8C42] shrink-0 mt-0.5" />
                  <p className="text-[16px] leading-7 text-[#666666]">{line.trim().substring(1).trim()}</p>
                </div>
              );
            }
            return (
              <p key={index} className="text-[16px] leading-8 text-[#666666] mb-4 min-h-[1rem]">
                {line}
              </p>
            );
          })}
        </div>
      )}
      {section.products && section.products.length > 0 && (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-6 mt-4">
          {section.products.map((p) => (
            <div key={p.name} className="text-center transition-transform hover:-translate-y-1">
              <div className="relative w-full pb-[100%] bg-white rounded-lg border border-[#E0E0E0] shadow-[0_4px_15px_rgba(0,0,0,0.06)]">
                <img
                  src={p.img}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-contain p-3"
                  draggable={false}
                />
              </div>
              <div className="text-[14px] font-medium text-[#2C2C2C]">{p.name}</div>
              {p.description && <p className="text-[12px] text-[#666666] mt-2 px-2 pb-2">{p.description}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <Layout>
      <section className="bg-[#F5E6D3]">
        <div className="flex min-h-[80vh]">
          <aside className="w-[280px] bg-[#F5E6D3] pt-[60px] sticky top-16 h-[calc(100vh-4rem)] border-r border-[#E0E0E0] overflow-y-auto hidden lg:block">
            {categoryList.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCategory(c.id);
                  setActiveSubTab(
                    c.id === "timber"
                      ? "timber-interior"
                      : c.id === "plywood"
                        ? "plywood-interior"
                        : c.id === "mdf-chipboard"
                          ? "mdf"
                          : c.id === "mep"
                            ? "hvac"
                            : c.id === "hardwares" 
                              ? "door-hardware" 
                              : "timber-interior"
                  );
                }}
                className={`w-full text-left px-10 py-5 text-[16px] font-medium transition-all relative ${
                  activeCategory === c.id ? "bg-[#FFDCC1] font-bold" : "hover:bg-[#FFDCC1]"
                }`}
              >
                <span className="tracking-wide">{c.label}</span>
                {activeCategory === c.id && (
                  <span className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#FF8C42]" />
                )}
              </button>
            ))}
          </aside>
          <main className="flex-1 px-5 sm:px-8 md:px-12 py-10 max-w-[1400px]">
            {activeCategory === "timber" && (
              <div>
                <div className="mb-8">
                  <h1 className="font-heading text-[42px] font-bold mb-3 tracking-[-0.5px] text-[#2C2C2C]">TIMBER</h1>
                  <p className="text-[18px] text-[#666666]">High-quality timber solutions for interiors and construction projects</p>
                </div>
                <div className="flex flex-wrap gap-8 border-b-2 border-[#E0E0E0] mb-10">
                  <button
                    className={`py-4 text-[13px] font-semibold uppercase tracking-wide relative ${
                      activeSubTab === "timber-interior" ? "text-[#2C2C2C]" : "text-[#888888]"
                    }`}
                    onClick={() => setActiveSubTab("timber-interior")}
                  >
                    Timber for Interiors
                    {activeSubTab === "timber-interior" && (
                      <span className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-[#FF8C42]" />
                    )}
                  </button>
                  <button
                    className={`py-4 text-[13px] font-semibold uppercase tracking-wide relative ${
                      activeSubTab === "timber-construction" ? "text-[#2C2C2C]" : "text-[#888888]"
                    }`}
                    onClick={() => setActiveSubTab("timber-construction")}
                  >
                    Timber for Construction
                    {activeSubTab === "timber-construction" && (
                      <span className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-[#FF8C42]" />
                    )}
                  </button>
                </div>
                {activeSubTab === "timber-interior" && renderSection(timberInterior)}
                {activeSubTab === "timber-construction" && renderSection(timberConstruction)}
              </div>
            )}

            {activeCategory === "plywood" && (
              <div>
                <div className="mb-8">
                  <h1 className="font-heading text-[42px] font-bold mb-3 tracking-[-0.5px] text-[#2C2C2C]">PLYWOOD</h1>
                  <p className="text-[18px] text-[#666666]">Premium plywood for interior design and construction applications</p>
                </div>
                <div className="flex flex-wrap gap-8 border-b-2 border-[#E0E0E0] mb-10">
                  <button
                    className={`py-4 text-[13px] font-semibold uppercase tracking-wide relative ${
                      activeSubTab === "plywood-interior" ? "text-[#2C2C2C]" : "text-[#888888]"
                    }`}
                    onClick={() => setActiveSubTab("plywood-interior")}
                  >
                    Plywood for Interior
                    {activeSubTab === "plywood-interior" && (
                      <span className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-[#FF8C42]" />
                    )}
                  </button>
                  <button
                    className={`py-4 text-[13px] font-semibold uppercase tracking-wide relative ${
                      activeSubTab === "plywood-construction" ? "text-[#2C2C2C]" : "text-[#888888]"
                    }`}
                    onClick={() => setActiveSubTab("plywood-construction")}
                  >
                    Plywood for Construction
                    {activeSubTab === "plywood-construction" && (
                      <span className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-[#FF8C42]" />
                    )}
                  </button>
                </div>
                {activeSubTab === "plywood-interior" && renderSection(plywoodInterior)}
                {activeSubTab === "plywood-construction" && renderSection(plywoodConstruction)}
              </div>
            )}

            {activeCategory === "mdf-chipboard" && (
              <div>
                <div className="mb-8">
                  <h1 className="font-heading text-[42px] font-bold mb-3 tracking-[-0.5px] text-[#2C2C2C]">MDF & CHIPBOARD</h1>
                  <p className="text-[18px] text-[#666666]">Quality engineered wood products for versatile applications</p>
                </div>
                <div className="flex flex-wrap gap-8 border-b-2 border-[#E0E0E0] mb-10">
                  <button
                    className={`py-4 text-[13px] font-semibold uppercase tracking-wide relative ${
                      activeSubTab === "mdf" ? "text-[#2C2C2C]" : "text-[#888888]"
                    }`}
                    onClick={() => setActiveSubTab("mdf")}
                  >
                    MDF
                    {activeSubTab === "mdf" && <span className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-[#FF8C42]" />}
                  </button>
                  <button
                    className={`py-4 text-[13px] font-semibold uppercase tracking-wide relative ${
                      activeSubTab === "chipboard" ? "text-[#2C2C2C]" : "text-[#888888]"
                    }`}
                    onClick={() => setActiveSubTab("chipboard")}
                  >
                    Chipboard
                    {activeSubTab === "chipboard" && (
                      <span className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-[#FF8C42]" />
                    )}
                  </button>
                </div>
                {activeSubTab === "mdf" && mdfSections.map((s) => renderSection(s))}
                {activeSubTab === "chipboard" && chipboardSections.map((s) => renderSection(s))}
              </div>
            )}

            {activeCategory === "hardwares" && (
              <div>
                <div className="mb-8">
                  <h1 className="font-heading text-[42px] font-bold mb-3 tracking-[-0.5px] text-[#2C2C2C]">HARDWARES</h1>
                  <p className="text-[18px] text-[#666666]">Complete hardware solutions for doors, furniture, and glass applications</p>
                </div>
                <div className="flex flex-wrap gap-8 border-b-2 border-[#E0E0E0] mb-10">
                  <button
                    className={`py-4 text-[13px] font-semibold uppercase tracking-wide relative ${
                      activeSubTab === "door-hardware" ? "text-[#2C2C2C]" : "text-[#888888]"
                    }`}
                    onClick={() => setActiveSubTab("door-hardware")}
                  >
                    Door Hardware
                    {activeSubTab === "door-hardware" && <span className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-[#FF8C42]" />}
                  </button>
                  <button
                    className={`py-4 text-[13px] font-semibold uppercase tracking-wide relative ${
                      activeSubTab === "furniture-fittings" ? "text-[#2C2C2C]" : "text-[#888888]"
                    }`}
                    onClick={() => setActiveSubTab("furniture-fittings")}
                  >
                    Furniture Fittings
                    {activeSubTab === "furniture-fittings" && <span className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-[#FF8C42]" />}
                  </button>
                  <button
                    className={`py-4 text-[13px] font-semibold uppercase tracking-wide relative ${
                      activeSubTab === "glass-fittings" ? "text-[#2C2C2C]" : "text-[#888888]"
                    }`}
                    onClick={() => setActiveSubTab("glass-fittings")}
                  >
                    Glass Fittings
                    {activeSubTab === "glass-fittings" && <span className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-[#FF8C42]" />}
                  </button>
                </div>
                
                {activeSubTab === "door-hardware" && renderSection(hardwareSections[0])}
                {activeSubTab === "furniture-fittings" && renderSection(hardwareSections[1])}
                {activeSubTab === "glass-fittings" && renderSection(hardwareSections[2])}
              </div>
            )}

            {activeCategory === "mep" && (
              <div>
                <div className="mb-8">
                  <h1 className="font-heading text-[42px] font-bold mb-3 tracking-[-0.5px] text-[#2C2C2C]">MEP</h1>
                  <p className="text-[18px] text-[#666666]">Comprehensive mechanical, electrical, and plumbing solutions</p>
                </div>
                <div className="flex flex-wrap gap-8 border-b-2 border-[#E0E0E0] mb-10">
                  <button
                    className={`py-4 text-[13px] font-semibold uppercase tracking-wide relative ${
                      activeSubTab === "hvac" ? "text-[#2C2C2C]" : "text-[#888888]"
                    }`}
                    onClick={() => setActiveSubTab("hvac")}
                  >
                    Mechanical - HVAC
                    {activeSubTab === "hvac" && <span className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-[#FF8C42]" />}
                  </button>
                  <button
                    className={`py-4 text-[13px] font-semibold uppercase tracking-wide relative ${
                      activeSubTab === "electrical" ? "text-[#2C2C2C]" : "text-[#888888]"
                    }`}
                    onClick={() => setActiveSubTab("electrical")}
                  >
                    Electrical
                    {activeSubTab === "electrical" && (
                      <span className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-[#FF8C42]" />
                    )}
                  </button>
                  <button
                    className={`py-4 text-[13px] font-semibold uppercase tracking-wide relative ${
                      activeSubTab === "plumbing" ? "text-[#2C2C2C]" : "text-[#888888]"
                    }`}
                    onClick={() => setActiveSubTab("plumbing")}
                  >
                    Plumbing
                    {activeSubTab === "plumbing" && (
                      <span className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-[#FF8C42]" />
                    )}
                  </button>
                  <button
                    className={`py-4 text-[13px] font-semibold uppercase tracking-wide relative ${
                      activeSubTab === "fire-fighting" ? "text-[#2C2C2C]" : "text-[#888888]"
                    }`}
                    onClick={() => setActiveSubTab("fire-fighting")}
                  >
                    Fire Fighting
                    {activeSubTab === "fire-fighting" && (
                      <span className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-[#FF8C42]" />
                    )}
                  </button>
                </div>
                {activeSubTab === "hvac" && mepHVAC.map((s) => renderSection(s))}
                {activeSubTab === "electrical" && mepElectrical.map((s) => renderSection(s))}
                {activeSubTab === "plumbing" && mepPlumbing.map((s) => renderSection(s))}
                {activeSubTab === "fire-fighting" && fireFighting.map((s) => renderSection(s))}
              </div>
            )}
          </main>
        </div>
      </section>
    </Layout>
  );
};

export default Construction;
