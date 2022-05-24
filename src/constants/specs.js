import {
  projectOptions,
  roleOptions,
  scopeOptions,
  supervisionOptions,
  graduationOptions,
  categoryOptions,
  semesterOptions,
  collaborationOptions,
  phdOptions
} from "./options";
import { priority } from "./commonSpecs";

export const specs = {
  interest: {
    icon: "game",
    draggable: true,
    csvVisibility: false,
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
      priority,
    ],
    url: "interest",
    name: "Interest"
  },
  education: {
    icon: "book",
    draggable: false,
    csvVisibility: false,
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
    ],
    url: "education",
    name: "Education"
  },
  teachingEngagement:{
    icon: "book",
    draggable: true,
    csvVisibility: false,
    sortBy: "priority",
    ascending: true,
    plural: "Teaching Engagements",
    fields: [
      {
        group: true,
        widths: "equal",
        fields: [
          {
            name: "courseTitle",
            type: "input_field",
            const_props: {
              name: "courseTitle",
              key: "CourseTitle",
              placeholder: "Course Title",
              label: "Name of the course",
              required: true
            },
            user_props: ["handleChange"]
          },
          {
            name: "courseCode",
            type: "input_field",
            const_props: {
              name: "courseCode",
              key: "CourseCode",
              placeholder: "Eg: CSN 101",
              label: "Course Code",
              required: true
            },
            user_props: ["handleChange"]
          }
        ]
      },
      {
        group: false,
        name: "semester",
        type: "choice_field",
        const_props: {
          name: "semester",
          key: "Semester",
          placeholder: "Semester",
          label: "Semester",
          options: semesterOptions,
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "className",
        type: "input_field",
        const_props: {
          name: "className",
          key: "ClassName",
          placeholder: "Name of the class",
          label: "Class Name",
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "studentCount",
        type: "input_field",
        const_props: {
          name: "studentCount",
          key: "StudentCount",
          placeholder: "Number of students in class",
          label: "Number of Students",
          required: false,
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "lectureHours",
        type: "input_field",
        const_props: {
          name: "lectureHours",
          key: "LectureHours",
          placeholder: "Lecture hours per week",
          label: "Lecture Hours",
          required: false
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "practicalHours",
        type: "input_field",
        const_props: {
          name: "practicalHours",
          key: "PracticalHours",
          placeholder: "Practical hours per week",
          label: "Practical Hours",
          required: false
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "tutorialHours",
        type: "input_field",
        const_props: {
          name: "tutorialHours",
          key: "TutorialHours",
          placeholder: "Tutorial hours per week",
          label: "Tutorial Hours",
          required: false
        },
        user_props: ["handleChange"]
      },
      priority,
    ],
    url: "teaching_engagement",
    name: "Teaching Engagement"
  },

  honour: {
    icon: "star",
    draggable: true,
    csvVisibility: false,
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
      priority,
    ],
    url: "honour",
    name: "Honour"
  },
  supervision: {
    icon: "star",
    draggable: true,
    csvVisibility: false,
    sortBy: "priority",
    ascending: true,
    plural: "Supervision",
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
        group: true,
        widths: "equal",
        fields: [
          {
            name: "category",
            type: "choice_field",
            const_props: {
              name: "category",
              key: "Category",
              placeholder: "Category",
              label: "Category",
              options: supervisionOptions,
              required: true
            },
            user_props: ["handleChange"]
          },
          {
            name: "phdType",
            type: "dependent_choice_field",
            const_props: {
              name: "phdType",
              key: "PhdType",
              placeholder: "Phd Type",
              label: "PhD type",
              options: phdOptions,
              dependencies: [{field: "category", option: "doc"}],
              required: false,
            },
            user_props: ["handleChange"]
          }
        ]
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
        name: "scholarsName",
        type: "input_field",
        const_props: {
          name: "scholarsName",
          key: "ScholarsName",
          placeholder: "Enter the scholars you supervised",
          label: "Name of the scholar(s)",
          required: false
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "nameOfOtherSupervisors",
        type: "text_area_field",
        const_props: {
          name: "nameOfOtherSupervisors",
          key: "NameOfOtherSupervisors",
          placeholder: "Enter the names of the other supervisors",
          label: "Other supervisors",
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
      priority,
    ],
    url: "supervision",
    name: "Supervision"
  },
  visit: {
    icon: "plane",
    draggable: true,
    csvVisibility: false,
    sortBy: "priority",
    ascending: true,
    plural: "Visits",
    fields: [
      {
        group: false,
        name: "place",
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
        name: "purpose",
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
      priority,
    ],
    url: "visit",
    name: "Visit"
  },
  collaboration: {
    icon: "handshake",
    draggable: true,
    csvVisibility: false,
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
        name: "level",
        type: "choice_field",
        const_props: {
          name: "level",
          key: "Level",
          placeholder: "Level",
          label: "Level",
          options: collaborationOptions,
          required: false,
        },
        user_props: ["handleChange"]
      },
      priority,
    ],
    url: "collaboration",
    name: "Collaboration"
  },
  associateScholar: {
    icon: "student",
    draggable: true,
    csvVisibility: false,
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
        name: "interest",
        type: "input_field",
        const_props: {
          name: "interest",
          key: "Interest",
          placeholder: "Interest",
          label: "Interest",
          required: true,
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "homePage",
        type: "input_field",
        const_props: {
          name: "homePage",
          key: "HomePage",
          placeholder: "Home page",
          label: "Home page",
          required: false,
        },
        user_props: ["handleChange"]
      },
      priority,
    ],
    url: "associate_scholar",
    name: "Associate Scholar"
  },
  project: {
    icon: "folder",
    draggable: true,
    csvVisibility: false,
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
          required: true
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
      priority,
    ],
    url: "project",
    name: "Project"
  },
  administrativePosition:  {
    icon: "building",
    draggable: true,
    csvVisibility: false,
    sortBy: "priority",
    ascending: true,
    plural: "Administrative Positions",
    fields: [
      {
        group: false,
        name: "position",
        type: "input_field",
        const_props: {
          name: "position",
          key: "Position",
          placeholder: "",
          label: "Position",
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
          placeholder: "",
          label: "Organisation",
          required: true
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
        name: "scope",
        type: "choice_field",
        const_props: {
          name: "scope",
          key: "Scope",
          placeholder: "Scope",
          label: "Scope of the position",
          options: scopeOptions,
          required: true
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
      priority,
    ],
    url: "administrative_position",
    name: "Administrative Position"
  },
  professionalBackground:  {
    icon: "building",
    draggable: true,
    csvVisibility: false,
    sortBy: "priority",
    ascending: true,
    plural: "Professional Background",
    fields: [
      {
        group: false,
        name: "position",
        type: "input_field",
        const_props: {
          name: "position",
          key: "Position",
          placeholder: "",
          label: "Position",
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
          placeholder: "",
          label: "Organisation",
          required: true
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
      priority,
    ],
    url: "professional_background",
    name: "Professional Background"
  },
  membership:  {
    icon: "group",
    draggable: true,
    csvVisibility: false,
    sortBy: "priority",
    ascending: true,
    plural: "Memberships",
    fields: [
      {
        group: false,
        name: "position",
        type: "input_field",
        const_props: {
          name: "position",
          key: "Position",
          placeholder: "",
          label: "Position",
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
          placeholder: "",
          label: "Organisation",
          required: true
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
      priority,
    ],
    url: "membership",
    name: "Membership"
  },
  event: {
    icon: "handshake",
    draggable: true,
    csvVisibility: false,
    sortBy: "priority",
    ascending: true,
    plural: "Events",
    fields: [
      {
        group: false,
        name: "name",
        type: "input_field",
        const_props: {
          name: "name",
          key: "Name",
          placeholder: "",
          label: "Name of the event",
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "place",
        type: "input_field",
        const_props: {
          name: "place",
          key: "Place",
          placeholder: "",
          label: "Place of the event",
          required: true
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
        name: "sponsor",
        type: "input_field",
        const_props: {
          name: "sponsor",
          key: "Sponsor",
          placeholder: "",
          label: "Sponsorer of the event",
          required: false
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "category",
        type: "choice_field",
        const_props: {
          name: "category",
          key: "category",
          placeholder: "Category",
          label: "Event Category",
          options: categoryOptions,
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "role",
        type: "choice_field",
        const_props: {
          name: "role",
          key: "Role",
          placeholder: "Role",
          label: "Role",
          options: roleOptions,
          required: true
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
      priority,
    ],
    url: "event",
    name: "Event"
  },
  book: {
    icon: "book",
    draggable: true,
    csvVisibility: true,
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
        group: false,
        name: "contribution",
        type: "input_field",
        const_props: {
          name: "contribution",
          key: "contribution",
          placeholder: "Your contribution",
          label: "Contribution",
          required: false
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
          required: false
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
          required: false
        },
        user_props: ["handleChange"]
      },
      priority,
    ],
    url: "book",
    name: "Book"
  },
  paper: {
    icon: "paperclip",
    draggable: true,
    csvVisibility: true,
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
      priority,
    ],
    url: "paper",
    name: "Paper"
  },
  miscellaneous: {
    icon: "pencil",
    draggable: true,
    csvVisibility: false,
    sortBy: "priority",
    ascending: true,
    plural: "Miscellaneous",
    fields: [
      {
        group: false,
        name: "heading",
        type: "input_field",
        const_props: {
          name: "heading",
          key: "Heading",
          placeholder: "Heading",
          label: "Heading",
          required: true
        },
        user_props: ["handleChange"]
      },
      {
        group: false,
        name: "description",
        type: "rich_text_field",
        const_props: {
          name: "description",
          key: "Description",
          label: "Description",
          required: false
        },
        user_props: ["handleChange"]
      },
      priority,
    ],
    url: "miscellaneous",
    name: "Miscellaneous"
  }
};
