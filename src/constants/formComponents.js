import genericFormMaker from "../components/genericFormMaker";
import { specs } from "./specs";

const interestForm = genericFormMaker(specs["interest"]);
const paperForm = genericFormMaker(specs["paper"]);

export const formComponents = {
  interest: interestForm,
  paper: paperForm
};

const FormComponents = {};
