// ── PRODUCTS DATA ──
const products = [
  { id:1, name:"Panneau Monocristallin 200KVA", cat:"PANNEAUX", type:"Monocristallin", icon:"☀️", imgs:["https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80","https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80","https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80","https://images.unsplash.com/photo-1559302995-f1d6e557ddc6?w=600&q=80","https://images.unsplash.com/photo-1545209463-e2825498edee?w=600&q=80"], price:425700, old:494500, badge:"sale",
    desc:"Panneau monocristallin mi-gamme, parfait pour maison 2–3 pièces.",
    specs:[{k:"Puissance",v:"200 KVA"},{k:"Rendement",v:"21.0%"},{k:"Dimensions",v:"1320×992 mm"},{k:"Poids",v:"12 kg"},{k:"Garantie",v:"5 ans"},{k:"Certification",v:"IEC 61215"}],
    feats:["Excellent rapport qualité/prix","Technologie PERC","Résistant humidité et chaleur","Câbles MC4 inclus"]
  },
  { id:12, name:"Panneau Monocristallin 300KVA", cat:"PANNEAUX", type:"Monocristallin", icon:"☀️", imgs:["https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80","https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80","https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80","https://images.unsplash.com/photo-1559302995-f1d6e557ddc6?w=600&q=80","https://images.unsplash.com/photo-1545209463-e2825498edee?w=600&q=80"], price:640700, old:null, badge:"hot",
    desc:"Notre best-seller — panneau haute performance pour maison ou bureau.",
    specs:[{k:"Puissance",v:"300 KVA"},{k:"Rendement",v:"21.5%"},{k:"Dimensions",v:"1650×992 mm"},{k:"Poids",v:"18.5 kg"},{k:"Garantie",v:"5 ans"},{k:"Certification",v:"IEC 61215"}],
    feats:["Best-seller Soltex","Technologie monocristalline PERC","Résistant grêle et vents forts","Compatible tous onduleurs"]
  },
  { id:14, name:"Panneau Polycristallin 150KVA", cat:"PANNEAUX", type:"Polycristallin", icon:"🌤️", imgs:["https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80","https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80","https://images.unsplash.com/photo-1559302995-f1d6e557ddc6?w=600&q=80","https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80","https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=600&q=80"], price:279500, old:344000, badge:"sale",
    desc:"Panneau polycristallin économique, bon rapport performance/prix.",
    specs:[{k:"Puissance",v:"150 KVA"},{k:"Rendement",v:"16.5%"},{k:"Dimensions",v:"1200×808 mm"},{k:"Poids",v:"11 kg"},{k:"Garantie",v:"3 ans"},{k:"Certification",v:"IEC 61215"}],
    feats:["Prix très accessible","Bon rendement par temps nuageux","Cadre aluminium anodisé","Livré avec guide d'installation"]
  },
  { id:15, name:"Panneau Polycristallin 250KVA", cat:"PANNEAUX", type:"Polycristallin", icon:"🌤️", imgs:["https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80","https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80","https://images.unsplash.com/photo-1559302995-f1d6e557ddc6?w=600&q=80","https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80","https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=600&q=80"], price:468700, old:null, badge:null,
    desc:"Panneau polycristallin fiable, idéal pour budgets intermédiaires.",
    specs:[{k:"Puissance",v:"250 KVA"},{k:"Rendement",v:"17.2%"},{k:"Dimensions",v:"1640×992 mm"},{k:"Poids",v:"16 kg"},{k:"Garantie",v:"3 ans"},{k:"Certification",v:"IEC 61215"}],
    feats:["Fiabilité prouvée","Performance stable en conditions chaudes","Cadre renforcé","Compatible tous systèmes"]
  },
  { id:16, name:"Panneau Bifacial 250KVA", cat:"PANNEAUX", type:"Bifacial", icon:"✨", imgs:["https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80","https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80","https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80","https://images.unsplash.com/photo-1592833167665-ebf9d00be8f8?w=600&q=80","https://images.unsplash.com/photo-1559302995-f1d6e557ddc6?w=600&q=80"], price:683700, old:795500, badge:"sale",
    desc:"Panneau bifacial compact, capte la lumière des deux faces.",
    specs:[{k:"Puissance",v:"250 KVA (face)"},{k:"Gain bifacial",v:"+15–20%"},{k:"Rendement",v:"21.5%"},{k:"Dimensions",v:"1480×992 mm"},{k:"Poids",v:"17 kg"},{k:"Garantie",v:"10 ans"}],
    feats:["Capture lumière recto et verso","Production +15–20% vs standard","Verre double face trempé","Compact, idéal toit moyen"]
  },
  { id:18, name:"Panneau Bifacial 350KVA", cat:"PANNEAUX", type:"Bifacial", icon:"✨", imgs:["https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80","https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80","https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80","https://images.unsplash.com/photo-1592833167665-ebf9d00be8f8?w=600&q=80","https://images.unsplash.com/photo-1559302995-f1d6e557ddc6?w=600&q=80"], price:941700, old:1118000, badge:"sale",
    desc:"Panneau bifacial capte la lumière des deux côtés — gain jusqu'à +25% de production.",
    specs:[{k:"Puissance",v:"350 KVA (face)"},{k:"Gain bifacial",v:"+20–25%"},{k:"Rendement",v:"22.1%"},{k:"Dimensions",v:"1724×1134 mm"},{k:"Poids",v:"22 kg"},{k:"Garantie",v:"12 ans"}],
    feats:["Capture lumière recto et verso","Production +20–25% vs standard","Verre double face trempé","Idéal toiture claire ou gravier"]
  },
  { id:17, name:"Panneau Flexible 50KVA", cat:"PANNEAUX", type:"Flexible", icon:"🌊", imgs:["https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=80","https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80","https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80","https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80","https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=600&q=80"], price:210700, old:258000, badge:"sale",
    desc:"Mini panneau souple, parfait pour sac à dos ou petit équipement nomade.",
    specs:[{k:"Puissance",v:"50 KVA"},{k:"Rendement",v:"22%"},{k:"Épaisseur",v:"2 mm"},{k:"Poids",v:"1 kg"},{k:"Flexibilité",v:"30° courbure max"},{k:"Certification",v:"IP67"}],
    feats:["Ultra-compact 1 kg","Idéal randonnée et nomadisme","Cellules monocristallines","Résistant à l'eau IP67"]
  },
  { id:19, name:"Panneau Flexible 100KVA", cat:"PANNEAUX", type:"Flexible", icon:"🌊", imgs:["https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=80","https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80","https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80","https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80","https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=600&q=80"], price:339700, old:408500, badge:"new",
    desc:"Panneau souple ultra-léger, s'adapte aux surfaces courbes (bateau, camping-car).",
    specs:[{k:"Puissance",v:"100 KVA"},{k:"Rendement",v:"23%"},{k:"Épaisseur",v:"2.5 mm"},{k:"Poids",v:"1.8 kg"},{k:"Flexibilité",v:"30° courbure max"},{k:"Certification",v:"IP67"}],
    feats:["Ultra-léger 1.8 kg seulement","Courbure jusqu'à 30°","Cellules monocristallines SunPower","Idéal bateaux, camping-cars, tentes"]
  },
  { id:2, name:"Batterie AGM 100Ah", cat:"BATTERIES", type:"AGM", icon:"🔋", imgs:["https://images.unsplash.com/photo-1620714223084-862fa1d0e0a6?w=600&q=80","https://images.unsplash.com/photo-1620714223084-862fa1d0e0a6?w=600&q=80","https://images.unsplash.com/photo-1620641622259-3fcc1c8a0e92?w=600&q=80","https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80","https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80"], price:253700, old:339700, badge:"sale",
    desc:"Batterie AGM sans entretien, idéale pour systèmes solaires isolés.",
    specs:[{k:"Capacité",v:"100 Ah"},{k:"Tension",v:"12 V"},{k:"Type",v:"AGM VRLA"},{k:"Poids",v:"28 kg"},{k:"Garantie",v:"2 ans"},{k:"Cert.",v:"CE / UL"}],
    feats:["Maintenance free — Non spillable","Décharge profonde tolérée","Cycle de vie 500+ cycles","Certifiée CE et UL"]
  },
  { id:20, name:"Batterie AGM 200Ah", cat:"BATTERIES", type:"AGM", icon:"🔋", imgs:["https://images.unsplash.com/photo-1620714223084-862fa1d0e0a6?w=600&q=80","https://images.unsplash.com/photo-1620641622259-3fcc1c8a0e92?w=600&q=80","https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80","https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80","https://images.unsplash.com/photo-1620714223084-862fa1d0e0a6?w=600&q=80"], price:468700, old:580500, badge:"sale",
    desc:"Batterie AGM grande capacité pour installations résidentielles complètes.",
    specs:[{k:"Capacité",v:"200 Ah"},{k:"Tension",v:"12 V"},{k:"Type",v:"AGM VRLA"},{k:"Poids",v:"52 kg"},{k:"Garantie",v:"2 ans"},{k:"Cert.",v:"CE / UL"}],
    feats:["Grande autonomie","Maintenance free — Non spillable","Idéale pour kit solaire complet","Certifiée CE et UL"]
  },
  { id:21, name:"Batterie Gel 100Ah", cat:"BATTERIES", type:"Gel", icon:"🔋", imgs:["https://images.unsplash.com/photo-1620641622259-3fcc1c8a0e92?w=600&q=80","https://images.unsplash.com/photo-1620714223084-862fa1d0e0a6?w=600&q=80","https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80","https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80","https://images.unsplash.com/photo-1620641622259-3fcc1c8a0e92?w=600&q=80"], price:322500, old:387000, badge:"sale",
    desc:"Batterie Gel longue durée, résistante aux fortes chaleurs.",
    specs:[{k:"Capacité",v:"100 Ah"},{k:"Tension",v:"12 V"},{k:"Type",v:"Gel VRLA"},{k:"Poids",v:"30 kg"},{k:"Garantie",v:"3 ans"},{k:"Cert.",v:"CE / IEC"}],
    feats:["Excellente résistance à la chaleur","Cycle de vie 800+ cycles","Idéale climat tropical","Faible auto-décharge"]
  },
  { id:22, name:"Batterie Gel 150Ah", cat:"BATTERIES", type:"Gel", icon:"🔋", imgs:["https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80","https://images.unsplash.com/photo-1620641622259-3fcc1c8a0e92?w=600&q=80","https://images.unsplash.com/photo-1620714223084-862fa1d0e0a6?w=600&q=80","https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80","https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80"], price:494500, old:null, badge:"new",
    desc:"Batterie Gel haute capacité, parfaite pour usage intensif quotidien.",
    specs:[{k:"Capacité",v:"150 Ah"},{k:"Tension",v:"12 V"},{k:"Type",v:"Gel VRLA"},{k:"Poids",v:"42 kg"},{k:"Garantie",v:"3 ans"},{k:"Cert.",v:"CE / IEC"}],
    feats:["Haute capacité 150Ah","Très faible auto-décharge","Résistante aux vibrations","Garantie 3 ans"]
  },
  { id:23, name:"Batterie Lithium LiFePO4 100Ah", cat:"BATTERIES", type:"Lithium", icon:"🔋", imgs:["https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80","https://images.unsplash.com/photo-1620714223084-862fa1d0e0a6?w=600&q=80","https://images.unsplash.com/photo-1620641622259-3fcc1c8a0e92?w=600&q=80","https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80","https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80"], price:855700, old:1032000, badge:"sale",
    desc:"Batterie Lithium nouvelle génération, légère et très longue durée de vie.",
    specs:[{k:"Capacité",v:"100 Ah"},{k:"Tension",v:"12.8 V"},{k:"Type",v:"LiFePO4"},{k:"Poids",v:"12 kg"},{k:"Garantie",v:"8 ans"},{k:"Cycles",v:"4000+ cycles"}],
    feats:["Ultra-légère — 12 kg seulement","4000+ cycles de charge","BMS intégré (protection)","Charge rapide compatible"]
  },
  { id:24, name:"Batterie Lithium LiFePO4 200Ah", cat:"BATTERIES", type:"Lithium", icon:"🔋", imgs:["https://images.unsplash.com/photo-1620641622259-3fcc1c8a0e92?w=600&q=80","https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80","https://images.unsplash.com/photo-1620714223084-862fa1d0e0a6?w=600&q=80","https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80","https://images.unsplash.com/photo-1620641622259-3fcc1c8a0e92?w=600&q=80"], price:1543700, old:1806000, badge:"hot",
    desc:"Batterie Lithium haute capacité, idéale pour installations professionnelles.",
    specs:[{k:"Capacité",v:"200 Ah"},{k:"Tension",v:"12.8 V"},{k:"Type",v:"LiFePO4"},{k:"Poids",v:"22 kg"},{k:"Garantie",v:"10 ans"},{k:"Cycles",v:"6000+ cycles"}],
    feats:["Performance professionnelle","6000+ cycles de charge","BMS intelligent intégré","Compatible montage parallèle"]
  },
  { id:25, name:"Batterie Acide-Plomb 100Ah", cat:"BATTERIES", type:"Acide-Plomb", icon:"🔋", imgs:["https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80","https://images.unsplash.com/photo-1620714223084-862fa1d0e0a6?w=600&q=80","https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80","https://images.unsplash.com/photo-1620641622259-3fcc1c8a0e92?w=600&q=80","https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80"], price:193500, old:249400, badge:"sale",
    desc:"Batterie acide-plomb classique, solution économique et éprouvée.",
    specs:[{k:"Capacité",v:"100 Ah"},{k:"Tension",v:"12 V"},{k:"Type",v:"Acide-Plomb"},{k:"Poids",v:"27 kg"},{k:"Garantie",v:"1 an"},{k:"Cert.",v:"CE"}],
    feats:["Prix très accessible","Technologie éprouvée","Facile à entretenir","Bon rapport qualité/prix"]
  },
  { id:26, name:"Batterie Acide-Plomb 150Ah", cat:"BATTERIES", type:"Acide-Plomb", icon:"🔋", imgs:["https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80","https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80","https://images.unsplash.com/photo-1620641622259-3fcc1c8a0e92?w=600&q=80","https://images.unsplash.com/photo-1620714223084-862fa1d0e0a6?w=600&q=80","https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80"], price:279500, old:null, badge:null,
    desc:"Batterie acide-plomb grande capacité pour usage domestique standard.",
    specs:[{k:"Capacité",v:"150 Ah"},{k:"Tension",v:"12 V"},{k:"Type",v:"Acide-Plomb"},{k:"Poids",v:"40 kg"},{k:"Garantie",v:"1 an"},{k:"Cert.",v:"CE"}],
    feats:["Capacité 150Ah économique","Robuste et fiable","Compatible tous régulateurs","Entretien simple"]
  },
  { id:3, name:"Onduleur Pur Sinus 1000W", cat:"ONDULEURS", type:"Pur Sinus", icon:"⚡", imgs:["https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80","https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80","https://images.unsplash.com/photo-1620641622259-3fcc1c8a0e92?w=600&q=80","https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80","https://images.unsplash.com/photo-1601275334966-bd2bb1c6e2da?w=600&q=80"], price:903000, old:null, badge:null,
    desc:"Onduleur pur sinus 1000W, compatible tous appareils électroniques sensibles.",
    specs:[{k:"Puissance",v:"1000 W"},{k:"Entrée",v:"12 V DC"},{k:"Sortie",v:"220 V AC"},{k:"Rendement",v:"93%"},{k:"Poids",v:"3.2 kg"},{k:"Protection",v:"Surcharge/CC"}],
    feats:["Onde sinusoïdale pure","Compatible électronique sensible","Affichage LCD","Ventilateur silencieux thermostatique"]
  },
  { id:27, name:"Onduleur Pur Sinus 2000W", cat:"ONDULEURS", type:"Pur Sinus", icon:"⚡", imgs:["https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80","https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80","https://images.unsplash.com/photo-1620641622259-3fcc1c8a0e92?w=600&q=80","https://images.unsplash.com/photo-1601275334966-bd2bb1c6e2da?w=600&q=80","https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80"], price:1500700, old:1715700, badge:"sale",
    desc:"Onduleur pur sinus haute puissance pour alimenter réfrigérateur, pompe, télévision.",
    specs:[{k:"Puissance",v:"2000 W"},{k:"Entrée",v:"24 V DC"},{k:"Sortie",v:"220 V AC"},{k:"Rendement",v:"94%"},{k:"Poids",v:"5.8 kg"},{k:"Protection",v:"Multi-protection"}],
    feats:["Haute puissance 2000W","Idéal réfrigérateur et pompe","Double protection thermique","Télécommande incluse"]
  },
  { id:28, name:"Onduleur Quasi Sinus 500W", cat:"ONDULEURS", type:"Quasi Sinus", icon:"⚡", imgs:["https://images.unsplash.com/photo-1620641622259-3fcc1c8a0e92?w=600&q=80","https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80","https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80","https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80","https://images.unsplash.com/photo-1601275334966-bd2bb1c6e2da?w=600&q=80"], price:382700, old:473000, badge:"sale",
    desc:"Onduleur quasi sinus économique, idéal pour éclairage et chargeurs.",
    specs:[{k:"Puissance",v:"500 W"},{k:"Entrée",v:"12 V DC"},{k:"Sortie",v:"220 V AC"},{k:"Rendement",v:"88%"},{k:"Poids",v:"1.5 kg"},{k:"Protection",v:"Surcharge/CC"}],
    feats:["Prix très accessible","Léger et compact","Idéal éclairage et chargeurs","Protection surcharge intégrée"]
  },
  { id:29, name:"Onduleur Quasi Sinus 1500W", cat:"ONDULEURS", type:"Quasi Sinus", icon:"⚡", imgs:["https://images.unsplash.com/photo-1601275334966-bd2bb1c6e2da?w=600&q=80","https://images.unsplash.com/photo-1620641622259-3fcc1c8a0e92?w=600&q=80","https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80","https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80","https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80"], price:683700, old:817000, badge:"sale",
    desc:"Onduleur quasi sinus 1500W, bon rapport qualité/prix pour usage domestique.",
    specs:[{k:"Puissance",v:"1500 W"},{k:"Entrée",v:"12 V DC"},{k:"Sortie",v:"220 V AC"},{k:"Rendement",v:"90%"},{k:"Poids",v:"3 kg"},{k:"Protection",v:"Multi-protection"}],
    feats:["Puissance intermédiaire 1500W","Bon rapport qualité/prix","Ventilateur automatique","Affichage LED"]
  },
  { id:4, name:"Régulateur PWM 20A", cat:"RÉGULATEURS", type:"PWM", icon:"🔌", imgs:["https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80","https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80","https://images.unsplash.com/photo-1620641622259-3fcc1c8a0e92?w=600&q=80","https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80","https://images.unsplash.com/photo-1601275334966-bd2bb1c6e2da?w=600&q=80"], price:107500, old:150500, badge:"sale",
    desc:"Régulateur PWM économique, idéal pour petites installations 12V/24V.",
    specs:[{k:"Courant",v:"20 A"},{k:"Tension PV",v:"50 V max"},{k:"Batterie",v:"12/24 V auto"},{k:"Efficacité",v:"85%"},{k:"Affichage",v:"LCD"},{k:"Garantie",v:"1 an"}],
    feats:["Prix très accessible","Simple à installer","Détection auto 12/24V","Idéal petite installation"]
  },
  { id:30, name:"Régulateur PWM 40A", cat:"RÉGULATEURS", type:"PWM", icon:"🔌", imgs:["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80","https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80","https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80","https://images.unsplash.com/photo-1620641622259-3fcc1c8a0e92?w=600&q=80","https://images.unsplash.com/photo-1601275334966-bd2bb1c6e2da?w=600&q=80"], price:193500, old:249400, badge:"sale",
    desc:"Régulateur PWM 40A robuste pour installations résidentielles standard.",
    specs:[{k:"Courant",v:"40 A"},{k:"Tension PV",v:"55 V max"},{k:"Batterie",v:"12/24 V auto"},{k:"Efficacité",v:"87%"},{k:"Affichage",v:"LCD"},{k:"Garantie",v:"1 an"}],
    feats:["Robuste et fiable","Compatible batteries AGM/Gel","Protection court-circuit","Affichage LCD clair"]
  },
  { id:31, name:"Régulateur MPPT 30A", cat:"RÉGULATEURS", type:"MPPT", icon:"🔌", imgs:["https://images.unsplash.com/photo-1620641622259-3fcc1c8a0e92?w=600&q=80","https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80","https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80","https://images.unsplash.com/photo-1601275334966-bd2bb1c6e2da?w=600&q=80","https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80"], price:296700, old:365500, badge:"sale",
    desc:"Régulateur MPPT 30A haute efficacité pour maximiser la production solaire.",
    specs:[{k:"Courant",v:"30 A"},{k:"Tension PV",v:"100 V max"},{k:"Batterie",v:"12/24 V auto"},{k:"Efficacité",v:"98%"},{k:"Affichage",v:"LCD"},{k:"Garantie",v:"2 ans"}],
    feats:["Algorithme MPPT avancé","Efficacité 98%","Détection auto 12/24V","Historique journalier"]
  },
  { id:32, name:"Régulateur MPPT 40A", cat:"RÉGULATEURS", type:"MPPT", icon:"🔌", imgs:["https://images.unsplash.com/photo-1601275334966-bd2bb1c6e2da?w=600&q=80","https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80","https://images.unsplash.com/photo-1620641622259-3fcc1c8a0e92?w=600&q=80","https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80","https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80"], price:382700, old:473000, badge:"hot",
    desc:"Régulateur MPPT 40A premium, meilleur rendement du marché.",
    specs:[{k:"Courant",v:"40 A"},{k:"Tension PV",v:"100 V max"},{k:"Batterie",v:"12/24 V auto"},{k:"Efficacité",v:"99%"},{k:"Affichage",v:"LCD"},{k:"Garantie",v:"2 ans"}],
    feats:["Efficacité 99% — meilleur du marché","Protection surtensions avancée","Compatible Lithium/AGM/Gel","Application Bluetooth optionnelle"]
  },
  { id:5, name:"Câble Solaire 6mm² (10m)", cat:"ACCESSOIRES", icon:"🔧", imgs:["https://images.unsplash.com/photo-1601275334966-bd2bb1c6e2da?w=600&q=80","https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80","https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80","https://images.unsplash.com/photo-1620641622259-3fcc1c8a0e92?w=600&q=80","https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80"], price:77400, old:107500, badge:"sale",
    desc:"Câble photovoltaïque double isolation UV, idéal pour connexions panneau.",
    specs:[{k:"Section",v:"6 mm²"},{k:"Longueur",v:"10 m"},{k:"Tension max",v:"1500 V DC"},{k:"Couleur",v:"Rouge/Noir"},{k:"Norme",v:"EN 50618"},{k:"Temp.",v:"-40°C à +90°C"}],
    feats:["Double isolation résistante UV","Certifié EN 50618","Compatible connecteurs MC4","Flexible et résistant à la chaleur"]
  },
  { id:6, name:"Connecteurs MC4 (paire x5)", cat:"ACCESSOIRES", icon:"🔩", imgs:["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80","https://images.unsplash.com/photo-1601275334966-bd2bb1c6e2da?w=600&q=80","https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80","https://images.unsplash.com/photo-1620641622259-3fcc1c8a0e92?w=600&q=80","https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80"], price:51600, old:null, badge:"new",
    desc:"Connecteurs MC4 imperméables IP67 pour assemblage de panneaux solaires.",
    specs:[{k:"Quantité",v:"5 paires"},{k:"Courant max",v:"30 A"},{k:"Tension max",v:"1000 V DC"},{k:"Protection",v:"IP67"},{k:"Matériau",v:"PP + cuivre"},{k:"Norme",v:"TÜV IEC"}],
    feats:["Étanché IP67 — résistant à la pluie","Connexion rapide sans outil","Certifiés TÜV","Compatibles tous panneaux MC4"]
  },
  { id:7, name:"Support Panneau Incliné 30°", cat:"ACCESSOIRES", icon:"🔨", imgs:["https://images.unsplash.com/photo-1597008641223-6a1eba0743a7?w=600&q=80","https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80","https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80","https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80","https://images.unsplash.com/photo-1559302995-f1d6e557ddc6?w=600&q=80"], price:150500, old:193500, badge:"sale",
    desc:"Structure aluminium pour montage de panneaux sur toit plat ou terrasse.",
    specs:[{k:"Matériau",v:"Aluminium 6005-T5"},{k:"Inclinaison",v:"15°–45° réglable"},{k:"Charge max",v:"50 kg"},{k:"Panneaux",v:"1 panneau"},{k:"Fixation",v:"Vis inox"},{k:"Garantie",v:"10 ans"}],
    feats:["Aluminium anodisé anti-corrosion","Inclinaison réglable 15°–45°","Installation rapide","Résistant au vent 140 km/h"]
  },
  { id:8, name:"Kit Ampoules LED 12V (×10)", cat:"ACCESSOIRES", icon:"💡", imgs:["https://images.unsplash.com/photo-1565374395542-0e7b0d0c8bd9?w=600&q=80","https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80","https://images.unsplash.com/photo-1620641622259-3fcc1c8a0e92?w=600&q=80","https://images.unsplash.com/photo-1601275334966-bd2bb1c6e2da?w=600&q=80","https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80"], price:94600, old:137600, badge:"sale",
    desc:"Ampoules LED basse consommation compatibles 12V solaire.",
    specs:[{k:"Voltage",v:"12 V DC"},{k:"Puissance",v:"7 W"},{k:"Flux",v:"700 lm"},{k:"Durée vie",v:"25 000 h"},{k:"Couleur",v:"Blanc chaud"},{k:"Culot",v:"E27"}],
    feats:["Consommation réduite 80%","Compatibles 12V DC","Lumière sans scintillement","Résistantes aux coupures"]
  },
  { id:9, name:"Fusible 30A + Porte-fusible", cat:"ACCESSOIRES", icon:"⚙️", imgs:["https://images.unsplash.com/photo-1620641622259-3fcc1c8a0e92?w=600&q=80","https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80","https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80","https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80","https://images.unsplash.com/photo-1601275334966-bd2bb1c6e2da?w=600&q=80"], price:34400, old:null, badge:null,
    desc:"Protection indispensable pour circuits solaires 12V/24V.",
    specs:[{k:"Intensité",v:"30 A"},{k:"Tension",v:"12–24 V"},{k:"Type",v:"ANL / Lame"},{k:"Matériau",v:"Cuivre"},{k:"Inclus",v:"Porte-fusible"},{k:"IP",v:"IP54"}],
    feats:["Protection contre les courts-circuits","Installation facile","Compatible câbles jusqu'à 6mm²","Indicateur visuel de fusion"]
  },
  { id:10, name:"Kit Solaire Complet 500KVA", cat:"KITS", icon:"🏠", imgs:["https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=600&q=80","https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80","https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80","https://images.unsplash.com/photo-1620714223084-862fa1d0e0a6?w=600&q=80","https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80"], price:2145700, old:2795000, badge:"hot",
    desc:"Kit clé en main : 2×250W + batterie 200Ah + régulateur + onduleur.",
    specs:[{k:"Panneaux",v:"2× 250 Wc"},{k:"Batterie",v:"200 Ah AGM"},{k:"Régulateur",v:"MPPT 30A"},{k:"Onduleur",v:"1500 W"},{k:"Câblage",v:"Complet inclus"},{k:"Installation",v:"Notice + support"}],
    feats:["Tout inclus, prêt à installer","Alimente jusqu'à 5 appareils","Autonomie 2 jours sans soleil","Support technique 6 mois offert"]
  },
  { id:33, name:"Kit Solaire Débutant 200KVA", cat:"KITS", icon:"🏠", imgs:["https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80","https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80","https://images.unsplash.com/photo-1620714223084-862fa1d0e0a6?w=600&q=80","https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80","https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=600&q=80"], price:812700, old:1032000, badge:"new",
    desc:"Kit idéal pour débutants : panneau 200W + batterie 100Ah + régulateur PWM.",
    specs:[{k:"Panneau",v:"1× 200 Wc"},{k:"Batterie",v:"100 Ah AGM"},{k:"Régulateur",v:"PWM 20A"},{k:"Onduleur",v:"Non inclus"},{k:"Câblage",v:"Complet inclus"},{k:"Installation",v:"Notice détaillée"}],
    feats:["Parfait pour débuter","Installation en 1h","Alimente éclairage + chargeurs","Prix très accessible"]
  },
  { id:34, name:"Kit Solaire Maison 1000KVA", cat:"KITS", icon:"🏠", imgs:["https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80","https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80","https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=600&q=80","https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80","https://images.unsplash.com/photo-1620714223084-862fa1d0e0a6?w=600&q=80"], price:3865700, old:4730000, badge:"sale",
    desc:"Kit complet pour maison 4–6 pièces : 4×250W + batterie Lithium + MPPT + onduleur pur sinus.",
    specs:[{k:"Panneaux",v:"4× 250 Wc"},{k:"Batterie",v:"200 Ah LiFePO4"},{k:"Régulateur",v:"MPPT 40A"},{k:"Onduleur",v:"2000 W Pur Sinus"},{k:"Câblage",v:"Complet inclus"},{k:"Autonomie",v:"3–4 jours"}],
    feats:["Puissance 1000W totale","Batterie Lithium longue durée","Alimente réfrigérateur + TV + éclairage","Support technique 12 mois"]
  },
  { id:35, name:"Kit Solaire Professionnel 2000KVA", cat:"KITS", icon:"🏠", imgs:["https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80","https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80","https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80","https://images.unsplash.com/photo-1620714223084-862fa1d0e0a6?w=600&q=80","https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=600&q=80"], price:7305700, old:9030000, badge:"sale",
    desc:"Solution professionnelle pour entreprise ou grande maison — autonomie maximale.",
    specs:[{k:"Panneaux",v:"8× 250 Wc"},{k:"Batterie",v:"400 Ah LiFePO4"},{k:"Régulateur",v:"MPPT 60A"},{k:"Onduleur",v:"3000 W Pur Sinus"},{k:"Câblage",v:"Pro inclus"},{k:"Autonomie",v:"5–7 jours"}],
    feats:["Installation professionnelle complète","Batterie Lithium 400Ah haute capacité","Alimente pompe + climatiseur + bureau","Garantie 2 ans + maintenance incluse"]
  },
  { id:36, name:"Kit Solaire Nomade 100KVA", cat:"KITS", icon:"🏠", imgs:["https://images.unsplash.com/photo-1620714223084-862fa1d0e0a6?w=600&q=80","https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80","https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80","https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80","https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=600&q=80"], price:640700, old:795500, badge:"new",
    desc:"Kit portable pour camping, voyage et zones isolées — léger et compact.",
    specs:[{k:"Panneau",v:"1× 100 Wc Flexible"},{k:"Batterie",v:"50 Ah LiFePO4"},{k:"Régulateur",v:"MPPT 10A"},{k:"Sortie",v:"USB + 12V DC"},{k:"Poids total",v:"5 kg"},{k:"Transport",v:"Sac inclus"}],
    feats:["Ultra-portable 5 kg","Panneau flexible inclus","Charge téléphones + laptop + LED","Idéal randonnée et zones rurales"]
  },
];

// ── FORMATAGE VIDIVOLA (Ariary) ──
// Ny Ariary dia tsy misy santimo (isa manontolo), ka atao boribory
// ho isa manontolo ary asiana elanelana isaky ny 1000 (fanao mahazatra).
function fmtAr(n){
  const v = Math.round(Number(n)||0);
  return v.toLocaleString('fr-FR').replace(/\u202f/g,' ') + ' Ar';
}

// ── SUPABASE: PRODUITS ──
// Alaina any amin'ny base de données ny produits (raha efa
// nampidirina tao ny schema.sql). Raha misy olana (mbola tsy
// nampiasaina ny supabase, tsy misy internet, sns) dia ilay
// tabilao products hardcodée etsy ambony no mbola ampiasaina —
// tsy mijanona ny site.
async function loadProductsFromSupabase(){
  try{
    const { data, error } = await supabaseClient
      .from('products')
      .select('*')
      .order('id', { ascending: true });
    if(error || !data || !data.length) return;
    const mapped = data.map(p => ({
      id: p.id, name: p.name, cat: p.cat, type: p.type, icon: p.icon,
      imgs: p.imgs, price: Number(p.price), old: p.old_price===null?null:Number(p.old_price),
      badge: p.badge, desc: p.description, specs: p.specs, feats: p.feats
    }));
    products.length = 0;
    products.push(...mapped);
    renderProducts();
  }catch(e){
    console.warn('Tsy voaray tao amin\'ny Supabase ny produits, ampiasaina ny tabilao lokaly:', e);
  }
}

// ── STATE ──
let cartItems = [];
let lastOrderData = null;
let currentProduct = null;
let modalQty = 1;
let modalSlideIdx = 0;
let selectedPay = 'mvola';
let currentStep = 1;

// ── PANEL GRID ANIMATION ──
const pg = document.getElementById('panelGrid');
if(pg) { for(let i=0;i<25;i++){ const c=document.createElement('div'); c.className='panel-cell'; c.style.setProperty('--d',i); pg.appendChild(c); } }

// ── SCROLL ──
function scrollToSection(id){ document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); }
window.addEventListener('scroll',()=>{
  document.getElementById('mainNav').classList.toggle('scrolled',window.scrollY>20);
});

// ── MOBILE MENU ──
function toggleMenu(){
  const m=document.getElementById('navMenu');
  m.style.display = m.style.display==='flex' ? 'none' : 'flex';
  m.style.flexDirection='column';
  m.style.position='absolute';
  m.style.top='68px';m.style.left='0';m.style.right='0';
  m.style.background='rgba(6,14,31,.98)';
  m.style.padding='1rem 2rem 1.5rem';
  m.style.gap='1rem';
}

// ── FILTER ──
let activeCat = 'KITS';
let activeType = 'all';
let searchQuery = '';

function searchProducts(val){
  searchQuery = (val||'').trim().toLowerCase();
  renderProducts();
}

function filterCat(cat){
  activeCat = cat;
  activeType = 'all';
  document.querySelectorAll('.sub-tab').forEach(t=>t.classList.toggle('active', t.textContent.includes('Tous')));
  document.getElementById('panneau-subfilter').style.display    = cat==='PANNEAUX'    ? 'block' : 'none';
  document.getElementById('batterie-subfilter').style.display   = cat==='BATTERIES'   ? 'block' : 'none';
  document.getElementById('onduleur-subfilter').style.display   = cat==='ONDULEURS'   ? 'block' : 'none';
  document.getElementById('regulateur-subfilter').style.display = cat==='RÉGULATEURS' ? 'block' : 'none';
  document.querySelectorAll('.cat-tab').forEach(t=>{
    const tCat = t.textContent.trim()==='Tous' ? 'all'
      : t.textContent.includes('Panneaux') ? 'PANNEAUX'
      : t.textContent.includes('Batteries') ? 'BATTERIES'
      : t.textContent.includes('Onduleurs') ? 'ONDULEURS'
      : t.textContent.includes('Régulateurs') ? 'RÉGULATEURS'
      : t.textContent.includes('Accessoires') ? 'ACCESSOIRES'
      : t.textContent.includes('Accessoires') ? 'ACCESSOIRES'
      : t.textContent.includes('Pack Complet') ? 'KITS' : '';
    t.classList.toggle('active', tCat === cat);
  });
  renderProducts();
}

function filterType(type){
  activeType = type;
  document.querySelectorAll('.sub-tab').forEach(t=>{
    const txt = t.textContent;
    const tType = txt.includes('Tous') ? 'all'
      : txt.includes('Monocristallin') ? 'Monocristallin'
      : txt.includes('Polycristallin') ? 'Polycristallin'
      : txt.includes('Bifacial') ? 'Bifacial'
      : txt.includes('Flexible') ? 'Flexible'
      : txt.includes('Lithium') ? 'Lithium'
      : txt.includes('Gel') ? 'Gel'
      : txt.includes('AGM') ? 'AGM'
      : txt.includes('Acide-Plomb') ? 'Acide-Plomb'
      : txt.includes('Pur Sinus') ? 'Pur Sinus'
      : txt.includes('Quasi Sinus') ? 'Quasi Sinus'
      : txt.includes('PWM') ? 'PWM'
      : txt.includes('MPPT') ? 'MPPT' : '';
    t.classList.toggle('active', tType === type);
  });
  renderProducts();
}

// ── RENDER PRODUCTS ──
function renderProducts(){
  let filtered;
  if(searchQuery){
    filtered = products.filter(p=>{
      const hay = `${p.name} ${p.desc} ${p.cat} ${p.type||''} ${p.icon||''}`.toLowerCase();
      return hay.includes(searchQuery);
    });
  } else {
    filtered = activeCat==='all' ? products : products.filter(p=>p.cat===activeCat);
    const catsWithType = ['PANNEAUX','BATTERIES','ONDULEURS','RÉGULATEURS'];
    if(catsWithType.includes(activeCat) && activeType!=='all'){
      filtered = filtered.filter(p=>p.type===activeType);
    }
  }
  const grid = document.getElementById('productGrid');
  if(!filtered.length){
    grid.innerHTML = searchQuery
      ? `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--g400)">Tsy misy entana mifanaraka amin'ny "${searchQuery}".</div>`
      : '<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--g400)">Aucun produit dans cette catégorie.</div>';
    return;
  }
  grid.innerHTML = filtered.map(p=>{
    const slides3 = p.cat==='KITS' ? p.imgs : p.imgs.slice(0,3);
    const slidesHtml = slides3.map((u,i)=>`
      <div class="card-slide${i===0?' active':''}">
        <img src="${u}" alt="${p.name}" loading="lazy"/>
      </div>`).join('');
    const dotsHtml = slides3.length>1 ? `<div class="card-slide-dots">${slides3.map((_,i)=>`<div class="card-slide-dot${i===0?' active':''}"></div>`).join('')}</div>` : '';
    return `
    <div class="product-card" onclick="openModal(${p.id})" data-id="${p.id}">
      ${p.badge==='new'?'<span class="card-badge badge-new">Nouveau</span>':''}
      ${p.badge==='sale'?`<span class="card-badge badge-sale">-${Math.round((1-p.price/p.old)*100)}%</span>`:''}
      ${p.badge==='hot'?'<span class="card-badge badge-hot">🔥 Best-seller</span>':''}
      <div class="card-img">
        ${slidesHtml}
        ${dotsHtml}
      </div>
      <div class="card-body">
        <div class="card-cat">${p.cat}</div>
        <div class="card-name">${p.name}</div>
        <div class="card-desc">${p.desc}</div>
        <div class="card-footer">
          <div>
            <span class="card-price-now">${fmtAr(p.price)}</span>
            ${p.old?`<span class="card-price-old">${fmtAr(p.old)}</span>`:''}
          </div>
          <button class="card-add" onclick="event.stopPropagation();openModal(${p.id})">+</button>
        </div>
      </div>
    </div>`;
  }).join('');
  // Start card slideshows
  startCardSlideshows();
}

// ── CARD SLIDESHOWS ──
let cardTimers = [];
function startCardSlideshows(){
  cardTimers.forEach(t=>clearInterval(t));
  cardTimers = [];
  document.querySelectorAll('.product-card').forEach(card=>{
    const slides = card.querySelectorAll('.card-slide');
    const dots = card.querySelectorAll('.card-slide-dot');
    if(slides.length<=1) return;
    let idx=0;
    const t = setInterval(()=>{
      slides[idx].classList.remove('active');
      dots[idx]?.classList.remove('active');
      idx=(idx+1)%slides.length;
      slides[idx].classList.add('active');
      dots[idx]?.classList.add('active');
    }, 3000);
    cardTimers.push(t);
  });
}

// ── MODAL ──
function openModal(id){
  currentProduct = products.find(p=>p.id===id);
  modalQty = 1;
  document.getElementById('qtyVal').textContent = 1;
  document.getElementById('mName').textContent = currentProduct.name;
  document.getElementById('mCat').textContent = currentProduct.cat;
  document.getElementById('mPhoto').src = currentProduct.imgs[0];
  document.getElementById('mPhoto').alt = currentProduct.name;

  // Build captions from specs (1 per image, cycle through specs)
  const specs = currentProduct.specs;
  currentProduct._captions = currentProduct.imgs.map((_, i) => {
    const s = specs[i % specs.length];
    return s ? { icon: getCaptionIcon(s.k), text: `${s.k} : ${s.v}` } : { icon: '📸', text: currentProduct.name };
  });

  // Set first caption
  setCaption(0);

  document.getElementById('mThumbs').innerHTML = currentProduct.imgs.map((u,idx)=>`
    <div class="modal-thumb${idx===0?' active':''}" onclick="switchPhoto(${idx})">
      <img src="${u}" alt="${currentProduct.name} ${idx+1}"/>
    </div>`).join('');
  modalSlideIdx = 0;
  document.getElementById('mPrice').textContent = `${fmtAr(currentProduct.price)}`;
  const oldEl=document.getElementById('mOld');
  const discEl=document.getElementById('mDisc');
  if(currentProduct.old){
    oldEl.textContent=`${fmtAr(currentProduct.old)}`;
    discEl.textContent=`-${Math.round((1-currentProduct.price/currentProduct.old)*100)}%`;
    discEl.style.display='inline-block';
  } else { oldEl.textContent=''; discEl.style.display='none'; }
  document.getElementById('mSpecs').innerHTML = currentProduct.specs.map(s=>`
    <div class="spec-box"><div class="spec-box-key">${s.k}</div><div class="spec-box-val">${s.v}</div></div>`).join('');
  document.getElementById('mFeatures').innerHTML = currentProduct.feats.map(f=>`
    <li><span class="feat-check">✓</span>${f}</li>`).join('');
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function setCaption(idx){
  const cap = currentProduct._captions && currentProduct._captions[idx];
  const textEl = document.getElementById('mCaptionText');
  const iconEl = document.getElementById('mCaptionIcon');
  if(cap){ textEl.style.opacity='0'; setTimeout(()=>{ iconEl.textContent=cap.icon; textEl.textContent=cap.text; textEl.style.opacity='1'; },150); }
}
function getCaptionIcon(key){
  const k=key.toLowerCase();
  if(k.includes('puissance')||k.includes('watt')) return '⚡';
  if(k.includes('rendement')) return '📈';
  if(k.includes('poids')) return '⚖️';
  if(k.includes('dimension')||k.includes('taille')) return '📐';
  if(k.includes('garantie')) return '🛡️';
  if(k.includes('capacit')) return '🔋';
  if(k.includes('tension')||k.includes('voltage')) return '🔌';
  if(k.includes('cert')) return '✅';
  if(k.includes('cycle')) return '🔄';
  if(k.includes('temp')) return '🌡️';
  if(k.includes('flex')) return '🌊';
  return '📋';
}
function switchPhoto(idx){
  modalSlideIdx = idx;
  document.getElementById('mPhoto').src = currentProduct.imgs[idx];
  document.querySelectorAll('.modal-thumb').forEach((t,i)=>t.classList.toggle('active',i===idx));
  setCaption(idx);
}
function closeModal(){
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow='';
}
function handleModalOverlay(e){ if(e.target===document.getElementById('modalOverlay')) closeModal(); }
function changeQty(d){ modalQty=Math.max(1,modalQty+d); document.getElementById('qtyVal').textContent=modalQty; }
function addFromModal(){ addToCart(currentProduct,modalQty); toast(`${modalQty}× ${currentProduct.name} ajouté !`); closeModal(); }
// ── FAVORIS ──
let favoris = [];

function addToWishlist(){
  if(!currentProduct) return;
  const exists = favoris.find(p=>p.id===currentProduct.id);
  if(exists){
    toast(`💜 "${currentProduct.name}" déjà dans vos favoris !`);
    return;
  }
  favoris.push(currentProduct);
  renderFavoris();
  toast(`♡ ${currentProduct.name} ajouté aux favoris !`);
}

function removeFromFav(id){
  favoris = favoris.filter(p=>p.id!==id);
  renderFavoris();
}

function addFavToCart(id){
  const p = favoris.find(f=>f.id===id);
  if(p){ addToCart(p,1); toast(`🛒 ${p.name} ajouté au panier !`); }
}

function addAllToCart(){
  favoris.forEach(p=>addToCart(p,1));
  toast(`🛒 ${favoris.length} produit(s) ajouté(s) au panier !`);
  toggleFav();
}

function clearFavoris(){
  favoris=[];
  renderFavoris();
  toast('🗑 Favoris vidés.');
}

function renderFavoris(){
  const count=favoris.length;
  const badge=document.getElementById('favCount');
  badge.textContent=count;
  badge.style.display=count>0?'flex':'none';
  document.getElementById('favSub').textContent=`${count} article${count!==1?'s':''}`;
  const body=document.getElementById('favBody');
  const foot=document.getElementById('favFoot');
  if(!count){
    body.innerHTML='<div class="fav-empty"><div style="font-size:3rem;margin-bottom:1rem">♡</div><div style="font-weight:700;color:var(--g800);margin-bottom:.4rem">Aucun favori</div><div style="font-size:.83rem;color:var(--g400)">Cliquez sur ♡ pour ajouter un produit</div></div>';
    foot.style.display='none';
    return;
  }
  foot.style.display='block';
  body.innerHTML=favoris.map(p=>`
    <div class="fav-item">
      <div class="fav-item-img"><img src="${p.imgs[0]}" alt="${p.name}"/></div>
      <div class="fav-item-info">
        <div class="fav-item-name">${p.name}</div>
        <div class="fav-item-price">${fmtAr(p.price)}${p.old?` <span style="font-size:.72rem;color:var(--g400);text-decoration:line-through;font-weight:400">${fmtAr(p.old)}</span>`:''}</div>
      </div>
      <div class="fav-item-actions">
        <button class="fav-to-cart" onclick="addFavToCart(${p.id})">🛒 Panier</button>
        <button class="fav-remove" onclick="removeFromFav(${p.id})">✕ Retirer</button>
      </div>
    </div>`).join('');
}

function toggleFav(){
  const ov=document.getElementById('favOverlay');
  const open=ov.classList.toggle('open');
  document.body.style.overflow=open?'hidden':'';
}

function handleFavOverlay(e){
  if(e.target===document.getElementById('favOverlay')) toggleFav();
}

// ── CONTACT FORM ──
function sendContactForm(){
  const name=document.getElementById('ctName').value.trim();
  const tel=document.getElementById('ctTel').value.trim();
  const email=document.getElementById('ctEmail').value.trim();
  const subject=document.getElementById('ctSubject').value;
  const message=document.getElementById('ctMessage').value.trim();
  if(!name||!tel||!email||!message){ toast('⚠️ Veuillez remplir tous les champs !'); return; }

  const mailSubject = `[Soltex] ${subject} - ${name}`;
  const mailBody =
`Nouveau message depuis le site Soltex

Nom : ${name}
Téléphone : ${tel}
Email : ${email}
Sujet : ${subject}

Message :
${message}`;

  const mailtoLink = `mailto:rasolofonirainytokiniaina@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
  window.location.href = mailtoLink;

  // Tahirizina ao amin'ny Supabase koa ny hafatra
  supabaseClient.from('contact_messages').insert({
    name, tel, email, subject, message
  }).then(({error})=>{ if(error) console.warn('contact_messages insert error:', error); });

  toast(`✅ Ouverture de votre messagerie...`);
  document.getElementById('ctName').value='';
  document.getElementById('ctTel').value='';
  document.getElementById('ctEmail').value='';
  document.getElementById('ctMessage').value='';
}

// ── CART ──
function addToCart(p,qty){
  const ex=cartItems.find(i=>i.product.id===p.id);
  ex ? ex.qty+=qty : cartItems.push({product:p,qty});
  renderCart();
}
function removeFromCart(id){ cartItems=cartItems.filter(i=>i.product.id!==id); renderCart(); }
function changeCartQty(id,d){
  const item=cartItems.find(i=>i.product.id===id);
  if(!item) return;
  item.qty=Math.max(1,item.qty+d);
  if(item.qty===0) removeFromCart(id); else renderCart();
}
function renderCart(){
  const total=cartItems.reduce((s,i)=>s+i.product.price*i.qty,0);
  const count=cartItems.reduce((s,i)=>s+i.qty,0);
  document.getElementById('cartCount').textContent=count;
  document.getElementById('cartSub').textContent=`${count} article${count!==1?'s':''}`;
  const body=document.getElementById('cartBody');
  const foot=document.getElementById('cartFoot');
  if(!cartItems.length){
    body.innerHTML='';
    const emp=document.getElementById('cartEmpty')||document.createElement('div');
    emp.id='cartEmpty'; emp.className='cart-empty-state';
    emp.innerHTML='<div style="font-size:3rem;margin-bottom:1rem">🛒</div><div style="font-weight:700;color:var(--g800);margin-bottom:.4rem">Panier vide</div><div style="font-size:.83rem;color:var(--g400)">Ajoutez des produits pour commencer</div>';
    body.appendChild(emp);
    foot.style.display='none'; return;
  }
  foot.style.display='block';
  body.innerHTML=cartItems.map(i=>`
    <div class="cart-item-row">
      <div class="cart-item-icon"><img src="${i.product.imgs[0]}" alt="${i.product.name}"/></div>
      <div class="cart-item-info">
        <div class="cart-item-name">${i.product.name}</div>
        <div class="cart-item-price">${fmtAr(i.product.price*i.qty)}</div>
        <div class="cart-item-qty-row">
          <button class="cq-btn" onclick="changeCartQty(${i.product.id},-1)">−</button>
          <span class="cq-num">${i.qty}</span>
          <button class="cq-btn" onclick="changeCartQty(${i.product.id},1)">+</button>
        </div>
      </div>
      <button class="cart-item-del" onclick="removeFromCart(${i.product.id})">🗑</button>
    </div>`).join('');
  const ship=total>=860000?0:64500;
  document.getElementById('cartSubtotal').textContent=`${fmtAr(total)}`;
  document.getElementById('cartShip').textContent=total>=860000?'🎉 Gratuite':`${fmtAr(ship)}`;
  document.getElementById('cartTotal').textContent=`${fmtAr(total+ship)}`;
}
function toggleCart(){
  const ov=document.getElementById('cartOverlay');
  const open=ov.classList.toggle('open');
  document.body.style.overflow=open?'hidden':'';
}
function handleCartOverlay(e){ if(e.target===document.getElementById('cartOverlay')) toggleCart(); }

// ── CHECKOUT ──
function openCheckout(){
  if(!cartItems.length){ toast('⚠️ Panier vide !'); return; }
  toggleCart();
  setTimeout(()=>{ currentStep=1; renderStep(1); document.getElementById('coOverlay').classList.add('open'); document.body.style.overflow='hidden'; },350);
}
function closeCheckout(){ document.getElementById('coOverlay').classList.remove('open'); document.body.style.overflow=''; }
function goStep(n){
  if(n===2){
    const v=['fPrenom','fNom','fTel','fAdresse','fVille'].map(id=>document.getElementById(id).value.trim());
    if(v.some(x=>!x)){ toast('⚠️ Veuillez remplir tous les champs !'); return; }
    const total=cartItems.reduce((s,i)=>s+i.product.price*i.qty,0);
    const ship=total>=860000?0:64500;
    document.getElementById('coSumItems').innerHTML=
      cartItems.map(i=>`<div class="co-sum-item"><span>${i.product.icon} ${i.product.name} ×${i.qty}</span><span>${fmtAr(i.product.price*i.qty)}</span></div>`).join('')+
      `<div class="co-sum-item"><span>🚚 Livraison</span><span>${ship===0?'🎉 Gratuite':fmtAr(ship)}</span></div>`;
    document.getElementById('coSumTotal').textContent=`${fmtAr(total+ship)}`;
    selPay(selectedPay);
  }
  currentStep=n; renderStep(n);
}
function renderStep(n){
  [1,2,3].forEach(i=>{
    document.getElementById(`coStep${i}`).style.display=i===n?'block':'none';
    const s=document.getElementById(`cs${i}`);
    const c=document.getElementById(`cc${i}`);
    s.className='co-step'+(i===n?' active':i<n?' done':'');
    c.textContent=i<n?'✓':i;
  });
  document.getElementById('cl1').className='co-step-line'+(n>1?' done':'');
  document.getElementById('cl2').className='co-step-line'+(n>2?' done':'');
}
function selPay(m){
  selectedPay=m;
  ['mvola','orange','airtel','cash'].forEach(x=>document.getElementById(`po_${x}`).classList.toggle('sel',x===m));
  const colors={mvola:'#EFF6FF',orange:'#FFF7ED',airtel:'#FFF1F2',cash:'#F0FDF4'};
  const borders={mvola:'#BFDBFE',orange:'#FED7AA',airtel:'#FECACA',cash:'#BBF7D0'};
  let html='';
  if(m==='cash'){
    html=`<div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:10px;padding:.8rem 1rem;font-size:.83rem;color:#166534">💵 <strong>Paiement à la livraison</strong> — Préparez le montant exact. Notre livreur passera sous 24–48h.</div>`;
  } else {
    const labels={mvola:'MVola (Telma)',orange:'Orange Money',airtel:'Airtel Money'};
    const ph={mvola:'034 XX XXX XX',orange:'032 XX XXX XX',airtel:'033 XX XXX XX'};
    html=`<div style="background:${colors[m]};border:1px solid ${borders[m]};border-radius:10px;padding:.8rem 1rem;font-size:.83rem;color:var(--g700);margin-bottom:.6rem">
      📱 <strong>${labels[m]}</strong> — Saisissez votre numéro pour recevoir la demande de paiement.</div>
      <div class="form-group">
        <label class="form-label">Votre numéro ${labels[m]}</label>
        <input class="form-input" id="fPayNum" placeholder="${ph[m]}" style="border-color:${borders[m]}"/>
      </div>`;
  }
  document.getElementById('payInputZone').innerHTML=html;
}
function confirmOrder(){
  if(selectedPay!=='cash'){
    const n=document.getElementById('fPayNum');
    if(!n||!n.value.trim()){ toast('⚠️ Entrez votre numéro de paiement !'); return; }
  }
  const ref='#SM-'+Math.floor(100000+Math.random()*900000);
  document.getElementById('coRef').textContent=ref;

  // données
  const prenom=document.getElementById('fPrenom').value;
  const nom=document.getElementById('fNom').value;
  const tel=document.getElementById('fTel').value;
  const adresse=document.getElementById('fAdresse').value;
  const ville=document.getElementById('fVille').value;
  const cp=document.getElementById('fCp').value;
  const payNames={mvola:'MVola (Telma)',orange:'Orange Money',airtel:'Airtel Money',cash:'Espèces à la livraison'};
  const payNum=selectedPay!=='cash'?document.getElementById('fPayNum')?.value:'N/A';
  const total=cartItems.reduce((s,i)=>s+i.product.price*i.qty,0);
  const ship=total>=860000?0:64500;
  const grand=total+ship;
  const itemsList=cartItems.map(i=>`${i.product.icon} ${i.product.name} ×${i.qty} = ${fmtAr(i.product.price*i.qty)}`).join('\n');

  // affichage confirmation
  document.getElementById('coConfLiv').innerHTML=`<strong>${prenom} ${nom}</strong><br>📞 ${tel}<br>📍 ${adresse}, ${ville} ${cp}`;
  document.getElementById('coConfPay').innerHTML=`<strong>${payNames[selectedPay]}</strong>${payNum&&payNum!=='N/A'?`<br>📱 ${payNum}`:''}`;
  document.getElementById('coConfItems').innerHTML=cartItems.map(i=>`
    <div style="display:flex;justify-content:space-between;padding:.2rem 0;border-bottom:1px solid var(--g200)">
      <span>${i.product.icon} ${i.product.name} ×${i.qty}</span>
      <span style="font-weight:700">${fmtAr(i.product.price*i.qty)}</span>
    </div>`).join('')+`<div style="display:flex;justify-content:space-between;font-size:.8rem;color:var(--g400);padding:.2rem 0"><span>🚚 Livraison</span><span>${ship===0?'Gratuite':fmtAr(ship)}</span></div>`;
  document.getElementById('coConfTotal').innerHTML=`<div style="display:flex;justify-content:space-between">Total payé <span>${fmtAr(grand)}</span></div>`;

  // ── ENVOI EMAIL (mailto) ──
  const mailSubject = `Nouvelle commande ${ref} - Soltex`;
  const mailBody =
`Bonjour,

Nouvelle commande reçue sur Soltex !

📦 Référence : ${ref}
📅 Date : ${new Date().toLocaleString('fr-FR')}

CLIENT
Nom : ${prenom} ${nom}
Téléphone : ${tel}
Adresse : ${adresse}, ${ville} ${cp}

PAIEMENT
Mode : ${payNames[selectedPay]}
Numéro : ${payNum || 'N/A'}

ARTICLES
${itemsList}

Sous-total : ${fmtAr(total)}
Livraison : ${ship===0?'Gratuite':fmtAr(ship)}
TOTAL : ${fmtAr(grand)}`;

  const mailtoLink = `mailto:rasolofonirainytokiniaina@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
  window.location.href = mailtoLink;

  // Tahirizina ao amin'ny Supabase ny commande + ny entana ao aminy
  saveOrderToSupabase({ ref, prenom, nom, tel, adresse, ville, cp, payNum, total, ship, grand });

  // Tahirizina ho an'ny facture (Télécharger la facture)
  lastOrderData = { ref, prenom, nom, tel, adresse, ville, cp, payLabel: payNames[selectedPay], payNum, items: cartItems.map(i=>({...i})), total, ship, grand };

  currentStep=3; renderStep(3);
}
// ── FACTURE (impression / PDF) ──
// Manokatra tabilao vaovao misy ny facture voarindra tsara, ary
// miantso mivantana ny "print dialog" an'ny navigateur: azon'ny
// mpampiasa safidiana ny imprimante mifandray amin'ny appareil-ny
// (solosaina/finday), na "Enregistrer en PDF" raha tsy misy
// imprimante mifandray.
function generateInvoice(){
  if(!lastOrderData){ toast('⚠️ Tsy misy commande hozahana facture'); return; }
  const o = lastOrderData;
  const dateStr = new Date().toLocaleString('fr-FR');
  const rows = o.items.map(i=>`
    <tr>
      <td>${i.product.icon||''} ${i.product.name}</td>
      <td style="text-align:center">${i.qty}</td>
      <td style="text-align:right">${fmtAr(i.product.price)}</td>
      <td style="text-align:right">${fmtAr(i.product.price*i.qty)}</td>
    </tr>`).join('');

  const html = `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"/>
  <title>Facture ${o.ref} — Soltex</title>
  <style>
    *{box-sizing:border-box;font-family:'Segoe UI',Arial,sans-serif}
    body{margin:0;padding:2.5rem;color:#1E293B}
    .inv-head{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:3px solid #1B4FDB;padding-bottom:1rem;margin-bottom:1.5rem}
    .inv-logo{font-size:1.6rem;font-weight:800;color:#060E1F}
    .inv-logo span{color:#F59E0B}
    .inv-meta{text-align:right;font-size:.85rem;color:#475569}
    .inv-meta b{color:#060E1F;font-size:1.05rem}
    .inv-cols{display:flex;justify-content:space-between;gap:2rem;margin-bottom:1.5rem}
    .inv-box{flex:1;background:#F8FAFC;border-radius:10px;padding:1rem}
    .inv-box h4{margin:0 0 .5rem;font-size:.75rem;text-transform:uppercase;letter-spacing:.05em;color:#475569}
    table{width:100%;border-collapse:collapse;margin-bottom:1.5rem}
    th{text-align:left;font-size:.75rem;text-transform:uppercase;color:#475569;border-bottom:2px solid #E2E8F0;padding:.5rem}
    td{padding:.6rem .5rem;border-bottom:1px solid #E2E8F0;font-size:.9rem}
    .inv-totals{margin-left:auto;width:280px}
    .inv-totals div{display:flex;justify-content:space-between;padding:.35rem 0;font-size:.9rem}
    .inv-totals .grand{border-top:2px solid #1B4FDB;margin-top:.4rem;padding-top:.6rem;font-weight:800;font-size:1.15rem;color:#1B4FDB}
    .inv-foot{margin-top:2.5rem;text-align:center;font-size:.78rem;color:#94A3B8;border-top:1px solid #E2E8F0;padding-top:1rem}
    @media print{ body{padding:1.2cm} }
  </style></head><body>
    <div class="inv-head">
      <div class="inv-logo">Sol<span>tex</span></div>
      <div class="inv-meta"><b>FACTURE</b><br/>${o.ref}<br/>${dateStr}</div>
    </div>
    <div class="inv-cols">
      <div class="inv-box">
        <h4>Vendeur</h4>
        Soltex — Énergie Solaire Madagascar<br/>
        rasolofonirainytokiniaina@gmail.com
      </div>
      <div class="inv-box">
        <h4>Client</h4>
        <b>${o.prenom} ${o.nom}</b><br/>
        📞 ${o.tel}<br/>
        📍 ${o.adresse}, ${o.ville} ${o.cp||''}
      </div>
    </div>
    <table>
      <thead><tr><th>Article</th><th style="text-align:center">Qté</th><th style="text-align:right">Prix unit.</th><th style="text-align:right">Total</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <div class="inv-totals">
      <div><span>Sous-total</span><span>${fmtAr(o.total)}</span></div>
      <div><span>Livraison</span><span>${o.ship===0?'Gratuite':fmtAr(o.ship)}</span></div>
      <div><span>Mode de paiement</span><span>${o.payLabel}</span></div>
      <div class="grand"><span>Total payé</span><span>${fmtAr(o.grand)}</span></div>
    </div>
    <div class="inv-foot">Misaotra tamin'ny fividiananao tao amin'ny Soltex ! — Facture générée le ${dateStr}</div>
  </body></html>`;

  const w = window.open('', '_blank');
  if(!w){ toast('⚠️ Alefaso ny fisokafan\'ny fenetra vaovao (popup) amin\'ny navigateur'); return; }
  w.document.write(html);
  w.document.close();
  w.onload = ()=>{ w.focus(); w.print(); };
}

async function saveOrderToSupabase({ ref, prenom, nom, tel, adresse, ville, cp, payNum, total, ship, grand }){
  try{
    const { data: order, error: orderErr } = await supabaseClient
      .from('orders')
      .insert({
        ref,
        prenom, nom, tel,
        adresse, ville, code_postal: cp,
        payment_method: selectedPay,
        payment_number: payNum && payNum!=='N/A' ? payNum : null,
        subtotal: total, shipping: ship, total: grand
      })
      .select()
      .single();
    if(orderErr || !order){ console.warn('orders insert error:', orderErr); return; }

    const items = cartItems.map(i=>({
      order_id: order.id,
      product_id: i.product.id,
      product_name: i.product.name,
      unit_price: i.product.price,
      qty: i.qty
    }));
    const { error: itemsErr } = await supabaseClient.from('order_items').insert(items);
    if(itemsErr) console.warn('order_items insert error:', itemsErr);
  }catch(e){
    console.warn('Tsy voatahiry tao amin\'ny Supabase ny commande:', e);
  }
}
function finishCheckout(){
  closeCheckout(); cartItems=[];
  renderCart(); toast('🎉 Merci pour votre commande !');
}

// ── TOAST ──
function toast(msg){
  const t=document.getElementById('toast');
  t.innerHTML=msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2800);
}

// ── WHY SLIDESHOW ──
let whyIdx = 0;
let whyTimer = null;
const whySlideCount = 5;

function whyRender(){
  document.querySelectorAll('.why-slide').forEach((s,i)=>s.classList.toggle('active', i===whyIdx));
  const dotsEl = document.getElementById('whyDots');
  if(dotsEl.children.length === 0){
    dotsEl.innerHTML = Array.from({length:whySlideCount}).map((_,i)=>
      `<div class="why-dot${i===0?' active':''}" onclick="whyGoTo(${i})"></div>`).join('');
  } else {
    document.querySelectorAll('.why-dot').forEach((d,i)=>d.classList.toggle('active', i===whyIdx));
  }
}
function whyNext(){ whyIdx=(whyIdx+1)%whySlideCount; whyRender(); whyResetTimer(); }
function whyPrev(){ whyIdx=(whyIdx-1+whySlideCount)%whySlideCount; whyRender(); whyResetTimer(); }
function whyGoTo(i){ whyIdx=i; whyRender(); whyResetTimer(); }
function whyResetTimer(){
  clearInterval(whyTimer);
  whyTimer = setInterval(whyNext, 4000);
}
whyRender();
whyResetTimer();

// ── VIDEO MODAL ──
function openVideoModal(){
  document.getElementById('videoOverlay').classList.add('open');
  document.body.style.overflow='hidden';
  document.getElementById('heroVideo').play();
}
function closeVideoModal(){
  document.getElementById('videoOverlay').classList.remove('open');
  document.body.style.overflow='';
  document.getElementById('heroVideo').pause();
  document.getElementById('heroVideo').currentTime=0;
}

// ── PRODUITS BANNER SLIDESHOW ──
let pbIdx=0, pbTimer=null;
const pbCount=3;
function pbRender(){
  document.querySelectorAll('.pb-slide').forEach((s,i)=>s.classList.toggle('active',i===pbIdx));
  document.querySelectorAll('.pb-dot').forEach((d,i)=>d.classList.toggle('active',i===pbIdx));
}
function pbGoTo(i){ pbIdx=i; pbRender(); pbReset(); }
function pbReset(){ clearInterval(pbTimer); pbTimer=setInterval(()=>{ pbIdx=(pbIdx+1)%pbCount; pbRender(); },4000); }
pbRender(); pbReset();

// ── SUPABASE: FANARAHA-MASO NY MPITSIDIKA (visites) ──
// Isaky ny fitsidihana vaovao (session), dia tahirizina ao amin'ny
// Supabase ny angona ara-teknika (firenena, appareil, navigateur,
// avy taiza) — TSY misy anarana na identité manokana, satria tsy
// azo alaina eo amin'ny mpitsidika tsy mahazo antoka izany.
async function trackSiteVisit(){
  try{
    const SESSION_KEY = 'soltex_visit_session';
    let sessionId = sessionStorage.getItem(SESSION_KEY);
    if(!sessionId){
      sessionId = 'v_' + Date.now() + '_' + Math.random().toString(36).slice(2,10);
      sessionStorage.setItem(SESSION_KEY, sessionId);
    } else {
      // efa voatahiry ny fitsidihana amin'ity session ity, aza averina
      return;
    }

    const ua = navigator.userAgent;
    const device_type = /Mobi|Android|iPhone|iPad/i.test(ua) ? 'Mobile' : 'Ordinateur';
    let browser = 'Autre';
    if(ua.includes('Edg/')) browser='Edge';
    else if(ua.includes('Chrome/')) browser='Chrome';
    else if(ua.includes('Firefox/')) browser='Firefox';
    else if(ua.includes('Safari/')) browser='Safari';

    let country=null, city=null;
    try{
      const geoRes = await fetch('https://ipwho.is/');
      const geo = await geoRes.json();
      if(geo && geo.success!==false){ country = geo.country || null; city = geo.city || null; }
    }catch(e){ /* tsy maninona raha tsy azo, mandeha ihany ny tracking */ }

    await supabaseClient.from('site_visits').insert({
      session_id: sessionId,
      page: location.pathname || '/',
      referrer: document.referrer || null,
      user_agent: ua,
      device_type, browser, country, city
    });
  }catch(e){
    console.warn('Tsy voatahiry ny visite:', e);
  }
}

// ── INIT ──
renderProducts();
renderCart();
loadProductsFromSupabase();
trackSiteVisit();