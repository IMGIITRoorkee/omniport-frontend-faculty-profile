// storing the initial form data of all forms
export const initial = {
  interest: {
    update: false,
    data: { topic: "", id: -1, visibility: true },
    links: []
  },
  education: {
    update: false,
    data: {
      year: "",
      institute: "",
      field: "",
      degree: "",
      graduation: "",
      priority: 1,
      visibility: true,
      cgpa: "",
      percentage: "",
      isPercentage: false
    },
    links: []
  },
  honour: {
    update: false,
    data: {
      year: "",
      organisation: "",
      award: "",
      priority: 1,
      visibility: true,
    },
    links: []
  },
  collaboration: {
    update: false,
    data: {
      topic: "",
      organisation: "",
      priority: 1,
      visibility: true,
    },
    links: []
  },
  associateScholar: {
    update: false,
    data: {
      scholarName: "",
      institution: "",
      priority: 1,
      visibility: true,
    },
    links: []
  },
  visit: {
    update: false,
    data: {
      date: "",
      place: "",
      purpose: "",
      priority: 1,
      visibility: true,
    },
    links: []
  },
  position: {
    update: false,
    data: {
      id: -1,
      startDate: "",
      endDate: "",
      isFullDate: true,
      position: "",
      organisation: "",
      description: "",
      priority: 1,
      visibility: true
    },
    links: []
  },
  book: {
    update: false,
    data: {
      id: -1,
      title: "",
      authors: "",
      publisher: "",
      year: "",
      pages: "",
      volumes: "",
      contribution: "",
      editors: "",
      isbnCode: "",
      priority: 1,
      visibility: true,
      book: "",
      bookLink: "",
      links: []
    }
  },
  paper: {
    update: false,
    data: {
      id: -1,
      priority: 1,
      visibility: true,
      journal: "",
      title: "",
      authors: "",
      publisher: "",
      year: "",
      pages: "",
      volumes: "",
      paper: "",
      paperLink: ""
    },
    links: ["paper"]
  },
  referee: {
    update: false,
    data: {
      referee: "",
      designation: "",
      institute: "",
      phoneNumber: "",
      email: "",
      priority: 1,
      visibility: true
    },
    links: []
  },
  project: {
    update: false,
    data: {
      id: -1,
      topic: "",
      field: "",
      description: "",
      startDate: "",
      endDate: "",
      isFullDate: true,
      image: "",
      imageLink: "",
      visibility: true
    },
    links: ["image"]
  }
};
