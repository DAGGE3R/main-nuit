import { OrganId, OrganInfo } from "@/types/organs"

export const organsInfo: Record<OrganId, OrganInfo> = {
  brain: {
    title: "Cerveau",
    description: "Comme les courants océaniques qui dirigent les mouvements de l'eau, le cerveau est le centre de contrôle du corps humain, orchestrant les pensées et les émotions.",
    functions: [
      "Dirige les flux d'information comme les courants marins",
      "Régule les fonctions comme les marées",
      "Traite les signaux comme les vagues captent les vibrations"
    ]
  },
  heart: {
    title: "Coeur",
    description: "Semblable aux puissantes vagues qui font circuler l'eau, le cœur propulse le sang à travers le corps, transportant l'oxygène et les nutriments.",
    functions: [
      "Crée un mouvement cyclique comme les marées",
      "Distribue les ressources comme les courants océaniques",
      "Nettoie comme le ressac des vagues"
    ]
  },
  lungs: {
    title: "Poumons",
    description: "Tels les échanges gazeux entre l'océan et l'atmosphère, les poumons permettent l'échange vital d'oxygène et de dioxyde de carbone.",
    functions: [
      "Échange les gaz comme la surface de l'océan",
      "Maintient l'équilibre comme les eaux marines",
      "Expulse les déchets comme les vagues sur la plage"
    ]
  },
  liver: {
    title: "Foie",
    description: "Comme l'océan qui filtre naturellement les polluants, le foie détoxifie le corps et transforme les nutriments.",
    functions: [
      "Purifie comme les fonds marins filtrent l'eau",
      "Transforme les substances comme l'écosystème marin",
      "Stocke les ressources comme les récifs coralliens"
    ]
  },
  kidneys: {
    title: "Reins",
    description: "À l'image des estuaires qui filtrent l'eau, les reins purifient le sang et maintiennent l'équilibre des fluides.",
    functions: [
      "Filtre comme les mangroves côtières",
      "Régule la pression comme les profondeurs océaniques",
      "Équilibre les minéraux comme l'eau de mer"
    ]
  },
  stomach: {
    title: "Système Digestif",
    description: "Comme l'océan qui décompose la matière organique, le système digestif transforme la nourriture grâce à ses acides et enzymes.",
    functions: [
      "Décompose comme les micro-organismes marins",
      "Absorbe les nutriments comme les récifs coralliens",
      "Produit des enzymes comme la vie marine"
    ]
  }
} as const;
