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
  teachingEngagement: {
    update: false,
    data: {
      courseTitle: "",
      courseCode: "",
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
      startDate: "",
      nameOfOtherSupervisors:"",
      scholarsName:"",
      endDate: 1,
      priority:1,
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
      visibility: true
    },
    links: []
  }
};
