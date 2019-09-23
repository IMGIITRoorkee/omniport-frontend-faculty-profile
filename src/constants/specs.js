import {projectOptions, roleOptions, scopeOptions, supervisionOptions, graduationOptions} from "./options";

export const specs = {
  interest: {
    icon: "game",
    draggable: true,
    sortBy: "priority",
    ascending: true,
    plural: "Interests",
    fields: [
      {
        group: false,
        name: "topic",
        type: "input_field",
        const_props: {
          name: "topic",
          key: "Topic",
          placeholder: "Topic",
          label: "Topic",
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "visibility",
        type: "boolean_field",
        const_props: {
          name: "visibility",
          key: "Visibility",
          label: "Visible to others",
          required: false
        },
        user_props: ["handleChange"]
      }
    ],
    url: "interest",
    name: "Interest"
  },
  education: {
    icon: "book",
    draggable: false,
    sortBy: "year",
    ascending: true,
    plural: "Education",
    fields: [
      {
        group: true,
        widths: "equal",
        fields: [
          {
            name: "institute",
            type: "input_field",
            const_props: {
              name: "institute",
              key: "Institute",
              placeholder: "Institute",
              label: "Institute",
              required: true
            },
            user_props: ["handleChange"]
          },
          {
            name: "degree",
            type: "input_field",
            const_props: {
              name: "degree",
              key: "Degree",
              placeholder: "Degree",
              label: "Degree",
              required: true
            },
            user_props: ["handleChange"]
          }
        ]
      },
      {
        group: false,
        name: "year",
        type: "year_field",
        const_props: {
          name: "year",
          key: "Year",
          placeholder: "Year",
          label: "Year",
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "graduation",
        type: "choice_field",
        const_props: {
          name: "graduation",
          key: "Graduation",
          placeholder: "Graduation",
          label: "Graduation",
          required: true,
          options: graduationOptions
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "field",
        type: "input_field",
        const_props: {
          name: "field",
          key: "Field",
          placeholder: "Enter the field you studied in Ex: Science, Commerce",
          label: "Field",
          required: false
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "visibility",
        type: "boolean_field",
        const_props: {
          name: "visibility",
          key: "Visibility",
          label: "Visible to others",
          required: false
        },
        user_props: ["handleChange"]
      }
    ],
    url: "education",
    name: "Education"
  },
  honour: {
    icon: "star",
    draggable: true,
    sortBy: "priority",
    ascending: true,
    plural: "Honours",
    fields: [
      {
        group: false,
        name: "award",
        type: "input_field",
        const_props: {
          name: "award",
          key: "Award",
          placeholder: "Name of the award",
          label: "Award",
          required: false
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "organisation",
        type: "input_field",
        const_props: {
          name: "organisation",
          key: "Organisation",
          placeholder: "Organisation",
          label: "Organisation",
          required: true,
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "year",
        type: "year_field",
        const_props: {
          name: "year",
          key: "Year",
          placeholder: "Year",
          label: "Year",
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "visibility",
        type: "boolean_field",
        const_props: {
          name: "visibility",
          key: "Visibility",
          label: "Visible to others",
          required: false
        },
        user_props: ["handleChange"]
      }
    ],
    url: "honour",
    name: "Honour"
  },
  visit: {
    icon: "plane",
    draggable: true,
    sortBy: "priority",
    ascending: true,
    plural: "Visits",
    fields: [
      {
        group: false,
        name: "Place",
        type: "input_field",
        const_props: {
          name: "place",
          key: "Place",
          placeholder: "Place",
          label: "Place",
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "Purpose",
        type: "input_field",
        const_props: {
          name: "purpose",
          key: "Purpose",
          placeholder: "Purpose",
          label: "Purpose",
          required: true,
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "date",
        type: "date_field",
        const_props: {
          name: "date",
          key: "Date",
          placeholder: "Date",
          label: "Date",
          required: false
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "visibility",
        type: "boolean_field",
        const_props: {
          name: "visibility",
          key: "Visibility",
          label: "Visible to others",
          required: false
        },
        user_props: ["handleChange"]
      }
    ],
    url: "visit",
    name: "Visit"
  },
  collaboration: {
    icon: "handshake",
    draggable: true,
    sortBy: "priority",
    ascending: true,
    plural: "Collaborations",
    fields: [
      {
        group: false,
        name: "topic",
        type: "input_field",
        const_props: {
          name: "topic",
          key: "Topic",
          placeholder: "Topic",
          label: "Topic",
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "organisation",
        type: "input_field",
        const_props: {
          name: "organisation",
          key: "Organisation",
          placeholder: "Organisation",
          label: "Organisation",
          required: true,
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "visibility",
        type: "boolean_field",
        const_props: {
          name: "visibility",
          key: "Visibility",
          label: "Visible to others",
          required: false
        },
        user_props: ["handleChange"]
      }
    ],
    url: "collaboration",
    name: "Collaboration"
  },
  associateScholar: {
    icon: "student",
    draggable: true,
    sortBy: "priority",
    ascending: true,
    plural: "Associate scholars",
    fields: [
      {
        group: false,
        name: "scholarName",
        type: "input_field",
        const_props: {
          name: "scholarName",
          key: "ScholarName",
          placeholder: "Scholar name",
          label: "Scholar name",
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "institution",
        type: "input_field",
        const_props: {
          name: "institution",
          key: "Institution",
          placeholder: "Institution",
          label: "Institution",
          required: true,
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "visibility",
        type: "boolean_field",
        const_props: {
          name: "visibility",
          key: "Visibility",
          label: "Visible to others",
          required: false
        },
        user_props: ["handleChange"]
      }
    ],
    url: "associate_scholar",
    name: "Associate Scholar"
  },
  project: {
    icon: "folder",
    draggable: false,
    sortBy: "priority",
    ascending: true,
    plural: "Projects",
    fields: [
      {
        group: false,
        name: "topic",
        type: "input_field",
        const_props: {
          name: "topic",
          key: "Topic",
          placeholder: "Topic",
          label: "Topic",
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "field",
        type: "input_field",
        const_props: {
          name: "field",
          key: "Field",
          placeholder: "Field of project",
          label: "Field",
          required: false
        },
        user_props: ["handleChange"]
      },
      {
        group: true,
        widths: "equal",
        fields: [
          {
            name: "startDate",
            type: "date_field",
            const_props: {
              name: "startDate",
              key: "StartDate",
              placeholder: "YYYY-MM-DD",
              label: "Start date",
              required: true
            },
            user_props: ["handleChange"]
          },
          {
            name: "endDate",
            type: "date_field",
            const_props: {
              name: "endDate",
              key: "EndDate",
              placeholder: "YYYY-MM-DD",
              label: "End Date",
              required: false
            },
            user_props: ["handleChange"]
          }
        ]
      },
      {
        group: false,
        name: "isFullDate",
        type: "boolean_field",
        const_props: {
          name: "isFullDate",
          key: "IsFullDate",
          placeholder: "",
          label: "I remember the exact date",
          required: false
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "description",
        type: "text_area_field",
        const_props: {
          name: "description",
          key: "Description",
          placeholder: "Description",
          label: "Description",
          required: false
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "projectType",
        type: "choice_field",
        const_props: {
          name: "projectType",
          key: "ProjectType",
          placeholder: "Project type",
          label: "Project type",
          options: projectOptions,
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "financialOutlay",
        type: "text_area_field",
        const_props: {
          name: "financialOutlay",
          key: "FinancialOutlay",
          placeholder: "Describe the financial outlay of the project",
          label: "Financial Outlay",
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "fundingAgency",
        type: "input_field",
        const_props: {
          name: "fundingAgency",
          key: "FundingAgency",
          placeholder: "Funding agencies",
          label: "Funding agency",
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "otherInvestigatingOfficers",
        type: "input_field",
        const_props: {
          name: "otherInvestigatingOfficers",
          key: "OtherInvestingOfficers",
          placeholder: "Names of the other investigating officers",
          label: "Other investigating officers",
          required: false
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "image",
        type: "file_field",
        const_props: {
          name: "image",
          key: "Image",
          placeholder: "",
          label: "Image",
          required: false
        },
        user_props: ["handleFile", "handleDelete"]
      },
      {
        group: false,
        name: "visibility",
        type: "boolean_field",
        const_props: {
          name: "visibility",
          key: "Visibility",
          label: "Visible to others",
          required: false
        },
        user_props: ["handleChange"]
      },
    ],
    url: "project",
    name: "Project"
  },
  book: {
    icon: "book",
    draggable: true,
    sortBy: "priority",
    ascending: true,
    plural: "Books",
    fields: [
      {
        group: false,
        name: "title",
        type: "input_field",
        const_props: {
          name: "title",
          key: "Title",
          placeholder: "Title",
          label: "Title",
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "authors",
        type: "input_field",
        const_props: {
          name: "authors",
          key: "Author",
          placeholder: "Authors",
          label: "Authors",
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "contribution",
        type: "input_field",
        const_props: {
          name: "contribution",
          key: "contribution",
          placeholder: "Your contribution",
          label: "Contribution",
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "publisher",
        type: "input_field",
        const_props: {
          name: "publisher",
          key: "Publisher",
          placeholder: "Publisher",
          label: "Publisher",
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "year",
        type: "year_field",
        const_props: {
          name: "year",
          key: "year",
          placeholder: "Year",
          label: "Year",
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: true,
        widths: "equal",
        fields: [
          {
            name: "pages",
            type: "input_field",
            const_props: {
              name: "pages",
              key: "Pages",
              placeholder: "Pages",
              label: "Pages",
              required: false
            },
            user_props: ["handleChange"]
          },
          {
            name: "volumes",
            type: "input_field",
            const_props: {
              name: "volumes",
              key: "Volumes",
              placeholder: "Volumes",
              label: "Volumes",
              required: false
            },
            user_props: ["handleChange"]
          }
        ]
      },
      {
        group: false,
        name: "isbnCode",
        type: "input_field",
        const_props: {
          name: "isbnCode",
          key: "isbnCode",
          placeholder: "ISBN Code",
          label: "IsbnCode",
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "editors",
        type: "input_field",
        const_props: {
          name: "editors",
          key: "editors",
          placeholder: "",
          label: "Editors",
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "visibility",
        type: "boolean_field",
        const_props: {
          name: "visibility",
          key: "Visibility",
          label: "Visible to others",
          required: false
        },
        user_props: ["handleChange"]
      }
    ],

    url: "book",
    name: "Book"
  },
  paper: {
    icon: "paperclip",
    draggable: true,
    sortBy: "priority",
    ascending: false,
    plural: "Papers",
    fields: [
      {
        group: false,
        name: "title",
        type: "input_field",
        const_props: {
          name: "title",
          key: "Title",
          placeholder: "Enter the title of the book",
          label: "Title",
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "journal",
        type: "input_field",
        const_props: {
          name: "journal",
          key: "Journal",
          placeholder: "Name of the journal",
          label: "Journal",
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "authors",
        type: "input_field",
        const_props: {
          name: "authors",
          key: "Author",
          placeholder: "Authors",
          label: "Authors",
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "publisher",
        type: "input_field",
        const_props: {
          name: "publisher",
          key: "Publisher",
          placeholder: "Publisher",
          label: "Publisher",
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "year",
        type: "year_field",
        const_props: {
          name: "year",
          key: "year",
          placeholder: "Year",
          label: "Year",
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: true,
        widths: "equal",
        fields: [
          {
            name: "pages",
            type: "input_field",
            const_props: {
              name: "pages",
              key: "Pages",
              placeholder: "Number of pages",
              label: "Pages",
              required: false
            },
            user_props: ["handleChange"]
          },
          {
            name: "volumes",
            type: "input_field",
            const_props: {
              name: "volumes",
              key: "Volumes",
              placeholder: "Number of volumes",
              label: "Volumes",
              required: false
            },
            user_props: ["handleChange"]
          }
        ]
      },
      {
        group: false,
        name: "paper",
        type: "file_field",
        const_props: {
          name: "paper",
          key: "Paper",
          placeholder: "",
          label: "paper",
          required: false
        },
        user_props: ["handleFile", "handleDelete"]
      },
      {
        group: false,
        name: "visibility",
        type: "boolean_field",
        const_props: {
          name: "visibility",
          key: "Visibility",
          label: "Visible to others",
          required: false
        },
        user_props: ["handleChange"]
      }
    ],
    url: "paper",
    name: "Paper"
  }
};
