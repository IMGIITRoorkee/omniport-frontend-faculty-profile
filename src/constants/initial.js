// storing the initial form data of all forms
export const initial = {
  interest: {
    update: false,
    data: {
      topic: "",
      id: -1,
      priority: 1,
      visibility: true
    },
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
  teachingEngagement: {
    update: false,
    data: {
      courseTitle: "",
      courseCode: "",
      semester: "",
      className: "",
      studentCount: "",
      lectureHours: "",
      priority: 1,
      visibility: true,
      practicalHours: "",
      tutorialHours: "",
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
  supervision:{
    update: false,
    data: {
      topic: "",
      category: "",
      phdType: "",
      startDate: "",
      nameOfOtherSupervisors:"",
      scholarsName:"",
      endDate: 1,
      priority:1,
      description: "",
      visibility: true,
    },
    links: []
  },
  collaboration: {
    update: false,
    data: {
      topic: "",
      organisation: "",
      level: "",
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
      interest: "",
      homePage: "",
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
      priority: 1,
      visibility: true
    },
    links: ["image"]
  },
  event: {
    update: false,
    data: {
      id: -1,
      name: "",
      sponsor: "",
      place: "",
      startDate: "",
      endDate: "",
      category: "sem",
      role: "o",
      description: "",
      priority: 1,
      visibility: true
    },
    links: []
  },
  membership: {
    update: false,
    data: {
      id: -1,
      organisation: "",
      position: "",
      description: "",
      startDate: "",
      endDate: "",
      isFullDate: true,
      priority: 1,
      visibility: true
    },
    links: []
  },
  administrativePosition: {
    update: false,
    data: {
      id: -1,
      organisation: "",
      position: "",
      description: "",
      startDate: "",
      endDate: "",
      isFullDate: true,
      priority: 1,
      visibility: true
    },
    links: []
  },
  professionalBackground: {
    update: false,
    data: {
      id: -1,
      organisation: "",
      position: "",
      description: "",
      startDate: "",
      endDate: "",
      isFullDate: true,
      priority: 1,
      visibility: true
    },
    links: []
  },
  miscellaneous: {
    update: false,
    data: {
      heading: "",
      description: "",
      priority: 1,
      visibility: true,
    },
    links: []
  },
  address: {
    update: false,
    data: {
      address: "",
      id: -1,
    },
    links: []
  },
  shorturl: {
    update: false,
    data: {
      shorturl: "",
      id: -1,
    },
    links: []
  },
  keyword: {
    update: false,
    data: {
      keyword: "",
      id: -1,
    },
    links: []
  },
};
